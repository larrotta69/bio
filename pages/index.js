import Head from 'next/head'

import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'
import productsData from '../data/products'

const getEquipmentProducts = (data) =>
	data.filter((d) => d.category === 'equipos')

export async function getStaticProps() {
	return {
		props: {
			products: productsData,
		},
	}
}

export default function IndexPage(props) {
	const { products } = props
	const equipmentProducts = getEquipmentProducts(products)

	return (
		<main className="main">
			<Head>
				<title>Probio ingeniería</title>
			</Head>
			<Header />

			<section className="product-section">
				<h3>Equipos</h3>
				<div className="product-wrapper">
					{equipmentProducts.map((product) => (
						<Card {...product} key={product.id} />
					))}
				</div>
			</section>
			<Footer />
		</main>
	)
}
