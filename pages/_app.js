import '../styles/styles.scss'
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<CssBaseline />
			<Head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
