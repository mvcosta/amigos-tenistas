import NavLink from "./ui/NavLink";
import classes from "./Footer.module.css";
import InstagramIcon from "./icons/InstagramIcon";

function Footer(props) {
  return (
    <section className={classes.footer}>
      <div className={classes.container}>
        <div>
          <NavLink type="LOGO" onClick={props.onTop} href="#">
            Amigos Tenistas&trade;
          </NavLink>
        </div>
        <div>
          <ul className={classes.list}>
            <li>
              <NavLink type="LOGO" href="#">
                Contato
              </NavLink>
            </li>
            <li>
              <NavLink
                href="https://www.instagram.com/amigos_tenistasbv/"
                type="NAV"
              >
                <InstagramIcon />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
