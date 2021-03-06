const Skeleton = () => (
	<div className="border border-gray-200 shadow rounded-md p-4 w-full mx-auto">
		<div className="animate-pulse flex space-x-4">
			<div className="flex-1 space-y-8 py-1">
				<div className="h-4 bg-gray-300 rounded w-3/4"></div>
				<div className="space-y-8">
					<div className="h-4 bg-gray-300 rounded"></div>
					<div className="h-4 bg-gray-300 rounded w-5/6"></div>
				</div>
			</div>
		</div>
	</div>
);

export default Skeleton;