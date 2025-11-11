# 🎥 Cholon.vn Live Shopping Platform

Easy-to-use livestream shopping platform for Điện Máy Chợ Lớn.

## 📁 Project Structure

```
cholon-live/
├── index.html       # Main app (DON'T edit unless making UI changes)
├── config.js        # ⭐ EDIT THIS to update products & video
├── logo.png         # Your logo
├── vercel.json      # Vercel configuration
├── package.json     # Project metadata
└── README.md        # This file
```

---

## 🚀 Quick Start Guide

### **1. Update Video URL (Before Going Live)**

Open `config.js` and change:

```javascript
videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
```

**For YouTube Live:**
- Get your live stream URL: `youtube.com/watch?v=ABC123`
- Use: `https://www.youtube.com/embed/ABC123`

**For Facebook Live:**
- Get your live URL: `facebook.com/yourpage/videos/123456`
- Use: `https://www.facebook.com/plugins/video.php?href=YOUR_FACEBOOK_LIVE_URL`

---

### **2. Update Products**

Open `config.js` and edit the `PRODUCTS` array:

```javascript
{
    id: 1,
    name: "Product Name",
    price: "1,000,000₫",
    image: "https://your-image-url.jpg",
    url: "https://dienmaycholon.com/product-link"
},
```

**Important:**
- First 3 products show in the **carousel** (auto-rotate)
- All products appear in the **product list**
- Use real product URLs from dienmaycholon.com

---

### **3. Change Hotline**

In `config.js`:

```javascript
hotline: "1900.2628",
```

---

## 📊 How to Add/Remove Products

### **Add a Product:**

1. Open `config.js`
2. Copy an existing product block
3. Paste at the end of the PRODUCTS array
4. Update: id, name, price, image, url
5. Save and push to GitHub

**Example:**
```javascript
{
    id: 9,
    name: "Máy Giặt Samsung ABC",
    price: "8,990,000₫",
    image: "https://cdn.shopify.com/image.jpg",
    url: "https://dienmaycholon.com/may-giat-samsung"
},
```

### **Remove a Product:**

1. Open `config.js`
2. Delete the entire product block
3. Save and push to GitHub

### **Reorder Products:**

- **First 3 products** = Featured in carousel
- Just drag/drop products in the array

---

## 🎬 Going Live Checklist

Before your 12.12 livestream:

- [ ] Update `config.js` with live video URL
- [ ] Check all products are correct
- [ ] Test on mobile phone
- [ ] Verify hotline number works
- [ ] Test lead form submission
- [ ] Share livestream link on social media

---

## 🔧 Common Tasks

### **Switch from YouTube to Facebook Live:**

```javascript
// In config.js
videoUrl: "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/dienmaycholon/videos/123456789",
```

### **Change Carousel Speed:**

Open `index.html` and find:
```javascript
}, 5000); // Change to 3000 (3 sec) or 10000 (10 sec)
```

### **Update Google Sheet URL:**

In `config.js`:
```javascript
googleSheetUrl: "YOUR_NEW_GOOGLE_SCRIPT_URL",
```

---

## 📱 Features

✅ **Auto-rotating product carousel** (3 products)  
✅ **Share button** (WhatsApp, Zalo, Facebook, etc.)  
✅ **Lead capture form** → Google Sheets  
✅ **Click-to-call hotline**  
✅ **Product list modal**  
✅ **Mobile-optimized UI**  
✅ **Minimizable product card**  

---

## 🆘 Troubleshooting

**Video not showing?**
- Check video URL in `config.js`
- Make sure it's an embed URL (includes `/embed/`)
- Clear browser cache (Ctrl + Shift + R)

**Products not loading?**
- Check `config.js` for syntax errors
- Make sure each product has all required fields
- Don't forget commas between products

**Logo not showing?**
- File must be named exactly `logo.png`
- Must be in root folder (same level as index.html)
- Redeploy on Vercel

**Lead form not working?**
- Check `googleSheetUrl` in `config.js`
- Test the Google Script URL directly
- Check Google Sheets permissions

---

## 📞 Support

Need help? Check:
- GitHub Issues: `github.com/SiuGit/cholon-live/issues`
- Vercel Dashboard: `vercel.com/siu-labs/cholon-live`

---

## 🎯 Pro Tips

1. **Test everything before going live** - Use test video first
2. **Prepare product links** - Have all URLs ready
3. **Announce early** - Share link 1 hour before stream
4. **Monitor leads** - Check Google Sheets during stream
5. **Update carousel products** - Show your best deals first

---

**Last Updated:** November 2024  
**Version:** 1.0  
**Live URL:** https://cholon-live.vercel.app