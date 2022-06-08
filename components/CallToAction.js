import React, { useRef } from "react";

import Heading from "./ui/Heading";
import classes from "./CallToAction.module.css";
import Button from "./ui/Button";
import Card from "./ui/Card";
import useInput from "../hooks/use-input";

const CallToAction = React.forwardRef((props, ref) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredNumber,
    isValid: enteredNumberIsValid,
    hasError: numberInputHasError,
    valueChangeHandler: numberChangedHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetNumberInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid && enteredNumberIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      console.log("Form Invalid!");
      console.log(enteredNameIsValid, enteredNumberIsValid);
      return;
    }
    console.log("Submitted");
    console.log(enteredName, enteredNumber);
    resetNumberInput();
    resetNameInput();
  };

  return (
    <section ref={ref} className={`${classes.cta} container`}>
      <Card>
        <div>
          <Heading type="h2" className="margin-bottom-md">
            Entre no Ranking
          </Heading>
        </div>
        <div>
          <form onSubmit={formSubmissionHandler}>
            <div>
              <label
                htmlFor="name"
                className={nameInputHasError ? classes.error : ""}
              >
                Atleta
              </label>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                value={enteredName}
                onChange={nameChangedHandler}
                onBlur={nameBlurHandler}
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className={numberInputHasError ? classes.error : ""}
              >
                Celular
              </label>
              <input
                type="tel"
                placeholder="(95) 99999-9999"
                value={enteredNumber}
                onChange={numberChangedHandler}
                onBlur={numberBlurHandler}
              />
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
            <button>Submit</button>
          </form>
        </div>
      </Card>
    </section>
  );
});

export default CallToAction;
