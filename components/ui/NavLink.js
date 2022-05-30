import classes from "./NavLink.module.css";

function NavLink(props) {
  const navLinkClasses = `${classes.nav} ${props.classes}`;
  const logoLinkClasses = `${classes.logo} ${props.classes}`;

  if (props.type === "NAV") {
    return (
      <a href={props.href} className={navLinkClasses}>
        {props.children}
      </a>
    );
  }

  if (props.type === "LOGO") {
    return (
      <a href="#" className={logoLinkClasses}>
        {props.children}
      </a>
    );
  }
}

export default NavLink;
