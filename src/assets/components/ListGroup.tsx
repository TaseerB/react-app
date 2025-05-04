import { useState } from "react";
import Form from "./Sculpture";

interface ListGroupProps {
  heading: string;
  list: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup(props: ListGroupProps) {
  const [selectedItem, setSelectedItem] = useState(-1);

  const { list, heading, onSelectItem } = props;
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            key={item}
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div>
        <Form></Form>
      </div>
    </>
  );
}

export default ListGroup;
