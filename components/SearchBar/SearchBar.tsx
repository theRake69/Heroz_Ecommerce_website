import React from "react";
import Link from "next/link";

import Style from "./SearchBar.module.css";
import Image from "next/image";
import { funky } from "@/public";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div>
      <div className={Style.main_container}>
        <Link
          href={{ pathname: "/" }}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h1>H</h1>
        </Link>

        <div className={Style.main_container_box}>
          <div className={Style.main_container_box_input}>
            <input type="text" placeholder="Search" />
          </div>
          <p>CART</p>
          <div className={Style.main_container_box_avatar}>
            <Image src={funky} alt="" width={40} height={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
