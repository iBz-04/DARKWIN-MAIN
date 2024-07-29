"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardExample() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         Style meets empowerment
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Founded with a passion for fashion and a commitment to quality
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="https://res.cloudinary.com/diekemzs9/image/upload/t_new site/v1721808007/photo_5834601742224967055_y_eiabwz.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
        <a href="https://www.darkmenshop.com/en/dresses">
       <CardItem
         translateZ={20}
         as="button"
         className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
         >
         Try now →
      </CardItem>
      </a>
      <a href="https://www.darkmenshop.com/uye-kayit">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
          </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}
