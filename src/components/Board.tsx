import { Card } from "./Card";

import classes from "./Board.module.css";

interface Card {
	id: number;
	img: string;
	flipped: boolean;
   name: string
}

export const Board = ({ cardList }: { cardList: Card[] }) => {

	return (
		<div className={classes["board-container"]}>
			{cardList.map((card, index) => (
				<Card
					key={index}
					id={card.id}
					img={card.img}
					flipped={card.flipped}
               name={card.name}
				/>
			))}
		</div>
	);
};
