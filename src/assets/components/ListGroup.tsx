import { useState } from 'react';

interface ListGroupProps {
	heading: string;
	list: string[];
}

function ListGroup(props: ListGroupProps) {
	const [selectedItem, setSelectedItem] = useState(-1);

	const { list, heading } = props;
	return (
		// generate single list item
		<>
			<h1>{heading}</h1>
			<ul className="list-group">
				{list.map((item, index) => (
					<li
						key={item}
						className={
							selectedItem === index
								? 'list-group-item active'
								: 'list-group-item'
						}
						onClick={() => setSelectedItem(index)}
					>
						{item}
					</li>
				))}
			</ul>
			<div className="mt-3 alert alert-info">
				{selectedItem === -1 ? 'None' : list[selectedItem]}
			</div>
		</>
	);
}

export default ListGroup;
