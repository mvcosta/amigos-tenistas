import classes from "./CallToActionModal.module.css";
import Button from "./ui/Button";

import Modal from "./ui/Modal";

const CallToActionModal = (props) => {
  const didSubmit = !props.error && !props.isLoading;

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.ctam}>
        {props.isLoading && <p>Realizando inscrição...</p>}
        {props.error && (
          <div>
            <p>
              Desculpe, não conseguimos enviar sua inscrição no momento. Tente
              novamente mais tarde.
            </p>
            <p>Erro: {props.error}!</p>
          </div>
        )}
        {didSubmit && (
          <div>
            <p>Inscrição realizada com sucesso!</p>
            <p>Obrigado por se inscrever no Ranking dos Amigos Tenistas!</p>
          </div>
        )}
        {!props.isLoading && (
          <Button
            type="BTN"
            fill="full"
            size="20px"
            className="margin-top-sm"
            onClick={props.onClose}
          >
            Fechar
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default CallToActionModal;
