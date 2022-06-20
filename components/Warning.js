import classes from "./Warning.module.css";
import Heading from "./ui/Heading";

function Soon(props) {
  return (
    <section className={classes.warning}>
      <div className={classes.text}>
        <Heading className={classes.backdrop} type="h1">
          {props.text}
        </Heading>
      </div>
    </section>
  );
}

export default Soon;
