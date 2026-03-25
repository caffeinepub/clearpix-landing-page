import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import AIPhotosPage from "./pages/AIPhotosPage";
import DownloadPage from "./pages/DownloadPage";
import { FeaturePage } from "./pages/FeaturePage";
import HomePage from "./pages/HomePage";
import VideoEnhancerPage from "./pages/VideoEnhancerPage";

const PRISMIC = "https://remini.ai/images/prismic";
const LOCAL = "/assets/generated/";

const featureData: Record<
  string,
  {
    name: string;
    headline: string;
    body: string;
    imageBefore: string;
    imageAfter: string;
    sections: {
      tagline: string;
      heading: string;
      body: string;
      image: string;
      imageRight: boolean;
    }[];
  }
> = {
  "unblur-sharpener": {
    name: "Unblur & Sharpener",
    headline: "Fix blurry photos instantly in a single tap",
    body: "Whether it's motion blur, camera shake, or out-of-focus shots — our AI recovers every lost detail with stunning accuracy.",
    imageBefore: `${PRISMIC}/usecase-unblur-before.webp`,
    imageAfter: `${PRISMIC}/usecase-unblur-after.webp`,
    sections: [
      {
        tagline: "How it works",
        heading: "AI that sees what the eye cannot",
        body: "Our deep-learning model analyzes the blur pattern in your photo and reverse-engineers the missing data to reconstruct sharp, clear edges.",
        image: `${PRISMIC}/usecase-unblur-after.webp`,
        imageRight: true,
      },
      {
        tagline: "Use cases",
        heading: "Perfect for portraits, documents, and more",
        body: "From blurry screenshots to out-of-focus wildlife shots — if it's blurry, ClearPix can fix it.",
        image: `${PRISMIC}/usecase-unblur-before.webp`,
        imageRight: false,
      },
      {
        tagline: "Quality",
        heading: "Up to 8× sharper results",
        body: "Our sharpening algorithm goes far beyond traditional filters, delivering results that look natural and detailed — not over-processed.",
        image: `${PRISMIC}/usecase-face-enhancer-after.webp`,
        imageRight: true,
      },
    ],
  },
  denoiser: {
    name: "Denoiser",
    headline: "Remove noise and grain from your photos",
    body: "Dark, grainy, or low-light photos? Our AI denoiser removes unsightly grain while preserving natural textures and detail.",
    imageBefore: `${PRISMIC}/usecase-denoiser-before.webp`,
    imageAfter: `${PRISMIC}/usecase-denoiser-after.webp`,
    sections: [
      {
        tagline: "Technology",
        heading: "Deep learning noise removal",
        body: "Unlike traditional blurring methods, our AI distinguishes between noise and real detail — removing grain without destroying texture.",
        image: `${PRISMIC}/usecase-denoiser-after.webp`,
        imageRight: true,
      },
      {
        tagline: "Night shots",
        heading: "Transform dark, noisy photos",
        body: "Night-time photos will never look grainy again. Our denoiser handles high-ISO noise from any camera or smartphone.",
        image: `${PRISMIC}/usecase-denoiser-before.webp`,
        imageRight: false,
      },
      {
        tagline: "Quality",
        heading: "Studio-clean results",
        body: "Get professional-grade, noise-free images that look like they were shot in perfect lighting conditions.",
        image: `${PRISMIC}/usecase-unblur-after.webp`,
        imageRight: true,
      },
    ],
  },
  "photo-restorer": {
    name: "Old Photos Restorer",
    headline: "Restore old and damaged photos",
    body: "Bring your precious memories back to life. Our AI repairs tears, scratches, fading, and discoloration in vintage photographs.",
    imageBefore: `${PRISMIC}/usecase-photo-restorer-before.webp`,
    imageAfter: `${PRISMIC}/usecase-photo-restorer-after.webp`,
    sections: [
      {
        tagline: "Restoration",
        heading: "Heal cracks, tears, and scratches",
        body: "Our AI identifies damaged areas and intelligently fills them in using context from the surrounding image.",
        image: `${PRISMIC}/usecase-photo-restorer-before.webp`,
        imageRight: true,
      },
      {
        tagline: "Colorization",
        heading: "Bring black & white photos to life",
        body: "Optional AI colorization adds natural, realistic color to black-and-white photos — giving them a modern, vibrant look.",
        image: `${PRISMIC}/usecase-photo-restorer-after.webp`,
        imageRight: false,
      },
      {
        tagline: "Heritage",
        heading: "Preserve family history forever",
        body: "From faded baby photos to century-old portraits, ClearPix restores every photo to print-quality resolution.",
        image: `${PRISMIC}/usecase-face-enhancer-after.webp`,
        imageRight: true,
      },
    ],
  },
  "image-enlarger": {
    name: "Image Enlarger",
    headline: "Upscale your images without losing quality",
    body: "Our super-resolution AI enlarges your images up to 8× while preserving every detail — perfect for printing, web, and professional use.",
    imageBefore: `${PRISMIC}/usecase-image-enlarger-before.webp`,
    imageAfter: `${PRISMIC}/usecase-image-enlarger-after.webp`,
    sections: [
      {
        tagline: "Super Resolution",
        heading: "8× upscaling with zero quality loss",
        body: "Traditional upscaling blurs your image. Our AI adds genuine new detail based on learned patterns from millions of high-res images.",
        image: `${PRISMIC}/usecase-image-enlarger-after.webp`,
        imageRight: true,
      },
      {
        tagline: "Print Ready",
        heading: "Enlarge for large-format printing",
        body: "A4 to billboard — ClearPix prepares your images for any print size with sharp, publication-ready quality.",
        image: `${PRISMIC}/usecase-unblur-after.webp`,
        imageRight: false,
      },
      {
        tagline: "Web & Social",
        heading: "Crisp on every screen",
        body: "Social media, websites, presentations — get sharp images that look perfect at any resolution or pixel density.",
        image: `${PRISMIC}/usecase-image-enlarger-before.webp`,
        imageRight: true,
      },
    ],
  },
  "color-fixer": {
    name: "Color Fixer",
    headline: "Fix and enhance the colors in your photos",
    body: "Faded, washed-out, or color-cast photos restored to their true, vibrant colors with AI color intelligence.",
    imageBefore: `${PRISMIC}/usecase-color-fixer-before.webp`,
    imageAfter: `${PRISMIC}/usecase-color-fixer-after.webp`,
    sections: [
      {
        tagline: "Color Science",
        heading: "AI that understands true color",
        body: "Our model analyzes the original color data and intelligently restores natural, balanced tones — not just boosted saturation.",
        image: `${PRISMIC}/usecase-color-fixer-after.webp`,
        imageRight: true,
      },
      {
        tagline: "Old Photos",
        heading: "Restore faded vintage colors",
        body: "Old photos lose their original color over time. ClearPix brings back the warmth and vibrancy they once had.",
        image: `${PRISMIC}/usecase-color-fixer-before.webp`,
        imageRight: false,
      },
      {
        tagline: "Professional",
        heading: "Consistent, accurate results",
        body: "Whether you need accurate white balance, vibrant landscapes, or natural skin tones — Color Fixer delivers consistent, professional quality.",
        image: `${PRISMIC}/usecase-photo-restorer-after.webp`,
        imageRight: true,
      },
    ],
  },
  "face-enhancer": {
    name: "Face Enhancer",
    headline: "Enhance faces with stunning detail",
    body: "Our AI face enhancer restores every facial feature — eyes, skin, hair — to stunning sharpness and natural beauty.",
    imageBefore: `${PRISMIC}/usecase-face-enhancer-before.webp`,
    imageAfter: `${PRISMIC}/usecase-face-enhancer-after.webp`,
    sections: [
      {
        tagline: "Facial AI",
        heading: "Rebuilt pixel-by-pixel",
        body: "Our AI detects facial landmarks and enhances each region — skin, eyes, lips, hair — separately for natural, realistic results.",
        image: `${PRISMIC}/usecase-face-enhancer-after.webp`,
        imageRight: true,
      },
      {
        tagline: "Portraits",
        heading: "Perfect for every portrait",
        body: "Blurry selfies, low-light portraits, grainy passport photos — Face Enhancer sharpens and beautifies every face.",
        image: `${PRISMIC}/usecase-face-enhancer-before.webp`,
        imageRight: false,
      },
      {
        tagline: "Non-destructive",
        heading: "Enhances without altering identity",
        body: "We enhance, not alter. ClearPix preserves your natural features while simply making them sharper, clearer, and more vibrant.",
        image: `${PRISMIC}/usecase-unblur-after.webp`,
        imageRight: true,
      },
    ],
  },
  "background-enhancer": {
    name: "Background Enhancer",
    headline: "Enhance backgrounds in your photos",
    body: "Sharp subjects deserve sharp backgrounds. Our AI enhances every pixel in your photo background for a professional, polished result.",
    imageBefore: `${LOCAL}landscape-before.dim_600x400.jpg`,
    imageAfter: `${LOCAL}landscape-after.dim_600x400.jpg`,
    sections: [
      {
        tagline: "AI Detection",
        heading: "Intelligent background isolation",
        body: "Our AI separates the subject from the background and applies targeted enhancement without affecting your main subject.",
        image: `${LOCAL}landscape-after.dim_600x400.jpg`,
        imageRight: true,
      },
      {
        tagline: "Architecture",
        heading: "Perfect for real estate and travel",
        body: "Make every property and landscape photo look pristine. Crystal-clear backgrounds that sell.",
        image: `${LOCAL}landscape-before.dim_600x400.jpg`,
        imageRight: false,
      },
      {
        tagline: "Social Media",
        heading: "Stand out in every feed",
        body: "Sharp, detailed backgrounds make your photos pop on Instagram, LinkedIn, and every platform.",
        image: `${PRISMIC}/usecase-unblur-after.webp`,
        imageRight: true,
      },
    ],
  },
  "low-quality-enhancer": {
    name: "Low Quality Enhancer",
    headline: "Transform low-quality photos to HD",
    body: "Old phone camera? Compressed image? Our AI takes even the most degraded photos and turns them into stunning HD quality.",
    imageBefore: `${PRISMIC}/usecase-denoiser-before.webp`,
    imageAfter: `${PRISMIC}/usecase-denoiser-after.webp`,
    sections: [
      {
        tagline: "Upscaling",
        heading: "From 240p to HD in one tap",
        body: "Whether it's a decades-old digital camera or a screenshot — our AI enhances any low-resolution image to HD quality.",
        image: `${PRISMIC}/usecase-face-enhancer-after.webp`,
        imageRight: true,
      },
      {
        tagline: "Compression",
        heading: "Undo compression artifacts",
        body: "JPEG artifacts, over-compressed images, pixelated screenshots — we reconstruct clean, sharp details from even the most compressed files.",
        image: `${PRISMIC}/usecase-denoiser-after.webp`,
        imageRight: false,
      },
      {
        tagline: "All devices",
        heading: "Works on any photo source",
        body: "Old Android, screenshots, scanned documents — if it's low quality, ClearPix can fix it.",
        image: `${PRISMIC}/usecase-unblur-after.webp`,
        imageRight: true,
      },
    ],
  },
};

function Layout() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Routes
const rootRoute = createRootRoute({ component: Layout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aiPhotosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ai-photos",
  component: AIPhotosPage,
});

const downloadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/download",
  component: DownloadPage,
});

const videoEnhancerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/video-enhancer",
  component: VideoEnhancerPage,
});

function makeFeatureRoute(path: string, key: string) {
  return createRoute({
    getParentRoute: () => rootRoute,
    path,
    component: () => {
      const data = featureData[key];
      if (!data)
        return (
          <div className="pt-32 text-center text-white">Page not found</div>
        );
      return <FeaturePage {...data} />;
    },
  });
}

const unblurRoute = makeFeatureRoute("/unblur-sharpener", "unblur-sharpener");
const denoiserRoute = makeFeatureRoute("/denoiser", "denoiser");
const photoRestorerRoute = makeFeatureRoute(
  "/photo-restorer",
  "photo-restorer",
);
const imageEnlargerRoute = makeFeatureRoute(
  "/image-enlarger",
  "image-enlarger",
);
const colorFixerRoute = makeFeatureRoute("/color-fixer", "color-fixer");
const faceEnhancerRoute = makeFeatureRoute("/face-enhancer", "face-enhancer");
const backgroundEnhancerRoute = makeFeatureRoute(
  "/background-enhancer",
  "background-enhancer",
);
const lowQualityEnhancerRoute = makeFeatureRoute(
  "/low-quality-enhancer",
  "low-quality-enhancer",
);

const routeTree = rootRoute.addChildren([
  indexRoute,
  aiPhotosRoute,
  downloadRoute,
  videoEnhancerRoute,
  unblurRoute,
  denoiserRoute,
  photoRestorerRoute,
  imageEnlargerRoute,
  colorFixerRoute,
  faceEnhancerRoute,
  backgroundEnhancerRoute,
  lowQualityEnhancerRoute,
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
