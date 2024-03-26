import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";

const ExperienceCard = ({ experience }) => {
    useGSAP(()=> {
      animateWithGsap('#project', { opacity: 1, y: 0 })
      animateWithGsap('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
    
      },[])
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#A8CD9F",
        color: "black",
      }}
      contentArrowStyle={{ borderRight: "15px solid #E8751A" }}
      className="roboto-medium"
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div 
        id="project" className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-black text-[24px] roboto-medium font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="screen-max-width ">
            <div className='mt-2 mb-12 w-full md:flex items-end justify-between'>
                <h1 id='project' className="section-heading_dark">
                    Our Projects!
                </h1>
            </div>
        </div>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");