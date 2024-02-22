import type { Metadata } from "next";
import { Rubik as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans"
});

export const metadata: Metadata = {
    metadataBase: new URL("https://hansumfella.com/"),
    title: "Hansumfella Merch",
    description: "The most handsome fella on Twitch",
    keywords:
        "Hansumfella, handsome, fella, merch, merchandise, shirt, socks, hoodie, flag, website, twitch, content, creator, hansum, dickey, youtube, youtuber, streamer, socks, hansumfellalive, tiktok, handsome guy, hansum guy",
    robots: "index, follow",
    openGraph: {
        siteName: "Hansumfella Merch",
        type: "website",
        locale: "en_US",
        url: "https://hansumfella.com/",
        title: "Hansumfella Merch",
        description: "The most handsome fella on Twitch",
        images: [
            {
                url: "https://hansumfella.com/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Hansumfella Merch"
            }
        ]
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Toaster richColors />
                </ThemeProvider>
            </body>
        </html>
    );
}
