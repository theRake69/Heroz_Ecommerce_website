import React from "react";
import Image from "next/image";

// Internal Imports
import Style from "../productCard.module.css";
import { main_model, male_model, funky } from "@/public/index";
import SearchBar from "@/components/SearchBar/SearchBar";

type Props = {};

const page = (props: Props) => {
  const items = [
    { image: main_model, name: "ITEM1" },
    { image: funky, name: "ITEM2" },
    { image: main_model, name: "ITEM3" },
    { image: male_model, name: "ITEM4" },
    { image: main_model, name: "ITEM5" },
    { image: funky, name: "ITEM6" },
    { image: main_model, name: "ITEM7" },
    { image: funky, name: "ITEM8" },
  ];

  return (
    <div className={Style.body}>
      <SearchBar />

      <div className={Style.main_container}>
        {items.map((item, index) => (
          <div key={index} className={Style.main_container_box}>
            <Image src={item.image} alt={" "} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
