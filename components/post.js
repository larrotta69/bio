import Link from 'next/link'

export default function Post(props) {
	const { title, body, slug, image } = props
	return (
		<article>
			<h2>{title}</h2>
			<p>{body}</p>
			<img src={`/${image}`} alt={title} width="64" height="64" />
			<Link href={`/post/${slug}`}>
				<a>Read more...</a>
			</Link>
		</article>
	)
}
