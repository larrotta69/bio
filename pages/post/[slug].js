import Link from 'next/link'
import Head from 'next/head'

import productsData from '../../data/products'

export async function getStaticPaths() {
	const productsList = productsData
	return {
		paths: productsList.map((post) => ({
			params: {
				slug: `${post.slug}`,
			},
		})),
		fallback: false,
	}
}

export async function getStaticProps(props) {
	const { params } = props
	const post = productsData.find((product) => product.slug === params.slug)
	return {
		props: post,
	}
}

export default function Post(props) {
	const { title, body } = props
	return (
		<main>
			<Head>
				<title>{title}</title>
			</Head>

			<h1>{title}</h1>

			<p>{body}</p>

			<Link href="/">
				<a>Go back to home</a>
			</Link>
		</main>
	)
}
