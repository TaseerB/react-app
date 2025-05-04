import { useState } from "react";
import Alert from "./assets/components/Alert";
// import ListGroup from "./assets/components/ListGroup";

import Button from "./assets/components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisible(false);
          }}
        >
          My Alert
        </Alert>
      )}
      <Button
        color="primary"
        buttonClicked={() => {
          setAlertVisible(true);
        }}
      >
        {" "}
        Click Me
      </Button>
    </>
  );
}

export default App;
