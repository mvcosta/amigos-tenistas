import classes from "./Button.module.css";

function Button(props) {
  const btnFontSize = `btn--${props.size}`;
  const btnType = `btn--${props.type}`;
  const btnClasses = `${classes.btn} ${classes[btnType]} ${classes[btnFontSize]} ${props.className}`;
  return (
    <a href="#" className={btnClasses}>
      {props.children}
    </a>
  );
}

export default Button;
