# Deployment Guide 🚀

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy from Local
```bash
# Install Vercel CLI if not already installed
npm install -g vercel

# Deploy from your portfolio directory
cd /Users/emji/.openclaw/workspace/portfolio-emji
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Choose your settings
# - Deploy!
```

### Option 2: Deploy from GitHub
1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "feat: Enhanced portfolio for client acquisition"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Git Repository"
   - Select your portfolio repo
   - Deploy automatically!

## Environment Setup

### Required Environment Variables
Create `.env.local` file:
```bash
# Sanity CMS (if using)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Contact Form (optional)
NEXT_PUBLIC_CONTACT_EMAIL=hello@emjidevimanus.com

# Analytics (recommended)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## Custom Domain Setup

### 1. Purchase Domain (if needed)
- Recommended: `emjidevimanus.com` or `emjidev.com`
- Or use existing domain

### 2. Configure DNS
Point your domain to Vercel:
```
Type: CNAME
Name: www (or @)
Value: cname.vercel-dns.com
```

### 3. Add Domain in Vercel
- Go to Project Settings → Domains
- Add your custom domain
- Verify DNS configuration

## Performance Optimization

### Build Optimization
```bash
# Check build locally first
npm run build
npm run start

# Ensure no errors before deploying
npm run lint
npm run type-check
```

### Image Optimization
- Add real project screenshots to `/public/images/`
- Use Next.js Image component for automatic optimization
- Compress images before uploading

## SEO Setup

### 1. Update Meta Tags
Edit `pages/index.tsx`:
```tsx
<Head>
  <title>Emji Devimanus - AI Solutions Architect | 400% Revenue Growth</title>
  <meta 
    name="description" 
    content="AI Solutions Architect specializing in restaurant automation. Achieved 400% revenue growth for L'Osteria. Get €250+/month results with proven AI solutions." 
  />
  <meta name="keywords" content="AI Solutions, Restaurant Automation, Test Automation, Belgium, Revenue Growth, ADA Systems" />
  
  <!-- Open Graph for social sharing -->
  <meta property="og:title" content="Emji Devimanus - AI Solutions Architect" />
  <meta property="og:description" content="Proven AI solutions driving 400% revenue growth. Transform your business with automated systems." />
  <meta property="og:image" content="/images/social-preview.jpg" />
  <meta property="og:url" content="https://emjidevimanus.com" />
  
  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Emji Devimanus - AI Solutions Architect" />
  <meta name="twitter:description" content="400% revenue growth through AI automation" />
  <meta name="twitter:image" content="/images/social-preview.jpg" />
</Head>
```

### 2. Add Structured Data
Add to `pages/index.tsx`:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Emji Devimanus",
      "jobTitle": "AI Solutions Architect",
      "url": "https://emjidevimanus.com",
      "email": "hello@emjidevimanus.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Belgium"
      },
      "offers": {
        "@type": "Service",
        "name": "AI Restaurant Automation",
        "description": "Complete AI platform for restaurants driving 400% revenue growth"
      }
    })
  }}
/>
```

## Analytics & Tracking

### Google Analytics 4
Add to `pages/_document.tsx`:
```tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

## Monitoring & Maintenance

### Performance Monitoring
- Set up Vercel Analytics
- Monitor Core Web Vitals
- Track conversion rates

### Content Updates
Regular updates to maintain relevance:
- Add new project case studies
- Update pricing as needed
- Refresh testimonials
- Blog posts for SEO

## Security Headers

Add to `next.config.js`:
```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}
```

## Final Checklist Before Going Live

### ✅ Content Review
- [ ] All contact information is correct
- [ ] Pricing is up to date
- [ ] Testimonials are accurate
- [ ] Project descriptions are current
- [ ] No placeholder content remains

### ✅ Technical Check
- [ ] All forms work correctly
- [ ] Mobile responsiveness tested
- [ ] Page load speed optimized
- [ ] All links work properly
- [ ] No console errors

### ✅ SEO & Marketing
- [ ] Meta tags optimized
- [ ] Social sharing images added
- [ ] Google Analytics configured
- [ ] Sitemap submitted to Google
- [ ] Social media profiles updated with new URL

---

## 🎯 Launch Strategy

### Immediate (Week 1):
1. Deploy to production domain
2. Update LinkedIn/social profiles with new URL
3. Share with existing network
4. Submit to relevant directories

### Short-term (Month 1):
1. Start content marketing (LinkedIn posts)
2. Reach out to potential clients
3. Ask L'Osteria for public testimonial/case study
4. Optimize based on analytics

### Long-term (Month 2+):
1. SEO content creation
2. Paid advertising campaigns
3. Speaking engagements/networking
4. Partner referral programs

---

**Your professional AI Solutions Architect portfolio is ready to drive serious business results! 🚀**