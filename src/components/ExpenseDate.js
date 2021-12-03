import React from 'react'

const ExpenseDate = () => {
    const expenseDate = new Date();
    return (
			<div>
				<div>
					<div>{expenseDate.toLocaleString('en-US', { month: 'long' })}</div>
					<div>{expenseDate.toLocaleString('en-US', { day: '2-digit' })}</div>
					<div>{expenseDate.getFullYear()}</div>
				</div>
			</div>
		);
}

export default ExpenseDate
