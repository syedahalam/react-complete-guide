import React from 'react';
import ExpenseDate from './ExpenseDate';
import './Expenses.css'

const Expenses = (props) => {

    return (
			<div className='expenses'>
				<ExpenseDate />
                {props.expenses}
                {props.expenses[0].amount}
			</div>
		);
}

export default Expenses
