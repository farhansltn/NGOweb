import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { animateWithGsap } from '../utils/animations'
import { explore1Img, explore2Img, exploreVideo } from '../utils'
import gsap from 'gsap'


const Features = () => {
    const videoRef = useRef()
    useGSAP(()=> {
        gsap.to('#exploreVideo', {
            scrollTrigger: {
              trigger: '#exploreVideo',
              toggleActions: 'play pause reverse restar',
              start: '-10% bottom',
            },
            onComplete: () => {
                videoRef.current.play();
            }
          })
        animateWithGsap('#features_title', {y:0, opacity:1})
        animateWithGsap('.g_grow',
         {scale: 1,opacity:1,ease:'power1'},
         {scrub:5.5})
         animateWithGsap('.g_text',
          {y:0, opacity:1,ease:'power2.inOut', duration:1})
    },[])
  return (
    <section className="h-full bg-white">
        <div className="screen-max-width mt-10">
            <div className="mb-20 w-full">
                <h1 id='features_title' className='section-heading_dark'>
                    Know Us Better.
                </h1>
            </div>
            <div className="flex-col flex justify-center items-center overflow-hidden">
                <div className="mt-22 mb-5 pl-24">
                    <h2 className="text-[#FDA403] text-5xl lg:text-7xl font-semibold">
                        Creative Activities,
                    </h2>
                    <h2 className="text-[#FDA403] text-5xl lg:text-7xl font-semibold">
                        Sing a song,
                    </h2>
                    <h2 className="text-[#E14D2A] text-5xl lg:text-7xl font-semibold">
                        Flash cards and weekly tasks.
                    </h2>
                </div>
                <div className="flex-center flex-col sm:px-10">
                    <div className="relative h-[50vh] w-full flex items-center">
                        <video id='exploreVideo' preload='none' className='w-full h-full object-cover object-center' 
                        autoPlay muted playsInline ref={videoRef}>
                            <source src={exploreVideo} type='video/mp4' id=''/>
                        </video>
                    </div>
                    <div className="flex flex-col w-full mt-10 relative">
                        <div className="feature-video-container">
                            <div className="overflow-hidden flex-1 h-[50vh]">
                                <img src={explore1Img} alt='titanium' className='feature-video g_grow'/>
                            </div>
                            <div className="overflow-hidden flex-1 h-[50vh]">
                                <img src={explore2Img} alt='titanium' className='feature-video g_grow'/>
                            </div>
                        </div>
                        <div className="feature-text-container">
                            <div className="flex-1 flex-center">
                                <p className="feature-text g_text roboto-light">
                                    We are proud to serve{' '}
                                <span className="text-black roboto-medium">
                                We are proud to serve We are proud to serve We are proud 
                                to serve proud to serve We are proud to serve {' '}
                                </span>
                                We are proud to serve We are proud to 
                                to serve We are proud to serve proud to serve We are proud to serve
                                to serve We are proud to serve proud to serve We are proud to serve
                                 serve We are proud to serve
                                </p>
                            </div>
                            <div className="flex-1 flex-center">
                                <p className="feature-text g_text">
                                    We are proud to serve{' '}
                                <span className="text-black roboto-medium">
                                We are proud to serve We are proud to serve We are proud to 
                                serve proud to serve We are proud to serve{' '}
                                </span>
                                We are proud to serve We are proud to 
                                to serve We are proud to serve proud to serve We are proud to serve
                                to serve We are proud to serve proud to serve We are proud to serve
                                 serve We are proud to serve
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features