import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
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
        </div>
    );
};

export default Expenses;
