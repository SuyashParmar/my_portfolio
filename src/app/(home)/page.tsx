"use client";
import Avatar from "./components/Avatar";
import ProjectCardList from "../projects/components/ProjectCardList";
import Skills from "@/components/Skills";
// import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link as ScrollLink } from "react-scroll";
import Coursework from "@/components/Coursework";
import { inter, bricolage_grotesque } from "@/utils/fonts";
import About from "../about/components/About";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-[350px]:overflow-hidden"
    >
      <div className="w-full flex justify-center py-5 pt-36 dark:bg-black">
        <div className="w-2/3 max-sm:w-full flex flex-col items-center">
          <div>
            <Avatar />
          </div>
          <div className="mt-4 px-32 max-sm:px-4">
            <h1
              className={`!text-[4.5rem] mt-2 max-sm:!text-[2.2rem] !whitespace-nowrap font-bold tracking-tight text-center ${bricolage_grotesque} `}
            >
              {/* Hi, I&apos;m Suyash Parmar */}
              <TextGenerateEffect words="Hi, I'm Suyash Parmar" />
            </h1>
            

            <h1
              className={`mt-2 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6 ${inter}`}
            >
              I'm a full-stack web developer with a passion for crafting impactful, production-ready applications from concept to deployment. Skilled in both frontend and backend development, I bring projects to life with a focus on seamless user experience and efficient architecture. Alongside my development skills, I’m a dedicated problem solver in Data Structures and Algorithms, applying analytical thinking to optimize performance and solve real-world challenges. Constantly learning and open to tackling new problems, I thrive on building solutions that make a difference.
            </h1>
          </div>
          <div className="mt-10">
            <RainbowButton>
              <ScrollLink
                to="contact-section"
                activeClass="active"
                smooth={true}
                offset={-120}
                duration={1100}
              >
                Get in touch
              </ScrollLink>
            </RainbowButton>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-16">
        <ProjectCardList />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Skills />
      </div>


      <div className="w-full flex justify-center mt-4">
        <Education
          institute_link={
            "https://www.newtonschool.co/newton-school-of-technology-nst/home"
          }
          institute_logo={"/nst.png"}
          course_title={"Bachelors in Computer Science"}
          ending_date={"Expected July 2027"}
          institute_name={"Newton School of Technology"}
          // CGPA={9.18}
          description={
            "I'm currently pursuing a B.Tech with a strong enthusiasm for AI and Machine Learning. In my first year, I built a solid foundation in frontend development, and in my second year, I expanded my skills into backend development, gaining a comprehensive understanding of full-stack web development. I’m eager to continue exploring new technologies and deepening my expertise in AI-driven solutions."
          }
        />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Coursework />
      </div>

      <div className="w-full flex justify-center mt-4">
        <About />
      </div>

      <div className="w-full flex justify-center mt-4" id="contact-section">
        <Contact />
      </div>
    </motion.div>
  );
}
