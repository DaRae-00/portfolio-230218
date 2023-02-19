import { BlogIcon, GitHubIcon, NoteIcon } from "components/icons";
import me from "../app/avatar.jpg";

export const name = "Lim Darae";
export const avatar = me;
export const about = () => {
  return (
    <>
      안녕하세요. 프론트엔드 개발자 임다래입니다. <br />
    </>
  );
};

export const links = (): Array<{
  name: string;
  link: string;
  icon: JSX.Element;
}> => {
  return [
    {
      name: "Blog",
      link: "https://jibsun-i.tistory.com/",
      icon: <BlogIcon />,
    },
    {
      name: "2019 Blog",
      link: "https://lovely-fennec-fox.github.io/",
      icon: <BlogIcon />,
    },
    {
      name: "Github",
      link: "https://github.com/DaRae-00",
      icon: <GitHubIcon />,
    },
    {
      name: "Python study",
      link: "https://wikidocs.net/book/2801",
      icon: <NoteIcon />,
    },
  ];
};
