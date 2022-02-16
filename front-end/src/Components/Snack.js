import HeartHealth from "./HeartHealth"

function Snack({snack}) {
  return (
    <h4>
      <img src={snack.image} alt={snack.is_healthy ? "healthy food" : "unhealthy food"} />
      <HeartHealth snackHealth={snack}/>
    </h4>
  )
}

export default Snack;