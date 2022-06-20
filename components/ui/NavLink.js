import classes from "./NavLink.module.css";

import Link from "next/link";

function NavLink(props) {
  const navLinkClasses = `${classes.nav} ${props.classes}`;
  const logoLinkClasses = `${classes.logo} ${props.classes}`;

  if (props.type === "NAV") {
    return (
      <Link href={props.href}>
        <a className={navLinkClasses}>{props.children}</a>
      </Link>
    );
  }

  if (props.type === "LOGO") {
    return (
      <Link href={props.href}>
        <a onClick={props.onClick} className={logoLinkClasses}>
          {props.children}
        </a>
      </Link>
    );
  }
}

export default NavLink;
