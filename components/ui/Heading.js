import classes from "./Heading.module.css";

function Heading(props) {
  if (props.type === "h1") {
    return (
      <h1 className={`${classes.primary} ${props.className}`}>
        {props.children}
      </h1>
    );
  }
  if (props.type === "h2") {
    return (
      <h2 className={`${classes.secondary} ${props.className}`}>
        {props.children}
      </h2>
    );
  }
  if (props.type === "h3") {
    return (
      <h3 className={`${classes.tertiary} ${props.className}`}>
        {props.children}
      </h3>
    );
  }
}

export default Heading;
