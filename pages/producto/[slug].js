import Link from 'next/link'
import Head from 'next/head'

import Product from '../../components/Product'
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
		props: {
			post,
		},
	}
}

export default function Post(props) {
	const { title, post } = props
	return (
		<main>
			<Head>
				<title>{title}</title>
			</Head>

			<Product {...post} key={post.id} />

			<Link href="/">
				<a>Go back to home</a>
			</Link>
		</main>
	)
}
