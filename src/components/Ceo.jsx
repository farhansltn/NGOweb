import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn , textVariant} from "../utils/motion"
import { testimonials } from "../constants"
import { name } from "ejs"
import { useGSAP } from "@gsap/react"
import { animateWithGsap } from "../utils/animations"

const FeedBackCard = ({index, testimonial, name,
designation, company, image}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-[#CC7351] rounded-3xl w-[250px] p-8">
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">
          {testimonial}</p>
        <div className="mt-7 flex justify-between 
        items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>{name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
            <img src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"/>
          </div>
        </div>
      </div>
  </motion.div>
)

const Feedbacks = () => {
  useGSAP(()=>{
    animateWithGsap('#ceo_title', {  
      opacity: 1, y: 0, duration: 1, stagger: 0.25})
    animateWithGsap('#ceo_subtitle', {
      opacity: 1, y: 0, duration: 2,})
  },[])
  return (
    <div className="rounded-[20px]">
      <div className="rounded-2xl min-h-[200px]">
          <h1 id='ceo_title' className="section-heading_red text-[#D24545] roboto-light">
            Greetings
          </h1>
          <h2 id='ceo_subtitle' className="text-[#FDA403] text-3xl lg:text-5xl roboto-light font-semibold">
            From our Ceo
          </h2>
      </div>
      <div className='flex flex-wrap justify-center gap-5'>
        {testimonials.map((testimonial, index) => (
          <FeedBackCard
          key={testimonial.name}
          index={index}
          {...testimonial}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"")