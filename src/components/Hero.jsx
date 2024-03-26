import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo , smallHeroVideo} from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 
    ? smallHeroVideo : heroVideo);

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(()=> {
    window.addEventListener('resize',handleVideoSrcSet)
  })
  useGSAP(() =>{
    gsap.to('#home',{opacity:1, delay:1.5,duration:12})
    gsap.to('#cta',{opacity:1, y:-50, delay:8})
  },[])
  return (
    <section className="w-full nav-height relative bg-black">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="home" className="hero-title roboto-light">Introducing to Our Communities!</p>
        <div id='about' className="md:w-full w-4/6 h-4/6">
          <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc} >
            <source src={videoSrc} type='video/mp4'/>
          </video>
        </div>
      </div>
      <div id='cta' className="flex-col flex items-center 
      opacity-0 translate-y-20">
        <a href="#highlights" className='roboto-medium btn sm:mt-20'>See Us</a>
        <p className='font-normal text-xl roboto-light text-slate-200'>Our Work and Project!</p>
      </div>
    </section>
  )
}

export default Hero