import React from 'react'
import Image from 'next/image'

const contact = () => {
  return (
    <div className='text-center items-center  mt-20' >
      <h1 className='text-center text-lg'>Contato </h1>
      <div className=' flex text-center items-center space-y-5  flex-col h-80 '>
        <label  htmlFor="text"> Nome</label>
        <input className='rounded-xl h-8' type="text" />
        
        <label htmlFor="email">Email</label>
        
        <input className=' h-8 rounded-xl' type="email" name="email" id="email" />
        <label  htmlFor=" telefone">Telefone</label>
        <input className='h-8 rounded-xl' type="number" name="telefone" id="telefone" />
        <input className='h-8 rounded-xl bg-cyan-950 text-center text-white' type="Enviar" value="Enviar" />
        
      </div>
  

      <h2>Redes Sociais</h2>
      <div className='flex'>
         
         
        </div>

    </div>
  )
}

export default contact