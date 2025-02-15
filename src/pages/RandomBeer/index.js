import axios from "axios";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeBtn } from "../../components/HomeBtn/index"

export function RandomBeer () {
    const [ randomBeer , setRandomBeer ] = useState([]);
console.log(randomBeer)

    useEffect(() => {
        async function fetchRandomBeer () {
            try {
                const response = await axios.get(
                    "https://ih-beers-api2.herokuapp.com/beers/random"
                );
                setRandomBeer(response.data);
                console.log(response)
            } catch (e) {
                console.log(e);
            }
        }
    
    fetchRandomBeer();
    }, []);


    return (
        <>
            <HomeBtn />
           
            {/* {randomBeer.map((currentRandom) => {
                return (
                    <>
                    <div key ={currentRandom._id}>
                    <img src={currentRandom.image_url} alt={currentRandom.name} />
                    <h1>{currentRandom.name}</h1>
                    <h2>{currentRandom.tagline}</h2>
                    <h4>first brewed in {currentRandom.first_brewed}</h4>
                    <p>{currentRandom.attenuation_level}</p>
                    <p>{currentRandom.description}</p>
                    <p>{currentRandom.contributed_by}</p>
                    </div>
                    </>
                )
            })} */}

                    <img src={randomBeer.image_url} alt={randomBeer.name} />
                    <h1>{randomBeer.name}</h1>
                    <h2>{randomBeer.tagline}</h2>
                    <h4>first brewed in {randomBeer.first_brewed}</h4>
                    <p>{randomBeer.attenuation_level}</p>
                    <p>{randomBeer.description}</p>
                    <p>{randomBeer.contributed_by}</p>            
        </>
    )
}