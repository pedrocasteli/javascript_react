import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem
                titleProps={props.expenses[0].personagem}
                amountProps={props.expenses[0].preco}
                dateProps={props.expenses[0].date}
            />
            <ExpenseItem
                titleProps={props.expenses[1].personagem}
                amountProps={props.expenses[1].preco}
                dateProps={props.expenses[1].date}
            />
            <ExpenseItem
                titleProps={props.expenses[2].personagem}
                amountProps={props.expenses[2].preco}
                dateProps={props.expenses[2].date}
            />
            <ExpenseItem
                titleProps={props.expenses[3].personagem}
                amountProps={props.expenses[3].preco}
                dateProps={props.expenses[3].date}
            />
        </Card>
    );
};

export default Expenses;
