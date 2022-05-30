import Link from "next/link";
import classes from "./MainHeader.module.css";
import Button from "../ui/Button.js";
import NavLink from "../ui/NavLink";

function MainHeader() {
  return (
    <header className={classes.container}>
      <div>
        <NavLink type="LOGO">Amigos Tenistas&trade;</NavLink>
      </div>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink type="NAV">Eventos</NavLink>
          </li>
          <li>
            <NavLink type="NAV">Regras</NavLink>
          </li>
          <li>
            <Button type="full" size="18px">
              Entre no ranking
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
