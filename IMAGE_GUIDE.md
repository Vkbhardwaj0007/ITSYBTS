# BTS Technology Website - Image Guide

## Logo and Branding ✅
- **Logo**: `images/logo.svg` - Professional SVG logo with circuit board design
- **Favicon**: `images/favicon.svg` - Browser tab icon

## How to Add Your Own Photos

### 1. Project Photos
Replace the Unsplash placeholder images in the Projects section with your actual project photos:

**Current placeholders in index.html (lines 1373-1406):**
- Kinetic Mirror System
- Smart Water Level Controller
- Automation & Motor Control  
- Smart Energy Monitor

**To replace:**
1. Save your project photos in the `images/` folder (e.g., `water-controller.jpg`, `motor-control.jpg`, `energy-monitor.jpg`)
2. Update the background-image URLs in the HTML from:
   ```html
   style="background: linear-gradient(...), url('https://images.unsplash.com/...')"
   ```
   to:
   ```html
   style="background: linear-gradient(...), url('images/your-photo.jpg')"
   ```

### 2. About Section Photo
The about section (line 1287-1289) currently uses a team collaboration stock photo.

**To replace:**
1. Add your team or workshop photo to `images/` folder (e.g., `team.jpg` or `workshop.jpg`)
2. Update line 1288 from:
   ```html
   url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?...')
   ```
   to:
   ```html
   url('images/team.jpg')
   ```

### 3. Hero Background Slideshow
The hero section (lines 1199-1210) has 4 rotating background images.

**To replace:**
1. Add 4 high-quality photos to `images/` folder:
   - `hero-1.jpg` - Electronics/IoT devices
   - `hero-2.jpg` - PCB manufacturing
   - `hero-3.jpg` - LED products
   - `hero-4.jpg` - Smart home devices
   
2. Update the background-image URLs in lines 1200, 1203, 1206, 1209

### 4. Service Cards (Optional)
You can add background images to service cards for more visual appeal.

**Example:**
```html
<div class="service-card reveal" style="background-image: url('images/iot-service.jpg');">
```

### 5. Add a Gallery Section (Optional)
You can create a new gallery section to showcase more photos:

```html
<!-- Gallery Section -->
<section id="gallery">
    <div class="container">
        <div class="section-header reveal">
            <span class="section-tag">Gallery</span>
            <h2>Our Work in Action</h2>
            <p>See our projects and manufacturing process</p>
        </div>
        <div class="gallery-grid">
            <img src="images/gallery-1.jpg" alt="Project 1">
            <img src="images/gallery-2.jpg" alt="Project 2">
            <img src="images/gallery-3.jpg" alt="Project 3">
            <!-- Add more images -->
        </div>
    </div>
</section>
```

## Recommended Image Specifications

### Hero Background Images
- **Size**: 1920x1080px (Full HD)
- **Format**: JPG or WebP
- **File size**: Under 500KB (optimize for web)

### Project Cards
- **Size**: 800x600px
- **Format**: JPG or WebP
- **File size**: Under 300KB

### About/Team Photo
- **Size**: 800x800px (square)
- **Format**: JPG or WebP
- **File size**: Under 400KB

### Logo
- **Format**: SVG (already created) or PNG with transparent background
- **Size**: Vector (SVG) or 400x120px (PNG)

## Image Optimization Tips

1. **Compress images** before uploading using tools like:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (for Mac)

2. **Use WebP format** for better compression (modern browsers support it)

3. **Lazy loading**: Images already load efficiently with the current setup

## Current Website Features ✅

- ✅ Professional SVG logo with circuit board design
- ✅ Favicon for browser tab
- ✅ Responsive design
- ✅ Dark theme with glassmorphism
- ✅ Animated background slideshow
- ✅ Contact forms (Email + WhatsApp)
- ✅ Order modal for services
- ✅ Smooth scroll animations

## Next Steps

1. Take photos of your:
   - Actual products (LED bulbs, smart devices)
   - Workshop/manufacturing setup
   - Team members
   - Completed projects

2. Optimize the photos (compress, resize)

3. Add them to the `images/` folder

4. Update the HTML file with the new image paths

5. Test the website by opening `index.html` in a browser

---

**Need help?** Contact: btstechnology007@gmail.com
