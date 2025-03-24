import ListGroup from './assets/components/ListGroup';

function App() {
	let dynamicList = [
		'New York',
		'Los Angeles',
		'Chicago',
		'Houston',
		'Phoenix',
	];

	return <ListGroup heading="Cities" list={dynamicList} />;
}

export default App;
