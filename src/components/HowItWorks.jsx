import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../utils/animations'

const HowItWorks = () => {
    const videoRef = useRef()
    useGSAP(()=>{
        gsap.from('#chip',{
            scrollTrigger:{
                trigger:'#chip',
                start:'20% bottom'
            },
            opacity:0,
            scale:2,
            duration:2,
            ease:'power2.inOut'
        })
        animateWithGsap('.g_fadeIn',{
            opacity:1,
            y:0,
            duration:1,
            ease:'power2.inOut'
        })
    },[])
  return (
    <section className="common-padding">
        <div className="screen-max-width videoLogo p-20 w-full">
            <div className="flex-center w-full my-20" id='chip'>
                <img src={chipImg} alt='chip' width={180} height={180} />
            </div>
            <div className="flex flex-col items-center">
                <h2 className="hiw-title roboto-medium">
                    Knowledge is the key.
                    <br />It matters.
                </h2>
                <p className="hiw-subtitle roboto-light">
                    We are here to support our education to be more accesible for everyone
                </p>
            </div>
            <div className="mt-10 md:mt-20 ">
                <div className="relative h-full flex-center">
                    <div className="overflow-hidden">
                        <img src={frameImg} alt="frame" className='bg-transparent relative z-10' />
                    </div>
                    <div className="hiw-video">
                        <video className='pointer-events-none' playsInline preload='none' muted
                        autoPlay ref={videoRef} src={frameVideo} type='video/mp4'>

                        </video>
                    </div>
                </div>
                <p className="text-white font-semibold text-center mt-3 roboto-light">
                    Capture the moment with us.
                </p>
            </div>
                <div className="hiw-text-container mt-10">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn roboto-light ">
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-[#FFBB64] roboto-light">
                      best graphic performance by far
                    </span>.
                  </p>

                  <p className="hiw-text g_fadeIn roboto-light">
                   Mobile {' '}
                    <span className="text-[#FFBB64] roboto-light">
                      games will look and feel so immersive
                    </span>,
                     with incredibly detailed environments and characters.
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn ">
                <p className="hiw-text roboto-light">New</p>
                <p className="hiw-bigtext roboto-light">Pro-class GPU</p>
                <p className="hiw-text roboto-light">with 6 cores</p>
              </div>
              </div>
            </div>
    </section>
  )
}

export default HowItWorks