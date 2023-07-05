import Image from "next/image";
import avatar from "../../public/avatar.png";

export default function Home() {
  return (
    <>
      <div className="text-center  text-yellow-500 text-5xl text mt-5">
        <h1>Sejam bem vindos</h1>
      </div>

      <div className="flex w-auto mt-10 sm:flex-none">
        <div className="flex  w-1/2" >
          <Image  src={avatar} alt="Picture of the author" />
        </div>
        <div className="border w-1/2  text-black text-center bg-yellow-500  mr-10 ">
          Olá, sou um desenvolvedor frontend apaixonado por criar interfaces
          atraentes e funcionais. Com uma combinação de habilidades em HTML, CSS
          e JavaScript, trabalho para transformar conceitos em realidade
          digital. Tenho uma ampla experiência em construir sites responsivos e
          otimizados, garantindo que eles sejam visualmente agradáveis em todas
          as plataformas. Minhas ferramentas principais incluem frameworks
          populares como React e Vue.js, que me permitem criar aplicações web
          interativas e eficientes. Ao longo dos anos, tive a oportunidade de
          trabalhar em diversos projetos desafiadores, colaborando com equipes
          multidisciplinares para criar soluções personalizadas e inovadoras.
          Meu foco é garantir uma experiência do usuário excepcional, combinando
          design moderno com funcionalidades intuitivas. Além disso, estou
          sempre buscando aprender e me atualizar com as últimas tendências e
          tecnologias do desenvolvimento frontend. Isso me permite oferecer
          soluções de ponta e estar preparado para enfrentar os desafios em
          constante evolução do mundo digital. Se você está em busca de um
          desenvolvedor frontend criativo e dedicado, estou pronto para
          contribuir com meu conhecimento e experiência para ajudar a trazer
          suas ideias à vida. Explore meu portfólio e entre em contato para
          discutirmos como posso ajudar a alcançar seus objetivos.
        </div>
      </div>
    </>
  );
}
