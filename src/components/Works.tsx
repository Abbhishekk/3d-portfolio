/* eslint-disable @typescript-eslint/no-explicit-any */
import {motion} from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { projects, descriptions } from "../constants";
import { SectionWrapper } from "../hoc";
import Tilt from "react-parallax-tilt";
import {  github } from "../assets";



const ProjectCard  = (props:any) =>{
return (
  <motion.div
    variants={fadeIn("up", "spring", props.index * 0.5, 0.75)}
    
  >
    <Tilt 
    className="w-full sm:w-[360px]   bg-tertiary p-5 rounded-2xl">
    <div className="relative w-full h-[230px]">
      <img src={`${props.project.image}`} alt={`${props.project.name}`} className="w-full h-full object-cover rounded-2xl" />
      <div className="absolute inset-0 flex justify-end m-3 card-img_hover" >
        <div
          onClick={()=> window.open(props.project.source_code_link, "_blank")}
          className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
        >
          <img src={`${github}`} alt="GitHub" className=" object-contain" />
        </div>
      </div>
    </div>

    <div className="mt-5">
      <h3 className="font-bold text-white text-[24px]" >{props.project.name}</h3>
      <p className="text-secondary text-[14px] mt-3" >{props.project.description}</p>
    </div>
    <div className="mt-4 flex flex-wrap gap-2" >
      <ul className="flex">

        {props.project.tags.map((  tag: any,index: any)=>{
          return(
            <li key={`tag-${index}`} className={`${tag.color} text-[14px] py-1 px-2 rounded-[10px] list-none`}>
              #{tag.name}

            </li>
          ) 
        })}
      </ul>
    </div>
    </Tilt>
  </motion.div>
)

}

const Works = () => {
  return (

    <>
    <motion.div variants={textVariant(0.5)} >
      <p className={`${styles.sectionSubText } `} >My work</p>
        <h2 className={`${styles.sectionHeadText}`} >Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" >
            {descriptions.work}
        </motion.p>

      </div>
      <div className="mt-20 flex flex-wrap gap-7" >
        {projects.map((project, index) => (
          <ProjectCard key={`project-`+index} index={index} project={project} />
        ))}

      </div>
       
    </>
  )
}

export default SectionWrapper(Works,"work")