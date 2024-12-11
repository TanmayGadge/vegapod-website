import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";



export const metadata = {
  title: "Vegapod Hyperloop",
  description: "Student club at MIT-WPU",
};

export default function RootLayout({ children }) {
  const pages = [
    { title: "Home", href: "/", id: 1 },
    { title: "About", href: "/about", id: 2 },
    { title: "Members", href: "/members", id: 3 },
    { title: "Achievements", href: "/achievements", id: 4 },
    { title: "Contact", href: "/contact", id: 5 },
    { title: "Gallery", href: "/gallery", id: 6 },
    // { title: "Crowd Funding", href: "/crowd-funding", id: 7 },
    { title: "Sponsors", href: "/sponsors", id: 8 },
  ];
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar pages={pages} />
        <main className="mt-20 ">{children}</main>
        <Footer pages={pages} />
      </body>
    </html>
  );
}
