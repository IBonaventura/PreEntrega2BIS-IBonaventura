
import Link from "./Link/Link";
import {Link} from 'react-router-dom';
import {getCategories} from "../../../asyncMock";
import {useEffect, useState} from "react";

function NavBar() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then(response => {
                setCategories(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, []);

    return <div className="navbar-start">
        <Link href="" text="Inicio"/>
        <Link href="" text="Remeras"/>
        <Link href="" text="Buzos"/>
        <Link href="" text="Gorras"/>
        <Link href="" text="¿Quienes somos?"/>
        <Link className="navbar-button" to={`/`}>Inicio</Link>

        {categories.map((category) =>{
            return (
                <Link key={category.id} className="navbar-button" to={`/category/${category.id}`}>{category.title}</Link>
            )
        })}

        <Link className="navbar-button" to={``}>¿Quienes somos?</Link>
    </div>
}

export default NavBar;