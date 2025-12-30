import { Installation } from "./components/installation";
import { Footer } from "./components/footer";
import { Demo } from "./components/demo";
import { Hero } from "./components/hero";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Error Narrator",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
    description:
      "Audio-first JavaScript debugging tool that narrates errors in real-time with AI-powered explanations.",
    softwareVersion: "2.0.0",
    datePublished: "2024",
    author: {
      "@type": "Organization",
      name: "Error Narrator Team",
    },
    url: "https://error-narrator.dev",
    downloadUrl: "https://www.npmjs.com/package/error-narrator",
    installUrl: "https://www.npmjs.com/package/error-narrator",
    screenshot: "https://error-narrator.dev/og-image.png",
    featureList: [
      "Text-to-speech error narration",
      "Real-time error monitoring",
      "AI-powered error explanations via Gemini",
      "Zero dependencies",
      "React hooks integration",
      "Customizable voice settings",
    ],
    keywords:
      "javascript debugging, text to speech, error handling, react, npm package, AI debugging",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full min-h-screen bg-black text-white selection:bg-white selection:text-black">
        {/* Navigation Overlay */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 mix-blend-difference pointer-events-none">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <span className="font-bold tracking-tighter text-xl pointer-events-auto cursor-pointer text-white">
              error-narrator
            </span>
            <a
              href="https://www.npmjs.com/package/error-narrator"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block pointer-events-auto text-sm font-mono hover:underline text-white"
            >
              v2.0.0
            </a>
          </div>
        </nav>

        <Hero />
        <Demo />
        <Installation />
        <Footer />
      </main>
    </>
  );
}
