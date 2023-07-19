import { useEffect, useContext } from "react";

import { CardContext } from "../store/card-context";

import classes from "./Card.module.css";

interface CardProps {
	img: string;
	id: number;
	flipped: boolean;
	name: string;
}

export const Card = ({ img, id, flipped, name }: CardProps) => {
	const cardCtx = useContext(CardContext);
	const firstCard = cardCtx.firstCard;
	const secondCard = cardCtx.secondCard;

	const flip = flipped ? classes.flipped : "";

	const updateCardHandler = () => {
		if (cardCtx.locked) return;

		const newCard = cardCtx.cards.map((card) => {
			if (card.id === id) {
				return { ...card, flipped: !card.flipped };
			}

			return card;
		});
		cardCtx.onCardsUpdate(newCard);
		checkMatch(id);
	};

	const checkMatch = (id: number) => {
		const selectedCard = cardCtx.cards.filter((card) => card.id === id)[0];
		const firstCard = cardCtx.firstCard;
		const secondCard = cardCtx.secondCard;

		if (!firstCard) {
			cardCtx.onFirstCardUpdate(selectedCard);
			return;
		}

		if (!secondCard) {
			cardCtx.onSecondCardUpdate(selectedCard);
			cardCtx.onLocked();
			return;
		}
	};

	const checkGameOver = () => {
		const gameOver = cardCtx.cards.some((card) => card.flipped === false);

		if (gameOver) {
			return;
		}

		if (!gameOver) {
			setTimeout(() => {
				cardCtx.onGameOverTrue();
			}, 400);
		}
	};

	useEffect(() => {
		const valid = firstCard && secondCard;

		if (valid) {
			if (firstCard.name === secondCard.name) {
				cardCtx.onCleanStates();
				checkGameOver();
			} else {
				setTimeout(() => {
					const newCard = cardCtx.cards.map((card) => {
						if (card.id === firstCard.id) {
							return { ...card, flipped: !card.flipped };
						}

						if (card.id === secondCard.id) {
							return { ...card, flipped: !card.flipped };
						}

						return card;
					});

					cardCtx.onCardsUpdate(newCard);
					cardCtx.onCleanStates();
				}, 1000);
			}
		}

		return;
	}, [firstCard, secondCard, cardCtx]);

	return (
		<div
			className={`${classes["card-container"]} ${flip} `}
			onClick={updateCardHandler}
			id={id.toString()}
			data-name={name}
		>
			<div className={`${classes.card} ${classes.front}`}>
				<img src={img} alt="image" />
			</div>
			<div className={`${classes.card} ${classes.back}`}>?</div>
		</div>
	);
};
