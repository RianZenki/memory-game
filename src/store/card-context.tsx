/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";

interface Card {
	id: number;
	img: string;
	flipped: boolean;
	name: string;
}

type CardContextType = {
	cards: Card[];
	firstCard?: Card;
	secondCard?: Card;
	gameOver: boolean;
	locked: boolean;
	onCardsUpdate: (cardList: Card[]) => void;
	onFirstCardUpdate: (card: Card) => void;
	onSecondCardUpdate: (card: Card) => void;
	onCleanStates: () => void;
	onGameOverTrue: () => void;
	onGameOverFalse: () => void;
	onLocked: () => void;
};

export const CardContext = createContext<CardContextType>({
	cards: [],
	firstCard: undefined,
	secondCard: undefined,
	gameOver: false,
	locked: false,
	onCardsUpdate: (cardList: Card[]) => {},
	onFirstCardUpdate: (card: Card) => {},
	onSecondCardUpdate: (card: Card) => {},
	onCleanStates: () => {},
	onGameOverTrue: () => {},
	onGameOverFalse: () => {},
	onLocked: () => {},
});
