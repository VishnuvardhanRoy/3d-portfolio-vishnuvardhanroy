# 🚀 Deployment Guide

## Quick Deploy to Vercel

The fastest way to deploy your 3D portfolio is with **Vercel** (recommended).

### Step 1: Connect GitHub to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **New Project**
3. Select **Import Git Repository**
4. Search for `3d-portfolio`
5. Click **Import**

### Step 2: Configure Project
- **Framework Preset**: Vite
- **Root Directory**: ./
- **Environment Variables**: Leave empty (use defaults)

### Step 3: Deploy
Click **Deploy** and Vercel will automatically:
- Build your project
- Optimize assets
- Deploy to a global CDN
- Provide a live URL

**Your portfolio will be live in < 2 minutes!**

---

## Deploy to Netlify

Alternatively, deploy to **Netlify**:

1. Go to [netlify.com](https://netlify.com)
2. Click **New site from Git**
3. Select GitHub and authorize
4. Choose `3d-portfolio` repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy site**

---

## Deploy to GitHub Pages

For a free GitHub Pages deployment:

1. Update `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/3d-portfolio/',
     // ... rest of config
   });
   ```

2. Push to GitHub and enable GitHub Pages:
   - Go to Settings → Pages
   - Select `main` branch as source
   - Your site will be at: `https://VishnuvardhanRoy.github.io/3d-portfolio`

---

## Custom Domain Setup

To use a custom domain (vercel.com or netlify.com):

1. **Buy a domain** from Namecheap, GoDaddy, or Route53
2. **Add domain** to your deployment platform
3. **Update DNS records** (platform provides instructions)
4. **Wait 24-48 hours** for propagation

---

## Environment Variables

Create a `.env` file (copy from `.env.example`):

```bash
VITE_APP_TITLE=3D Portfolio - Vishnuvardhan Roy
```

---

## Post-Deployment Checklist

- [ ] Portfolio loads without errors
- [ ] 3D scene renders smoothly
- [ ] Mouse controls work (OrbitControls)
- [ ] Mobile responsive design works
- [ ] All project cards display correctly
- [ ] Performance is smooth (check Lighthouse)
- [ ] Share on LinkedIn, Twitter, GitHub

---

## Performance Tips

1. **Enable Compression**: Vercel/Netlify do this automatically
2. **Monitor Bundle Size**:
   ```bash
   npm run build -- --report
   ```
3. **Optimize Images**: Use WebP format
4. **Lazy Load Components**: Already implemented with Suspense

---

## Troubleshooting

**Build fails?**
- Check `npm install` works locally
- Verify all imports are correct
- Check Node version (16+)

**3D scene not loading?**
- Check browser console for errors
- Verify WebGL is enabled
- Check internet connection

**Slow performance?**
- Clear browser cache
- Check network throttling in DevTools
- Reduce geometry complexity if needed

---

## Share Your Portfolio

✨ **Once deployed, share with:**
- LinkedIn:
```
Just launched my interactive 3D portfolio! 
Built with React, Three.js, and React Three Fiber. 
Check it out: [your-url] 
#ReactJS #ThreeJS #WebDevelopment #Portfolio
```
- Twitter/X, GitHub, email, etc.

---

## Need Help?

- 📖 [Vercel Docs](https://vercel.com/docs)
- 📖 [Netlify Docs](https://docs.netlify.com)
- 💬 [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
