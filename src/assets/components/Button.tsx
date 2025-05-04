import React from "react";

interface buttonProps {
  color?: string;
  buttonClicked?: () => void;
  children: React.ReactNode;
}

function Button({ color = "primary", buttonClicked, children }: buttonProps) {
  return (
    <>
      <button onClick={buttonClicked} className={color}>
        {children}
      </button>
    </>
  );
}

export default Button;
