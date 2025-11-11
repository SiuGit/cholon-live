# 🎥 Cholon.vn Live Shopping Platform

> Nền tảng livestream shopping chuyên nghiệp cho Điện Máy Chợ Lớn

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SiuGit/cholon-live)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://cholon-live.vercel.app)

---

## 📖 Table of Contents

- [Quick Start](#-quick-start)
- [Features](#-features)
- [File Structure](#-file-structure)
- [Configuration](#-configuration)
- [Updating Products](#-updating-products)
- [Going Live](#-going-live)
- [Troubleshooting](#-troubleshooting)
- [Support](#-support)

---

## 🚀 Quick Start

### For Non-Technical Users:

1. **Update video URL** - Edit `config.js`, line 13
2. **Update products** - Edit `config.js`, lines 25+
3. **Save & push to GitHub** - Changes go live in 30 seconds
4. **Done!** Visit `cholon-live.vercel.app`

### For Developers:

```bash
# Clone repo
git clone https://github.com/SiuGit/cholon-live.git
cd cholon-live

# Deploy to Vercel
npm install -g vercel
vercel --prod
```

---

## ✨ Features

### Core Features
✅ **TikTok-style product tray** - Horizontal scrolling, 4 products visible  
✅ **Auto-rotating carousel** - Products change every 5 seconds  
✅ **Lead capture form** - Saves to Google Sheets  
✅ **Click-to-call hotline** - 1900.2628  
✅ **Share functionality** - WhatsApp, Zalo, Facebook  
✅ **Mobile-optimized** - iPhone safe areas, touch gestures  

### Technical Features
✅ **Zero configuration** - Edit config.js only  
✅ **Auto-deploy** - Push to GitHub → Live in 30s  
✅ **CSV import tool** - Bulk upload 100+ products  
✅ **Responsive design** - Works on all devices  
✅ **Fast loading** - Optimized assets  

---

## 📁 File Structure

```
cholon-live/
├── index.html          # Main app (DON'T edit unless UI changes)
├── config.js           # ⭐ EDIT THIS for products & settings
├── logo.png            # Your Cholon logo (120x120px)
├── csv-converter.html  # Tool to convert CSV → config.js
├── vercel.json         # Vercel deployment config
├── package.json        # Project metadata
└── README.md           # This file
```

**Golden Rule:** 
- ✅ Edit `config.js` for daily updates
- ❌ Don't touch `index.html` unless adding features

---

## ⚙️ Configuration

### 1. Change Video URL (Before Going Live)

Edit `config.js`:

```javascript
const CONFIG = {
    // YouTube Live
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    
    // OR Facebook Live
    videoUrl: "https://www.facebook.com/plugins/video.php?href=YOUR_FB_URL",
    
    hotline: "1900.2628",
    googleSheetUrl: "YOUR_GOOGLE_SCRIPT_URL"
};
```

### 2. Update Hotline

```javascript
hotline: "1900.2628", // Change this
```

### 3. Change Google Sheets Destination

```javascript
googleSheetUrl: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
```

---

## 🛍️ Updating Products

### Method 1: Manual Edit (1-10 products)

Edit `config.js`:

```javascript
const PRODUCTS = [
    {
        id: 1,
        name: "Bàn Ủi Philips DST2030/90",
        price: "1,029,000₫",
        image: "https://cdn.shopify.com/image.jpg",
        url: "https://dienmaycholon.com/product-link"
    },
    // Add more...
];
```

**Important:**
- First 4 products show in the tray
- All products appear in full list
- Use real URLs from dienmaycholon.com

### Method 2: CSV Import (10+ products)

1. **Prepare CSV** with columns: `Title`, `Variant Price`, `Image Src`, `Handle`
2. **Open** `csv-converter.html` in browser
3. **Upload** your CSV file
4. **Copy** generated config.js
5. **Replace** content in `config.js`
6. **Push** to GitHub

**CSV Format:**
```csv
Title,Variant Price,Image Src,Handle
Bàn Ủi Philips,1029000,https://image.jpg,ban-ui-philips
Máy Giặt Samsung,8990000,https://image2.jpg,may-giat-samsung
```

---

## 🎬 Going Live Checklist

### 1 Hour Before Stream:

- [ ] Update `config.js` with live video URL
- [ ] Test video plays on mobile
- [ ] Verify all product links work
- [ ] Check hotline number is correct
- [ ] Test lead form submission
- [ ] Share livestream link on social media

### 5 Minutes Before Stream:

- [ ] Refresh site to confirm latest version
- [ ] Test on multiple devices
- [ ] Have backup phone ready
- [ ] Check internet connection

### During Stream:

- [ ] Monitor Google Sheets for leads
- [ ] Respond to hotline calls
- [ ] Change featured products in config.js if needed
- [ ] Engage with viewers

### After Stream:

- [ ] Follow up with leads
- [ ] Review analytics
- [ ] Update product inventory
- [ ] Plan next stream

---

## 🐛 Troubleshooting

### Video Not Playing

**Symptoms:** Black screen, no video  
**Solutions:**
1. Check video URL in `config.js`
2. Ensure URL is embed format (`/embed/` for YouTube)
3. Verify video is public (not private)
4. Try in incognito mode
5. Clear browser cache (Ctrl + Shift + R)

**Example URLs:**
```javascript
// ✅ Correct
"https://www.youtube.com/embed/ABC123"

// ❌ Wrong
"https://www.youtube.com/watch?v=ABC123"
```

### Products Not Loading

**Symptoms:** Empty product tray  
**Solutions:**
1. Check JavaScript console for errors (F12)
2. Verify `config.js` syntax (commas, brackets)
3. Ensure all products have required fields
4. Check image URLs are accessible
5. Redeploy on Vercel

### Lead Form Not Working

**Symptoms:** Form submits but no data in Sheets  
**Solutions:**
1. Verify `googleSheetUrl` in `config.js`
2. Check Google Apps Script is deployed as "Web App"
3. Ensure script has proper permissions
4. Test script URL in browser directly
5. Check Google Sheets sharing settings

### Logo Not Showing

**Symptoms:** Broken image icon  
**Solutions:**
1. Verify `logo.png` exists in root folder
2. Check file name is exactly `logo.png` (lowercase)
3. Try renaming file and re-uploading
4. Clear browser cache
5. Check file size (should be under 200KB)

### Site Not Updating

**Symptoms:** Changes don't appear on live site  
**Solutions:**
1. Confirm changes are pushed to GitHub
2. Check Vercel deployment status
3. Wait 30-60 seconds for build
4. Hard refresh browser (Ctrl + Shift + R)
5. Check Vercel logs for errors

---

## 📊 Analytics & Tracking

### View Deployment Status
`https://vercel.com/siu-labs/cholon-live/deployments`

### Check Lead Submissions
Your Google Sheets → Check new rows

### Monitor Performance
- Vercel Analytics Dashboard
- Google Analytics (if configured)
- Facebook Insights (for FB Live)

---

## 🔧 Advanced Configuration

### Change Product Tray Settings

Edit `index.html` (line ~420):

```javascript
const displayCount = 4; // Show 4 products (change to 3 or 5)
```

### Change Auto-Scroll Speed

Currently: 5 seconds per product  
Change in future update (coming soon)

### Customize Colors

Replace color values in `index.html`:
- `bg-red-600` → Your brand color
- `from-orange-500` → Your accent color

---

## 🆘 Support

### Quick Help

- **GitHub Issues:** [github.com/SiuGit/cholon-live/issues](https://github.com/SiuGit/cholon-live/issues)
- **Vercel Dashboard:** [vercel.com/siu-labs/cholon-live](https://vercel.com/siu-labs/cholon-live)
- **Email:** your-email@dienmaycholon.com

### Common Questions

**Q: Can I use Facebook Live instead of YouTube?**  
A: Yes! Just change the `videoUrl` in config.js to Facebook's embed URL.

**Q: How many products can I add?**  
A: Unlimited! Use the CSV converter for bulk uploads.

**Q: Can I customize the design?**  
A: Yes, but requires editing `index.html`. Contact support for help.

**Q: Is it mobile-optimized?**  
A: Yes! Tested on iPhone and Android devices.

**Q: Can I add more than one livestream?**  
A: Not currently. One stream at a time.

---

## 🎯 Roadmap

### Coming Soon (12.12 Launch)
- [x] TikTok-style product tray
- [x] Share functionality
- [x] Lead capture form
- [x] CSV import tool

### Future Features
- [ ] Multiple stream support
- [ ] Live chat integration
- [ ] Product recommendations AI
- [ ] Real-time analytics dashboard
- [ ] Admin panel (no-code updates)
- [ ] A/B testing tools

---

## 📝 Changelog

### Version 1.0 (November 2024)
- Initial release
- TikTok-style product display
- Mobile-optimized UI
- Lead capture integration
- CSV import tool

---

## 📜 License

Copyright © 2024 Điện Máy Chợ Lớn. All rights reserved.

---

## 🙏 Credits

Built with:
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel](https://vercel.com)
- [PapaParse](https://www.papaparse.com)

---

**Last Updated:** November 12, 2024  
**Version:** 1.0  
**Live URL:** https://cholon-live.vercel.app  
**Status:** 🟢 Production Ready
