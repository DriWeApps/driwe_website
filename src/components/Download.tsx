import Image from "next/image";
import React from "react";

export default function Download() {
  return (
    <div>
      <Image
        src={"/images/download.png"} alt={"download image"}
        width={1980}
        height={1080}
        className="mx-auto h-auto w-full object-cover rounded-none"
        />
    </div>
  );
};