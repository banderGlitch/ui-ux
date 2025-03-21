import React from 'react'
import { useState, useEffect } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from '../utils'
gsap.registerPlugin(useGSAP)

function Hero() {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo)
    console.log("videoSrc", videoSrc)

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 768) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet)
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet)
        }
    }, [])


    useGSAP(() => {
        gsap.to('#herostyle', {
            opacity: 1,
            delay: 1.5,
        })
        gsap.to('#cta', {
            opacity: 1,
            delay: 1.5,
            y:-50,
            duration: 1,
            ease: 'power2.inOut',
        })
    }, [])
    return (
        <section className=''>
            <div className="flex flex-col gap-10 justify-center items-center">
                <p className='text-white text-4xl font-bold opacity-0 relative top-14' id="herostyle">iPhone 15 Pro</p>
                <div className='md:w-10/12 w-full'>
                    <video autoPlay playsInline={true} muted loop key={videoSrc}>
                        <source src={videoSrc} type='video/mp4' />
                    </video>
                </div>
            </div>

            <div id="cta" className="flex flex-col items-center opacity-0 translate-y-10">
                <a href="#highlights" className="btn">Buy now</a>
                <p className="font-normal text-xl">From $199/month or $499 upfront</p>
            </div>

        </section>
    )
}

export default Hero