import styles from './app.module.css';
import { useEffect, useState } from 'react';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState('');
	const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const handleClick = (event) => {
		const value = event.target.textContent;

		if (value === 'C') {
			setOperand1('');
			setOperand2('');
			setOperator('');
			setResult('');
		} else if (value === '+' || value === '-') {
			if (operand1 !== '' && operator === '') {
				setOperator(value);
			}
		} else if (value === '=') {
			if (operand1 !== '' && operator !== '' && operand2 !== '') {
				if (operator === '+') {
					setResult(parseInt(operand1) + parseInt(operand2));
				} else if (operator === '-') {
					setResult(parseInt(operand1) - parseInt(operand2));
				}
			}
		} else {
			if (operator === '') {
				setOperand1(operand1 + value);
			} else {
				setOperand2(operand2 + value);
			}
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Калькулятор</h1>
				<div className={styles.display}>
					<div className={styles.inputnumber}>
						{operand1} {operator} {operand2}
					</div>
					<div className={styles.result}>{result !== '' ? result : 0}</div>
				</div>
				<div className={styles.buttons}>
					{nums.map((num) => (
						<button key={num} onClick={handleClick}>{num}</button>
					))}
					<button className='reset' onClick={handleClick}>C</button>
					<button className='operator1' onClick={handleClick}>+</button>
					<button className='operator2' onClick={handleClick}>-</button>
					<button className='result' onClick={handleClick}>=</button>
				</div>
			</div>
		</div>
	);
};
