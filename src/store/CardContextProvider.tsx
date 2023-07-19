import React, { useState } from "react";

import { CardContext } from "./card-context";

interface Card {
	id: number;
	img: string;
	flipped: boolean;
	name: string;
}

interface ChildrenProps {
	children: React.ReactNode;
}

export const CardContextProvider = ({ children }: ChildrenProps) => {
	const [cards, setCards] = useState<Card[]>([]);
	const [firstCard, setFirstCard] = useState<Card>();
	const [secondCard, setSecondCard] = useState<Card>();
	const [gameOver, setGameOver] = useState<boolean>(false);
	const [locked, setLocked] = useState<boolean>(false);

	const cardsUpdateHandler = (cardsList: Card[]) => {
		setCards(cardsList);
	};

	const firstCardUpdateHandler = (card: Card) => {
		setFirstCard(card);
	};

	const secondCardUpdateHandler = (card: Card) => {
		setSecondCard(card);
	};

	const gameOverTrueHandler = () => {
		setGameOver(true);
	};

	const gameOverFalseHandler = () => {
		setGameOver(false);
	};

	const lockedHandler = () => {
		setLocked((prev) => !prev);
	};

	const cleanStatesHandler = () => {
		setFirstCard(undefined);
		setSecondCard(undefined);
		setLocked(false);
	};

	const cardContext = {
		cards,
		firstCard,
		secondCard,
		gameOver,
		locked,
		onCardsUpdate: cardsUpdateHandler,
		onFirstCardUpdate: firstCardUpdateHandler,
		onSecondCardUpdate: secondCardUpdateHandler,
		onCleanStates: cleanStatesHandler,
		onGameOverTrue: gameOverTrueHandler,
		onGameOverFalse: gameOverFalseHandler,
		onLocked: lockedHandler,
	};

	return (
		<CardContext.Provider value={cardContext}>
			{children}
		</CardContext.Provider>
	);
};
