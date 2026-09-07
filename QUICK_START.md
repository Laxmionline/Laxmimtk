# ⚡ Quick Start Guide - 5 Minutes

## **Windows (PowerShell)**

### **Step 1: Open PowerShell**
```powershell
# Navigate to your project folder
cd "d:\Down\LANDING\Landig page\Kushal Matka\New"
```

### **Step 2: Install Dependencies**
```powershell
npm install
```
⏱️ Takes 2-3 minutes (first time only)

### **Step 3: Run Development Server**
```powershell
npm run dev
```

✅ Output will show:
```
  VITE v4.3.0  ready in 123 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

**Open browser → http://localhost:5173**

---

## **Build for Production (Hidden Source Code)**

### **Step 1: Build**
```powershell
npm run build
```

✅ Output:
```
✓ built in 2.34s

dist/
  ├── index.html (2 KB)
  └── assets/
      ├── index-abc123.js (150 KB)
      └── index-def456.css (50 KB)
```

### **Step 2: Test Production Build Locally**
```powershell
npm run preview
```

**Open browser → http://localhost:4173**

---

## **Deploy to Vercel (Free)**

### **Step 1: Create Vercel Account**
Visit: https://vercel.com/signup

### **Step 2: Install Vercel CLI**
```powershell
npm install -g vercel
```

### **Step 3: Deploy**
```powershell
vercel
```

**Follow prompts, then your app is live!** 🎉

---

## **Verify Source Code is Hidden**

### **Method 1: View Page Source**
1. Open deployed site
2. Right-click → **View Page Source**
3. You should see only:
   ```html
   <div id="root"></div>
   <script src="/assets/index-abc123.js"></script>
   ```
4. **No source code visible!** ✅

### **Method 2: Developer Tools**
1. Press **F12**
2. Go to **Sources** tab
3. Click on `index-abc123.js`
4. Code is minified/obfuscated ✅

---

## **File Structure After Build**

```
your-project/
├── src/              ← Source files (hidden after build)
├── dist/             ← Built files (deploy this!)
│   ├── index.html    ← Minified HTML
│   └── assets/       ← Minified JS & CSS
├── node_modules/     ← Dependencies (don't deploy)
├── package.json
└── vite.config.js
```

---

## **Troubleshooting**

### **Error: npm not found**
```powershell
# Install Node.js from https://nodejs.org/
# Then restart PowerShell
```

### **Port 5173 already in use**
```powershell
# Use different port
npm run dev -- --port 3000
```

### **Build errors**
```powershell
# Clear cache and rebuild
rm -r node_modules
npm install
npm run build
```

---

## **Common Commands**

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run build -- --watch` | Watch mode (rebuild on change) |

---

## **Next Steps**

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Check http://localhost:5173
4. ✅ Run `npm run build`
5. ✅ Deploy to Vercel/Netlify
6. ✅ Share your live URL!

---

## **Support**

Any issues? Follow these steps:

1. **Check Node version**
   ```powershell
   node --version  # Should be 16+
   ```

2. **Clear cache**
   ```powershell
   rm -r node_modules dist package-lock.json
   npm install
   ```

3. **Check logs**
   ```powershell
   npm run build  # Shows detailed errors
   ```

---

**You're all set!** 🚀

Your landing page source code is now hidden just like laxmi2.vercel.app!
