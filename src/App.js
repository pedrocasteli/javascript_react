import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
    const expenses = [
        {
            id: "e1",
            personagem: "Luke Skywalker",
            preco: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            personagem: "Darth Vader",
            preco: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: "e3",
            personagem: "Han Solo",
            preco: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            personagem: "Obi-Wan Kenobi",
            preco: 450,
            date: new Date(2021, 5, 12),
        },
    ];
    return (
        <div>
            <NewExpense />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
