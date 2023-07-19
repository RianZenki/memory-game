import img1 from "./assets/images/01.png";
import img2 from "./assets/images/02.png";
import img3 from "./assets/images/03.png";
import img4 from "./assets/images/04.png";
import img5 from "./assets/images/05.png";
import img6 from "./assets/images/06.png";
import img7 from "./assets/images/07.png";
import img8 from "./assets/images/08.png";
import img9 from "./assets/images/09.png";

interface Card {
	id: number;
	img: string;
	flipped: boolean;
	name: string;
}

const imagesList = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function createList(images: string[]) {
	const newList = images.map((image, index) => {
		return duplicateCard(image, index);
	});

	return newList.flat();
}

function duplicateCard(card: string, index: number) {
	return [
		{
			id: Math.random(),
			img: card,
			flipped: false,
			name: `card-${index}`,
		},
		{
			id: Math.random(),
			img: card,
			flipped: false,
			name: `card-${index}`,
		},
	];
}

function shuffleCards(cards: Card[]) {
	let currentIndex = cards.length;
	let randomIndex = 0;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[cards[currentIndex], cards[randomIndex]] = [
			cards[randomIndex],
			cards[currentIndex],
		];
	}

	return cards;
}

export function newCardList() {
	return shuffleCards(createList(imagesList))
}
