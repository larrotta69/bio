import Head from 'next/head'

import Post from '../components/post'
import productsData from '../data/products'

export async function getStaticProps() {
	return {
		props: {
			products: productsData,
		},
	}
}

export default function IndexPage(props) {
	const { products } = props
	return (
		<main>
			<Head>
				<title>Home page</title>
			</Head>

			<h1>List of posts</h1>

			<section>
				{products.map((product) => (
					<Post {...product} key={product.id} />
				))}
			</section>
		</main>
	)
}
