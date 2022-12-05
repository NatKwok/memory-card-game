
function Card({card, index, clickhandler}) {

    return (
        <div className={`card ${card.status}`} onClick={() => clickhandler(index)}>
            <img src={card.img} alt={card.name} />
        </div>
    )
}

export default Card;