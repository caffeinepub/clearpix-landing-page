# ClearPix Landing Page

## Current State
- Multi-page landing site using locally-generated placeholder images for all before/after sliders
- Logo uses old path: `/assets/uploads/app_logo_foreground-019d23e0-f255-765b-9983-11d350cc5503-1.png`
- Feature toggles (Face Enhance, Auto Color, Face Glow, Background Enhance) update state but don't change the before/after image
- Hero product demo slider uses same static generated images regardless of toggle state
- Favicon points to a generated file
- FeaturePage shows "100M+ happy users" (wrong)

## Requested Changes (Diff)

### Add
- Toggle-driven image swapping: each feature toggle combination maps to a different "after" image URL so toggling on/off visually updates the before/after result (like remini.ai)
- Portrait/Landscape/Old Photo per-tab toggle image sets

### Modify
- All logo references updated to new logo path: `/assets/uploads/app_logo_foreground-019d2426-c686-71cf-adab-6b85833910d7-1.png`
- Favicon in index.html updated to use new logo directly (the uploaded PNG, not a generated favicon)
- Hero product demo before/after images: use Remini's actual CDN image URLs (`https://remini.ai/images/product-demo/{portrait|landscape|old-photo}/before.webp` and `after.webp`)
- Solutions section before/after: use Remini's actual CDN URLs (`https://remini.ai/images/prismic/usecase-{name}-before.webp` and `after.webp`)
- Industry icons: use Remini's actual icon URLs (`https://remini.ai/images/prismic/icon-{name}.png`)
- AI Photos section image: use `https://remini.ai/images/prismic/homepage-ai-photos.webp`
- Video Enhancer section image: use `https://remini.ai/images/prismic/homepage-video-enhancer.webp`
- Feature toggle logic: when toggled, swap the "after" image to one that reflects the active feature(s):
  - Face Enhance ON: show face-enhanced portrait result
  - Auto Color ON: show color-corrected result 
  - Face Glow ON: show face glow result
  - Background Enhance ON: show background-enhanced result
  - Each tab (portrait/landscape/old-photo) has its own set of before + feature-specific after images
- FeaturePage: fix "100M+ happy users" → "20K+ happy users"

### Remove
- Old logo path references everywhere

## Implementation Plan
1. Update all 5 logo path occurrences (Navbar, Footer, DownloadCTA, DownloadPage, HomePage) to new path
2. Update index.html favicon href to `/assets/uploads/app_logo_foreground-019d2426-c686-71cf-adab-6b85833910d7-1.png`
3. In HomePage.tsx: replace IMAGES object with Remini CDN URLs for portrait/landscape/oldphoto before/after
4. Implement toggle-driven image swapping: create a mapping of feature combo → after image URL; active features determine which after image is displayed per tab
5. Update solutions array to use Remini CDN URLs for all 6 solution cards
6. Update industry icons to use Remini CDN icon URLs (or keep emoji as fallback)
7. Update AI Photos and Video Enhancer section images to Remini CDN URLs
8. Fix FeaturePage "100M+" stat to "20K+"
