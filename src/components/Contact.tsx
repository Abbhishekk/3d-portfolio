import { useState } from "react";
import {motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm } from "react-hook-form";



type formElements = {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {register, handleSubmit,watch,reset , formState:{errors}} = useForm<formElements>()
  // const formRef = useRef<FormProps>(null);
  console.log(watch("message"));

  const onSubmit:SubmitHandler<formElements> = (data) =>{
  const {name, email, message} = data;
  setLoading(true);
  emailjs.send('service_rstvjyx', 'template_0zjhjzk', {form_name: name, to_name: 'Abhishek', from_email: email,to_email: "abhishekbante01@gmail.com" , message}, 'pRuVROAFzzOM5uAZ6')
      .then((result) => {
        setLoading(false);
        alert("Thank you! I will contact you as soon as possible.");
          reset(data);
          console.log(result.text);
      }, (error) => {
        setLoading(false)
          console.log(error.text);
          alert("Something went wrong")
      });
  console.log(name + " " + email + " "+ message)
  }


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2,1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      > 
      <p className={`${ styles.sectionSubText }  `}> Get in touch... </p>
      <h3 className={` ${ styles.sectionHeadText }  `}> Contact. </h3>
      
        <form  onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-8">
          <label htmlFor="name" className=" flex flex-col ">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" {...register("name", { required: true })} id="name" placeholder="Please Enter your name" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
            {errors.name && (
              <span className="text-red-500">This field is required</span>  
            )}
          </label>
          <label htmlFor="email" className=" flex flex-col ">
            <span className="text-white font-medium mb-4">Enter Email</span>
            <input type="emial" {...register("email", { required: true })} id="email" placeholder="Please Enter your Email" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
            {errors.email && (
              <span className="text-red-500">This field is required</span>  
            )}
          </label>
          <label htmlFor="message" className=" flex flex-col ">
            <span className="text-white font-medium mb-4">Enter Message</span>
            <textarea rows={7}  {...register("message", { required: true })} id="message" placeholder="Write your message here" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
            {errors.message && (
              <span className="text-red-500">This field is required</span>  
            )}
          </label>
              <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
              >
                {loading ? "Sending..." : "Send"}
              </button>
        </form>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2,1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact,"contact")