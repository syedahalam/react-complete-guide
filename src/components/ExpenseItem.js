import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = () => {
    
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 119;

    return (
			<div className='expense-item'>
				<ExpenseDate />
				<div className='expense-item__description'>
					<h2>{expenseTitle}</h2>
					<div className='expense-item__price'>${expenseAmount}</div>
				</div>
			</div>
		);
}

export default ExpenseItem
