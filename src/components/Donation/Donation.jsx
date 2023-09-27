import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localstorage";
import DonationCards from "../DonationCards/DonationCards";

const Donation = () => {
    const Donations = useLoaderData();
    const [Donates, setDonate] = useState([]);
    const [displayDonate, setDisplayDonate] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [dataLength, setDataLength] = useState(4);
    const [open, setOpen] = useState(false);

    const toggleCards = () => {
        if (showAll) {
            setDataLength(4);
        } else {
            setDataLength(12);
        }
        setShowAll(!showAll);
    };

    const toggleButton = () => {
        setOpen(!open);
    };

    const handleDonationFilter = (filter) => {
        if (filter === 'all') {
            setDisplayDonate(Donates);
        }
        else if (filter === 'health') {
            const HealthDonation = Donates.filter((donate) => donate.Category === 'Health');
            setDisplayDonate(HealthDonation);
        }
        else if (filter === 'food') {
            const FoodDonation = Donates.filter((donate) => donate.Category === 'Food');
            setDisplayDonate(FoodDonation);
        }
        else if (filter === 'clothing') {
            const ClothDonation = Donates.filter((donate) => donate.Category === 'Clothing');
            setDisplayDonate(ClothDonation);
        }
        else if (filter === 'education') {
            const EducationDonation = Donates.filter((donate) => donate.Category === 'Education');
            setDisplayDonate(EducationDonation);
        }
    };

    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (Donations.length > 0) {
            const Donated = [];
            for (const id of storedDonationIds) {
                const donate = Donations.find((d) => d.id === id);
                if (donate) {
                    Donated.push(donate);
                }
            }
            setDonate(Donated);
            setDisplayDonate(Donated);
        }
    }, [Donations]);

    return (
        <div>
            <div className="text-center">
                <details className="dropdown mb-44">
                    <summary onClick={toggleButton} className="m-1 btn hover:bg-red-600 py-2.5 px-6 text-white bg-[#FF444A] dark:bg-[#FF444A] dark:border-gray-700">
                        {open ? 'Close' : 'Category'}
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleDonationFilter('all')}><a>All</a></li>
                        <li onClick={() => handleDonationFilter('health')}><a>Health</a></li>
                        <li onClick={() => handleDonationFilter('food')}><a>Food</a></li>
                        <li onClick={() => handleDonationFilter('clothing')}><a>Clothing</a></li>
                        <li onClick={() => handleDonationFilter('education')}><a>Education</a></li>
                    </ul>
                </details>
            </div>

            <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
                {displayDonate.slice(0, dataLength).map((donate) => (
                    <DonationCards key={donate.id} donate={donate} />
                ))}
            </div>
            <div className="flex justify-center items-center p-5">
                {showAll ? null : (
                    <button onClick={toggleCards} className="btn mt-4 hover:bg-[#FF444A] hover:text-white font-bold rounded-lg px-12 py-2.5 text-sm border border-[#FF444A] text-[#FF444A] focus:outline-none">
                        Show All
                    </button>
                )}
            </div>
        </div>
    );
};

export default Donation;