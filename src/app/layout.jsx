import localFont from "next/font/local";
import "./globals.css";
import { inter } from "./ui/fonts";
import { FloatingDock } from "./ui/floating-dock";
import '../../public/home-icon.svg';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Vegapod Hyperloop",
  description: "The official website of vegapod hyperloop",
};

export default function RootLayout({ children }) {
  let links = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contacts", href: "/contacts" },
    { title: "Crowd Funding", href: "/crowd-funding" },
    { title: "Gallery", href: "/gallery" },
    { title: "Partners", href: "/partner" },
    { title: "Sponsors", href: "/sponsors" },
    { title: "Team Intro", href: "/team-intro" },
  ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <FloatingDock items={links} />
        {children}
      </body>
    </html>
  );
}
