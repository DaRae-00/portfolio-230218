import Image from "next/image";
import type { Metadata } from "next";
import { ArrowIcon } from "components/icons";
import { name, links } from "lib/info";
import study_1 from "../../asset/image/study_1.png";
import study_2 from "../../asset/image/study_2.png";
import study_3 from "../../asset/image/study_3.png";

export const metadata: Metadata = {
  title: "About",
  description: "About darae",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        개발자는 다양한 문제를 기술로 해결해내는 문제해결사입니다.
        <br />
        능력 있는 문제해결사가 되기 위해 새로운 기술을 배우는 것을 즐거워하고,
        <br />
        다양한 사람과 소통하며 일을 완성하는 것을 좋아합니다. ๑•‿•๑
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <hr />
        <div className="flex items-end">
          <div className="flex justify-center border border-neutral-600 p-2 rounded w-[400px]">
            <Image
              alt={name}
              className="rounded"
              src={study_1}
              placeholder="blur"
              width={300}
              priority
            />
          </div>
          <div className="ml-3">
            <p className="font-bold"> 개인 책장</p>
            <p className="text-sm">
              Javascript, ReactJS, Flutter 등을 공부했어요. (๑•̀ㅂ•́)و
            </p>
          </div>
        </div>
        <div className="flex items-end mt-6">
          <div className="flex justify-center border border-neutral-600 p-2 rounded w-[480px]">
            <Image
              alt={name}
              className="rounded"
              src={study_2}
              placeholder="blur"
              width={300}
              priority
            />
          </div>
          <div className="ml-3">
            <p className="font-bold"> 수강 강의 목록 </p>
            <p className="text-sm">
              빠르게 기술을 습득해야 할 때는 영상 강의를 보고 공부했어요.
              (๑•̀ㅂ•́)و
            </p>
          </div>
        </div>
        <div className="flex items-end mt-6">
          <div className="flex justify-center border border-neutral-600 p-2 rounded w-[480px]">
            <Image
              alt={name}
              className="rounded"
              src={study_3}
              placeholder="blur"
              width={300}
              priority
            />
          </div>
          <div className="ml-3">
            <p className="font-bold"> Study Blog 들 </p>
            <p className="text-sm">
              최근엔 블로그를 못쓰고 있지만, 블로그에 정리하며 공부했어요.
              (๑•̀ㅂ•́)و
            </p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          {links().map((a) => (
            <a
              key={a.name}
              rel="noopener noreferrer"
              target="_blank"
              href={a.link}
              className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
            >
              <div className="flex items-center">
                {a.icon}
                <div className="ml-3">{a.name}</div>
              </div>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
