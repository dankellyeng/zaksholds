"use client";
import React from "react";
import sayingBody from "./sayingBody.module.scss";
import SayingCards from "../sayingCard/SayingCards";
import SayingGenerator from "../sayingGenerator/SayingGenerator";
import Image from "next/image";

const SayingCard: React.FunctionComponent<any> = ({ data }) => {
  return (
    <div className={sayingBody.body}>
      <div className={sayingBody.books}>
        <Image
          alt="image"
          src="/images/holds.webp"
          width={350}
          height={520}
          // fill={true}
          // style={{ position: "relative" }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* <SayingGenerat÷or data={data} /> */}
        {/* <SayingCards data={data} /> */}
      </div>
    </div>
  );
};

export default SayingCard;
