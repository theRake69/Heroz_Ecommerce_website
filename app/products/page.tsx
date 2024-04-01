"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";

// Internal Imports
import Style from "./products.module.css";
import { main_model } from "@/public";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

type Props = {};

const page = (props: Props) => {
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [kids, setKids] = useState(false);

  const toggleMen = () => {
    setMen(!men);
  };
  const toggleWomen = () => {
    setWomen(!women);
  };
  const toggleKids = () => {
    setKids(!kids);
  };

  return (
    <div className={Style.body}>
      <div className={Style.main_container}>
        <div className={Style.main_container_left}>
          <Link
            href={{ pathname: "/" }}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className={Style.main_container_left_logo}>
              <div className={Style.main_container_left_logo_first}>He</div>
              <div className={Style.main_container_left_logo_second}>roz</div>
            </div>
          </Link>

          <div className={Style.main_container_left_dropdown}>
            <div className={Style.main_container_left_dropdown_item}>
              <p onClick={toggleMen}>
                MEN <RiArrowDropDownLine />
              </p>
              {men && (
                <div className={Style.main_container_left_dropdown_item_option}>
                  <ul>
                    <Link
                      href={{ pathname: "/men/jeans" }}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <li>Jeans</li>
                    </Link>
                    <Link
                      href={{ pathname: "/men/shirts" }}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <li>Shirts</li>
                    </Link>
                    <Link
                      href={{ pathname: "/men/shoes" }}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <li>Shoes</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <div className={Style.main_container_left_dropdown_item}>
              <p onClick={toggleWomen}>
                WOMEN <RiArrowDropDownLine />
              </p>
              {women && (
                <div className={Style.main_container_left_dropdown_item_option}>
                  <ul>
                    <Link
                      href={{ pathname: "/women/jeans" }}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <li>Jeans</li>
                    </Link>
                    <Link
                      href={{ pathname: "/women/shirts" }}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <li>Shirts</li>
                    </Link>
                    <Link
                      href={{ pathname: "/women/shoes" }}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <li>Shoes</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <div className={Style.main_container_left_dropdown_item}>
              <p onClick={toggleKids}>
                KIDS <RiArrowDropDownLine />
              </p>
              {kids && (
                <div className={Style.main_container_left_dropdown_item_option}>
                  <ul>
                    <Link
                      href={{ pathname: "/kids/jeans" }}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <li>Jeans</li>
                    </Link>
                    <Link
                      href={{ pathname: "/kids/shirts" }}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <li>Shirts</li>
                    </Link>
                    <Link
                      href={{ pathname: "/kids/shoes" }}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <li>Shoes</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={Style.main_container_image}>
          <Image src={main_model} alt={""} />
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default page;
