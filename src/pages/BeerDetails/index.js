import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./style.module.css"

import { HomeBtn } from "../../components/HomeBtn/index";
import { useState , useEffect } from "react";



export function BeerDetails () {
    const [allBeers , setAllBeers] = useState([])
    const { beerid } =useParams() ;

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
            {allBeers.filter((currentBeer) => {
                return currentBeer._id === beerid;
            }).map((currentBeer) => {
                return (
                    <div key={currentBeer._id}>
                        <img className={style.img} src={currentBeer.image_url} alt={currentBeer.name} />
                        <h1>{currentBeer.name}</h1>
                        <h2>{currentBeer.tagline}</h2>
                        <h4>firs brewed in {currentBeer.first_brewed}</h4>
                        <p>{currentBeer.attenuation_level}</p>
                        <p>{currentBeer.description}</p>
                        <p>{currentBeer.contributed_by}</p>
                    </div>
                )
            })}

        </>
    )
}