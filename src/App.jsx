
import Table from './components/table/Table'

function App() {

  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 },
  ];

  const totalIncome = netIncomes.reduce((total, company) => total + company.income, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <h1>Net Incomes</h1>
      <Table netIncomes={netIncomes} />
      <p>Average Net Income: {averageIncome}</p>
    </div>
  );
}


export default App
