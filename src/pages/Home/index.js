import { Link } from "react-router-dom";
import beerlogo from "../../assets/beers.png";
import randombeerlogo from "../../assets/random-beer.png";
import newbeerlogo from "../../assets/new-beer.png"
 
export function Home () {
    return (
        <>
            <Link to={'/beers'}>
            <img src ={beerlogo} alt="beers" />
            <h1>All Beers</h1>
            <p>Click here to check all our available beers.</p>
            </Link>

            <Link to={'/random-beer'}>
            <img src ={randombeerlogo} alt="random-beer" />
            <h1>Random Beer</h1>
            <p>Click here to check a totally random beer.</p>
            </Link>

            <Link to={'/new-beer'}>
            <img src ={newbeerlogo} alt="new-beers" />
            <h1>New Beer</h1>
            <p>Click here to add a new beer to our list!</p>
            </Link>            
        </>
    )
}