import React from "react";
import building from "../../../public/building.jpg";
import batalhanaval from "../../../public/batalhanaval.png"
import Image from "next/image";
import Link from 'next/link'
import organo from '../../../public/organo.png'

const portifolio = () => {
  return (
    <div className="text-center w-screen h-auto">
      
      <h1 className=" text-yellow-500 text-4xl">
        Meus projetos
      </h1>

      <section className="flex mt-20 text-white cursor-pointer  flex-wrap  justify-center space-x-4  w-auto h-full  m-5">
       
        <div className="  w-42 h-36">
        <Link rel="stylesheet" href="https://alfredsilvasilva.github.io/batalhanavalgame/" >
          <Image className="w-48 h-36 " src={batalhanaval} alt="batalhanaval"  />
        </Link>
        Batalha naval em Javascript
        </div>
        <div className="border   w-42 h-36">
        <Link rel="stylesheet" href="https://organo-five-sable.vercel.app/" >
          <Image className="w-48 h-36 " src={organo} alt="batalhanaval"  />
        </Link>
        Oraganograma React
        </div>
        <div className="border   w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building2" />
          projeto em construção
        </div>
        <div className="border    w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building3" />
          projeto em construção
        </div>
        <div className="border  w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building4" />
          projeto em construção
        </div>
        <div className="border    w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building5" />
          projeto em construção
        </div>{" "}
        <div className="border    w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building7" />
          projeto em construção
        </div>
        <div className="border   w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building8" />
          projeto em construção
        </div>
        <div className="border   w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building9" />
          projeto em construção
        </div>
        <div className="border    w-42 h-36">
          <Image className="w-48 h-36" src={building} alt="building" />
          projeto em construção
        </div>
      </section>
    </div>
  );
};

export default portifolio;
