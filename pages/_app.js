import { useEffect } from 'react';
import "@/styles/globals.css"
import "@/styles/animation.css"
import "@/styles/cssGrid.css"
import "@/styles/Home.module.css"
import { Analytics } from "@vercel/analytics/react"
import ReactGA from "react-ga4";

import { PortfolioProvider } from "@/contextApi/PortfolioContext"
import ThemeProvider from "@/context/themeContext"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
    if (measurementId) {
      ReactGA.initialize(measurementId);
    } else {
      console.warn('Google Analytics Measurement ID is not set');
    }
  }, []);

  return (
    <PortfolioProvider>
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </PortfolioProvider>
  )
}
