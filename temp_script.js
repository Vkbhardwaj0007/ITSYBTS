
        // === PRODUCT SPECIFICATION-AWARE DATABASE ===
        const PRODUCTS = [
            {
                id: 1,
                name: 'BTS Core Controller Hub — 6CH Smart Home Board',
                cat: 'BTS Products',
                price: 6500,
                mrp: 8999,
                rating: 4.9,
                reviews: 143,
                inStock: true,
                popularity: 95,
                discount: 27,
                desc: 'Flagship 6-channel home automation board built for standard industrial deployments. Features optocoupled relay channel outputs, zero-crossing protection, and integration with Alexa, Google Home, and the BTS Smart App.',
                specs: {
                    'Microcontroller': 'ESP32-WROOM-32E Dual Core 240MHz',
                    'Output Relays': '6 Channels (10A AC load capability)',
                    'Communication': 'WiFi 802.11 b/g/n (2.4GHz) + Bluetooth LE',
                    'Input Voltage': '12V DC (Power Adapter included)',
                    'Form Factor': '110mm x 85mm DIN-Rail mountable',
                    'Security': 'SSL Encryption Client connections'
                }
            },
            {
                id: 2,
                name: 'BTS Edge Node Sensor — LoRa Industrial',
                cat: 'BTS Products',
                price: 2100,
                mrp: 3200,
                rating: 4.7,
                reviews: 68,
                inStock: true,
                popularity: 80,
                discount: 34,
                desc: 'Long-range remote telemetry node for industrial crop monitoring, agriculture, and water level reporting. Built with ultra-low sleep current logic for years of battery deployment.',
                specs: {
                    'Microcontroller': 'STM32L0 Low-Power Series MCU',
                    'RF Chip': 'Semtech SX1276 LoRa Transceiver',
                    'Frequency Bands': 'IN865 (India) / EU868 / US915 MHz',
                    'Operational Voltage': '3.3V to 5V (Dual battery supports)',
                    'Sensor Support': 'Analog (ADC) + I2C Interface ports',
                    'Range': 'Up to 5 km line-of-sight'
                }
            },
            {
                id: 3,
                name: 'BTS Smart Relay Module 4-Channel Cloud',
                cat: 'BTS Products',
                price: 1800,
                mrp: 2500,
                rating: 4.8,
                reviews: 212,
                inStock: true,
                popularity: 88,
                discount: 28,
                desc: 'Compact smart switch node designed to fit inside modular home wall boxes. Seamlessly automates existing switches while maintaining manual physical control buttons.',
                specs: {
                    'Microcontroller': 'Espressif ESP8266 Core',
                    'Output Relays': '4 Channels (5A load capability)',
                    'Cloud Protocols': 'MQTT, HTTP REST API, WebSockets',
                    'Input Power': '90V - 250V AC (50/60Hz)',
                    'Dimensions': '65mm x 50mm x 20mm',
                    'Safety Standard': 'Over-temperature automatic fuse shutdown'
                }
            },
            {
                id: 4,
                name: 'BTS Solar Efficiency Monitor Board',
                cat: 'BTS Products',
                price: 3200,
                mrp: 4500,
                rating: 4.6,
                reviews: 54,
                inStock: true,
                popularity: 70,
                discount: 28,
                desc: 'Advanced solar analytics controller. Measures panel temperature, current degradation, voltage outputs, and uses a specialized optical sensor array to detect dust and alert when cleaning is due.',
                specs: {
                    'Processor': 'ESP32-S3 IoT Processor core',
                    'Voltage Range': '0 - 60V DC input measurement',
                    'Current Range': '0 - 20A DC non-invasive CT sensor',
                    'Data Storage': 'MicroSD card logging slot + Cloud Sync',
                    'Sensors': 'Optical Dust Detector + DS18B20 Temp Probe',
                    'Efficiency Math': 'Maximum Power Point Estimation algorithm'
                }
            },
            {
                id: 5,
                name: 'BTS GSM Power Failure Alert Node',
                cat: 'BTS Products',
                price: 1750,
                mrp: 2500,
                rating: 4.8,
                reviews: 89,
                inStock: true,
                popularity: 85,
                discount: 30,
                desc: 'Real-time telemetry monitor for critical systems (fish tanks, server rooms, medical storage). Immediately sends SMS texts and phone call alerts to registered numbers when main power grid shuts down.',
                specs: {
                    'Modem': 'SIM800C GSM/GPRS Quad-band module',
                    'Sim Interface': 'Micro SIM socket slot',
                    'Backup Battery': 'Built-in 800mAh Li-Po (6 hours runtime)',
                    'Detection Line': '220V AC Grid line sense circuitry',
                    'Alert Capacity': 'Up to 5 administrator phone numbers',
                    'Antenna': 'External high-gain SMA connector'
                }
            },
            {
                id: 6,
                name: 'BTS Kinetic Art Mirror 64-Servo Driver',
                cat: 'BTS Products',
                price: 8500,
                mrp: 12000,
                rating: 4.9,
                reviews: 12,
                inStock: false,
                popularity: 65,
                discount: 29,
                desc: 'High-density servo motor controller array designed specifically for interactive silhouette sculptures, kinetic mirrors, and grid matrix control displays.',
                specs: {
                    'Servo Ports': '64 Channels (Independent PWM outputs)',
                    'Chip Architecture': 'Dual PCA9685 I2C Multiplexers',
                    'Communication': 'High-speed I2C + UART command lines',
                    'Current Capacity': 'Up to 30A distribution bus (external power)',
                    'Dimensions': '150mm x 120mm heavy duty PCB',
                    'Controller compatibility': 'Arduino / Raspberry Pi / ESP32 direct'
                }
            },
            {
                id: 7,
                name: 'DHT22 Temperature & Humidity Sensor Module',
                cat: 'Sensors',
                price: 350,
                mrp: 500,
                rating: 4.4,
                reviews: 892,
                inStock: true,
                popularity: 90,
                discount: 30,
                desc: 'High-precision digital temperature and relative humidity sensor. Fully calibrated digital output ensures reliability and stability.',
                specs: {
                    'Interface': 'Single-wire digital protocol',
                    'Voltage Supply': '3.3V to 6V DC',
                    'Temperature Range': '-40°C to 80°C (±0.5°C accuracy)',
                    'Humidity Range': '0 to 100% RH (±2% accuracy)',
                    'Sensing Period': '2.0 seconds sampling interval',
                    'Body Dimensions': '15mm x 25mm x 7.7mm'
                }
            },
            {
                id: 8,
                name: 'Ultrasonic HC-SR04 Distance Sensor',
                cat: 'Sensors',
                price: 120,
                mrp: 200,
                rating: 4.6,
                reviews: 1543,
                inStock: true,
                popularity: 98,
                discount: 40,
                desc: 'Classic ultrasonic rangefinder providing non-contact distance readings. Perfect for level tracking and obstacle mapping.',
                specs: {
                    'Voltage Supply': '5V DC',
                    'Quiescent Current': 'Less than 2mA',
                    'Measurement Range': '2cm to 400cm (Accuracy: ±3mm)',
                    'Acoustic Frequency': '40 kHz',
                    'Trigger Signal': '10µs TTL pulse input',
                    'Measurement Angle': '15 degrees'
                }
            },
            {
                id: 9,
                name: 'MPU6050 Accelerometer Gyroscope MEMS',
                cat: 'Sensors',
                price: 280,
                mrp: 420,
                rating: 4.5,
                reviews: 445,
                inStock: true,
                popularity: 75,
                discount: 33,
                desc: '6-axis MotionTracking chip combining a 3-axis gyroscope and a 3-axis accelerometer on a single board, featuring an I2C connection.',
                specs: {
                    'Sensor Type': 'MEMS Accelerometer + Gyroscope',
                    'Communication': 'I2C Interface (Up to 400kHz)',
                    'Gyro Range': '±250, ±500, ±1000, ±2000°/sec',
                    'Accel Range': '±2g, ±4g, ±8g, ±16g scale limits',
                    'On-chip Processing': 'Digital Motion Processor (DMP)',
                    'Voltage Supply': '3.0V - 5.0V DC input'
                }
            },
            {
                id: 10,
                name: 'IR Infrared Obstacle Avoidance Sensor',
                cat: 'Sensors',
                price: 85,
                mrp: 150,
                rating: 4.1,
                reviews: 2100,
                inStock: true,
                popularity: 82,
                discount: 43,
                desc: 'Simple proximity sensing module using reflected infrared light beams. Detection sensitivity can be adjusted via onboard trimmer pot.',
                specs: {
                    'Voltage Supply': '3.3V to 5V DC',
                    'Distance Range': '2cm to 30cm (Adjustable)',
                    'Detection Angle': '35 degrees active cone',
                    'Output Type': 'Active-low Digital TTL (0V or VCC)',
                    'IC Chipset': 'LM393 voltage comparator',
                    'Emitter/Receiver': 'T-1 3/4 Infrared LED pair'
                }
            },
            {
                id: 11,
                name: 'ESP32 DevKit V1 WiFi+BLE Dual-Mode Board',
                cat: 'Modules',
                price: 450,
                mrp: 650,
                rating: 4.8,
                reviews: 3200,
                inStock: true,
                popularity: 99,
                discount: 30,
                desc: 'Extremely popular low-cost system-on-chip microcontroller development board. Highly integrated with internal antennas and RF balance units.',
                specs: {
                    'Processor': 'Tensilica Xtensa Dual-Core 32-bit LX6',
                    'Clock Speed': 'Up to 240 MHz clock line',
                    'Memory': '4MB SPI Flash + 520KB SRAM',
                    'Wireless': 'WiFi 802.11 b/g/n + Bluetooth v4.2 BR/EDR & BLE',
                    'Peripherals': 'Capacitive touch, ADCs, DACs, UART, SPI, I2C',
                    'USB Interface': 'CP2102 / CH340 USB-UART adapter onboard'
                }
            },
            {
                id: 12,
                name: 'STM32F103C8T6 Blue Pill Development Board',
                cat: 'Modules',
                price: 320,
                mrp: 500,
                rating: 4.3,
                reviews: 870,
                inStock: true,
                popularity: 68,
                discount: 36,
                desc: 'High-performance ARM Cortex-M3 microcontroller board offering a massive upgrade over traditional 8-bit chips in speed and pin availability.',
                specs: {
                    'Processor': 'ARM 32-bit Cortex-M3 CPU core',
                    'Clock Speed': '72 MHz maximum frequency',
                    'Memory': '64KB Flash ROM + 20KB SRAM',
                    'Interface Ports': 'Micro USB port for power and programming',
                    'Peripherals': '3x USART, 2x SPI, 2x I2C, 2x ADC channels',
                    'Voltage limits': 'I/O pins are 5V tolerant'
                }
            },
            {
                id: 13,
                name: 'Arduino Nano V3 ATmega328P CH340',
                cat: 'Modules',
                price: 380,
                mrp: 550,
                rating: 4.7,
                reviews: 5400,
                inStock: true,
                popularity: 96,
                discount: 30,
                desc: 'Compact development board based on the classic ATmega328P. Simple, rugged, and highly supported by library codes.',
                specs: {
                    'Microcontroller': 'Microchip ATmega328P 8-bit AVR',
                    'Clock Speed': '16 MHz crystal oscillator',
                    'Memory': '32KB Flash (2KB used by bootloader) + 2KB SRAM',
                    'I/O Pins': '14 Digital I/O (6 PWM) + 8 Analog Inputs',
                    'Serial Chip': 'CH340G USB-to-Serial converter',
                    'Operating Voltage': '5V DC (Input: 7V - 12V DC via Vin)'
                }
            },
            {
                id: 14,
                name: 'NodeMCU ESP8266 WiFi IoT Board',
                cat: 'Modules',
                price: 290,
                mrp: 450,
                rating: 4.6,
                reviews: 4100,
                inStock: true,
                popularity: 87,
                discount: 35,
                desc: 'Open-source firmware and development kit that helps you prototype your IoT products with Lua scripts or Arduino IDE codes.',
                specs: {
                    'System Chip': 'L106 32-bit RISC core ESP-12E module',
                    'Clock Speed': '80 MHz (can overclock to 160MHz)',
                    'Memory': '4MB Flash memory + 80KB SRAM',
                    'Wireless': 'Built-in 802.11 b/g/n WiFi client/AP',
                    'Pins Configuration': '10 GPIOs, 1 ADC input pin',
                    'Power regulator': 'Built-in 3.3V regulator (AMS1117)'
                }
            },
            {
                id: 15,
                name: 'LM2596 DC-DC Step Down Buck Converter',
                cat: 'Components',
                price: 120,
                mrp: 200,
                rating: 4.2,
                reviews: 1800,
                inStock: true,
                popularity: 72,
                discount: 40,
                desc: 'Switch-mode step-down voltage regulator board. Features high-efficiency buck transformation and adjustable multi-turn potentiometer.',
                specs: {
                    'Input Voltage': '4.5V to 35V DC',
                    'Output Voltage': '1.23V to 30V DC (Continuously adjustable)',
                    'Output Current': '2A rated (3A max with thermal heatsink)',
                    'Efficiency': 'Up to 92% power conversion',
                    'Switching Frequency': '150 kHz',
                    'Dimensions': '43mm x 21mm x 14mm'
                }
            },
            {
                id: 16,
                name: '5V 4-Channel Relay Module with Optocoupler',
                cat: 'Components',
                price: 220,
                mrp: 350,
                rating: 4.5,
                reviews: 2340,
                inStock: true,
                popularity: 84,
                discount: 37,
                desc: '4-channel active-low relay board. Features galvanic isolation via onboard optocoupler chips to shield microcontrollers from high AC voltage spikes.',
                specs: {
                    'Trigger Voltage': '5V DC (Trigger Current: 5mA per channel)',
                    'Load Capacity': 'AC 250V 10A / DC 30V 10A maximum limits',
                    'Isolation': 'Onboard PC817 Optocouplers',
                    'Status Indicator': 'Red LED indicators for active channels',
                    'Wiring Format': 'Screw terminals for NO/NC/COM lines',
                    'Dimensions': '75mm x 55mm x 18mm'
                }
            },
            {
                id: 17,
                name: 'Breadboard 830 Points MB-102 Solderless',
                cat: 'Components',
                price: 95,
                mrp: 150,
                rating: 4.4,
                reviews: 6700,
                inStock: true,
                popularity: 91,
                discount: 36,
                desc: 'Full-size solderless prototyping board. Includes standard double-strip power rails on both sides for clean layout structures.',
                specs: {
                    'Tie Points': '830 total distribution slots',
                    'Pitch spacing': '0.1 inch (2.54mm) pin compatible',
                    'Contact type': 'Nickel-plated phosphor bronze clips',
                    'Backing': 'Self-adhesive double-sided foam tape',
                    'Dimensions': '165mm x 55mm x 8.5mm',
                    'Wire limits': 'Accepts 20-29 AWG gauge wires'
                }
            },
            {
                id: 18,
                name: 'Jumper Wires 120pcs Male-Female Pack',
                cat: 'Components',
                price: 140,
                mrp: 250,
                rating: 4.6,
                reviews: 8900,
                inStock: true,
                popularity: 95,
                discount: 44,
                desc: 'Essential connection wire assortment for breadboards and development modules. Flexible multi-color ribbon strip wire assemblies.',
                specs: {
                    'Quantity': '120 wires total (40x M-M, 40x F-F, 40x M-F)',
                    'Length': '20cm individual strands',
                    'Connector Pitch': '2.54mm pin socket casing',
                    'Core Conductor': 'Copper-clad aluminum wire',
                    'Colors': '10 distinct repeating ribbon colors',
                    'Separation': 'Wires can be separated into single strands'
                }
            },
            {
                id: 19,
                name: 'Digital Multimeter DT-830D Professional',
                cat: 'Tools',
                price: 450,
                mrp: 750,
                rating: 4.4,
                reviews: 3500,
                inStock: true,
                popularity: 88,
                discount: 40,
                desc: 'Handheld digital multimeter for troubleshooting voltage thresholds, current draws, resistance values, and testing diode/continuity lines.',
                specs: {
                    'Display Type': '3.5-digit LCD screen (1999 count limits)',
                    'DC Voltage': '200mV to 1000V range checks',
                    'AC Voltage': '200V to 750V range checks',
                    'DC Current': '200µA to 10A measurement fuses',
                    'Safety Fuses': '200mA/250V protection',
                    'Testing Helpers': 'Continuity buzzer + Square Wave generator'
                }
            },
            {
                id: 20,
                name: 'Soldering Iron Kit 60W with 5 Tips',
                cat: 'Tools',
                price: 650,
                mrp: 1200,
                rating: 4.6,
                reviews: 2100,
                inStock: true,
                popularity: 89,
                discount: 45,
                desc: 'Temperature adjustable soldering iron set. Fast heating ceramic element cores, stand assembly, and interchangeable tips included.',
                specs: {
                    'Power rating': '60 Watts',
                    'Temperature limit': '200°C to 450°C (Dial selection)',
                    'Voltage limits': '220V - 240V AC input line',
                    'Heating Element': 'Internal high-quality ceramic core',
                    'Interchangeable Tips': '5 types (Chisel, Point, Conical, etc.)',
                    'Stand Support': 'Metal stand, cleaning sponge, and flux paste'
                }
            }
        ];

        // === SYNC PRODUCTS FROM ADMIN STORE CONTROL ===
        // If admin has modified products in portal.html, use those; otherwise use the default above
        (function syncAdminProducts() {
            const stored = localStorage.getItem('bts_products');
            if (stored) {
                try {
                    const adminProducts = JSON.parse(stored);
                    if (Array.isArray(adminProducts) && adminProducts.length > 0) {
                        // Merge admin products (price, stock, name changes) with full PRODUCTS data
                        adminProducts.forEach(ap => {
                            const idx = PRODUCTS.findIndex(p => p.id === ap.id);
                            if (idx !== -1) {
                                // Update existing product fields from admin
                                PRODUCTS[idx].price = ap.price;
                                PRODUCTS[idx].mrp = ap.mrp;
                                PRODUCTS[idx].inStock = ap.inStock;
                                PRODUCTS[idx].name = ap.name;
                                PRODUCTS[idx].cat = ap.cat;
                                PRODUCTS[idx].rating = ap.rating;
                                PRODUCTS[idx].discount = ap.discount;
                                if (ap.desc) PRODUCTS[idx].desc = ap.desc;
                            } else {
                                // New product added via admin - add to PRODUCTS array
                                PRODUCTS.push(ap);
                            }
                        });
                        // Remove products that admin deleted
                        const adminIds = new Set(adminProducts.map(p => p.id));
                        for (let i = PRODUCTS.length - 1; i >= 0; i--) {
                            // Only remove if it's a default product (id <= 20) and admin removed it
                            if (PRODUCTS[i].id <= 20 && !adminIds.has(PRODUCTS[i].id)) {
                                PRODUCTS.splice(i, 1);
                            }
                        }
                    }
                } catch(e) { console.warn('Admin product sync failed:', e); }
            }
        })();

        // === GLOBAL STATE ===
        let cart = [];
        let wishlist = [];
        let currentUser = null;
        let selectedCategory = 'All';
        let currentPriceLimit = 10000;
        let selectedRatingLimit = 0;
        let selectedDiscountLimit = 0;
        let excludeOutOfStock = false;
        let currentSortMode = 'relevance';
        let deliveryAddr = {};
        let selectedPayMethod = 'upi';

        // === VEClOR SVG GENERATOR FOR HARDWARE ===
        function getProductSVG(p) {
            let color = 'var(--primary)';
            if (p.cat === 'Sensors') color = 'var(--accent)';
            if (p.cat === 'Modules') color = '#a855f7';
            if (p.cat === 'Components') color = '#ff4757';
            if (p.cat === 'Tools') color = '#eab308';

            // High-tech vector shapes depending on category
            if (p.cat === 'BTS Products') {
                return `
                <svg viewBox="0 0 100 100" width="100" height="100">
                    <rect x="15" y="15" width="70" height="70" rx="6" fill="#0f172a" stroke="${color}" stroke-width="2" />
                    <rect x="25" y="25" width="22" height="22" rx="4" fill="rgba(14,165,233,0.1)" stroke="var(--primary)" stroke-width="1.5" />
                    <!-- Relays -->
                    <rect x="55" y="25" width="20" height="10" rx="2" fill="#1e293b" stroke="${color}" stroke-width="1"/>
                    <rect x="55" y="40" width="20" height="10" rx="2" fill="#1e293b" stroke="${color}" stroke-width="1"/>
                    <rect x="55" y="55" width="20" height="10" rx="2" fill="#1e293b" stroke="${color}" stroke-width="1"/>
                    <rect x="55" y="70" width="20" height="10" rx="2" fill="#1e293b" stroke="${color}" stroke-width="1"/>
                    <!-- Chip tracks -->
                    <path d="M 40,36 H 55 M 35,47 V 70 M 20,80 H 80" stroke="${color}" stroke-width="1" opacity="0.6" stroke-dasharray="2 1"/>
                    <circle cx="36" cy="36" r="3" fill="var(--primary)" />
                    <circle cx="65" cy="30" r="1.5" fill="var(--accent)" />
                    <circle cx="65" cy="45" r="1.5" fill="var(--accent)" />
                    <circle cx="65" cy="60" r="1.5" fill="var(--accent)" />
                    <circle cx="65" cy="75" r="1.5" fill="var(--accent)" />
                </svg>`;
            } else if (p.cat === 'Sensors') {
                return `
                <svg viewBox="0 0 100 100" width="100" height="100">
                    <circle cx="50" cy="50" r="35" fill="#0f172a" stroke="${color}" stroke-width="2" />
                    <!-- HC-SR04 ultrasonic mesh eyes -->
                    <circle cx="35" cy="50" r="14" fill="#1e293b" stroke="var(--primary)" stroke-width="1.5" />
                    <circle cx="65" cy="50" r="14" fill="#1e293b" stroke="var(--primary)" stroke-width="1.5" />
                    <circle cx="35" cy="50" r="6" fill="#0f172a" stroke="var(--accent)" stroke-width="1" />
                    <circle cx="65" cy="50" r="6" fill="#0f172a" stroke="var(--accent)" stroke-width="1" />
                    <!-- Pinout -->
                    <path d="M 35,80 V 90 M 45,80 V 90 M 55,80 V 90 M 65,80 V 90" stroke="${color}" stroke-width="1.5" />
                </svg>`;
            } else if (p.cat === 'Modules') {
                return `
                <svg viewBox="0 0 100 100" width="100" height="100">
                    <rect x="25" y="15" width="50" height="70" rx="4" fill="#0f172a" stroke="${color}" stroke-width="2" />
                    <!-- ESP32 Metal shield -->
                    <rect x="35" y="25" width="30" height="25" rx="2" fill="#334155" stroke="#94a3b8" stroke-width="1" />
                    <!-- USB Port -->
                    <rect x="42" y="80" width="16" height="8" fill="#1e293b" stroke="#94a3b8" stroke-width="1" />
                    <!-- Board Pins -->
                    <line x1="20" y1="20" x2="25" y2="20" stroke="white" stroke-width="1.5"/>
                    <line x1="20" y1="30" x2="25" y2="30" stroke="white" stroke-width="1.5"/>
                    <line x1="20" y1="40" x2="25" y2="40" stroke="white" stroke-width="1.5"/>
                    <line x1="20" y1="50" x2="25" y2="50" stroke="white" stroke-width="1.5"/>
                    <line x1="20" y1="60" x2="25" y2="60" stroke="white" stroke-width="1.5"/>
                    <line x1="20" y1="70" x2="25" y2="70" stroke="white" stroke-width="1.5"/>
                    <line x1="75" y1="20" x2="80" y2="20" stroke="white" stroke-width="1.5"/>
                    <line x1="75" y1="30" x2="80" y2="30" stroke="white" stroke-width="1.5"/>
                    <line x1="75" y1="40" x2="80" y2="40" stroke="white" stroke-width="1.5"/>
                    <line x1="75" y1="50" x2="80" y2="50" stroke="white" stroke-width="1.5"/>
                    <line x1="75" y1="60" x2="80" y2="60" stroke="white" stroke-width="1.5"/>
                    <line x1="75" y1="70" x2="80" y2="70" stroke="white" stroke-width="1.5"/>
                </svg>`;
            } else if (p.cat === 'Components') {
                return `
                <svg viewBox="0 0 100 100" width="100" height="100">
                    <rect x="20" y="30" width="60" height="40" rx="3" fill="#1e293b" stroke="${color}" stroke-width="2" />
                    <!-- Potentiometer pot dial -->
                    <circle cx="50" cy="50" r="12" fill="#0f172a" stroke="var(--accent)" stroke-width="1.5"/>
                    <line x1="50" y1="50" x2="50" y2="38" stroke="var(--accent)" stroke-width="2"/>
                    <!-- Terminal connections -->
                    <rect x="28" y="70" width="10" height="10" fill="#0f172a" stroke="${color}" stroke-width="1"/>
                    <rect x="62" y="70" width="10" height="10" fill="#0f172a" stroke="${color}" stroke-width="1"/>
                </svg>`;
            } else {
                return `
                <svg viewBox="0 0 100 100" width="100" height="100">
                    <!-- Tool / Multimeter casing shape -->
                    <rect x="30" y="15" width="40" height="70" rx="8" fill="#eab308" stroke="#1e293b" stroke-width="2" />
                    <!-- Screen -->
                    <rect x="38" y="25" width="24" height="15" fill="#334155" stroke="#000" stroke-width="1" />
                    <text x="50" y="35" font-family="monospace" font-size="8" fill="#06d6a0" text-anchor="middle">5.00V</text>
                    <!-- Dial -->
                    <circle cx="50" cy="55" r="8" fill="#1e293b" stroke="#fff" stroke-width="1"/>
                    <!-- Probe sockets -->
                    <circle cx="43" cy="72" r="2" fill="red"/>
                    <circle cx="57" cy="72" r="2" fill="black"/>
                </svg>`;
            }
        }

        // === AUTH SYSTEM ===
        // === FLIPKART STYLE AUTH SYSTEM ===
        let authStep = 'phone'; 
        let tempPhone = '';
        
        function getDB() {
            return JSON.parse(localStorage.getItem('bts_users_db') || '[]');
        }
        
        function saveDB(db) {
            localStorage.setItem('bts_users_db', JSON.stringify(db));
        }
        
        function startAuthFlow() {
            authStep = 'phone';
            tempPhone = '';
            document.getElementById('auth-screen').style.display = 'flex';
            renderAuthStep();
        }
        
        function closeAuth() {
            document.getElementById('auth-screen').style.display = 'none';
        }

        function renderAuthStep() {
            const container = document.getElementById('auth-form-container');
            const title = document.getElementById('auth-title');
            const subtitle = document.getElementById('auth-subtitle');
            
            if (authStep === 'phone') {
                title.innerText = 'Login';
                subtitle.innerText = 'Get access to your Orders, Wishlist and Recommendations';
                container.innerHTML = `
                    <div style="position:relative; margin-top:20px;">
                        <label class="fk-auth-label">Enter Email/Mobile number</label>
                        <input type="text" id="fk-phone" class="fk-auth-input" placeholder="" autocomplete="off" autofocus>
                    </div>
                    <div class="fk-auth-terms">
                        By continuing, you agree to BTS Store's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                    </div>
                    <button class="fk-auth-btn" onclick="submitPhone()">Request OTP</button>
                `;
            } else if (authStep === 'otp_register') {
                title.innerText = 'Sign Up';
                subtitle.innerText = "Looks like you're new here! Please verify your number to create an account.";
                container.innerHTML = `
                    <div style="margin-bottom: 20px; font-size:14px; color:#000;">
                        Sending OTP to <strong>${tempPhone}</strong> 
                        <a style="color:#2874f0; cursor:pointer; font-weight:600; margin-left:10px;" onclick="authStep='phone'; renderAuthStep()">Edit</a>
                    </div>
                    <div style="position:relative; margin-top:20px;">
                        <label class="fk-auth-label">Enter OTP (Simulated: enter 1234)</label>
                        <input type="text" id="fk-otp" class="fk-auth-input" maxlength="4" placeholder="" autocomplete="off">
                    </div>
                    <div style="position:relative; margin-top:20px;">
                        <label class="fk-auth-label">Full Name</label>
                        <input type="text" id="fk-name" class="fk-auth-input" placeholder="" autocomplete="off">
                    </div>
                    <div style="position:relative; margin-top:20px;">
                        <label class="fk-auth-label">Create Password</label>
                        <input type="password" id="fk-pass" class="fk-auth-input" placeholder="" autocomplete="off">
                    </div>
                    <button class="fk-auth-btn" onclick="registerUser()">Verify & Signup</button>
                `;
            } else if (authStep === 'login_password') {
                title.innerText = 'Login';
                subtitle.innerText = 'Welcome back! Please enter your password to login.';
                container.innerHTML = `
                    <div style="margin-bottom: 20px; font-size:14px; color:#000;">
                        Logged in as <strong>${tempPhone}</strong> 
                        <a style="color:#2874f0; cursor:pointer; font-weight:600; margin-left:10px;" onclick="authStep='phone'; renderAuthStep()">Change</a>
                    </div>
                    <div style="position:relative; margin-top:20px;">
                        <label class="fk-auth-label">Enter Password</label>
                        <input type="password" id="fk-pass-login" class="fk-auth-input" placeholder="" autocomplete="off">
                    </div>
                    <button class="fk-auth-btn" onclick="loginWithPassword()">Login</button>
                    <button class="fk-auth-btn fk-auth-btn-secondary" onclick="requestLoginOTP()">Login with OTP</button>
                    <div style="text-align:center; margin-top:20px;">
                        <a style="color:#2874f0; cursor:pointer; font-weight:500;" onclick="authStep='forgot'; renderAuthStep()">Forgot Password?</a>
                    </div>
                `;
            } else if (authStep === 'login_otp') {
                title.innerText = 'Login';
                subtitle.innerText = 'Please verify your number to login safely.';
                container.innerHTML = `
                    <div style="margin-bottom: 20px; font-size:14px; color:#000;">
                        Sending OTP to <strong>${tempPhone}</strong> 
                        <a style="color:#2874f0; cursor:pointer; font-weight:600; margin-left:10px;" onclick="authStep='phone'; renderAuthStep()">Edit</a>
                    </div>
                    <div style="position:relative; margin-top:20px;">
                        <label class="fk-auth-label">Enter OTP (Simulated: enter 1234)</label>
                        <input type="text" id="fk-otp-login" class="fk-auth-input" maxlength="4" placeholder="" autocomplete="off">
                    </div>
                    <button class="fk-auth-btn" onclick="verifyLoginOTP()">Verify & Login</button>
                    <div style="text-align:center; margin-top:20px;">
                        <a style="color:#2874f0; cursor:pointer; font-weight:500;" onclick="authStep='login_password'; renderAuthStep()">Login with Password</a>
                    </div>
                `;
            } else if (authStep === 'forgot') {
                title.innerText = 'Reset Password';
                subtitle.innerText = 'Verify your number to set a new password.';
                container.innerHTML = `
                    <div style="margin-bottom: 20px; font-size:14px; color:#000;">
                        Sending OTP to <strong>${tempPhone}</strong> 
                    </div>
                    <div style="position:relative; margin-top:20px;">
                        <label class="fk-auth-label">Enter OTP (Simulated: enter 1234)</label>
                        <input type="text" id="fk-otp-forgot" class="fk-auth-input" maxlength="4" placeholder="" autocomplete="off">
                    </div>
                    <div style="position:relative; margin-top:20px;">
                        <label class="fk-auth-label">New Password</label>
                        <input type="password" id="fk-pass-new" class="fk-auth-input" placeholder="" autocomplete="off">
                    </div>
                    <button class="fk-auth-btn" onclick="resetPassword()">Save & Login</button>
                    <div style="text-align:center; margin-top:20px;">
                        <a style="color:#2874f0; cursor:pointer; font-weight:500;" onclick="authStep='login_password'; renderAuthStep()">Cancel</a>
                    </div>
                `;
            }
        }
        
        function submitPhone() {
            const phone = document.getElementById('fk-phone').value.trim();
            if (!phone) return alert('Please enter your mobile number or email');
            tempPhone = phone;
            
            const db = getDB();
            const user = db.find(u => u.phone === tempPhone);
            if (user) {
                authStep = 'login_password';
            } else {
                authStep = 'otp_register';
            }
            renderAuthStep();
        }
        
        function registerUser() {
            const otp = document.getElementById('fk-otp').value;
            const name = document.getElementById('fk-name').value;
            const pass = document.getElementById('fk-pass').value;
            
            if (otp !== '1234') return alert('Invalid OTP. Please enter 1234 to simulate.');
            if (!name || !pass) return alert('Please enter your Name and Password.');
            
            const db = getDB();
            const newUser = { phone: tempPhone, name: name, pass: pass };
            db.push(newUser);
            saveDB(db);
            
            loginSuccess(newUser);
        }
        
        function loginWithPassword() {
            const pass = document.getElementById('fk-pass-login').value;
            if (!pass) return alert('Please enter your password.');
            
            const db = getDB();
            const user = db.find(u => u.phone === tempPhone);
            
            if (user && user.pass === pass) {
                loginSuccess(user);
            } else {
                alert('Incorrect password. Please try again or use Login with OTP.');
            }
        }
        
        function requestLoginOTP() {
            authStep = 'login_otp';
            renderAuthStep();
        }
        
        function verifyLoginOTP() {
            const otp = document.getElementById('fk-otp-login').value;
            if (otp !== '1234') return alert('Invalid OTP. Please enter 1234 to simulate.');
            
            const db = getDB();
            const user = db.find(u => u.phone === tempPhone);
            loginSuccess(user);
        }
        
        function resetPassword() {
            const otp = document.getElementById('fk-otp-forgot').value;
            const pass = document.getElementById('fk-pass-new').value;
            
            if (otp !== '1234') return alert('Invalid OTP. Please enter 1234 to simulate.');
            if (!pass) return alert('Please enter a new password.');
            
            const db = getDB();
            const userIndex = db.findIndex(u => u.phone === tempPhone);
            if(userIndex !== -1) {
                db[userIndex].pass = pass;
                saveDB(db);
                loginSuccess(db[userIndex]);
                alert('Password reset successfully!');
            }
        }
        
        function loginSuccess(user) {
            currentUser = user;
            localStorage.setItem('bts_user', JSON.stringify(currentUser));
            closeAuth();
            document.getElementById('nav-username').innerText = user.name;
            initializeStore();
        }

        function enterStore() {
            document.getElementById('auth-screen').style.display = 'none';
            document.getElementById('main-store').style.display = 'block';
            if(currentUser) {
                document.getElementById('nav-username').innerText = currentUser.name;
            } else {
                document.getElementById('nav-username').innerText = 'Login';
            }
            initializeStore();
        }

        function logout() {
            localStorage.removeItem('bts_user');
            location.reload();
        }

        // === SEARCH AUTOCOMPLETE SUGGESTIONS ===
        function showSearchSuggestions() {
            const suggestions = document.getElementById('search-suggestions');
            suggestions.classList.add('active');
            handleSearchSuggestions();
        }

        function closeSearchSuggestions() {
            setTimeout(() => {
                const suggestions = document.getElementById('search-suggestions');
                if (suggestions) suggestions.classList.remove('active');
            }, 200);
        }

        document.getElementById('search-input').addEventListener('blur', closeSearchSuggestions);

        function handleSearchSuggestions() {
            const query = document.getElementById('search-input').value.toLowerCase().trim();
            const suggestions = document.getElementById('search-suggestions');
            
            if (!query) {
                // Show default recommendations / popular items
                const popular = PRODUCTS.slice(0, 4);
                suggestions.innerHTML = `<div class="suggest-header">Trending Products</div>`;
                popular.forEach(p => {
                    suggestions.innerHTML += `
                        <div class="suggest-item" onmousedown="selectSuggestion('${p.name}')">
                            <i class="fas fa-arrow-trend-up"></i>
                            <span>${p.name}</span>
                            <span class="suggest-category">${p.cat}</span>
                        </div>
                    `;
                });
                return;
            }

            const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.cat.toLowerCase().includes(query)).slice(0, 6);
            if (matches.length === 0) {
                suggestions.innerHTML = `<div class="suggest-item"><i class="fas fa-magnifying-glass"></i> No matching products found</div>`;
                return;
            }

            suggestions.innerHTML = `<div class="suggest-header">Matching Components</div>`;
            matches.forEach(p => {
                suggestions.innerHTML += `
                    <div class="suggest-item" onmousedown="selectSuggestion('${p.name}')">
                        <i class="fas fa-magnifying-glass"></i>
                        <span>${p.name}</span>
                        <span class="suggest-category">${p.cat}</span>
                    </div>
                `;
            });
        }

        function selectSuggestion(name) {
            document.getElementById('search-input').value = name;
            filterProducts();
        }

        // === FILTERING & SORTING LOGIC ===
        function renderCategoriesFilter() {
            const list = document.getElementById('category-filter-list');
            const categories = ['All', 'BTS Products', 'Sensors', 'Modules', 'Components', 'Tools'];
            list.innerHTML = '';
            
            categories.forEach(c => {
                const count = c === 'All' ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === c).length;
                const isActive = selectedCategory === c ? 'active' : '';
                list.innerHTML += `
                    <li class="side-cat-item ${isActive}" onclick="setCategoryFilter('${c}')">
                        <span>${c}</span>
                        <span class="count">${count}</span>
                    </li>
                `;
            });
        }

        function setCategoryFilter(cat) {
            selectedCategory = cat;
            renderCategoriesFilter();
            filterProducts();
        }

        function handlePriceSliderInput(val) {
            currentPriceLimit = parseInt(val);
            document.getElementById('max-price-input').value = val;
            filterProducts();
        }

        function handleMaxPriceChange(val) {
            const num = parseInt(val) || 10000;
            currentPriceLimit = Math.min(Math.max(num, 50), 10000);
            document.getElementById('price-slider').value = currentPriceLimit;
            document.getElementById('max-price-input').value = currentPriceLimit;
            filterProducts();
        }

        function setRatingFilter(val) {
            selectedRatingLimit = val;
            filterProducts();
        }

        function setDiscountFilter(val) {
            selectedDiscountLimit = val;
            filterProducts();
        }

        function toggleStockFilter() {
            const el = document.getElementById('stock-toggle');
            excludeOutOfStock = el.checked;
            filterProducts();
        }

        function setSortMode(mode) {
            currentSortMode = mode;
            document.querySelectorAll('.sort-opt').forEach(opt => opt.classList.remove('active'));
            document.getElementById(`sort-${mode}`).classList.add('active');
            filterProducts();
        }

        function triggerCatBanner() {
            setCategoryFilter('BTS Products');
            document.getElementById('section-title')?.scrollIntoView({ behavior: 'smooth' });
        }

        function resetAllFilters() {
            selectedCategory = 'All';
            currentPriceLimit = 10000;
            selectedRatingLimit = 0;
            selectedDiscountLimit = 0;
            excludeOutOfStock = false;
            
            document.getElementById('price-slider').value = 10000;
            document.getElementById('max-price-input').value = 10000;
            document.getElementById('stock-toggle').checked = false;
            document.querySelectorAll('input[name="rating-filter"]').forEach(r => r.checked = r.value === '0');
            document.querySelectorAll('input[name="discount-filter"]').forEach(d => d.checked = d.value === '0');
            document.getElementById('search-input').value = '';

            renderCategoriesFilter();
            filterProducts();
        }

        function filterProducts() {
            const query = document.getElementById('search-input').value.toLowerCase().trim();
            
            // Apply filters
            let list = PRODUCTS.filter(p => {
                // Category match
                if (selectedCategory !== 'All' && p.cat !== selectedCategory) return false;
                // Price match
                if (p.price > currentPriceLimit) return false;
                // Rating match
                if (p.rating < selectedRatingLimit) return false;
                // Discount match
                if (p.discount < selectedDiscountLimit) return false;
                // In stock match
                if (excludeOutOfStock && !p.inStock) return false;
                // Search query match
                if (query && !p.name.toLowerCase().includes(query) && !p.cat.toLowerCase().includes(query)) return false;
                
                return true;
            });

            // Apply sorting
            if (currentSortMode === 'popularity') {
                list.sort((a, b) => b.popularity - a.popularity);
            } else if (currentSortMode === 'low-high') {
                list.sort((a, b) => a.price - b.price);
            } else if (currentSortMode === 'high-low') {
                list.sort((a, b) => b.price - a.price);
            } else if (currentSortMode === 'rating') {
                list.sort((a, b) => b.rating - a.rating);
            }

            renderProducts(list);
        }

        function renderProducts(list) {
            const grid = document.getElementById('product-row');
            const counter = document.getElementById('results-counter');
            
            counter.innerText = `${list.length} Products`;
            grid.innerHTML = '';

            if (list.length === 0) {
                grid.innerHTML = `
                    <div class="empty-results" style="grid-column: 1 / -1;">
                        <i class="fas fa-ban"></i>
                        <h3>No Products Found</h3>
                        <p style="margin-top: 10px;">Try adjusting your filter options or clear search parameters to view items.</p>
                    </div>
                `;
                return;
            }

            list.forEach(p => {
                const ratingClass = p.rating >= 4.5 ? 'good' : 'avg';
                const isWished = wishlist.includes(p.id) ? 'active' : '';
                const stockAction = p.inStock ? 
                    `<button class="add-cart-btn" id="btn-${p.id}" onclick="event.stopPropagation(); addToCart(${p.id})"><i class="fas fa-cart-plus"></i> ADD TO CART</button>` : 
                    `<button class="add-cart-btn" style="background:#475569; box-shadow:none; cursor:not-allowed;" disabled onclick="event.stopPropagation();"><i class="fas fa-circle-exclamation"></i> OUT OF STOCK</button>`;

                grid.innerHTML += `
                    <div class="prod-card" onclick="openProductModal(${p.id})">
                        <div class="wishlist-btn ${isWished}" onclick="event.stopPropagation(); toggleWishlist(${p.id}, this)">
                            <i class="fas fa-heart"></i>
                        </div>
                        <div class="img-wrap">
                            ${getProductSVG(p)}
                        </div>
                        <div class="assured-badge"><i class="fas fa-shield"></i> Verified</div>
                        <div class="title">${p.name}</div>
                        <div class="rating-row">
                            <span class="rating-badge ${ratingClass}">${p.rating} <i class="fas fa-star" style="font-size: 8px;"></i></span>
                            <span class="reviews-count">(${p.reviews.toLocaleString()})</span>
                        </div>
                        <div class="price-block">
                            <div class="price-row">
                                <span class="sell-price">₹${p.price.toLocaleString()}</span>
                                <span class="mrp-price">₹${p.mrp.toLocaleString()}</span>
                                <span class="discount">${p.discount}% off</span>
                            </div>
                            <div class="free-delivery">
                                <i class="fas fa-truck-fast"></i> Free Delivery
                            </div>
                        </div>
                        ${stockAction}
                    </div>
                `;
            });
        }

        // === WISHLIST SYSTEM ===
        function toggleWishlist(id, el) {
            const idx = wishlist.indexOf(id);
            if (idx > -1) {
                wishlist.splice(idx, 1);
                el.classList.remove('active');
            } else {
                wishlist.push(id);
                el.classList.add('active');
                // Pulse animation feedback
                el.style.transform = 'scale(1.25)';
                setTimeout(() => el.style.transform = '', 300);
            }
            localStorage.setItem('bts_wishlist', JSON.stringify(wishlist));
        }

        // === CART SYSTEM ===
        function addToCart(id, qty = 1) {
            const p = PRODUCTS.find(prod => prod.id === id);
            if (!p || !p.inStock) return;

            const existing = cart.find(item => item.product.id === id);
            if (existing) {
                existing.qty += qty;
            } else {
                cart.push({ product: p, qty });
            }

            // Button feedback animation
            const btn = document.getElementById('btn-' + id);
            if (btn) {
                btn.innerHTML = '<i class="fas fa-check-circle"></i> ADDED';
                btn.style.background = 'linear-gradient(135deg, #4caf50, #2e7d32)';
                setTimeout(() => {
                    btn.innerHTML = '<i class="fas fa-cart-plus"></i> ADD TO CART';
                    btn.style.background = '';
                }, 1200);
            }

            syncCart();
        }

        function syncCart() {
            const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
            const totalMrp = cart.reduce((acc, item) => acc + (item.product.mrp * item.qty), 0);
            const totalSell = cart.reduce((acc, item) => acc + (item.product.price * item.qty), 0);
            const totalSavings = totalMrp - totalSell;
            const deliveryCharge = totalSell >= 499 ? 0 : 49;

            document.getElementById('badge-count').innerText = totalItems;
            document.getElementById('cart-count-inner').innerText = totalItems;
            document.getElementById('cart-subtotal-display').innerText = '₹' + totalSell.toLocaleString();
            
            if (deliveryCharge === 0) {
                document.getElementById('cart-delivery-display').innerText = 'FREE';
                document.getElementById('cart-delivery-display').style.color = 'var(--accent)';
            } else {
                document.getElementById('cart-delivery-display').innerText = '₹' + deliveryCharge;
                document.getElementById('cart-delivery-display').style.color = '#fff';
            }

            const grandTotal = totalSell + deliveryCharge;
            document.getElementById('cart-total-display').innerText = '₹' + grandTotal.toLocaleString();
            document.getElementById('cart-savings-display').innerText = `You will save ₹${totalSavings.toLocaleString()} on this order!`;

            localStorage.setItem('bts_cart', JSON.stringify(cart));

            // Render drawer body
            const body = document.getElementById('cart-body');
            if (cart.length === 0) {
                body.innerHTML = `
                    <div style="text-align: center; padding: 60px 0; color: var(--text-muted);">
                        <i class="fas fa-cart-flatbed-suitcase" style="font-size: 48px; margin-bottom: 20px; opacity: 0.3;"></i>
                        <p>Your cart is empty!</p>
                        <p style="font-size: 11px; margin-top: 5px;">Add controllers or components to proceed.</p>
                    </div>
                `;
                return;
            }

            body.innerHTML = '';
            cart.forEach((item, index) => {
                body.innerHTML += `
                    <div class="cart-entry">
                        <div class="img-box">${getProductSVG(item.product)}</div>
                        <div class="cart-entry-info">
                            <h4>${item.product.name}</h4>
                            <div class="cp">₹${(item.product.price * item.qty).toLocaleString()}</div>
                            <div class="qty-controls">
                                <button class="qty-btn" onclick="adjustQty(${index}, -1)">−</button>
                                <span class="qty-val">${item.qty}</span>
                                <button class="qty-btn" onclick="adjustQty(${index}, 1)">+</button>
                                <span class="remove-item" onclick="removeCartItem(${index})">Remove</span>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        function adjustQty(idx, delta) {
            cart[idx].qty += delta;
            if (cart[idx].qty <= 0) cart.splice(idx, 1);
            syncCart();
        }

        function removeCartItem(idx) {
            cart.splice(idx, 1);
            syncCart();
        }

        function openCart() {
            document.getElementById('cart-overlay').classList.add('show');
        }

        function closeCart() {
            document.getElementById('cart-overlay').classList.remove('show');
        }

        // === QUICK VIEW DETAILS MODAL ===
        function openProductModal(id) {
            const p = PRODUCTS.find(prod => prod.id === id);
            if (!p) return;

            document.getElementById('modal-product-title').innerText = p.name;
            document.getElementById('modal-rating-badge').innerHTML = `${p.rating} <i class="fas fa-star" style="font-size: 8px;"></i>`;
            document.getElementById('modal-reviews-count').innerText = `(${p.reviews.toLocaleString()} Ratings & Reviews)`;
            document.getElementById('modal-sell-price').innerText = `₹${p.price.toLocaleString()}`;
            document.getElementById('modal-mrp-price').innerText = `₹${p.mrp.toLocaleString()}`;
            document.getElementById('modal-discount').innerText = `${p.discount}% OFF`;
            document.getElementById('modal-description').innerText = p.desc;
            document.getElementById('modal-image-container').innerHTML = getProductSVG(p);

            // Specs table loading
            const tBody = document.getElementById('modal-specs-table-body');
            tBody.innerHTML = '';
            for (const [key, value] of Object.entries(p.specs)) {
                tBody.innerHTML += `
                    <tr>
                        <td class="label">${key}</td>
                        <td class="value">${value}</td>
                    </tr>
                `;
            }

            // Quick Buy / Add actions
            const addBtn = document.getElementById('modal-add-cart-btn');
            const buyBtn = document.getElementById('modal-buy-now-btn');

            if (p.inStock) {
                addBtn.style.display = 'flex';
                addBtn.onclick = () => { addToCart(p.id); closeProductModal(); openCart(); };
                buyBtn.style.display = 'flex';
                buyBtn.onclick = () => { addToCart(p.id); closeProductModal(); openCheckout(); };
            } else {
                addBtn.style.display = 'none';
                buyBtn.style.display = 'flex';
                buyBtn.style.background = '#475569';
                buyBtn.style.boxShadow = 'none';
                buyBtn.innerHTML = 'Out of Stock';
                buyBtn.disabled = true;
            }

            document.getElementById('product-modal').classList.add('show');
        }

        function closeProductModal() {
            document.getElementById('product-modal').classList.remove('show');
        }

        // === CHECKOUT STEPS MODULE (3-STEP ENGINE) ===
        function openCheckout() {
            if (cart.length === 0) return alert('Your cart is empty!');
            closeCart();
            document.getElementById('checkout-overlay').classList.add('show');
            goCheckoutStep(1);
        }

        function closeCheckout() {
            document.getElementById('checkout-overlay').classList.remove('show');
        }

        function goCheckoutStep(step) {
            ['cs1', 'cs2', 'cs3'].forEach((id, i) => {
                document.getElementById(id).classList.toggle('active', i + 1 <= step);
            });

            const body = document.getElementById('checkout-body');
            const totalSell = cart.reduce((acc, item) => acc + (item.product.price * item.qty), 0);
            const deliveryCharge = totalSell >= 499 ? 0 : 49;
            const grandTotal = totalSell + deliveryCharge;

            if (step === 1) {
                body.innerHTML = `
                    <h3 style="color:#fff; margin-bottom:15px; font-weight:800;">1. Delivery Address</h3>
                    <button class="loc-btn" onclick="autofillLocation()">
                        <i class="fas fa-location-crosshairs"></i> Autofill via Geolocation GPS
                    </button>
                    <div class="checkout-row">
                        <div class="field">
                            <label>Full Name</label>
                            <input type="text" id="d-name" value="${currentUser ? currentUser.name : ''}" placeholder="Receiver's name" required>
                        </div>
                        <div class="field">
                            <label>Mobile Number</label>
                            <input type="tel" id="d-phone" placeholder="10-digit mobile number" required>
                        </div>
                    </div>
                    <div class="checkout-row">
                        <div class="field">
                            <label>Pincode / Zip</label>
                            <input type="text" id="d-pin" placeholder="6-digit pincode" required>
                        </div>
                        <div class="field">
                            <label>City / Town</label>
                            <input type="text" id="d-city" placeholder="City" required>
                        </div>
                    </div>
                    <div class="field" style="margin-top:15px;">
                        <label>Street Address (House No, Building, Area)</label>
                        <input type="text" id="d-addr" placeholder="Flat/House No., Colony, Landmark" required>
                    </div>
                    <div class="field">
                        <label>State</label>
                        <input type="text" id="d-state" placeholder="Haryana" required>
                    </div>
                    <button class="btn-checkout-next" onclick="submitAddress()">Deliver To This Address</button>
                    <button class="btn-back" onclick="closeCheckout()">Cancel Checkout</button>
                `;
            } else if (step === 2) {
                let itemsListHtml = cart.map(item => `
                    <div class="order-summary-item">
                        <div class="img-box">${getProductSVG(item.product)}</div>
                        <div style="flex:1;">
                            <div style="font-weight:600; color:#fff; font-size:13px;">${item.product.name}</div>
                            <div style="color:var(--text-muted); font-size:11px;">Qty: ${item.qty}</div>
                        </div>
                        <div style="font-weight:800; color:#fff;">₹${(item.product.price * item.qty).toLocaleString()}</div>
                    </div>
                `).join('');

                body.innerHTML = `
                    <h3 style="color:#fff; margin-bottom:5px; font-weight:800;">2. Order Summary</h3>
                    <p style="font-size:12px; color:var(--text-muted); margin-bottom:20px; line-height:1.4;">
                        Deliver to: <b>${deliveryAddr.name}</b> (${deliveryAddr.phone})<br>
                        Address: ${deliveryAddr.addr}, ${deliveryAddr.city}, ${deliveryAddr.state} - ${deliveryAddr.pin}
                    </p>
                    <div style="max-height: 200px; overflow-y:auto; border: 1px solid var(--glass-border); padding: 10px; border-radius: 8px; margin-bottom: 20px;">
                        ${itemsListHtml}
                    </div>
                    <div>
                        <div class="order-total-row">
                            <span>Price (${cart.reduce((a,c) => a + c.qty, 0)} items)</span>
                            <span>₹${totalSell.toLocaleString()}</span>
                        </div>
                        <div class="order-total-row">
                            <span>Delivery Fee</span>
                            <span style="color: var(--accent); font-weight:700;">${deliveryCharge === 0 ? 'FREE' : '₹' + deliveryCharge}</span>
                        </div>
                        <div class="order-total-row grand">
                            <span>Total Payable</span>
                            <span>₹${grandTotal.toLocaleString()}</span>
                        </div>
                    </div>
                    <button class="btn-checkout-next" onclick="goCheckoutStep(3)">Continue To Payment</button>
                    <button class="btn-back" onclick="goCheckoutStep(1)">Modify Address</button>
                `;
            } else if (step === 3) {
                const upiPayLink = `upi://pay?pa=7052050656@gpay&pn=BTS%20Technology&am=${grandTotal}&cu=INR`;
                const gpayQr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiPayLink)}`;
                
                body.innerHTML = `
                    <h3 style="color:#fff; margin-bottom:20px; font-weight:800;">3. Safe Payment</h3>
                    <div class="payment-options">
                        <div class="pay-option selected" id="opt-upi" onclick="togglePayMethod('upi')">
                            <div class="pay-radio"></div>
                            <div>
                                <div style="font-weight:700; color:white; font-size:13px;">Instant Digital UPI</div>
                                <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Scan QR with GPay / PhonePe / Paytm</div>
                            </div>
                        </div>
                        <div class="pay-option" id="opt-cod" onclick="togglePayMethod('cod')">
                            <div class="pay-radio"></div>
                            <div>
                                <div style="font-weight:700; color:white; font-size:13px;">Cash on Delivery (COD)</div>
                                <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Pay ₹${grandTotal.toLocaleString()} in cash when package arrives</div>
                            </div>
                        </div>
                    </div>

                    <!-- UPI Scan container -->
                    <div class="qr-pay-area show" id="qr-pay-panel">
                        <p style="font-size:12px; color:var(--text-muted);">Please scan to pay exact amount: <b>₹${grandTotal.toLocaleString()}</b></p>
                        <img src="${gpayQr}" width="200" height="200" alt="UPI Scan">
                        <div style="font-size:12px; background:rgba(6,214,160,0.1); border:1px solid rgba(6,214,160,0.25); color:var(--accent); padding:8px 12px; border-radius:6px; display:inline-block; margin-bottom:10px;">
                            <i class="fas fa-mobile-screen-button"></i> Google Pay ID: 7052050656
                        </div>
                        <div class="qr-info-alert">
                            <p class="title"><i class="fas fa-triangle-exclamation"></i> Transaction ID Needed</p>
                            <p class="body">Enter the 12-digit UTR/Transaction number from your payment application below. Fake/empty entries will immediately fail verification.</p>
                        </div>
                        <div class="field" style="margin-top:15px;">
                            <label style="text-align:left;">12-Digit Transaction UTR</label>
                            <input type="text" id="utr-number" placeholder="Enter UTR reference ID" maxlength="12" style="text-align:center; font-weight:700; letter-spacing:2px;">
                        </div>
                    </div>

                    <!-- COD Box -->
                    <div class="cod-pay-area" id="cod-pay-panel">
                        <i class="fas fa-hand-holding-dollar"></i>
                        <h4 style="color:#fff;">Payable amount: ₹${grandTotal.toLocaleString()}</h4>
                        <p style="font-size:12px; color:var(--text-muted); margin-top:8px;">Ensure exact change is ready during delivery to prevent dispatch delays.</p>
                    </div>

                    <button class="btn-checkout-next" style="background:var(--gradient);" onclick="confirmFinalOrder()">Place Order</button>
                    <button class="btn-back" onclick="goCheckoutStep(2)">Back To Summary</button>
                `;
            }
        }

        function autofillLocation() {
            const btn = event.currentTarget;
            if (!navigator.geolocation) return alert('GPS geolocation is not supported in this browser.');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Locating your position...';
            
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                        .then(res => res.json())
                        .then(data => {
                            const add = data.address || {};
                            document.getElementById('d-addr').value = data.display_name || '';
                            document.getElementById('d-city').value = add.city || add.town || add.village || '';
                            document.getElementById('d-state').value = add.state || '';
                            document.getElementById('d-pin').value = add.postcode || '';
                            btn.innerHTML = '<i class="fas fa-circle-check"></i> Position Synced!';
                            btn.style.borderColor = 'var(--accent)';
                            btn.style.color = 'var(--accent)';
                        })
                        .catch(() => {
                            document.getElementById('d-addr').value = `Coordinates: Lat ${latitude}, Lon ${longitude}`;
                            btn.innerHTML = '<i class="fas fa-circle-check"></i> Coordinates captured';
                        });
                },
                () => {
                    alert('Geolocation access rejected. Please enter the shipping address fields manually.');
                    btn.innerHTML = '<i class="fas fa-location-crosshairs"></i> Autofill via Geolocation GPS';
                }
            );
        }

        function submitAddress() {
            const name = document.getElementById('d-name').value.trim();
            const phone = document.getElementById('d-phone').value.trim();
            const pin = document.getElementById('d-pin').value.trim();
            const city = document.getElementById('d-city').value.trim();
            const addr = document.getElementById('d-addr').value.trim();
            const state = document.getElementById('d-state').value.trim();

            if (!name || !phone || !pin || !city || !addr || !state) {
                return alert('Please fill in all address requirements.');
            }

            deliveryAddr = { name, phone, pin, city, addr, state };
            goCheckoutStep(2);
        }

        function togglePayMethod(method) {
            selectedPayMethod = method;
            document.querySelectorAll('.pay-option').forEach(o => o.classList.remove('selected'));
            document.getElementById(`opt-${method}`).classList.add('selected');
            
            document.getElementById('qr-pay-panel').style.display = method === 'upi' ? 'block' : 'none';
            document.getElementById('cod-pay-panel').style.display = method === 'cod' ? 'block' : 'none';
        }

        function confirmFinalOrder() {
            const orderId = 'BTS' + Date.now().toString(36).toUpperCase();
            const totalSell = cart.reduce((acc, item) => acc + (item.product.price * item.qty), 0);
            const deliveryCharge = totalSell >= 499 ? 0 : 49;
            const grandTotal = totalSell + deliveryCharge;
            let utrVal = '';

            if (selectedPayMethod === 'upi') {
                const utr = document.getElementById('utr-number').value.trim();
                if (!utr || utr.length < 8) {
                    alert('⚠️ PAYMENT PROOF REQUIRED\n\nPlease pay via GPay/PhonePe and enter the 12-digit transaction UTR number.');
                    const utrInp = document.getElementById('utr-number');
                    if (utrInp) { utrInp.style.borderColor = 'var(--accent-red)'; utrInp.focus(); }
                    return;
                }
                utrVal = utr;
                console.log(`[ORDER PLACED] ID: ${orderId} | UPI UTR: ${utr} | Total: ₹${grandTotal}`);
            } else {
                console.log(`[ORDER PLACED] ID: ${orderId} | COD | Total: ₹${grandTotal}`);
            }

            // Save order to history
            const orderDate = new Date().toLocaleString('en-IN', {
                day: '2-digit', month: 'short', year: 'numeric',
                hour: '2-digit', minute: '2-digit', hour12: true
            });
            const newOrder = {
                orderId,
                timestamp: Date.now(),
                date: orderDate,
                items: [...cart],
                subtotal: totalSell,
                delivery: deliveryCharge,
                total: grandTotal,
                address: deliveryAddr,
                paymentMethod: selectedPayMethod,
                utr: utrVal,
                status: 'Processing',
                email: currentUser ? currentUser.email : ''
            };

            const savedOrders = localStorage.getItem('bts_orders');
            const ordersList = savedOrders ? JSON.parse(savedOrders) : [];
            ordersList.push(newOrder);
            localStorage.setItem('bts_orders', JSON.stringify(ordersList));
            updateOrdersBadge();

            if (selectedPayMethod === 'upi') {
                alert(`🎉 Order Confirmed Successfully!\n\nOrder ID: ${orderId}\nPayment Type: UPI (Transaction UTR: ${utrVal})\nShipping: ${deliveryAddr.name}\nAddress: ${deliveryAddr.addr}, ${deliveryAddr.city}\n\nOur hardware support team will verify payment and call you at ${deliveryAddr.phone} for final shipping verification.\n\nThank you for choosing BTS Technology!`);
            } else {
                alert(`🎉 Order Confirmed Successfully!\n\nOrder ID: ${orderId}\nPayment Type: Cash on Delivery\nShipping: ${deliveryAddr.name}\nAddress: ${deliveryAddr.addr}, ${deliveryAddr.city}\n\nTotal payable to courier: ₹${grandTotal.toLocaleString()}\n\nThank you for shopping with BTS Technology!`);
            }

            cart = [];
            syncCart();
            closeCheckout();
        }

        // === ORDER HISTORY MODULE ===
        let orders = [];

        function openOrders() {
            closeCart();
            const savedOrders = localStorage.getItem('bts_orders');
            orders = savedOrders ? JSON.parse(savedOrders) : [];
            const container = document.getElementById('orders-list-container');
            
            if (orders.length === 0) {
                container.innerHTML = `
                    <div style="text-align: center; padding: 60px 0; color: var(--text-muted);">
                        <i class="fas fa-boxes-packing" style="font-size: 48px; margin-bottom: 20px; opacity: 0.3;"></i>
                        <p>No orders placed yet!</p>
                        <p style="font-size: 11px; margin-top: 5px;">Place an order from your cart to see tracking details.</p>
                    </div>
                `;
            } else {
                container.innerHTML = '';
                orders.slice().reverse().forEach(order => {
                    const track = getOrderStatus(order);
                    let statusColor = 'var(--primary)';
                    let statusBg = 'rgba(14, 165, 233, 0.1)';
                    if (track.step === 2) { statusColor = 'var(--accent)'; statusBg = 'rgba(6, 214, 160, 0.1)'; }
                    if (track.step === 3) { statusColor = 'var(--accent-orange)'; statusBg = 'rgba(255, 159, 0, 0.1)'; }
                    if (track.step === 4) { statusColor = '#4caf50'; statusBg = 'rgba(76, 175, 80, 0.1)'; }
                    if (track.step === 0) { statusColor = 'var(--accent-red)'; statusBg = 'rgba(255, 71, 87, 0.1)'; }

                    const itemsHtml = order.items.map(item => `
                        <div style="display:flex; align-items:center; gap:15px;">
                            <div style="width:40px; height:40px; background:rgba(0,0,0,0.2); border:1px solid var(--glass-border); border-radius:6px; padding:4px; display:flex; align-items:center; justify-content:center;">
                                ${getProductSVG(item.product)}
                            </div>
                            <div style="flex:1;">
                                <div style="font-size:13px; font-weight:600; color:#fff; display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden;">${item.product.name}</div>
                                <div style="font-size:11px; color:var(--text-muted);">Qty: ${item.qty} × ₹${item.product.price.toLocaleString()}</div>
                            </div>
                            <div style="font-weight:700; color:#fff; font-size:13px;">₹${(item.product.price * item.qty).toLocaleString()}</div>
                        </div>
                    `).join('');

                    let stepperHtml = '';
                    if (track.step === 0) {
                        stepperHtml = `
                            <div style="background:rgba(255,71,87,0.08); border:1px dashed var(--accent-red); border-radius:8px; padding:12px; text-align:center; color:var(--accent-red); font-size:12px; font-weight:700; display:flex; align-items:center; justify-content:center; gap:8px;">
                                <i class="fas fa-circle-xmark"></i> This order has been cancelled.
                            </div>
                        `;
                    } else {
                        stepperHtml = `
                            <div style="background:rgba(0,0,0,0.1); border-radius:8px; padding:15px; margin-top:5px; border:1px solid rgba(255,255,255,0.02);">
                                <div style="display:flex; justify-content:space-between; align-items:center; position:relative;">
                                    <div style="position:absolute; top:8px; left:10px; right:10px; height:2px; background:#1e293b; z-index:1;"></div>
                                    <div style="position:absolute; top:8px; left:10px; width:${track.percent}%; height:2px; background:var(--primary); z-index:2; transition: width 0.5s;"></div>
                                    
                                    <div style="display:flex; flex-direction:column; align-items:center; gap:5px; z-index:3; width:60px; text-align:center;">
                                        <div style="width:18px; height:18px; border-radius:50%; background:var(--primary); display:flex; align-items:center; justify-content:center; color:#fff; font-size:9px;"><i class="fas fa-check"></i></div>
                                        <span style="font-size:9px; font-weight:700; color:#fff;">Placed</span>
                                    </div>
                                    <div style="display:flex; flex-direction:column; align-items:center; gap:5px; z-index:3; width:60px; text-align:center;">
                                        <div style="width:18px; height:18px; border-radius:50%; background:${track.step >= 2 ? 'var(--primary)' : '#1e293b'}; display:flex; align-items:center; justify-content:center; color:#fff; font-size:9px;">
                                            ${track.step >= 2 ? '<i class="fas fa-check"></i>' : '2'}
                                        </div>
                                        <span style="font-size:9px; font-weight:700; color:${track.step >= 2 ? '#fff' : 'var(--text-muted)'};">Verified</span>
                                    </div>
                                    <div style="display:flex; flex-direction:column; align-items:center; gap:5px; z-index:3; width:60px; text-align:center;">
                                        <div style="width:18px; height:18px; border-radius:50%; background:${track.step >= 3 ? 'var(--primary)' : '#1e293b'}; display:flex; align-items:center; justify-content:center; color:#fff; font-size:9px;">
                                            ${track.step >= 3 ? '<i class="fas fa-check"></i>' : '3'}
                                        </div>
                                        <span style="font-size:9px; font-weight:700; color:${track.step >= 3 ? '#fff' : 'var(--text-muted)'};">Shipped</span>
                                    </div>
                                    <div style="display:flex; flex-direction:column; align-items:center; gap:5px; z-index:3; width:60px; text-align:center;">
                                        <div style="width:18px; height:18px; border-radius:50%; background:${track.step >= 4 ? 'var(--primary)' : '#1e293b'}; display:flex; align-items:center; justify-content:center; color:#fff; font-size:9px;">
                                            ${track.step >= 4 ? '<i class="fas fa-check"></i>' : '4'}
                                        </div>
                                        <span style="font-size:9px; font-weight:700; color:${track.step >= 4 ? '#fff' : 'var(--text-muted)'};">Delivered</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    container.innerHTML += `
                        <div class="order-card" style="background:rgba(255,255,255,0.02); border:1px solid var(--glass-border); border-radius:12px; padding:20px; display:flex; flex-direction:column; gap:15px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; border-bottom:1px solid rgba(255,255,255,0.04); padding-bottom:12px;">
                                <div>
                                    <div style="font-weight:800; color:#fff; font-size:14px;">Order ID: <span style="color:var(--primary);">${order.orderId}</span></div>
                                    <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">Placed on: ${order.date}</div>
                                </div>
                                <div style="margin-left:auto; display:flex; align-items:center; gap:6px; background:${statusBg}; color:${statusColor}; font-size:11px; font-weight:800; padding:4px 10px; border-radius:20px; text-transform:uppercase; letter-spacing:0.5px;">
                                    <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:${statusColor};"></span>
                                    ${track.text}
                                </div>
                            </div>
                            
                            <div style="display:flex; flex-direction:column; gap:10px;">
                                ${itemsHtml}
                            </div>
                            
                            ${stepperHtml}

                            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px; font-size:12px; color:var(--text-muted); flex-wrap:wrap; gap:10px;">
                                <div>Payment: <span style="color:#fff; font-weight:700; text-transform:uppercase;">${order.paymentMethod}</span> ${order.utr ? `<span style="font-size:10px; color:var(--text-muted);">(${order.utr})</span>` : ''}</div>
                                <div style="font-size:14px;">Total Paid: <span style="font-weight:900; color:#fff;">₹${order.total.toLocaleString()}</span></div>
                            </div>
                        </div>
                    `;
                });
            }
            document.getElementById('orders-modal').classList.add('show');
        }

        function closeOrders() {
            document.getElementById('orders-modal').classList.remove('show');
        }

        // === WISHLIST PAGE ===
        function openWishlistPage() {
            closeCart();
            renderWishlistPage();
            document.querySelector('.store-layout').style.display = 'none';
            document.querySelector('.banner-section').style.display = 'none';
            if (document.querySelector('.category-menu-bar')) document.querySelector('.category-menu-bar').style.display = 'none';
            document.getElementById('wishlist-page').style.display = 'block';
            window.scrollTo(0,0);
        }
        function closeWishlistPage() {
            document.getElementById('wishlist-page').style.display = 'none';
            document.querySelector('.store-layout').style.display = 'grid';
            document.querySelector('.banner-section').style.display = 'block';
            if (document.querySelector('.category-menu-bar')) document.querySelector('.category-menu-bar').style.display = 'flex';
        }
        function renderWishlistPage() {
            const container = document.getElementById('wishlist-page-container');
            document.getElementById('wishlist-page-count').innerText = `${wishlist.length} Items`;
            
            if (wishlist.length === 0) {
                container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; color:var(--text-muted); padding: 80px 0; background:var(--dark-2); border-radius:12px; border:1px dashed var(--glass-border);">
                    <i class="fas fa-heart-crack" style="font-size:64px; margin-bottom:20px; opacity:0.3;"></i>
                    <h2 style="color:#fff; margin-bottom:10px;">Empty Wishlist</h2>
                    <p style="margin-bottom:20px;">You haven't added any products to your wishlist yet.</p>
                    <button class="btn-action" onclick="closeWishlistPage()" style="padding:10px 24px;">Browse Products</button>
                </div>`;
                container.style.display = 'block';
                return;
            }
            
            container.style.display = 'grid';
            let html = '';
            wishlist.forEach(id => {
                const p = PRODUCTS.find(prod => prod.id === id);
                if (p) {
                    html += `
                        <div class="product-card" style="padding:20px; border:1px solid var(--glass-border); border-radius:12px; background:var(--dark-2); display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <div style="display:flex; justify-content:space-between; margin-bottom:12px;">
                                    <span style="font-size:11px; font-weight:800; color:var(--brand); text-transform:uppercase;">${p.cat}</span>
                                    <i class="fas fa-heart" style="color:var(--accent-red); cursor:pointer;" onclick="toggleWishlist(${p.id}, this); renderWishlistPage(); renderProducts(PRODUCTS);"></i>
                                </div>
                                <h4 style="font-size:16px; margin-bottom:12px; line-height:1.4; font-weight:600; color:#fff;">${p.name}</h4>
                            </div>
                            <div>
                                <div style="font-weight:900; color:var(--accent-green); font-size:20px; margin-bottom:16px;">₹${p.price.toLocaleString('en-IN')}</div>
                                <button class="add-cart-btn" onclick="addToCart(${p.id}); toggleWishlist(${p.id}, this); renderWishlistPage(); openCart(); renderProducts(PRODUCTS);" style="width:100%; padding:12px; border-radius:8px; background:var(--primary); color:#fff; border:none; font-weight:700; cursor:pointer; font-size:14px; transition:0.2s;">
                                    <i class="fas fa-cart-arrow-down" style="margin-right:8px;"></i> Move to Cart
                                </button>
                            </div>
                        </div>
                    `;
                }
            });
            container.innerHTML = html;
        }

        // === PROFILE MODAL ===
        function openProfile() {
            if (!currentUser) return;
            const container = document.getElementById('profile-container');
            container.innerHTML = `
                <div style="background:var(--dark-2); padding:16px; border-radius:8px; border:1px solid var(--glass-border);">
                    <p style="font-size:11px; color:var(--text-muted); font-weight:700; text-transform:uppercase; margin-bottom:4px;">Full Name</p>
                    <p style="font-size:16px; color:#fff; font-weight:600;">${currentUser.name}</p>
                </div>
                <div style="background:var(--dark-2); padding:16px; border-radius:8px; border:1px solid var(--glass-border);">
                    <p style="font-size:11px; color:var(--text-muted); font-weight:700; text-transform:uppercase; margin-bottom:4px;">Email Address</p>
                    <p style="font-size:16px; color:#fff; font-weight:600;">${currentUser.email || 'Not provided'}</p>
                </div>
                <div style="background:var(--dark-2); padding:16px; border-radius:8px; border:1px solid var(--glass-border);">
                    <p style="font-size:11px; color:var(--text-muted); font-weight:700; text-transform:uppercase; margin-bottom:4px;">Phone Number</p>
                    <p style="font-size:16px; color:#fff; font-weight:600;">${currentUser.phone || 'Not provided'}</p>
                </div>
            `;
            document.getElementById('profile-modal').classList.add('show');
        }
        function closeProfile() {
            document.getElementById('profile-modal').classList.remove('show');
        }

        // === REWARDS PAGE ===
        function openRewardsPage() {
            closeCart();
            document.querySelector('.store-layout').style.display = 'none';
            document.querySelector('.banner-section').style.display = 'none';
            if (document.querySelector('.category-menu-bar')) document.querySelector('.category-menu-bar').style.display = 'none';
            document.getElementById('rewards-page').style.display = 'block';
            window.scrollTo(0,0);
        }
        function closeRewardsPage() {
            document.getElementById('rewards-page').style.display = 'none';
            document.querySelector('.store-layout').style.display = 'grid';
            document.querySelector('.banner-section').style.display = 'block';
            if (document.querySelector('.category-menu-bar')) document.querySelector('.category-menu-bar').style.display = 'flex';
        }

        function getOrderStatus(order) {
            let status = 'Processing';
            let timestamp = order;
            if (typeof order === 'object' && order !== null) {
                status = order.status || 'Processing';
                timestamp = order.timestamp;
            } else {
                const elapsedMin = (Date.now() - timestamp) / (1000 * 60);
                if (elapsedMin < 2) status = 'Processing';
                else if (elapsedMin < 5) status = 'Payment Verified';
                else if (elapsedMin < 10) status = 'Shipped';
                else status = 'Delivered';
            }

            if (status === 'Processing') {
                return { text: 'Processing', step: 1, percent: 0 };
            } else if (status === 'Payment Verified' || status === 'Verified') {
                return { text: 'Payment Verified', step: 2, percent: 33 };
            } else if (status === 'Shipped') {
                return { text: 'Shipped', step: 3, percent: 66 };
            } else if (status === 'Delivered') {
                return { text: 'Delivered', step: 4, percent: 100 };
            } else if (status === 'Cancelled') {
                return { text: 'Cancelled', step: 0, percent: 0 };
            }
            return { text: status, step: 1, percent: 0 };
        }

        function updateOrdersBadge() {
            const savedOrders = localStorage.getItem('bts_orders');
            const ordersList = savedOrders ? JSON.parse(savedOrders) : [];
            const badge = document.getElementById('orders-badge-count');
            if (badge) {
                if (ordersList.length > 0) {
                    badge.innerText = ordersList.length;
                    badge.style.display = 'flex';
                } else {
                    badge.style.display = 'none';
                }
            }
        }

        // === BOOT/INITIALIZATION ===
        function initializeStore() {
            // Load saved data
            const savedCart = localStorage.getItem('bts_cart');
            if (savedCart) cart = JSON.parse(savedCart);
            
            const savedWishlist = localStorage.getItem('bts_wishlist');
            if (savedWishlist) wishlist = JSON.parse(savedWishlist);

            renderCategoriesFilter();
            filterProducts();
            syncCart();
            updateOrdersBadge();
        }

        document.addEventListener('DOMContentLoaded', () => {
            const savedUser = localStorage.getItem('bts_user');
            const urlParams = new URLSearchParams(window.location.search);
            const isOrdersView = urlParams.get('view') === 'orders' || window.location.hash === '#orders';

            if (savedUser) {
                currentUser = JSON.parse(savedUser);
                enterStore();
                if (isOrdersView) {
                    openOrders();
                }
            } else {
                if (isOrdersView) {
                    startAuthFlow();
                } else {
                    enterStore();
                }
            }

            // Circuit particle canvas initialization
            (function() {
                const canvas = document.getElementById('circuit-bg');
                const ctx = canvas.getContext('2d');
                let particles = [];

                function resize() {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
                window.addEventListener('resize', resize);
                resize();

                class Particle {
                    constructor() {
                        this.x = Math.random() * canvas.width;
                        this.y = Math.random() * canvas.height;
                        this.vx = (Math.random() - 0.5) * 0.3;
                        this.vy = (Math.random() - 0.5) * 0.3;
                        this.size = Math.random() * 2 + 1;
                        this.isLogo = Math.random() > 0.94;
                    }
                    update() {
                        this.x += this.vx; this.y += this.vy;
                        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                    }
                    draw() {
                        ctx.fillStyle = this.isLogo ? 'rgba(14, 165, 233, 0.7)' : 'rgba(14, 165, 233, 0.3)';
                        ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
                        if (this.isLogo) {
                            ctx.font = 'bold 9px Outfit, sans-serif';
                            ctx.fillText('BTS', this.x + 8, this.y + 4);
                        }
                    }
                }

                for (let i = 0; i < 70; i++) particles.push(new Particle());

                function animate() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgba(14, 165, 233, 0.05)';
                    ctx.lineWidth = 0.5;
                    for (let i = 0; i < particles.length; i++) {
                        for (let j = i + 1; j < particles.length; j++) {
                            const dist = Math.sqrt(Math.pow(particles[i].x - particles[j].x, 2) + Math.pow(particles[i].y - particles[j].y, 2));
                            if (dist < 160) {
                                ctx.moveTo(particles[i].x, particles[i].y);
                                ctx.lineTo(particles[j].x, particles[j].y);
                            }
                        }
                    }
                    ctx.stroke();
                    particles.forEach(p => { p.update(); p.draw(); });
                    requestAnimationFrame(animate);
                }
                animate();
            })();
        });
    