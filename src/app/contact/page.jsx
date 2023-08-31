"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



const contact = () => {
const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [telefone, setTelefone] = useState("");
const [user, setUser] = useState({});


function handlerRegister(e) {
  
  e.preventDefault();
alert('Usuario cadastrado com sucesso ')

  setUser({
    nome: nome,
    email:email,
    telefone:telefone
  });
}


  return (
    <div className="text-center items-center  mt-20">
      <h1 className="text-center text-xl text-yellow-500 ">Contato </h1>
      <form
        onSubmit={handlerRegister}
        className=" flex text-center items-center space-y-5  flex-col h-80 "
      >
        <label htmlFor="name" className="text-white">
          {" "}
          Nome
        </label>
        <input
          className="rounded-xl text-black h-8"
          placeholder="Digite seu nome"
          type="text"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />

        <label htmlFor="email" className="text-white">
          Email
        </label>
        <input
          placeholder="Digite seu email"
          className=" h-10 rounded-xl"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="text-white" htmlFor=" telefone">
          Telefone
        </label>
        <input
          placeholder="Digite seu telefone"
          className="h-10 rounded-xl"
          type="phone"
          name="telefone"
          id="telefone"
          value={telefone}
          onChange={(e) => {
            setTelefone(e.target.value);
          }}
        />

        <input
          className="h-20 w-36 text-lg  cursor-pointer hover:bg-yellow-500 hover:w-32  rounded-xl bg-cyan-950 text-center text-white"
          type="submit"
          value="Enviar"
        />
        <h2 className="text mt-10 text-lg text-yellow-500">
          Seja bem vindo {user.nome}
        </h2>
      </form>
      <h2 className="text mt-10 text-lg text-yellow-500">Redes Sociais</h2>

      <div className="space-x-5  after:text-center  cursor-pointer justify-center flex mt-5">
        <div className="w-16  text-base bg-white h-16 border">
          <Image
            src="/facebook.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <Link href="https://www.facebook.com/alfredo.silva.165">
            Facebook
          </Link>
        </div>

        <div className="w-16 h-16 border">
          <Image
            src="/instagram.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          Instagram
        </div>
        <div className="w-16 h-16 border">
          <Image
            src="/linkedin.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          Linkedin
        </div>
      </div>
    </div>
  );
};

export default contact;
