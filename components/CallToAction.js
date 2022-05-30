import React from "react";

import Heading from "./ui/Heading";
import classes from "./CallToAction.module.css";
import Button from "./ui/Button";
import Card from "./ui/Card";

const CallToAction = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className={`${classes.cta} container`}>
      <Card>
        <div>
          <Heading type="h2" className="margin-bottom-lg">
            Entre para o Ranking
          </Heading>
        </div>
        <div>
          <form action="#">
            <div>
              <label htmlFor="name">Nome Completo:</label>
              <input type="text" placeholder="Geovandame" />
            </div>
            <div>
              <label htmlFor="number">Celular:</label>
              <input type="tel" placeholder="(95) 99999-9999" />
            </div>
            <div>
              <label htmlFor="experience">
                Qual a sua experiência no tênis?
              </label>
              <select name="experience" id="experience">
                <option value="">Selecione uma das opções:</option>
                <option value="none">Nunca joguei</option>
                <option value="1-year">Menos de 1 ano</option>
                <option value="2-year">Entre 1 e 2 anos</option>
                <option value="3-year">Entre 2 e 3 anos</option>
                <option value="3-year-plus">Mais de 3 anos</option>
              </select>
            </div>
            <Button type="full" size="20px" className="margin-top-sm">
              Inscreva-se
            </Button>
          </form>
        </div>
      </Card>
    </section>
  );
});

export default CallToAction;
