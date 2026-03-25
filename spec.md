# ClearPix Landing Page

## Current State
The site has all 11 pages with correct structure, routing, dark theme, and Plus Jakarta Sans font. However:
- Feature page sections use CSS gradient divs instead of real images
- HomePage AI Photos and Video sections use generated placeholder images
- Solutions carousel uses generated placeholder images
- AI Photos page uses CSS gradient cards for style showcase
- Feature page heroes use generated placeholder images for sliders
- The PiXimperfect influencer testimonial section from Remini is missing

## Requested Changes (Diff)

### Add
- PiXimperfect influencer quote section to HomePage (exact match to Remini)
- Remini CDN images as real `<img>` in all feature page alternating sections
- Real API integrations image on feature pages (`/images/prismic/api-integrations.webp`)

### Modify
- App.tsx: Replace all `gradientBefore`/`gradientAfter` in featureData with `imageBefore`/`imageAfter` using Remini CDN URLs (`https://remini.ai/images/prismic/usecase-*-before/after.webp`). Replace all section `gradient` fields with `image` fields using real Remini CDN image URLs.
- FeaturePage.tsx: Update FeatureSection interface to use `image: string` instead of `gradient: string`. Render `<img>` instead of gradient div in alternating sections.
- HomePage.tsx: Replace generated image src with Remini CDN URLs for AI Photos (`/images/prismic/homepage-ai-photos.webp`), Video Enhancer (`/images/prismic/homepage-video-enhancer.webp`), Solutions carousel (`usecase-*-before/after.webp`), and hero tabs (`usecase-*-before/after.webp`). Add PiXimperfect section above ReviewsSection.
- AIPhotosPage.tsx: Replace gradient style showcase cards with real Remini AI Photos images. Replace hero with real image. Replace how-it-works section image with real Remini image.

### Remove
- All CSS gradient placeholder backgrounds used as fake images
- All references to generated image files that were just gradient placeholders

## Implementation Plan
1. Update FeaturePage interface + rendering (gradient -> image)
2. Update App.tsx featureData with all real Remini CDN image URLs
3. Update HomePage.tsx with Remini CDN images + PiXimperfect section
4. Update AIPhotosPage.tsx with Remini CDN images for hero, how-it-works steps, and style showcase

## Remini CDN Image URLs (reference)
Base: `https://remini.ai/images/prismic/`

Usecase before/after:
- usecase-unblur-before.webp / usecase-unblur-after.webp
- usecase-photo-restorer-before.webp / usecase-photo-restorer-after.webp
- usecase-denoiser-before.webp / usecase-denoiser-after.webp
- usecase-face-enhancer-before.webp / usecase-face-enhancer-after.webp
- usecase-color-fixer-before.webp / usecase-color-fixer-after.webp
- usecase-image-enlarger-before.webp / usecase-image-enlarger-after.webp

Feature page specific:
- unblur-sharpener-hero-before.webp / unblur-sharpener-hero-after.webp
- unblur-sharpener-crisp-images.webp
- unblur-sharpener-details.webp
- unblur-sharpener-super-sharp.webp
- api-integrations.webp

Homepage sections:
- homepage-ai-photos.webp
- homepage-video-enhancer.webp
- PiXimperfect.png / PiXimperfect-logo.png

AI Photos:
- ai-photos-hero-desktop.webp
- ai-photos-train-ai.webp
- ai-photos-pick-a-model.webp
- ai-photos-generate.webp
- ai-photos-curriculum.webp
- ai-photos-baby-me.webp
- ai-photos-maternity.webp
- ai-photos-photoshoot.webp
- ai-photos-mobileapp-desktop.webp

Industry icons:
- icon-smartphone.png / icon-old-lady.png / icon-paint.png / icon-shopping-bag.png / icon-books.png / icon-sunset.png
