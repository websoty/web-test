import Animation from "../Animation/Animation"
import "./HeroContent.scss"

const HeroContent = () => {
  return (
    <div className="content">
      <Animation delay={0.5}>
      <button 
      className="content__button"
      type="button">
        START TODAY
      </button>
      </Animation>
      <Animation delay={0.8}>
      <h1 className="content__title">
        Building the future of <span>medicine with AI</span>
      </h1>
      </Animation>
      <div className="content__scroll">
        <button>
         <img src="/arrow_down.svg" alt="arrow for scroll" />
        </button>
      </div>
    </div>
  )
}

export default HeroContent