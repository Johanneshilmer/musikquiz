import React from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function ItemList({ items, renderItem }: ListProps<T>) {
  return (
    <div className="container list-item">
      {items.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </div>
  );
}
