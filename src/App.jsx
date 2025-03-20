import { useLayoutEffect, useRef } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './App.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)
function App() {
  // Todo: Implement the gasp timeline
  const timeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
  })

  useGSAP(() => {
    timeline.to('.yellow-box', {
      x: 250,
      rotate: 360,
      borderRadius: '100%',
      duration: 1,
      ease: 'back.inOut',
    })
    timeline.to('.yellow-box', {
      y: 250,
      rotate: 360,
      borderRadius: '50%',
      duration: 1,
      ease: 'back.inOut',
    })
  }, [])
  return (
    <main>
      <section className="boxes-container">
        <div>
          <div id="yellow-box" className="yellow-box">Box1</div>
        </div>
      </section>
    </main>
  )
}

export default App
