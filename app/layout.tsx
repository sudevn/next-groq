import { Viewport } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Groq AI Chatbot",
  description: "Groq AI Chatbot - Made using Next.js 14",

  manifest: "/manifest.json",

  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};
export const viewport: Viewport = {
  themeColor: "#d03e09",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + " overflow-hidden"}>
        <div className="relative h-full w-full bg-stone-900 overflow-hidden">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,105,12,.15),rgba(255,255,255,0))] opacity-0 md:opacity-100"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,105,12,.15),rgba(255,255,255,0))]"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
