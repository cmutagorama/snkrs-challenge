import { useRouter } from 'next/router'

function SlugPage() {
	const router = useRouter();
	const { s, slug } = router.query;
	console.log(router.query);

	return (
		<h4>Hello { s } { slug }</h4>
	)
}

export default SlugPage;