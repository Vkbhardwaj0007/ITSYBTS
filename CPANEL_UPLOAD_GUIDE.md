# BTS Technology Website - cPanel Upload Guide

## 📦 Files Ready for Upload

✅ **BTS_Website_Upload.zip** - आपकी complete website एक zip file में ready है!

---

## 🚀 Method 1: File Manager से Upload (सबसे आसान - Recommended)

### Step 1: cPanel में Login करें

1. अपने hosting provider की website खोलें (जैसे: Hostinger, Bluehost, GoDaddy, etc.)
2. cPanel login page पर जाएं
3. Username और Password डालें
4. Login करें

### Step 2: File Manager खोलें

1. cPanel dashboard में **"File Manager"** icon ढूंढें
2. File Manager पर click करें
3. एक नई window खुलेगी

### Step 3: public_html Folder में जाएं

1. Left sidebar में **"public_html"** folder पर double-click करें
2. यह आपकी main website directory है
3. अगर कोई पुरानी files हैं तो उन्हें delete कर दें (या backup folder में move करें)

### Step 4: Zip File Upload करें

1. Top menu में **"Upload"** button पर click करें
2. **"Select File"** पर click करें
3. Desktop से **"BTS_Website_Upload.zip"** select करें
4. Upload होने का wait करें (progress bar दिखेगा)
5. Upload complete होने पर, back to File Manager जाएं

### Step 5: Zip File को Extract करें

1. `public_html` folder में वापस आएं
2. **"BTS_Website_Upload.zip"** file पर right-click करें
3. **"Extract"** option select करें
4. Extract path confirm करें: `/public_html/`
5. **"Extract File(s)"** button पर click करें
6. Extraction complete होने का wait करें

### Step 6: Zip File Delete करें (Optional)

1. Extract होने के बाद, zip file को delete कर सकते हैं
2. `BTS_Website_Upload.zip` पर right-click करें
3. **"Delete"** select करें

### Step 7: Website Test करें

1. अपने domain को browser में खोलें (जैसे: `www.yourdomain.com`)
2. BTS Technology website live होनी चाहिए! 🎉

---

## 🔧 Method 2: FTP से Upload (Advanced Users)

### आपको क्या चाहिए:

- FTP Client (FileZilla - Free Download: https://filezilla-project.org/)
- FTP Credentials (cPanel से मिलेंगे)

### Step 1: FTP Credentials पाएं

1. cPanel में login करें
2. **"FTP Accounts"** section में जाएं
3. अपना FTP username और password note करें
4. FTP Server/Host address note करें (usually: `ftp.yourdomain.com`)

### Step 2: FileZilla Setup करें

1. FileZilla download और install करें
2. FileZilla खोलें
3. Top में FTP details भरें:
   - **Host**: `ftp.yourdomain.com`
   - **Username**: आपका FTP username
   - **Password**: आपका FTP password
   - **Port**: `21`
4. **"Quickconnect"** पर click करें

### Step 3: Files Upload करें

1. Left side (Local Site) में: `C:\Users\Asus\Desktop\bts_technology\` folder खोलें
2. Right side (Remote Site) में: `/public_html/` folder खोलें
3. Left side से सभी files select करें:
   - `index.html`
   - `photo_guide.html`
   - `visiting_card.html`
   - `images/` folder
   - सभी `.md` files
4. Right-click करें और **"Upload"** select करें
5. Upload complete होने का wait करें

### Step 4: Website Test करें

1. Browser में अपना domain खोलें
2. Website live होनी चाहिए!

---

## 📋 Upload Checklist

Upload करने से पहले check करें:

- [ ] cPanel login credentials ready हैं
- [ ] `BTS_Website_Upload.zip` file desktop पर है
- [ ] Domain name active है
- [ ] Hosting plan active है
- [ ] `public_html` folder में पुरानी files का backup ले लिया (अगर हैं तो)

Upload के बाद check करें:

- [ ] `index.html` file `public_html` में है
- [ ] `images/` folder सभी files के साथ upload हुआ
- [ ] Website browser में खुल रही है
- [ ] Logo दिख रहा है
- [ ] सभी sections properly load हो रहे हैं
- [ ] Contact form काम कर रहा है
- [ ] WhatsApp button काम कर रहा है

---

## 🔍 Common Issues और Solutions

### Issue 1: Website नहीं दिख रही
**Solution**: 
- Check करें कि `index.html` directly `public_html` में है, किसी subfolder में नहीं
- Browser cache clear करें (Ctrl + F5)
- 5-10 minutes wait करें (DNS propagation के लिए)

### Issue 2: Images नहीं दिख रहे
**Solution**:
- Check करें कि `images/` folder properly upload हुआ
- File permissions check करें (644 for files, 755 for folders)
- Image paths case-sensitive हैं - exact names use करें

### Issue 3: Logo नहीं दिख रहा
**Solution**:
- `images/logo.svg` और `images/favicon.svg` upload हुए हैं check करें
- Browser cache clear करें

### Issue 4: 404 Error
**Solution**:
- File name exactly `index.html` होनी चाहिए (lowercase)
- File `public_html` folder में होनी चाहिए

---

## 🌐 Domain Setup (अगर नया domain है)

### अगर आपने domain अभी खरीदा है:

1. **Nameservers Update करें**:
   - Domain registrar में login करें
   - Nameservers को hosting provider के nameservers से replace करें
   - Example: `ns1.yourhost.com`, `ns2.yourhost.com`

2. **DNS Propagation Wait करें**:
   - 24-48 hours तक लग सकते हैं
   - Check करें: https://www.whatsmydns.net/

3. **SSL Certificate Install करें** (HTTPS के लिए):
   - cPanel में "SSL/TLS Status" में जाएं
   - Free SSL (Let's Encrypt) enable करें
   - Auto-install होगा

---

## 📞 Support

अगर कोई problem आए तो:

1. **Hosting Provider Support**:
   - अपने hosting provider का support contact करें
   - Ticket raise करें

2. **BTS Technology**:
   - Email: btstechnology007@gmail.com
   - Phone: +91 7052050656

---

## ✅ Final Steps After Upload

1. **Test All Features**:
   - सभी navigation links
   - Contact form (email भेज कर test करें)
   - WhatsApp buttons
   - Order modal
   - Mobile responsiveness

2. **SEO Setup**:
   - Google Search Console में website add करें
   - Sitemap submit करें
   - Google Analytics add करें (optional)

3. **Share Your Website**:
   - Social media पर share करें
   - Business cards में add करें
   - Email signature में add करें

---

## 🎉 Congratulations!

आपकी BTS Technology website अब live है! 🚀

**Website URL**: `https://yourdomain.com`

---

**Created by**: BTS Technology  
**Date**: February 2026  
**Version**: 1.0
