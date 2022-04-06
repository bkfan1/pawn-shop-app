import Link from "next/link";
import { useRouter } from "next/router";

export default function NavItem({ title, url, icon }) {
  const router = useRouter();
  const { pathname } = router;
  return (
    <Link href={url}>
      <a
        className={`navItem is-flex is-flex-direction-column is-align-items-center mx-2   ${
          pathname === "/"
            ? "button is-warning navItemMobileStyles is-justify-content-center"
            : "has-text-warning"
        }`}
      >
        <i className={`${icon}${pathname === url ? "-fill" : ""} is-size-5`} />
        <span>{title}</span>
      </a>
    </Link>
  );
}
