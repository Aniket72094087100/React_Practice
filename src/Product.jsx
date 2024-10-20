import "./Product.css"
function Product({ title, description, idx, price }) {

    const style = { backgroundColor: price == 1500 ? "yellow": "" };
    return (
        <div className="cards">
            <h2>{title}</h2>
            <h4 style={style}>{price}</h4>
            <p>{description[idx]}</p>
        </div>
    );
}

export default Product;
