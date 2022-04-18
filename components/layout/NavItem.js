import Link from "next/link";

export default function NavItem({ title, url, icon }) {
  return (
    <>
      <Link href={url}>
        <a className="navItem is-flex is-flex-direction-column is-align-items-center is-justify-content-center mx-2 has-text-warning">
          <i className={icon} />
          <span>{title}</span>
        </a>
      </Link>
    </>
  );
}
