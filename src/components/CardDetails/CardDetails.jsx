import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../utility/localstorage";
const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find((card) => card.id === idInt);

    const handleDonate = () => {
        saveDonation(idInt);
        toast(`😊 You have donated successfully`);
    }
    const Button_bg = card?.Button_bg || '';
    const Card_bg_Color = card?.Card_bg_Color || '';
    const Text_Color = card?.Text_Color || '';


    return (
        <div>
            {/* Large screens */}
            <div className='hidden lg:flex justify-center items-center relative'>
                <img className='w-full lg:w-[1200px] h-[500px] rounded-md' src={card.Picture} />
                <div className='absolute mt-96 text-start bg-black bg-opacity-50 lg:w-screen xl:w-[1199px] xl:h-[114px] rounded-b-md'>
                    <button onClick={handleDonate}
                        className="lg:text-white lg:bg-transparent lg:btn lg:border-0 m-9 px-6 py-2 font-medium rounded-md"
                        style={{ backgroundColor: Button_bg }}
                    >
                        Donate {card.Price}
                    </button>
                </div>
            </div>
            <div className='hidden lg:block lg:p-8 xl:px-20'>
                <h2 className='text-4xl font-bold'>{card.Title}</h2>
                <p className='text-base font-normal text-[#0b0b0bb3] dark:text-white'>{card.Description}</p>
            </div>
            {/* Mobile and tablet */}
            <div className="flex flex-col items-center justify-center w-full  mx-auto lg:hidden">
                <div
                    className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                    style={{ backgroundImage: `url(${card.Picture})` }}
                ></div>

                <div className="w-64 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-96 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white"
                        style={{ backgroundColor: Card_bg_Color, color: Text_Color }}>
                        {card.Title}
                    </h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <button onClick={handleDonate} className="btn px-2 py-1 text-xs font-semibold text-white" style={{ backgroundColor: Button_bg }}>
                            Donate {card.Price}
                        </button>
                    </div>
                </div>
                <div className='block lg:hidden p-8'>
                    <h2 className='text-4xl font-bold'>{card.Title}</h2>
                    <p className='text-base font-normal text-[#0b0b0bb3] dark:text-white'>{card.Description}</p>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
};

export default CardDetails;
