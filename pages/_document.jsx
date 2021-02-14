import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<Html lang="es">
				<Head>
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/manifest.json" />
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7dd2f3" />
					<meta name="msapplication-TileColor" content="#7dd2f3" />
					<meta name="apple-mobile-web-app-status-bar" content="#7dd2f3" />
					<meta name="theme-color" content="#7dd2f3" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
