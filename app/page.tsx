import Image from "next/image";
import { ArrowIcon } from "components/icons";
import { name, about, avatar, links } from "lib/info";

export const revalidate = 60;

const Skill = ({ title, values }) => {
  return (
    <div className="flex">
      <div className="min-w-[67px]">{title}</div>
      <div className="font-seri">{values}</div>
    </div>
  );
};

export default async function HomePage() {
  return (
    <section className="">
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <h3 className="font-bold text-xl font-serif">Skills</h3>
          <Skill title="기획" values="Diagram io, Figma" />
          <Skill title="개발" values="ReactJS, VueJS, Javascript, HTML, CSS" />
          <Skill title="데이터" values="Python, MongoDB, MySQL" />
          <Skill title="협업" values="Storybook, Notion" />
          <Skill title="버전관리 " values="Git" />
        </div>
      </div>
    </section>
  );
}
