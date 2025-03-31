import { FAQsAccordion } from "@/components/faq-accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { nomixa } from "./fonts"
import { Marquee } from "@/components/magicui/marquee"



const firstRow = [
  {
    src: "/logos/binance.png",
    alt: "binance"
  },
  {
    src: "/logos/glo.png",
    alt: "binance"
  },
  {
    src: "/logos/flutterwave.png",
    alt: "binance"
  },
  {
    src: "/logos/glovo.png",
    alt: "binance"
  },
  {
    src: "/logos/grace-health.png",
    alt: "binance"
  },
  {
    src: "/logos/cedea.png",
    alt: "binance"
  },
  {
    src: "/logos/julius.png",
    alt: "binance"
  },
  {
    src: "/logos/stallion.png",
    alt: "binance"
  },
]






export default function Home() {
  return (
    <main className="space-y-16">
      <section className="container">
        <div className="flex items-center justify-between px-8">
          <div className="">
            <h2 className={cn(nomixa.className, "text-5xl leading-[64px] font-semibold inline mx-auto")}>
              Turn Your{" "}
              <span className="rounded-full bg-[#1CFEBA] text-3xl border border-black font-medium border-b-4 inline-block w-36 text-center pt-2 ">
                Ideas
              </span>{" "}
              Into <br /> Impact. Build. <br />{" "}
              <span className="rounded-full bg-red-400 text-white border border-black font-normal border-b-4 text-2xl w-80 inline-block text-center pt-2 mr-3">
                Experiment
              </span>
              Grow
            </h2>

            <p className="font-light text-2xl my-6">
              We provide a collaborative ecosystem where <br /> tech creatives, innovators, and problem-solvers <br />{" "}
              bring their boldest ideas to life
            </p>

            <Button className="w-[203px] py-6 my-8">Get Involved</Button>
          </div>

          <div
            style={{
              boxShadow: "-16px 16px #1B5299"
            }}
            className="rounded-2xl"
          >
            <Image src={"/hero-image.png"} alt="hero image " width={560} height={600} className="" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex items-center pb-8">
            <h3 className="text-nowrap">Our mentors work at</h3>
            <Separator />
          </div>

          <div className="space-y-6">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((company, index) => (
                <div key={index}>
                  <Image src={company.src} alt={company.alt} width={157} height={27} />
                </div>
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {firstRow.map((company, index) => (
                <div key={index}>
                  <Image src={company.src} alt={company.alt} width={157} height={27} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      <section className="bg-[#1B5299]/5 ">
        <div className="container py-16">
          <div className="flex items-center gap-6">
            <div className="space-y-10">
              <h3 className={cn(nomixa.className, "text-[#1B5299] text-2xl")}>About X3Lab</h3>

              <h2 className={cn(nomixa.className, "text-4xl font-medium")}>
                Empowering Innovators, <br />
                Builders & Visionaries
              </h2>

              <p className="text-2xl font-light">
                We provide the resources, mentorship and scalable projects. Our ecosystem fosters collaboration,
                learning, and hands-on execution, bridging the gap between theory and real-world application.
              </p>
              <Button className="w-[203px] py-6">
                Donate
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 21H13.62C14.197 21 14.7672 20.8751 15.2914 20.634C15.8157 20.3928 16.2815 20.0411 16.657 19.603L21.759 13.651C21.8658 13.5266 21.9404 13.3778 21.9762 13.2178C22.012 13.0577 22.0079 12.8913 21.9642 12.7333C21.9206 12.5752 21.8387 12.4303 21.7258 12.3113C21.6129 12.1923 21.4726 12.1029 21.317 12.051L19.349 11.395C18.8734 11.2401 18.3669 11.205 17.8745 11.2928C17.382 11.3805 16.9188 11.5884 16.526 11.898L13.341 14.445L12.724 13.21C12.3935 12.5443 11.8831 11.9844 11.2507 11.5938C10.6184 11.2032 9.88926 10.9975 9.146 11H4C2.897 11 2 11.897 2 13V19C2 20.103 2.897 21 4 21ZM4 13H9.146C9.909 13 10.594 13.423 10.935 14.105L11.382 15H7V17H13.014C13.1678 16.9978 13.3191 16.9602 13.456 16.89L13.459 16.889L13.463 16.887H13.466L13.468 16.886H13.472L13.473 16.885C13.482 16.888 13.476 16.884 13.476 16.884C13.486 16.884 13.478 16.883 13.478 16.883H13.479L13.481 16.882L13.484 16.881L13.486 16.88L13.488 16.879L13.491 16.878L13.493 16.877C13.496 16.877 13.494 16.876 13.495 16.876L13.498 16.874L13.5 16.873L13.502 16.872L13.505 16.871L13.507 16.87H13.508L13.51 16.869L13.513 16.868L13.515 16.867C13.524 16.866 13.518 16.866 13.518 16.866L13.52 16.865C13.5584 16.8415 13.5951 16.8155 13.63 16.787L17.776 13.47C18.038 13.262 18.399 13.197 18.716 13.303L19.273 13.489L15.14 18.312C14.9498 18.5278 14.716 18.7008 14.4539 18.8194C14.1919 18.938 13.9076 18.9996 13.62 19H4V13ZM16 2.00001H15.983C15.82 2.00201 14.977 2.03901 14 2.70501C13.049 2.05701 12.226 2.00501 12.032 2.00101L12.002 2.00001H11.998C11.197 2.00001 10.443 2.31301 9.879 2.87801C9.313 3.44501 9 4.19801 9 5.00001C9 5.80201 9.313 6.55501 9.861 7.10401L13.275 10.69C13.3689 10.7875 13.4816 10.8651 13.6062 10.918C13.7308 10.9709 13.8648 10.9982 14.0002 10.9981C14.1356 10.998 14.2696 10.9706 14.3941 10.9175C14.5187 10.8643 14.6312 10.7866 14.725 10.689L18.121 7.12101C18.688 6.55501 19 5.80201 19 5.00001C19 4.19801 18.687 3.44501 18.122 2.87901C17.8443 2.59964 17.5139 2.37811 17.15 2.22724C16.7861 2.07636 16.3959 1.99913 16.002 2.00001H16ZM17 5.00001C17 5.26701 16.896 5.51801 16.689 5.72501L14 8.55001L11.293 5.70701C11.104 5.51801 11 5.26701 11 5.00001C11 4.73301 11.104 4.48201 11.294 4.29201C11.475 4.10834 11.7211 4.00342 11.979 4.00001C12.004 4.00101 12.481 4.03201 13.046 4.48501C13.1267 4.55034 13.209 4.62434 13.293 4.70701L14 5.41401L14.707 4.70701C14.791 4.62434 14.8733 4.55034 14.954 4.48501C15.483 4.06001 15.93 4.00701 16.006 4.00101C16.269 4.00238 16.5208 4.10729 16.707 4.29301C16.896 4.48201 17 4.73301 17 5.00001Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>

            <Image src={"/about-image.png"} alt="About picture" width={647} height={515} className="w-1/2 h-1/2" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            <div className="w-full bg-[#1B5269]  rounded-md"></div>
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx}>
                <WhatWeDo />
              </div>
            ))}
            <div className="w-full bg-[#1B5269]  rounded-md"></div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <div className="flex bg-gray-100 gap-14">

            <div className="p-8 space-y-14">
              <h2 className={cn(nomixa.className, "text-5xl font-medium")}>Hear Success <br /> Stories</h2>

              <p className="text-2xl font-light">Meet Joseph, a former apprentice who landed a top role in tech after completing our work simulation program</p>
            </div>

            <div className="w-full">
              <Image src={"/success-people.png"} alt="success-people " width={756} height={319} />
              <div className="bg-black p-12 text-white space-y-16 ">
                <h3>Real world Experience, Real Growth</h3>

                <div className="flex justify-between items-center">
                  <span className="border border-white px-4 py-2 rounded-full text-center "> Innovation</span>
                  <span className="border border-white px-4 py-2 rounded-full text-center "> Growth</span>
                  <span className="border border-white px-4 py-2 rounded-full text-center "> Impact</span>
                  <span className="border border-white px-4 py-2 rounded-full text-center "> Creativity</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container flex gap-44 ">
          <div className="pt-4">
            <h2 className={cn(nomixa.className, "text-6xl font-semibold")}>
              Frequently <br />
              Asked <br />
              Questions
            </h2>
            <div className="-translate-x-24">
              <Image src={"/paper-airline.png"} alt="paper airline" width={384} height={256} className="" />
            </div>
          </div>

          <FAQsAccordion />
        </div>
      </section>
    </main>
  )
}

const WhatWeDo = () => {
  return (
    <div className="w-full h-[398px] rounded-md bg-[#1b5269]/5 p-6 py-16 flex justify-between flex-col ">
      <h3 className={cn(nomixa.className, "text-5xl font-semibold")}>01</h3>
      <div className="space-y-6">
        <h4 className={cn(nomixa.className, "text-[28px] font-medium")}>Workspace & Community</h4>
        <p className="font-light text-2xl">Free access to a dynamic and resouceful co-working space</p>
      </div>
    </div>
  )
}
