import './Product.css'
function product(props){
    return(
         <div className="Product">
            <div>{props.Title}</div>
            <div>{props.Price}</div>
            <div>{props.Description}</div>
         </div>
    )
}

export default product;