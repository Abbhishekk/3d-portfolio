/* eslint-disable @typescript-eslint/no-explicit-any */

import Tilt from 'react-parallax-tilt'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services,descriptions } from "../constants";
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }: any) => {
    return(
      <Tilt className='sm:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div 
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justtify-evenly items-center flex-col'
          >
            <img src={`${icon}`} alt={title} className='w-16 h-16 object-contain'  />
            <h3 className='text-white text-[20px] font-bold text-center' >{title}</h3>
          </div>
        </motion.div>

      </Tilt>
    )
}

const About = () => {
  return (
    <>
      <motion.div  variants={textVariant(1)}>
        <p className={`${styles.sectionSubText } `} >Introduction</p>
        <h2 className={`${styles.sectionHeadText}`} >Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       {descriptions.about}
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10' >
    {services.map((service, index) => (
      <ServiceCard key={service.title} index={index} {...service} />
    ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")