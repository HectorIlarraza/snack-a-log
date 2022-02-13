import HeartHealth from "./HeartHealth"


function Snack({snack}) {
  return (
    <div>
        <h6>
        {snack.name}
        <img src={snack.image} alt="food" />
        <HeartHealth snackHealth={snack.is_healthy}/>
        </h6>
    </div>
  )
}

export default Snack