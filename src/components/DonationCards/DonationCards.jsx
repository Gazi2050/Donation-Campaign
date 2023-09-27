import { NavLink } from "react-router-dom";

const DonationCards = ({ donate }) => {
    const { id, Picture, Title, Category, Category_bg_Color, Card_bg_Color, Text_Color, Button_bg, Price } = donate;

    const CategoryBgColor = Category_bg_Color || '';
    const CardBgColor = Card_bg_Color || '';
    const ButtonBgColor = Button_bg || '';
    const TextColor = Text_Color || '';

    const CategoryStyle = {
        backgroundColor: CategoryBgColor,
        padding: '4px 10px',
        borderRadius: '4px',
        marginRight: '8px',
    };

    const CardStyle = {
        backgroundColor: CardBgColor,
    };

    const ButtonStyle = {
        backgroundColor: ButtonBgColor,
    };

    const TextStyle = {
        color: TextColor,
    };

    return (
        <div className="flex overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 w-auto" style={CardStyle}>
            <div className="w-1/3 bg-cover" style={{ backgroundImage: `url(${Picture})` }}></div>

            <div className="w-2/3 p-4 md:p-4">
                <span className="text-sm text-gray-600 dark:text-gray-400" style={{ ...CategoryStyle, ...TextStyle }}>
                    {Category}
                </span>
                <h1 className="text-xl font-bold text-gray-800 dark:text-white mt-2">{Title}</h1>
                <div className="mt-3">
                    <h1 className="mb-5 text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl" style={TextStyle}>{Price}</h1>
                    <NavLink to={`/CardDetails/${id}`} className="btn btn-sm px-2 py-1 text-xs font-bold text-white" style={ButtonStyle}>
                        View Details
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default DonationCards;
