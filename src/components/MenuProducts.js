import React, { useState } from "react";
import UserItem from "./UserItem";
import DeliveryGuy from "./DeliveryGuy";
import MainPage from "./MainPage";
import { Icon } from "../icons";
import Header from "./Header";

const list = [
  {
    id: 1,
    title: "Home",
    name: "Home",
    svgName: "home",
    link: "/home",
  },
  {
    id: 2,
    title: "Menu",
    name: "Menu",
    svgName: "menu",
    link: "/menu",
  },
  {
    id: 3,
    title: "Trendng",
    name: "Trend",
    svgName: "flame",
    link: "",
  },
  {
    id: 4,
    title: "Setting",
    name: "Setting",
    svgName: "setting",
    link: "",
  },
];

export const MenuProducts = () => {
  const [activeItem, setActiveItem] = useState(list[0]);
  const click = (name) => {
    setActiveItem(list.find((x) => x.name === name));
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="features">
          <UserItem />
          <nav className="menu">
            <ul className="menu__list">
              {list.map(({ title, name, svgName, link }) => {
                return (
                  <li
                    key={name}
                    style={{ listStyle: "none" }}
                    className={
                      activeItem.name === name
                        ? "menu-link menu-link-active"
                        : "menu-link"
                    }
                    onClick={() => click(name)}
                  >
                    <div className="menu-link-icon">
                      <Icon name={svgName} />
                    </div>
                    <span>{title}</span>
                  </li>
                );
              })}
            </ul>
          </nav>
          <DeliveryGuy />
        </div>
        <MainPage />
      </div>
    </div>
  );
};
export default MenuProducts;
