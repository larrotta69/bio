import styles from './Header.module.scss';
import { Button } from '@material-ui/core';

export default function Header() {
	return (
		<div className={styles.header}>
			<h2 className={styles.title}>Header</h2>
			<Button color="primary">Hello World</Button>
		</div>
	)
}
