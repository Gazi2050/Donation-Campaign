import { NavLink } from "react-router-dom";

const Card = ({ card }) => {
    const { id, Picture, Title, Category, Category_bg_Color, Card_bg_Color, Text_Color } = card;

    const CategoryBgColor = Category_bg_Color ? `${Category_bg_Color}` : '';
    const CardBgColor = Card_bg_Color ? `${Card_bg_Color}` : '';

    const TextColor = Text_Color ? `${Text_Color}` : '';

    const CategoryStyle = {
        backgroundColor: CategoryBgColor,
        padding: '4px 10px',
        borderRadius: '4px',
    };

    const CardStyle = {
        backgroundColor: CardBgColor,
    };

    const TextStyle = {
        color: TextColor,
        margin: '8px 0',
    };

    return (
        <NavLink to={`/CardDetails/${id}`}>
            <div className="w-full max-w-xs overflow-hidden rounded-lg shadow-lg" style={CardStyle}>
                <img className="object-cover w-full h-56" src={Picture} alt="avatar" />

                <div className="py-5 px-3">
                    <span className="text-sm text-gray-700 dark:text-gray-200" style={{ ...CategoryStyle, ...TextStyle }}>
                        {Category}
                    </span>
                    <p className="block text-xl font-bold" tabIndex="0" role="link" style={TextStyle}>
                        {Title}
                    </p>
                </div>
            </div>
        </NavLink>
    );
};

export default Card;
