import Link from "next/link";
import styles from "@/ui/navbar.module.css";

export default function NavBar({links}) {
  <nav
    className={styles.shape}
  >
    {links.map((link, index) => {
      return (
        <div className={styles.pageLink} key={index}>
          <Link className="hover:underline underline-offset-4" href={link.href}>
            {link.title}
          </Link>
        </div>
      );
    })}
  </nav>;
}
