import { useEffect, useState } from "react";
import CardComponent from "../Card/Card";

const CardsComponent = () => {
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
        fetch('Donation.json')
            .then(res => res.json())
            .then(data => {
                setFilteredCards(data);
            });
    }, []);

    return (
        <div>
            <div className="px-5 xl:px-14 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    filteredCards.map(card => <CardComponent key={card.id} card={card}></CardComponent>)
                }
            </div>
        </div>
    );
};

export default CardsComponent;
