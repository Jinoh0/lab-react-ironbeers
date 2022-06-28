import axios from "axios";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeBtn } from "../../components/HomeBtn/index";
import style from "./style.module.css"


export function BeerList () {
    const [ allBeers , setAllBeers ] = useState ([]);
    

    useEffect(()=> {            
        async function fetchBeers () {
            try {
            const response = await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers"
            );
                setAllBeers(response.data);
            console.log (response);
            } catch (err) {
            console.log(err);
            }
        }
        
        fetchBeers();
        } , []);

        
        return (
        <>
            <HomeBtn />
            {allBeers.map((currentBeer) => {
                return (
                    <>
                        <div key={currentBeer._id} className={style.beerimg}>
                        <Link to={`/beers/${currentBeer._id}`}>
                        
                        <img className={"beerimg"} src={currentBeer.image_url} alt ={currentBeer.name} />
                        <h3>{currentBeer.name}</h3>
                        <h5>{currentBeer.tagline}</h5>
                        <p>{currentBeer.contributed_by}</p>
                        <p><strong>Made by :</strong>{currentBeer.name}</p>
                        
                        </Link>
                        </div>
                    </>
                )
            })}

        </>
    )
}