import ReactDOM from "react-dom";
import { useContext } from "react";

import { CardContext } from "../store/card-context";
import { newCardList } from "../card";

import img from "../assets/images/web.svg";

import classes from "./EndgameModal.module.css";

const Backdrop = ({ onClick }: { onClick: () => void }) => {
	return <div className={classes.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = ({
	onClick,
   onClose
}: {
	onClick: () => void;
	onClose: () => void;
}) => {
	return (
		<div className={classes.modal}>
			<img className={classes.web} src={img} alt="Cobeweb" onClick={onClose} />
			<h1 className={classes["modal-title"]}>BUUH!!</h1>
			<p>
				Parabéns, você terminou esse jogo da memória. Experimente jogar uma
				outra dificuldade ou jogue na mesma novamente.
			</p>
			<button onClick={onClick}>JOGAR NOVAMENTE</button>
		</div>
	);
};

const portalElement = document.getElementById("overlays");

export const EndgameModal = () => {
	const cardCtx = useContext(CardContext);

	const closeModalHandler = () => {
		cardCtx.onGameOverFalse();
	};

	const newGameHandler = () => {
		setTimeout(() => closeModalHandler(), 300);
		cardCtx.onCardsUpdate(newCardList());
	};

	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={closeModalHandler} />,
				portalElement!
			)}
			{ReactDOM.createPortal(
				<ModalOverlay onClick={newGameHandler} onClose={closeModalHandler} />,
				portalElement!
			)}
		</>
	);
};
