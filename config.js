// ============================================
// CHOLON.VN LIVE SHOPPING - CONFIGURATION
// ============================================
// Update this file to change video, products, and settings
// No need to edit index.html!

// ============================================
// 1. VIDEO SETTINGS
// ============================================
const CONFIG = {
    // CHANGE THIS when going live!
    // For YouTube: https://www.youtube.com/embed/VIDEO_ID
    // For Facebook Live: https://www.facebook.com/plugins/video.php?href=YOUR_FACEBOOK_LIVE_URL
    videoUrl: "https://www.youtube.com/embed/mDtirXB6ShA",
    
    // Contact info
    hotline: "1900.2628",
    
    // Google Sheets for lead capture
    googleSheetUrl: "https://script.google.com/macros/s/AKfycbwKv7j9LyBqar7axkLzSu2bK4z_SoVF2r-9_8iUxCv1N5aVKJJGrM1vssxiGM4nRTWDyQ/exec"
};

// ============================================
// 2. PRODUCT DATA
// ============================================
// Add/remove/edit products here
// Featured products (first 3) will show in the carousel
const PRODUCTS = [
    {
        id: 1,
        name: "Bàn Ủi Hơi Nước Philips DST2030/90",
        price: "1,029,000₫",
        image: "https://cdn.shopify.com/s/files/1/0652/7483/9139/files/ban-ui-hoi-nuoc-philips-dst203090-multi-0_450_png.webp?v=1761726766",
        url: "https://dienmaycholon.com/ban-ui-hoi-nuoc-philips-dst2030-90"
    },
    {
        id: 2,
        name: "Siêu sắc thuốc 3.2 lít Vạn An VA 58-HM",
        price: "550,000₫",
        image: "https://cdn.shopify.com/s/files/1/0652/7483/9139/files/sieu-sac-thuoc-32-lit-van-an-va-58hm-multi-0_450_png.webp?v=1761726765",
        url: "https://dienmaycholon.com/sieu-sac-thuoc-van-an"
    },
    {
        id: 3,
        name: "Bình Đun Siêu Tốc Kangaroo KGWK18I2 1.8 Lít",
        price: "270,000₫",
        image: "https://cdn.shopify.com/s/files/1/0652/7483/9139/files/binh-dun-sieu-toc-kangaroo-kgwk18i2-18-lit-multi-0_450_png.webp?v=1761726764",
        url: "https://dienmaycholon.com/binh-dun-kangaroo"
    },
    {
        id: 4,
        name: "Ấm Siêu Tốc Inox Sunhouse SHD1057",
        price: "195,000₫",
        image: "https://cdn.shopify.com/s/files/1/0652/7483/9139/files/am-sieu-toc-inox-sunhouse-shd1057-multi-0_450_png.webp?v=1761726763",
        url: "https://dienmaycholon.com/am-sieu-toc-sunhouse"
    },
    {
        id: 5,
        name: "Bàn Chải Đánh Răng Điện USMILE P1",
        price: "1,490,000₫",
        image: "https://cdn.shopify.com/s/files/1/0652/7483/9139/files/ban-chai-danh-rang-dien-usmile-p1-mau-xanh-multi-0_450_png.webp?v=1761726762",
        url: "https://dienmaycholon.com/ban-chai-usmile"
    },
    {
        id: 6,
        name: "Bàn ủi Bluestone DIB-3726 1300W",
        price: "369,000₫",
        image: "https://cdn.shopify.com/s/files/1/0652/7483/9139/files/ban-ui-bluestone-dib3726-1300w-multi-0_450_png.webp?v=1761726762",
        url: "https://dienmaycholon.com/ban-ui-bluestone"
    },
    {
        id: 7,
        name: "Bàn Ủi Hơi Nước Cầm Tay Bear GTJ-B10S1",
        price: "728,000₫",
        image: "https://cdn.shopify.com/s/files/1/0652/7483/9139/files/ban-ui-hoi-nuoc-cam-tay-bear-gtjb10s1-hang-quoc-te-ban-tieng-anh-multi-0_450_png.webp?v=1761726760",
        url: "https://dienmaycholon.com/ban-ui-bear"
    },
    {
        id: 8,
        name: "Bàn ủi hơi nước Sunhouse SHD2065 1600W",
        price: "385,000₫",
        image: "https://cdn.shopify.com/s/files/1/0652/7483/9139/files/ban-ui-hoi-nuoc-sunhouse-shd2065-1600w-multi-0_450_png.webp?v=1761726760",
        url: "https://dienmaycholon.com/ban-ui-sunhouse"
    }
];

// ============================================
// 3. HOW TO USE THIS FILE
// ============================================
/*

QUICK START GUIDE:

1. TO CHANGE VIDEO (when going live):
   - Update CONFIG.videoUrl above
   - For YouTube Live: Get the video ID from your stream URL
   - For Facebook Live: Use Facebook's embed URL

2. TO ADD/EDIT PRODUCTS:
   - Copy a product block above
   - Change id, name, price, image, url
   - Save file and push to GitHub

3. TO CHANGE HOTLINE:
   - Update CONFIG.hotline

4. FEATURED PRODUCTS (carousel):
   - First 3 products in the PRODUCTS array
   - Reorder products to change what shows in carousel

EXAMPLE - Adding a new product:

{
    id: 9,
    name: "Máy Lọc Nước ABC 123",
    price: "5,990,000₫",
    image: "https://your-image-url.com/image.jpg",
    url: "https://dienmaycholon.com/product-link"
},

*/