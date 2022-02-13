import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

const HeartHealth = ({ snackHealth }) => {

    if(snackHealth){
      return (
        <div>
        <p>healthy food</p>
        <img src={heartSolid} alt="full heart" />
        </div>
        )
    }else if(!snackHealth){
      return (
        <div>
        <p>unhealthy food</p>
        <img src={heartOutline} alt="outline of heart" />
        </div>
        )
    }
}

export default HeartHealth;
