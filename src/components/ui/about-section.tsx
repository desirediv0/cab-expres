"use client";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube, IconArrowRight } from "@tabler/icons-react";
import { useRef } from "react";

export default function AboutSection3() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <section className="py-14 md:py-16 bg-[#f9f9f9]" ref={heroRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Header with social icons */}
          <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2 text-xl">
              <span className="text-yellow-500 animate-spin">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-500"
              >
                ABOUT CABEXPRESS
              </TimelineContent>
            </div>
            <div className="flex gap-2.5">
              <TimelineContent
                as="a"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 border border-gray-200 bg-white rounded-lg flex items-center justify-center cursor-pointer hover:border-yellow-450 hover:bg-yellow-400/10 transition-colors"
              >
                <IconBrandFacebook size={14} className="text-gray-500" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 border border-gray-200 bg-white rounded-lg flex items-center justify-center cursor-pointer hover:border-yellow-450 hover:bg-yellow-400/10 transition-colors"
              >
                <IconBrandInstagram size={14} className="text-gray-500" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 border border-gray-200 bg-white rounded-lg flex items-center justify-center cursor-pointer hover:border-yellow-450 hover:bg-yellow-400/10 transition-colors"
              >
                <IconBrandLinkedin size={14} className="text-gray-500" />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 border border-gray-200 bg-white rounded-lg flex items-center justify-center cursor-pointer hover:border-yellow-450 hover:bg-yellow-400/10 transition-colors"
              >
                <IconBrandYoutube size={14} className="text-gray-500" />
              </TimelineContent>
            </div>
          </div>

          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group"
          >
            <svg
              className="w-full"
              width={"100%"}
              height={"100%"}
              viewBox="0 0 100 40"
            >
              <defs>
                <clipPath
                  id="clip-inverted"
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width={"100%"}
                height={"100%"}
                xlinkHref="/about.jpg"
              ></image>
            </svg>
          </TimelineContent>

          {/* Stats */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-3 text-sm">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-yellow-600 font-extrabold">10+ Years</span>
                <span className="text-gray-650 font-medium">experience</span>
                <span className="text-gray-300">|</span>
              </div>
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-yellow-600 font-extrabold">5000+</span>
                <span className="text-gray-650 font-medium">happy customers</span>
              </div>
            </TimelineContent>
            <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex lg:text-4xl sm:text-3xl text-2xl items-center gap-2 mb-2"
              >
                <span className="text-yellow-600 font-black leading-none">100+</span>
                <span className="text-gray-700 font-bold uppercase tracking-wider">Destinations</span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2 mb-2 sm:text-base text-xs"
              >
                <span className="text-yellow-600 font-extrabold">24x7</span>
                <span className="text-gray-655 font-medium">active support desk</span>
                <span className="text-gray-300 lg:hidden block">|</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <h1 className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-black text-gray-900 mb-8 font-heading">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 2.2,
                }}
              >
                Crafting Journeys That Make a Difference.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-8 text-gray-600 font-medium text-sm leading-relaxed"
            >
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
              >
                <p className="text-justify">
                  At CabExpress, we specialize in high-quality cab logistics and custom travel itineraries across India. Whether it is a quick outstation one-way trip, a local rental, or pilgrim yatras, our fleet is ready to serve you.
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
              >
                <p className="text-justify">
                  We believe in transparent pricing and verified driver safety. By background-checking all chauffeurs, sanitizing our premium vehicles, and offering flat-rate packages, we ensure your trip is completely stress-free.
                </p>
              </TimelineContent>
            </TimelineContent>
          </div>

          <div className="md:col-span-1">
            <div className="text-right">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-yellow-600 text-2xl font-black font-heading mb-1 tracking-tight"
              >
                CABEXPRESS
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-8"
              >
                Luxury Cab &amp; Holiday Service
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6"
              >
                <p className="text-gray-900 font-semibold text-sm">
                  Ready to transform your next road trip into an unforgettable journey?
                </p>
              </TimelineContent>

              <TimelineContent
                as="a"
                href="/#booking"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="inline-flex bg-black hover:bg-yellow-400 text-white hover:text-black shadow-lg shadow-black/10 border border-black hover:border-yellow-400 gap-2 hover:gap-4 transition-all duration-300 ease-in-out px-6 py-3.5 rounded-xl cursor-pointer font-bold text-xs uppercase tracking-wider"
              >
                LET&apos;S COLLABORATE <IconArrowRight size={14} />
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
