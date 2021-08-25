import Link from "next/link"

function Error({ statusCode }) {
  return (
		<div className="container text-center py-12 mx-auto">
			<h1 className="md:text-4xl font-semibold mb-4 sm:text-base">
				{ statusCode
					? `An error ${statusCode} occurred on the server`
					: 'An error occurred on client' }
			</h1>
			<p className="text-gray-700 mb-10">Oops, something went wrong</p>
			<Link href="/">
				<span className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 tracking-wider uppercase text-sm">&larr; Go back home</span>
			</Link>
		</div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error