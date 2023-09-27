
import PieChart from '../PieChart/PieChart';

const Statistics = () => {
    // Example data (replace with your actual data)
    const yourDonations = 4;
    const totalDonations = 12;

    return (
        <div>
            <h1 className="text-5xl text-center">Statistics</h1>
            <PieChart donations={yourDonations} totalDonations={totalDonations} />
        </div>
    );
};

export default Statistics;
