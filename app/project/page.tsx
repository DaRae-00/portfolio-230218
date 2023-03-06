"use client";
import React from "react";
import clsx from "clsx";
import type { Metadata } from "next";
import Image from "next/image";
import mac from "../../asset/image/mac.png";
import macB from "../../asset/image/mac_bottom.png";
import right from "../../asset/image/right.png";
import bot1 from "../../asset/image/bots/bot-8.png";
import { bots, webs, dashboard, pms } from "../../projects/images";

export const metadata: Metadata = {
  title: "Project",
  description: "project of darae",
};

export default function ProjectPage() {
  const [target, setTarget] = React.useState(0);
  const [images, setImages] = React.useState([{ id: 0, img: bot1 }]);
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  React.useEffect(() => {
    setImages(bots);
  }, []);

  React.useEffect(() => {
    let targetImages = bots;

    switch (target) {
      case 0:
        targetImages = bots;
        break;
      case 1:
        targetImages = webs;
        break;
      case 2:
        targetImages = dashboard;
        break;
      case 3:
        targetImages = pms;
        break;
      default:
        break;
    }

    setImages(targetImages);
    setSelectedIdx(0);
  }, [target]);

  const onSelectTarget = (targetNum) => {
    setTarget(targetNum);
  };

  const onRight = () => {
    if (selectedIdx === images.length - 1) {
      setSelectedIdx(0);
    } else {
      setSelectedIdx(selectedIdx + 1);
    }
  };

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Developed</h1>
      <div className="flex mt-8">
        <div
          className={clsx(
            "border border-neutral-200 p-2 rounded m-2 min-w-[80px] max-h-[40px] text-center hover:bg-zinc-500 cursor-pointer active:text-lg active:text-bold",
            { "bg-zinc-500": target === 0 }
          )}
          onClick={() => onSelectTarget(0)}
        >
          Bots
        </div>
        <div
          className={clsx(
            "border border-neutral-200 p-2 rounded m-2 min-w-[80px] max-h-[40px] text-center hover:bg-zinc-500 cursor-pointer active:text-lg active:text-bold",
            { "bg-zinc-500": target === 1 }
          )}
          onClick={() => onSelectTarget(1)}
        >
          Web
        </div>
        <div
          className={clsx(
            "border border-neutral-200 p-2 rounded m-2 min-w-[80px] max-h-[40px] text-center hover:bg-zinc-500 cursor-pointer active:text-lg active:text-bold",
            { "bg-zinc-500": target === 2 }
          )}
          onClick={() => onSelectTarget(2)}
        >
          Dashboard
        </div>
        <div
            className={clsx(
                "border border-neutral-200 p-2 rounded m-2 min-w-[80px] max-h-[40px] text-center hover:bg-zinc-500 cursor-pointer active:text-lg active:text-bold",
                { "bg-zinc-500": target === 3 }
            )}
            onClick={() => onSelectTarget(3)}
        >
          PM
        </div>
      </div>
      <div className="flex justify-start mt-8">
        <div>
          <div className="relative" style={{ minWidth: "800px" }}>
            <div className="absolute z-10">
              <Image
                alt={"mac"}
                src={mac}
                placeholder="blur"
                width={800}
                priority
              />
              <Image
                alt={"mac"}
                src={macB}
                placeholder="blur"
                width={800}
                priority
                style={{ marginTop: "-295px" }}
              />
            </div>
            <div
              className="absolute bg-white mt-[100px]"
              style={{ zIndex: "-10px", height: "400px", width: "790px" }}
            >
              background
            </div>

            <Image
              alt={"mac"}
              src={images[selectedIdx].img}
              className="absolute top-8 left-3"
              placeholder="blur"
              width={780}
              priority
            />
          </div>
        </div>
        <div
          className="mt-[445px] cursor-pointer ml-5 min-w-[68px]"
          onClick={onRight}
        >
          <div className="font-bold text-sm"> click!</div>
          <Image
            alt={"mac"}
            src={right}
            placeholder="blur"
            className="hover:w-12"
            width={50}
            priority
          />
        </div>
      </div>
      <div></div>
      <div
        className="dark:prose-invert text-neutral-800 dark:text-neutral-200 h-[300px]"
        style={{ marginTop: "215px" }}
      >
        {target === 0 && (
          <>
            <h3 className="font-bold text-xl font-serif">
              기획부터 Nodejs개발까지
            </h3>
            <br />
            서비스의 타겟층을 노인에서 8세이하의 아이로 변경 하려는 전략 기획에
            따라 아이들이 사용할 수 있는 봇서비스가 필요했음.
            <br />
            <br />
            '숫자봇', '구구단 봇'을 기획하고 개발함.
            <br />
            <br />
            사용층은 8세 이하의 아이들이었으나, 로봇을 구매하는 것은 아이들이
            아닌 아이들을 가진 부모임을 생각하고 리서치를 진행하였음.
            <br />
            <br />
            로봇이 가진 하드웨어적 한계점을 보완하는 방법에 대해 고민.
          </>
        )}
        {target === 1 && (
          <>
            <h3 className="font-bold text-xl font-serif">
              Web 개발 (VueJS, ReactJS) / Storybook, Figma로 협업
            </h3>
            <br />
            VueJS와 ReactJS를 이용하여 Web개발.
            <br />
            VueJS로 Web App 개발.
            <br />
            <br />
            Naver 지도, Google 지도 Api 활용하여 개발.
            <br />
            A4사이즈로 구강 상태 평가서 프린트 가능하도록 개발.
            <br />
            <br />
            A4사이즈로 화면을 개발 할 때, 테이블 height가 길어지거나 사진의
            개수가 많아질 때
            <br />
            A4용지 사이즈에 맞도록 용지만 늘어나게 하는 것을 고민.
          </>
        )}
        {target === 2 && (
          <>
            <h3 className="font-bold text-xl font-serif">
              Dashboard 개발 (D3 활용)
            </h3>
            <br />
            여러 Chart모듈들과 D3라이브러리를 활용하여 개발.
            <br />
            svg를 활용하여 개발.
          </>
        )}
        {target === 3 && (
            <>
              <h3 className="font-bold text-xl font-serif">
                프로젝트 일정 관리 및 front end 개발자 관리
              </h3>
              <br />
              프로젝트의 전체 일정 관리 및 리소스 관리.
              <br />
              SDS문서 작성, figma UX
              <br />
              front end 개발자 교육 및 일정 관리.
            </>
        )}
      </div>
    </section>
  );
}
