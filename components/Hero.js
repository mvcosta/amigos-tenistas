import classes from "./Hero.module.css";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

function Hero(props) {
  return (
    <section className={classes.hero}>
      <div className={classes.text}>
        <Heading className={classes.backdrop} type="h1">
          Diversão, novas amizades e evolução do tênis Roraimense
        </Heading>
        <Button
          onClick={props.onCta}
          fill="full"
          size="20px"
          className="margin-right-sm"
        >
          Entre no ranking
        </Button>
        <Button onClick={props.onRanking} fill="outline" size="20px">
          Saiba mais ⬇
        </Button>
      </div>
      <div className={classes["image-box"]}>
        {/* <img
          className={classes.image}
          src="./images/tenista-1.jpg"
          alt="Tenista"
        /> */}
      </div>
    </section>
  );
}

export default Hero;
