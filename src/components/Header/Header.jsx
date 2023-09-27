import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ cards, setFilteredCards }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        const query = searchQuery.toLowerCase();
        const filteredCards = cards.filter((card) =>
            card.Category.toLowerCase().includes(query)
        );
        setFilteredCards(filteredCards);
        setSearchQuery("");
    };

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div>
            <div
                className="hidden absolute inset-0  opacity-5 bg-cover bg-center h-full w-full lg:-mt-16 lg:block md:block "
                style={{
                    backgroundImage: `url('/Rectangle 4281.png')`,
                }}
            ></div>
            <h1 className="text-lg font-bold text-center my-9 md:text-3xl md:my-14 lg:text-5xl lg:my-24">I Grow By Helping People In Need</h1>
            <div>
                <div className="flex justify-center items-center mt-2 sticky">
                    <input
                        type="text"
                        placeholder="Search here...."
                        className="w-44 md:w-96 lg:w-96 block  rounded-l-lg rounded-r-none placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-[11px] text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                        value={searchQuery}
                        onChange={handleChange}
                    />
                    <button
                        className="btn hover:bg-red-600 py-2.5 px-6 text-white bg-[#FF444A] dark:bg-[#FF444A] dark:border-gray-700 border  rounded-r-lg rounded-l-none border-l-0 border-r "
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    cards: PropTypes.array.isRequired,
    setFilteredCards: PropTypes.func.isRequired,
};

export default Header;
