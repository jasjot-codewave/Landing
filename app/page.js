import Image from "next/image";

import path from "./Assets/Images/path.svg";
import designer from "./Assets/Images/designer.svg";
import icon1 from "./Assets/Icons/1.png";
import features from "./Assets/Images/features.svg";
import feature1 from "./Assets/Images/feature-1.svg";
import feature2 from "./Assets/Images/feature-2.svg";
import feature3 from "./Assets/Images/feature-3.svg";
import path2 from "./Assets/Images/path-2.svg";

export default function Home() {
  return (
    <>
      <section className="bg-white w-full relative min-h-screen overflow-hidden flex justify-between items-center">
        <Image src={path} className="absolute -top-0 -right-28 h-full" />
        <div className="w-[90%] max-w-[1100px] m-auto xl:my-60 xl:block flex justify-center items-center flex-col gap-20 relative">
          <div className="xl:w-1/2">
            <h1 className="text-5xl text-[#091133] font-medium leading-[66px]">Introduce Your Product Quickly & Effectively</h1>
            <p className="my-4 text-lg leading-8 text-[#505F98]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            <div className="flex items-center gap-8 xl:mt-20 mt-10">
              <button className="w-[180px] text-center text-base leading-7 border-[#091133] border-2 bg-[#111B47] text-white font-medium rounded-sm">Purchase UI Kit</button>
              <button className="border-[#091133] border-2 rounded-sm w-[180px] text-center text-base leading-7 font-medium">Learn More</button>
            </div>
          </div>
          <Image src={designer} className="xl:absolute xl:top-[50%] xl:translate-y-[-50%] xl:right-0 w-xl:[40%] w-[50%] m-auto relative" />
        </div>
      </section>
      <section className="bg-white w-[90%] max-w-[1100px] m-auto lg:py-20 py-10 flex justify-center items-center">
        <div className="w-1/2">
          <h2 className="text-[#091133] lg:text-4xl text-2xl lg:leading-[48px] my-5 font-semibold">Light, Fast & Powerful</h2>
          <p className="text-[#6F7CB2] lg:text-base text-sm lg:leading-[28px] my-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <div className="flex justify-center items-center w-full mt-20">
            <div className="w-1/2">
              <Image src={icon1} className="w-[36px] h-[36px]" />
              <p className="lg:text-base tetx-sm lg:leading-[28px] font-semibold text-[#091133] my-1">Title Goes Here</p>
              <p className="lg:text-xs text-[10px] lg:leading-[18px] text-[#5D6970]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>
            <div className="w-1/2">
              <Image src={icon1} className="w-[36px] h-[36px]" />
              <p className="lg:text-base tetx-sm lg:leading-[28px] font-semibold text-[#091133] my-1">Title Goes Here</p>
              <p className="lg:text-xs text-[10px] lg:leading-[18px] text-[#5D6970]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <Image src={features} className="w-full aspect-square" />
        </div>
      </section>
      <section className="bg-white w-[90%] max-w-[1100px] m-auto lg:py-20 py-10 flex justify-center items-center">
        <div className="w-1/2 lg:px-14 px-5">
          <Image src={feature1} className="w-full h-auto" />
        </div>
        <div className="w-1/2 lg:px-14 px-5">
          <h2 className="text-[#091133] lg:text-4xl text-2xl lg:leading-[48px] my-5 font-semibold">Light, Fast & Powerful</h2>
          <p className="text-[#6F7CB2] lg:text-base text-sm lg:leading-[28px] my-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </section>
      <section className="bg-white w-[90%] max-w-[1100px] m-auto py-20 flex justify-center items-center">
        <div className="w-1/2 lg:px-14 px-5">
          <Image src={feature2} className="w-full h-auto" />
        </div>
        <div className="w-1/2 lg:px-14 px-5">
          <h2 className="text-[#091133] lg:text-4xl text-2xl lg:leading-[48px] my-5 font-semibold">Light, Fast & Powerful</h2>
          <p className="text-[#6F7CB2] lg:text-base text-sm lg:leading-[28px] my-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </section>
      <section className="bg-white w-[90%] max-w-[1100px] m-auto py-20 flex justify-center items-center">
        <div className="w-1/2 lg:px-14 px-5">
          <Image src={feature3} className="w-full h-auto" />
        </div>
        <div className="w-1/2 lg:px-14 px-5">
          <h2 className="text-[#091133] lg:text-4xl text-2xl lg:leading-[48px] my-5 font-semibold">Light, Fast & Powerful</h2>
          <p className="text-[#6F7CB2] lg:text-base text-sm lg:leading-[28px] my-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <button className="text-white bg-[#111B47] px-8 py-2 rounded-sm text-sm mt-5">Purchase Now</button>
        </div>
      </section>
      <section className="bg-white w-full relative min-h-screen overflow-hidden">
        <Image src={path2} className="w-full absolute top-0 left-0" />
        <div className="flex flex-col justify-center items-center w-[90%] max-w-[650px] m-auto min-h-screen text-center relative">
          <h2 className="text-[#091133] text-4xl leading-[48px] my-5 font-semibold">A Price To Suit Everyone</h2>
          <p className="text-[#6F7CB2] text-base leading-[28px] my-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <h1 className="text-[#222F65] text-5xl leading-[66px] tracking-[1px] mt-8 font-bold">$40</h1>
          <p className="text-[#37447E] text-base">UI Design Kit</p>
          <p className="text-[#5D6970] text-sm leading-6 mt-10">See, One price. Simple.</p>
          <button className="text-white bg-[#111B47] px-8 py-2 rounded-sm text-sm mt-2">Purchase Now</button>
        </div>
      </section>
    </>
  );
}
