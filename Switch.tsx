import React, { useState } from "react";

export interface ISwitch {
  title: string;
  id: string;
}

type PropSwitchWithAnimation = {
  items: ISwitch[];
};

interface PropSwitchItem {
  item: ISwitch;
  callback: (arg: string) => void;
  whatIsActive: string;
}

export const SwitchItem: React.FC<PropSwitchItem> = ({
  item,
  callback,
  whatIsActive,
}) => {
  return (
    <button
      onClick={() => callback(item.id)}
      className={`p-2 rounded-md transition duration-300 ease-in-out ${
        item.id === whatIsActive ? "bg-green-500 text-white" : ""
      }`}
    >
      {item.title}
    </button>
  );
};

export const SwitchGroup: React.FC<PropSwitchWithAnimation> = ({ items }) => {
  const [whatIsActive, setActive] = useState(items[0].id);

  return (
    <ul className={"bg-gray-200 p-4 rounded-md flex justify-around"}>
      {items &&
        items.map((item) => (
          <li key={item.id}>
            <SwitchItem
              callback={setActive}
              whatIsActive={whatIsActive}
              item={item}
            />
          </li>
        ))}
    </ul>
  );
};
