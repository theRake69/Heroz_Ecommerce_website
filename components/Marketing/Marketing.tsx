"use client";
import React from "react";
import Image from "next/image";

// Internal Imports
import Style from "./Marketing.module.css";
import { main_model, male_model, removed_main_model } from "@/public";
import Navabr from "../Navbar/Navbar";

type Props = {};

const marketing = (props: Props) => {
  return (
    <div>
      <div className={Style.main_container}>
        <div className={Style.main_container_image}>
          <Image src={removed_main_model} alt={""} />
        </div>
        <div className={Style.main_container_logo}>
          <div className={Style.main_container_logo_first}>He</div>
          <div className={Style.main_container_logo_second}>roz</div>
        </div>
      </div>
      <Navabr />
    </div>
  );
};

export default marketing;
