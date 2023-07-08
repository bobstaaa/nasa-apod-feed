// UI component for a normal card
export default Card = (card) => {
    return (
        <section>
            <img src={card.media} />
            <h1>{card.title}</h1>
            <p>{card.body}</p>
        </section>
    )
}