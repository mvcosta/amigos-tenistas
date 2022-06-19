import classes from "./Button.module.css";

function Button(props) {
  const btnFontSize = `btn--${props.size}`;
  const btnFill = `btn--${props.fill}`;
  const btnLinkClasses = `${classes["btn"]} ${classes[btnFill]} 
  ${classes[btnFontSize]} ${props.className}`;
  const btnClasses = `${classes.button} ${classes[btnFontSize]}`;

  if (props.type === "BTN" && props.onClick) {
    return (
      <button onClick={props.onClick} className={btnClasses}>
        {props.children}
      </button>
    );
  }

  if (props.type === "BTN") {
    return <button className={btnClasses}>{props.children}</button>;
  }

  return (
    <a onClick={props.onClick} href="" className={btnLinkClasses}>
      {props.children}
    </a>
  );
}

export default Button;
