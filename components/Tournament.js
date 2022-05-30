import Heading from "./ui/Heading";

import classes from "./Tournament.module.css";

function Tournament() {
  return (
    <section className={`${classes.tournament} container`}>
      <div className={classes.grid}>
        <div className={classes.text}>
          <div className={classes.secondary}>
            <Heading type="h2" className="margin-bottom-lg">
              Campeonatos
            </Heading>
          </div>
          <p>
            São organizados quatro campeonatos por ano... Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Quaerat unde, assumenda
            repellendus ipsum totam repudiandae facilis hic voluptates atque et
            blanditiis vero officia veritatis porro magnam dolor laboriosam,
            autem sint voluptate similique? Perferendis sapiente eligendi atque
            eos doloremque. Reprehenderit modi, maxime neque blanditiis eligendi
            quam aut cum nam id corrupti.
          </p>
        </div>
        <div className={classes["image-box"]}>
          <img
            className={classes.image}
            src="./images/tenista-2.jpg"
            alt="Tenista"
          />
        </div>
      </div>
    </section>
  );
}

export default Tournament;
