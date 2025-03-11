import React from "react";
import ItemList from "../components/ItemList";

interface Options {
  id: string;
  name: string;
}

const options: Options[] = [
  { id: "Pop", name: "Pop" },
  { id: "Rock", name: "Rock" },
  { id: "Rap", name: "Rap" },
  { id: "Techno", name: "Techno" },
  { id: "Country", name: "Country" },
  { id: "Random", name: "Random" },
];

const renderOptions = (option: Options) => {
  return <button key={option.id}>{option.name}</button>;
};

export default function Home() {
  return (
    <div className="container">
      <div className="container main-header">
        <h1>Music Quiz</h1>
      </div>

      <ItemList items={options} renderItem={renderOptions} />
    </div>
  );
}
