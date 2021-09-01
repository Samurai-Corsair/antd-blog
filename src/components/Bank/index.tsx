import React from 'react';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux/bank";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Bank = (): JSX.Element => {
    const amount = useTypedSelector((state) => state.bank)
    const dispatch = useDispatch()
    const {depositMoney, withdrawMoney, bankrupt} = bindActionCreators(actionCreators, dispatch)

    return (
        <div>
            <h1>{amount}$</h1>
            <button onClick={() => depositMoney(100000)}>Deposit</button>
            <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
            <button onClick={() => bankrupt()}>Bankrupt</button>
        </div>
    );
};

export default Bank;