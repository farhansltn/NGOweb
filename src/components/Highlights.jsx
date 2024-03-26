import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'
import { animateWithGsap } from '../utils/animations'

const Highlights = () => {
  useGSAP(()=> {
    animateWithGsap('#title', {y:0, opacity:1})
    animateWithGsap('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })

  },[])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-black'>
      <div className="screen-max-width ">
        <div className='mt-12 mb-12 w-full md:flex items-end justify-between'>
          <h1 id='title' className="section-heading roboto-light">
            Gotta to see us!
          </h1>
          <div className="flex-wrap flex item-end gap-5">
            <a href='#work' className='link roboto-light'>Watch our doings.</a>
            <img src={watchImg} alt="watch" className='ml-2' />
            <a href='#chip' className='link roboto-light'>Watch our Project.</a>
            <img src={rightImg} alt="right" className='ml-2' />
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  )
}

export default Highlights