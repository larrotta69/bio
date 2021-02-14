import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import styles from './Product.module.scss'

export default function ProductCard(props) {
	const { id, slug, image, title, description, sku, categories, tags } = props
	return (
		<Card className={styles.card}>
			<CardActionArea>
				<CardMedia
					className={styles.media}
					image="https://placeimg.com/640/480/tech"
					title={title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
