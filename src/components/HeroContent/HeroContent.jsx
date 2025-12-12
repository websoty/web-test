import "./HeroContent.scss"

const HeroContent = () => {
  return (
    <div className="content">
      <button 
      className="content__button"
      type="button">
        START TODAY
      </button>
      <h1 className="content__title">
        Building the future of <span>medicine with AI</span>
      </h1>
      <div className="content__scroll">
        <button>
         <img src="/arrow_down.svg" alt="arrow for scroll" />
        </button>
      </div>
    </div>
  )
}

export default HeroContent