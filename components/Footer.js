import NavLink from "./ui/NavLink";
import classes from "./Footer.module.css";
import InstagramIcon from "./icons/InstagramIcon";

function Footer() {
  return (
    <section className={classes.footer}>
      <div className={classes.container}>
        <div>
          <NavLink type="NAV">
            <InstagramIcon />
          </NavLink>
        </div>
        <div>
          <NavLink type="LOGO">Amigos Tenistas&trade;</NavLink>
        </div>
        <div>
          <ul className={classes.list}>
            <li>
              <NavLink type="LOGO">Contato</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
