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
    timeline.to('.stagger-box', {
      x: 250,
      rotate: 360,
      borderRadius: '20%',
      duration: 1,
      ease: 'back.inOut',
    })
  }, [])

  // useGSAP(() => {
  //   timeline.to('.yellow-box', {
  //     x: 250,
  //     rotate: 360,
  //     borderRadius: '100%',
  //     duration: 1,
  //     ease: 'back.inOut',
  //   })
  //   timeline.to('.yellow-box', {
  //     y: 100,
  //     rotate: 360,
  //     borderRadius: '50%',
  //     duration: 1,
  //     ease: 'back.inOut',
  //   })
  // }, [])
  return (
    <main>
      <section className="boxes-container">
        <div>
          <div className="stagger-div">
            <div className="stagger-box">Box 1</div>
            <div className="stagger-box">Box 2</div>
            <div className="stagger-box">Box 3</div>
            <div className="stagger-box">Box 4</div>
            <div className="stagger-box">Box 5</div>
          </div>
          {/* <div className="buttons-container">
            <button className="pause-button" onClick={() => {
              if (timeline.paused()) {
                console.log('playing')
              timeline.play()
            } else {
              console.log('pausing')
              timeline.pause()
            }
          }}>{timeline.paused() ? 'Play' : 'Pause'}</button>
          </div>
          <div id="yellow-box" className="yellow-box">Black box</div> */}
        </div>
      </section>
    </main>
  )
}

export default App
