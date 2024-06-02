import { Link } from "react-router-dom";

const HistoryCard = (props)=>{
    const product = props.item;

    return(
        <div className="history-card" key={product.id}>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <Link to={`/history/${product.id}`}>more..</Link>
        </div>
    )
}

export default HistoryCard;