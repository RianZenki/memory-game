import { useState, useContext, useEffect } from "react";

import { Board } from "./components/Board";
import { CardContext } from "./store/card-context";
import { newCardList } from "./card";
import { EndgameModal } from "./components/EndgameModal";

import classes from "./App.module.css";

function App() {
	const cardCtx = useContext(CardContext);

	useEffect(() => {
		cardCtx.onCardsUpdate(newCardList());
	}, []);

	return (
		<div className={classes.container}>
			<h1>Jogo da memoria</h1>
			<Board cardList={cardCtx.cards} />

			{cardCtx.gameOver ? <EndgameModal /> : null}
		</div>
	);
}

export default App;
