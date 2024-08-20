import './description1cart.css'
export default function Description1Cart({title , text}){
    return(
      <div data-aos="zoom-in" className="des1-card-style">
        <p className="des1-card-style-card-title">{title}</p>
        <p className="des1-card-style-small-desc">
          {text}
        </p>
        <div className="des1-card-style-go-corner">
          <div className="des1-card-style-go-arrow">→</div>
        </div>
      </div>
    )
}