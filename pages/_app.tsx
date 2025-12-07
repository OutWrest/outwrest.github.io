import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
    >
      <div className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen flex flex-col`}>
        <a
          href="#main"
          className="fixed p-2 top-0 left-0 -translate-y-full focus:translate-y-0 z-50 bg-white dark:bg-gray-900"
        >
          Skip to main content
        </a>
        <div className="flex flex-col max-w-5xl mx-auto w-full px-4 grow">
          <Header />
          <main id="main" className="grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
