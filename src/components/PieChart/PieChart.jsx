
import { Pie } from 'react-chartjs-2';

const PieChart = ({ donations, totalDonations }) => {
    // Calculate the percentage of your donations
    const percentage = ((donations / totalDonations) * 100).toFixed(2); // Rounded to two decimal places

    // Data for the pie chart
    const data = {
        labels: ['Your Donations', 'Remaining Donations'],
        datasets: [
            {
                data: [percentage, 100 - percentage],
                backgroundColor: ['#FF444A', '#E5E7EB'], // You can change the colors here
            },
        ],
    };

    return (
        <div>
            <h2>Donations Breakdown</h2>
            <p>Your Donations: {yourDonations} out of {totalDonations} ({percentage}%)</p>
            <Pie data={data} />
        </div>
    );
};

export default PieChart;
