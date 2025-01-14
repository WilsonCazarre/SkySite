import SkyratsLogo from "../assets/SkyratsLogo";
import Dropdown from "./Dropdown";

const pages = [
  {
    name: "Quem somos",
    link: "#quem-somos",
  },
  {
    name: "A Equipe",
    link: "#equipe",
  },
  {
    name: "Conquistas",
    link: "#conquistas",
  },
  {
    name: "Projetos",
    link: "#projetos",
  },
  {
    name: "Parcerias",
    link: "#parcerias",
  },
  {
    name: "Apoia-se",
    link: "#apoia-se",
  },
];

export default function Header() {
  return (
    <div className="fixed top-0 z-10 px-8 py-6 w-full flex flex-row justify-between items-center items-top bg-gradient-to-b from-gray-dark to-transparent">
      <a href="/">
        <SkyratsLogo className="w-5/6"/>
      </a>

      {/*  
      <div className="flex flex-row">
        {pages.map((item) => (
          <a href={item.link} className="mx-3 text-lg hover:text-gray-lightest">
            {" "}
            {item.name}{" "}
          </a>
        ))}
      </div>
      */}

      <Dropdown pages={pages} />
    </div>
  );
}
