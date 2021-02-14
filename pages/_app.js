import '../styles/styles.scss'
import Head from 'next/head'

// Add this wherever you render your code...

export default function MyApp({ Component, pageProps }) {
	return (
		<>
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
