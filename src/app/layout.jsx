import "./globals.css";
import { urbanist } from "./ui/fonts";
import Link from "next/link";
import styles from "@/ui/navbar.module.css";

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
        className={`${urbanist.className} antialiased`}
      >
        <nav className={styles.navbar}>
          {links.map((link, index) => {
            return (
              <div className={styles.pageLink}>
                <Link className={`hover:underline underline-offset-4 ${urbanist.className}`} href={link.href}>{link.title}</Link>
              </div>
            );
          })}
        </nav>
        {children}
      </body>
    </html>
  );
}
