import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

// Internal imports
import Style from "./Navbar.module.css";

type Props = {};

const Navabr = (props: Props) => {
  return (
    <div>
      <div className={Style.main_container}>
        <div className={Style.main_container_items}>
          <div
            className={Style.main_container_items_item}
            style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
          >
            <RxHamburgerMenu />
            <Link
              href={{ pathname: "/" }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </Link>
          </div>
          <div className={Style.main_container_items_item}>
            <Link
              href={{ pathname: "products" }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Products
            </Link>
          </div>
          <div className={Style.main_container_items_item}>Category</div>
          <div className={Style.main_container_items_item}>Contact us</div>
        </div>
      </div>
    </div>
  );
};

export default Navabr;
