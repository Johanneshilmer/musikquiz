"use client";
import { useEffect, useState } from "react";

interface Data {
  name: string;
}

export default function Home() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/fetch");
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="container main-header">
        <h1>Hello</h1>
      </div>
      <div className="container">
        <h1>Here i will store the list</h1>
        <h1>{data.name}</h1>
      </div>
    </>
  );
}
