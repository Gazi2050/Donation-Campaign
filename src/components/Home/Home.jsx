import { useState, useEffect } from "react";
import CardsComponent from "../Cards/CardsComponent";
import Header from "../Header/Header";

const Home = () => {
    const [initialCards, setInitialCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
        fetch('Donation.json')
            .then(res => res.json())
            .then(data => {
                setInitialCards(data);
                setFilteredCards(data);
            });
    }, []);

    const handleFilterCards = (category) => {
        const filtered = initialCards.filter((card) =>
            card.Category.toLowerCase() === category.toLowerCase()
        );

        setFilteredCards(filtered);
    };

    return (
        <div>
            <div className="mb-52">
                <Header cards={initialCards} setFilteredCards={handleFilterCards} />
            </div>

            <CardsComponent filteredCards={filteredCards} />
        </div>
    );
};

export default Home;
