# BTS Technology | IoT Hardware System Architecture

This document outlines the hardware requirements, wiring, and firmware logic for the devices integrated into the BTS Technology Cloud Portal.

---

## 1. Central Controller: ESP32 IoT Gateway
All devices use the **ESP32** (NodeMCU) due to its built-in Wi-Fi and Bluetooth capabilities.

### General Components for All Nodes:
- **Microcontroller:** ESP32 DevKit V1
- **Power Supply:** 5V 2A DC Adapter (or HLK-PM01 for AC input)
- **Communication:** Wi-Fi (HTTP/MQTT Protocol)

---

## 2. Smart Energy Monitor Node
**Purpose:** Real-time monitoring of electricity consumption.

### Components:
- **Sensor:** PZEM-004T (V3.0) or ACS712 Current Sensor.
- **Display:** 0.96" OLED (Optional for local monitoring).
- **Relay:** 30A High-Load Relay (for remote cutoff).

### Wiring Map:
| ESP32 Pin | Component Pin | Description |
|-----------|---------------|-------------|
| 3.3V      | VCC           | Power for Sensor |
| GND       | GND           | Common Ground |
| GPIO 16   | TX            | UART RX |
| GPIO 17   | RX            | UART TX |
| GPIO 23   | Relay IN      | Emergency Cutoff |

---

## 3. Smart Water Flow Node
**Purpose:** Tracking water usage and detecting leaks.

### Components:
- **Sensor:** YF-S201 Hall Effect Water Flow Sensor.
- **Valve:** 12V Solenoid Valve.
- **Level Sensor:** HC-SR04 Ultrasonic Sensor (for tank monitoring).

### Wiring Map:
| ESP32 Pin | Component Pin | Description |
|-----------|---------------|-------------|
| GPIO 4    | Pulse Out     | Flow Rate Count |
| GPIO 5    | Trig          | Ultrasonic Trigger |
| GPIO 18   | Echo          | Ultrasonic Echo |

---

## 4. Kinetic Mirror / Servo Node
**Purpose:** High-precision movement and synchronization.

### Components:
- **Actuators:** MG996R High-Torque Servos.
- **Controller:** PCA9685 16-Channel PWM Driver (for multiple mirrors).

### Wiring Map:
| ESP32 Pin | Component Pin | Description |
|-----------|---------------|-------------|
| GPIO 21   | SDA           | I2C Data |
| GPIO 22   | SCL           | I2C Clock |

---

## 5. Industrial Motor Control Node
**Purpose:** RPM and Health monitoring.

### Components:
- **RPM Sensor:** LM393 Speed Sensor (with Encoder Disk).
- **Temp Sensor:** DS18B20 (Waterproof).
- **Vibration Sensor:** SW-420.

### Wiring Map:
| ESP32 Pin | Component Pin | Description |
|-----------|---------------|-------------|
| GPIO 32   | Data Out      | RPM Pulse |
| GPIO 33   | OneWire       | Temperature Data |

---

## 6. Solar Efficiency Monitoring Node
**Purpose:** Real-time tracking of Solar Panel voltage and dust detection to notify cleaning requirements.

### Components:
- **Voltage Sensor:** DC Voltage Divider Module (0-25V).
- **Dust Sensor:** LDR (Light Dependent Resistor) or reference silicon cell.
- **Power:** Buck Converter (24V/12V to 5V) for ESP32.

### Wiring Map:
| ESP32 Pin | Component Pin | Description |
|-----------|---------------|-------------|
| GPIO 34   | S (Analog)    | Panel Voltage (via Divider) |
| GPIO 35   | LDR Out       | Ambient Light/Panel Clarity |
| GPIO 25   | Status LED    | Cleaning Required Indicator |

---

## Cloud Integration Logic (Firmware)
To send data to the portal, use the following logic in your Arduino IDE:

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";
const char* serverUrl = "https://your-bts-api.com/update"; // Future API link

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) { delay(500); }
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/json");

    StaticJsonDocument<200> doc;
    doc["node"] = "Energy_Monitor_01";
    doc["load"] = 2.44; // Read from PZEM Sensor
    doc["voltage"] = 228.4;
    
    String requestBody;
    serializeJson(doc, requestBody);
    
    int httpResponseCode = http.POST(requestBody);
    http.end();
  }
  delay(5000); // Sync every 5 seconds
}
```
