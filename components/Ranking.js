import React from "react";

import classes from "./Ranking.module.css";

import Heading from "./ui/Heading";

const Ranking = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className={`${classes.ranking} container`}>
      <div className={classes.secondary}>
        <Heading type="h2">Como o ranking funciona:</Heading>
      </div>
      <div className="grid grid--4-cols">
        <div>
          <p className={classes.number}>01</p>
          <Heading type="h3">Entre para o ranking</Heading>
          <p className={classes.text}>
            Você será avaliado* e cadastrado no App{" "}
            <a href="https://letzplay.me/home" className="link">
              Lets Play
            </a>{" "}
            em uma de nossas três categorias (A+, A1 ou A2) de acordo com seu
            nível.
          </p>
        </div>
        <div>
          <p className={classes.number}>02</p>
          <Heading type="h3">Participe do sorteio </Heading>
          <p className={classes.text}>
            Os sorteios são realizados nos dias 10, 20 e 30 de cada mês de forma
            automática pelo app de acordo sua posição ranking.
          </p>
        </div>
        <div>
          <p className={classes.number}>03</p>
          <Heading type="h3">Marque o jogo</Heading>
          <p className={classes.text}>
            O dia, horário e local dos jogos cabe a cada jogador, devendo o jogo
            deve ser realizado antes do próximo sorteio.
          </p>
        </div>
        <div>
          <p className={classes.number}>04</p>
          <Heading type="h3">Informe o resultado</Heading>
          <p className={classes.text}>
            Após a realização do jogo, os jogadares informam o resultado no app.
            Depois, é só aguardar a próxima rodada.
          </p>
        </div>
      </div>
      <p className={classes.obs}>
        *Caso necessário, um de nossos diretores irá jogar 1 set para realizar a
        avaliação de nível. Nesse jogo, o interessado em entrar no rank não
        deverá usar de nenhum artifício para mascarar seu nível.
      </p>
    </section>
  );
});

export default Ranking;
