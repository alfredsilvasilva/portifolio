import React from "react";
import building from "../../../public/building.jpg";
import Image from "next/image";
const portifolio = () => {
  return (
    <div className="text-center">
      <h1 className="text-center  text text-yellow-500 text-4xl">
        Meus projetos{" "}
      </h1>

      <section className="flex cursor-pointer  flex-wrap  justify-center space-x-4  w-auto h-full  m-5">
        <div className=" mt-32 w-42 h-36">
          <Image className="w-48  h-36 " src={building} alt="building" />
          projeto em construção
        </div>
        <div className="border  mt-32 w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building1" />
          projeto em construção
        </div>
        <div className="border  mt-32 w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building2" />
          projeto em construção
        </div>
        <div className="border   mt-32 w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building3" />
          projeto em construção
        </div>
        <div className="border  -500 mt-32 w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building4" />
          projeto em construção
        </div>
        <div className="border   mt-32 w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building5" />
          projeto em construção
        </div>{" "}
        <div className="border   mt-32 w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building7" />
          projeto em construção
        </div>
        <div className="border  mt-32 w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building8" />
          projeto em construção
        </div>
        <div className="border   mt-32 w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building9" />
          projeto em construção
        </div>
        <div className="border   mt-32 w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building" />
          projeto em construção
        </div>
      </section>
    </div>
  );
};

export default portifolio;
