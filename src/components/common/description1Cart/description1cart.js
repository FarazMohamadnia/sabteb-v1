import './description1cart.css'
import {MovingComponent} from 'react-moving-text';
export default function Description1Cart({title , text}){
    return(
      <MovingComponent
      type="shakeMix"
      duration="1400ms"
      delay="4s"
      direction="normal"
      timing="ease"
      iteration="2"
      fillMode="forwards">
        <div data-aos="zoom-in" className="des1-card-style">
          <p className="des1-card-style-card-title">{title}</p>
          <p className="des1-card-style-small-desc">
            {text}
          </p>
          <div className="des1-card-style-go-corner">
            <div className="des1-card-style-go-arrow">→</div>
          </div>
        </div>
    </MovingComponent>
    )
}