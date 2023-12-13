import React from "react"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "CAPTURED"
    } else if (props.item.disponible === 1) {
        badgeText = "CATCH HIM"
    }


/* 
    CONDITIONAL RENDERING
                {badgeText && <div className="card--badge">{badgeText}</div>}
    
    il modo più pratico di visualizzare un contenuto è tramite Js con qusto comando che equivale a un
    operatore ternario dove la condizione è che esista badgeText

                <div className="card--badge" badgeText ? "block" : "none"> {badgeText} </div>}
*/

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`/images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="/images/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <h3 className="card--title">{props.item.title}</h3>
            <p>{props.item.description}</p>
            <p className="card--loc"><span className="bold">Location :</span> {props.item.location}</p>
        </div>
    )
}

/* 
in caso di props della card in App.jsx con spread operator {..item}
non ricevendo più un singolo oggetto cambierebbe anche il componente

        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`/images/${props.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="/images/star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <h3 className="card--title">{props.title}</h3>
            <p>{props.description}</p>
            <p className="card--loc"><span className="bold">Location :</span> {props.location}</p>
        </div>
*/