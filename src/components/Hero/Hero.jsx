import HeroContent from "../HeroContent/HeroContent"
import HeroVisual from "../HeroVisual/HeroVisual"
import "./Hero.scss"


const Hero = () => {
  return (
    <section className="hero">
      <HeroVisual/>
      <HeroContent/>
    </section>
  )
}

export default Hero