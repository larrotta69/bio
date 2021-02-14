import '../styles/styles.scss'
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<CssBaseline />
			<Header />
			<Head>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
			</Head>
			<Component {...pageProps} />
			<Footer />
		</>
	)
}
