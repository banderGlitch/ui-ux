import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { watchImg, rightImg } from '../utils'
import VideoCarousel from './VideoCarousel';
gsap.registerPlugin(useGSAP)

function Highlights() {
    useGSAP(() => {
        gsap.to('#title', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.inOut',
            delay: 1.5,
        })
        gsap.to('#event', {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.25
        })
    }, [])

    return (
        <section id="highlights" className="w-screen h-full bg-#645e5e p-20">
            <div className="screen-max-width">
                <div className="mb-12 w-full md:flex items-end justify-between">
                    <h1 id="title" className="text-gray lg:text-3xl md:text-5xl text-3xl lg:mb-0 mb-5 font-bold opacity-0 translate-y-20">Get the highlights.</h1>
                    <div className="flex flex-wrap items-end gap-5">
                        <p id="event" className="hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20 color-blue">
                            Watch the film
                            <img src={watchImg} alt="arrow right" className="ml-2" />
                        </p>
                        <p id="event" className="hover:underline cursor-pointer flex items-center text-xl opacity-0 translate-y-20 color-blue">
                            Watch the event
                            <img src={rightImg} alt="right" className="ml-2" />
                        </p>

                    </div>
                </div>
                <VideoCarousel />
            </div>
        </section>
    )
}

export default Highlights