import { Button } from "@material-tailwind/react";
import React from "react";

const ReusableButton = ({ text, size, event }) => {
  return (
    <Button
      onClick={event}
      color="amber"
      size={size}
      style={{
        background: "linear-gradient(to right, #fed96b, #efb355)",
        color: "#895e06",
      }}
    >
      {text}
    </Button>
  );
};

export default ReusableButton;
