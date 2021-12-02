import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const [titulo, setTitulo] = useState(props.titleProps);

    const clickHandler = () => {
        setTitulo("Atualizou");
        console.log(titulo);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate dateProps={props.dateProps} />
            <div className="expense-item__description">
                <h2>{titulo}</h2>
                <div className="expense-item__price">${props.amountProps}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
};

export default ExpenseItem;
