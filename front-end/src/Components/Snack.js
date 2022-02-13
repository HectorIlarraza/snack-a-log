import HeartHealth from "./HeartHealth"


function Snack({snack}) {
  return (
    <article className="Snacks">
      <div>
        <h4>
          {snack.name}
          <img src={snack.image} alt={snack.is_healthy ? "healthy food" : "unhealthy food"} />
          <HeartHealth snackHealth={snack}/>
        </h4>
      </div>
    </article>
  )
}

export default Snack