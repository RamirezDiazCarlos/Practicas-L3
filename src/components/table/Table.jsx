import PropTypes from 'prop-types';

const Table = ({ netIncomes }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Net Income</th>
                </tr>
            </thead>
            <tbody>
                {netIncomes.map(({ brand, income }, index) => (
                    <tr key={index}>
                        <td>{brand}</td>
                        <td>{income}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;

Table.prototype = {
    brand: PropTypes.string,
    income: PropTypes.number,
}
