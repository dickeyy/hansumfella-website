import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleAnalytics } from "nextjs-google-analytics";
import { hog } from "../lib/posthog"
import { useEffect } from 'react';


export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (hog) hog // initialize analytics
  })

  return (
    <>
      {/* <GoogleAnalytics trackPageViews/> */}
      <Component {...pageProps} />
    </>
  )
}
