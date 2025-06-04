"use client";
import { ChevronDown } from "lucide-react";
import HeaderComponent from "./header/header";
import FooterComponent from "./footer/footer";
import { useState } from "react";

export default function Home() {
  type ProductTwoCol = {
    image: string ;
    hoverImage: string ;
    title: string ;
    description: string ;
    status: string ;
  };

 const ProductCardTwoCol = ({ image, hoverImage, title, description, status }: ProductTwoCol) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="relative w-full md:w-[557px] md:h-[371px] h-[248px] flex justify-end 
                    bg-cover bg-no-repeat bg-center transition-all duration-300"
          style={{
            backgroundImage: `url('${isHovered ? hoverImage : image}')`,
          }}
        >
          {/* Pre-Order Label */}
          <div className="w-[108px] h-[27px] bg-peach flex items-center justify-center mt-4">
            <p className="text-xs font-semibold tracking-wider">PRE-ORDER</p>
          </div>

          {/* Hover "SHOP NOW" Button (only if NOT Sold Out) */}
          {status !== 'Sold Out' && (
            <button
              className={`absolute -bottom-9 right-0 transform bg-navy text-white text-xs font-bold px-4 py-2 
                          rounded-2xl shadow hover:bg-[#111938] not-only:transition-opacity duration-500 ease-in-out
                          w-[101.88px] h-[30.13px] flex items-center justify-center
                          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-0 pointer-events-none'}`}
            >
              SHOP NOW
            </button>
          )}
        </div>

        {/* Title, Description, and Status */}
        <div className="flex flex-row w-full justify-between mt-2">
          <div className="flex flex-col justify-between md:w-auto w-[60%]">
            <p className="md:text-lg text-sm font-bold text-navy tracking-[2px] group-hover:text-black">{title}</p>
            <p className="md:text-sm text-xs font-light text-navy tracking-wide group-hover:text-black">
              {description}
            </p>
          </div>
          <p className={`md:text-base text-sm font-light ${status === 'Sold Out' ? 'text-sold' : 'text-navy'}`}>
            {status}
          </p>
        </div>
      </div>
    );
  };

  type ProductThreeCol = {
    image: string ;
    hoverImage: string ;
    title: string ;
    status: string ;
  };

const ProductCardThreeCol = ({ image, hoverImage, title, status }: ProductThreeCol) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        className="group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="relative w-full md:w-[336px] md:h-[336px] h-[248px] flex justify-end 
                    bg-cover bg-no-repeat bg-center transition-all duration-300"
          style={{
            backgroundImage: `url('${isHovered ? hoverImage : image}')`,
          }}
        >

          <div className="w-[108px] h-[27px] bg-peach flex items-center justify-center mt-4">
            <p className="text-xs font-semibold tracking-wider">PRE-ORDER</p>
          </div>

          {status !== 'Sold Out' && (
            <button
              className={`absolute -bottom-9 right-0 transform bg-navy text-white text-xs font-bold px-4 py-2 
                          rounded-2xl shadow hover:bg-[#111938] transition-opacity duration-500 ease-in-out
                          w-[101.88px] h-[30.13px] flex items-center justify-center
                          ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-0 pointer-events-none'}`}
            >
              SHOP NOW
            </button>
          )}
        </div>

        {/* Title and Status */}
        <div className="flex flex-row w-full justify-between mt-2">
          <div className="flex flex-col justify-between md:w-auto w-[60%]">
            <p className="md:text-lg text-sm font-bold text-navy tracking-[2px] group-hover:text-black">
              {title}
            </p>
          </div>
          <p className={`md:text-base text-sm font-light ${status === 'Sold Out' ? 'text-sold' : 'text-navy'}`}>
            {status}
          </p>
        </div>
      </div>
    );
};

  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col font-sans relative">

      <div
        className="absolute top-0 left-0 w-full md:h-[680px] h-[400px] bg-cover bg-no-repeat bg-center brightness-45 -z-10"
        style={{ backgroundImage: `url('/main_bg.png')` }}
      ></div>

  
      <header className="fixed w-full z-20">
        <HeaderComponent />
      </header>

      <main className="pt-20 w-full relative z-10 ">
        <section className="w-full md:h-[500px] h-[400px text-center flex flex-col justify-center items-center gap-3">
          <p className="font-bold text-[37.5px] text-lpeach tracking-[3px] leading-11">A CONSOLE FOR <br />EVERY WORKFLOW</p>
          <p className="font-light text-lg text-lpeach tracking-[1px]">Discover the perfect console for yours.</p>
        </section>

        <section className="w-full h-25 flex justify-center items-center">
          <ChevronDown size={70} strokeWidth={1} color="white" className="transition-transform duration-500 hover:scale-120"
            onClick={() => { document.getElementById("next-section")?.scrollIntoView({ behavior: "smooth" });}} />
        </section>

        <section id="next-section" className="w-full bg-stone-100 flex justify-center p-10">
          <div className="md:w-auto w-full grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-7">
            {[
              {
                image: "/mini_1.png",
                hoverImage: "/mini_1_hover.png",
                title: "MINI CONSOLE",
                description: "Ideal for everyday shortcuts. Adaptable to any workflow.",
                status: "Sold Out",
              },
              {
                image: "/mini_2.png",
                hoverImage: "/mini_2_hover.png",
                title: "AUDIO CONSOLE",
                description: "Ideal for music & audio. Adaptable to any workflow.",
                status: "$570",
              },
              {
                image: "/mini_3.png",
                hoverImage: "/mini_3_hover.png",
                title: "PHOTO CONSOLE",
                description: "Ideal for photo & video. Adaptable to any workflow.",
                status: "Sold Out",
              },
              {
                image: "/mini_4.png",
                hoverImage: "/mini_4_hover.png",
                title: "VIDEO CONSOLE",
                description: "Ideal for Video & Film. Adaptable to any workflow.",
                status: "Sold Out",
              },
            ].map((product, index) => (
              <ProductCardTwoCol key={index} {...product} />
            ))}
            <div className="md:col-span-2">
              <div
                className="w-full md:h-[452px] h-[248px] bg-blue-400 flex justify-end 
                bg-cover bg-no-repeat bg-center hover:bg-[url('/mini_5_hover.png')] bg-[url('/mini_5.png')]"
              >
                <div className="w-[108px] h-[27px] bg-peach flex items-center justify-center mt-4">
                  <p className="text-xs font-semibold tracking-wider">PRE-ORDER</p>
                </div>
              </div>
              <div className="flex flex-row w-full justify-between mt-1">
                <div className="flex flex-col justify-between group md:w-auto w-[80%]">
                  <p className="md:text-lg text-sm font-bold text-navy tracking-[2px] group-hover:text-black">
                    MONOGRAM KEYBOARD + MULTIPAD
                  </p>
                  <p className="md:text-sm text-xs font-light text-navy tracking-wide group-hover:text-black">
                    Adaptable to any workflow.
                  </p>
                </div>       
                <p className="md:text-base text-sm font-light text-sold">Sold Out</p>  
              </div>
            </div>
          </div>              
        </section>
    
        <section className="w-full bg-graybg md:h-[507px] h-[350px] relative overflow-hidden">
          {/* Text Container */}
          <div className="relative z-10 flex flex-col justify-center items-center gap-4 -mt-4 md:pt-0 md:top-20 top-16 px-4 md:px-0">
            <p className="font-bold text-4xl md:text-[37.5px] md:w-full w-[80%] text-navy tracking-[3px] leading-tight md:leading-[2.75rem] text-center">
              CREATE YOUR OWN CONSOLE
            </p>
            <p className="font-light text-base md:text-lg text-navy tracking-[1px] text-center">
              Add-on to make it perfect.
            </p>
          </div>

          {/* Background Image */}
          <div
            className="relative z-0 top-5 left-1/2 transform -translate-x-1/2
                      w-[90%] md:w-1/2 md:h-[80%] h-[60%] bg-[url('/section_bg.png')] bg-cover bg-no-repeat bg-center"
          />
        </section>
            
        <section id="next-section" className="w-full bg-stone-100 flex justify-center p-10">
          <div className="md:w-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10 gap-y-7">
            {Array(5).fill(0).flatMap(() => [
            { image: "/mini_1.png", hoverImage: "/mini_1_hover.png", title: "MINI CONSOLE", status: "Sold Out" },
            { image: "/mini_2.png", hoverImage: "/mini_2_hover.png", title: "AUDIO CONSOLE", status: "Sold Out" },
            { image: "/mini_3.png", hoverImage: "/mini_3_hover.png", title: "PHOTO CONSOLE", status: "$69" }
          ]).map((product, index) => (
            <ProductCardThreeCol key={index} {...product} />
          ))}
          </div>   
        </section> 
      </main>

      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}
