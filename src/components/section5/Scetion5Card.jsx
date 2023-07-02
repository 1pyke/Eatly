import React, { useState } from "react";

const Scetion5Card = ({ item }) => {
  const [selected, setSelected] = useState();
  return (
    <div
      onClick={() => {
        setSelected(!selected);
      }}
      style={{
        backgroundColor: "#f9f1fe",
        boxShadow: selected
          ? "0px 25px 30px -4px rgba(247, 237, 248, 0.8)"
          : "",
      }}
      className=" py-7 px-6 rounded-[30px] flex border-white border-4 w-[500px]"
    >
      <div
        style={{
          backgroundColor: selected ? "#f4ce6b" : "#a975fe",
        }}
        className="justify-center flex rounded-2xl mr-5 items-center w-16 h-16 border border-gray-200"
      >
        {item.icon ? (
          <item.icon color={selected ? "white" : "#f4ce6b"} size={35} />
        ) : null}
      </div>
      <h1
        style={{ color: selected ? "#a377ec" : "#6f5695" }}
        className="self-center text-3xl font-bold px-4"
      >
        {item.name}
      </h1>
    </div>
  );
};

export default Scetion5Card;
