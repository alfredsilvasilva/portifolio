import React from 'react'
import Image from 'next/image'

const contact = () => {
  return (
    <div className="text-center items-center  mt-20">
      <h1 className="text-center text-xl text-yellow-500 ">Contato </h1>
      <div className=" flex text-center items-center space-y-5  flex-col h-80 ">
        <label htmlFor="text"> Nome</label>
        <input className="rounded-xl h-8" type="text" />

        <label htmlFor="email">Email</label>

        <input
          className=" h-10 rounded-xl"
          type="email"
          name="email"
          id="email"
        />
        <label htmlFor=" telefone">Telefone</label>
        <input
          className="h-10 rounded-xl"
          type="number"
          name="telefone"
          id="telefone"
        />
        <input
          className="h-20 text-lg  cursor-pointer hover:bg-yellow-500 hover:w-64  rounded-xl bg-cyan-950 text-center text-white"
          type="Enviar"
          value="Enviar"
        />

        <div className="  items-center ">
          <h2 className='text mt-10 text-xl text-yellow-500'>Redes Sociais</h2>
          <div className='space-x-5 cursor-pointer  flex mt-5'>
            <div className='w-16  text-base bg-white h-16 border'>
              <Image
                src="/facebook.png"
                width={500}
                height={500}
                alt="Picture of the author"
              /> facebook</div>
            <div className='w-16 h-16 border'> <Image
                src="/instagram.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />Instagram</div>
            <div className='w-16 h-16 border'> <Image
                src="/linkedin.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />Linkedin</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default contact