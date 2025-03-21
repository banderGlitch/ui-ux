import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import './Gsap.css'

gsap.registerPlugin(useGSAP)

export default function Gsaptext() {

  useGSAP(() => {
    gsap.to('#main-title', {
      opacity: -2,
      y:5,
      duration:4,
      ease: "power4.inOut"
    });
  },[]);

  return (
    <main className="text-animation-container">
      <h1 id="main-title">GSAP Text Examples</h1>
      <h2 id="typing-text"></h2>
      
      <div className="text-container">
        <p className="animate-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <p className="animate-p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p className="animate-p">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>

        <p className="animate-p">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </div>
    </main>
  );
}