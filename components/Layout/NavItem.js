import Link from "next/link"

export default function NavItem({title, url, icon}){

    return(
        <Link href={url}>
            <a className="navItem is-flex is-flex-direction-column is-align-items-center mx-2  has-text-warning">
                <i className={`${icon} is-size-5`}/>
                <span>{title}</span>
            </a>
        </Link>
    )

}