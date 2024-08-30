import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import './Table.css'

const Tabla = ({ netIncomes }) => {

    const totalIncome = netIncomes.reduce((total, company) => total + company.income, 0);
    const averageIncome = totalIncome/netIncomes.length;

    return (
        <>
        <Table striped bordered hover variant="dark" className="tamanio">
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
                <tr>
                    <td colSpan={2}>Ingreso neto: {averageIncome.toFixed(2)}</td>
                </tr>
            </tbody>
        </Table>
        
        </>
    );
};

export default Tabla;

Tabla.propTypes = {
    netIncomes: PropTypes.arrayOf(
        PropTypes.shape({
            brand: PropTypes.string.isRequired,
            income: PropTypes.number.isRequired
        })
    ).isRequired
};
