import React from "react";

import classes from "./MainHeader.module.css";

import Button from "../ui/Button.js";
import NavLink from "../ui/NavLink";

const MainHeader = React.forwardRef((props, ref) => {
  return (
    <header ref={ref} className={classes.container}>
      <div>
        <NavLink type="LOGO" href="#">
          Amigos Tenistas&trade;
        </NavLink>
      </div>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink href="#" type="NAV">
              Eventos
            </NavLink>
          </li>
          <li>
            <NavLink href="#" type="NAV">
              Regras
            </NavLink>
          </li>
          <li>
            <Button onClick={props.onCta} fill="full" size="18px">
              Entre no ranking
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default MainHeader;
