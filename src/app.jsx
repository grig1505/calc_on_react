import styles from './app.module.css';
import { useEffect, useState } from 'react';


export const App = () => {
	const [steps, setSteps] = useState([]);


	useEffect(() => {

	}, []);

	useEffect(() => {
		setActiveIndex(0);
	}, []);

	function handleClick(index) {
		setActiveIndex(index);
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Калькулятор ...</h1>

			</div>
		</div>
	);
};
