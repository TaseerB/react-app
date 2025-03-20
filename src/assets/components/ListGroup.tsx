function ListGroup() {
	let dynamicList = [
		'New York',
		'Los Angeles',
		'Chicago',
		'Houston',
		'Phoenix',
	];
	return (
		<div>
			<h1>List</h1>
			<ul className="list-group">
				{dynamicList.map((item) => (
					<li key={item} className="list-group-item">
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ListGroup;
