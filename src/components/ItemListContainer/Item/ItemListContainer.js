function ItemListContainer( params ) {
    const {greetings} = params;
import {useState, useEffect} from "react";
import {getProducts} from "../../asyncMock";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = ({params}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, []);

    return <div className="container">
        <p>{greetings}</p>
        <ItemList products={products}/>
    </div>
}

export default ItemListContainer;
export default ItemListContainer;