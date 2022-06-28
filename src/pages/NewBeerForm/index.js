import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeBtn } from "../../components/HomeBtn/index";
import axios from "axios";



export function NewBeerForm () {
    const [beer , setBeer] =useState([]);
    const [form , setForm]=useState({
        name:"",
        tagline:"",
        description:"",
        first_brewed:"",
        brewers_tips:"",
        attenuation_level:"",
        contributed_by:"",
    })

    function handleChange (e) {
        setForm({...form, [ e.target.name]:e.target.value});
    }

    
    function handleSubmit (e) {
        axios.post()        
    }

    useEffect(() =>{
        async function postNewBeer () {
            try {
                const response = await axios.get(
                    "https://ih-beers-api2.herokuapp.com/beers"
                );
                setBeer(response.data);
            }catch (e){
                console.log(e);
            }
        }
        NewBeerForm();
    },[]);
        return (
        <>
            <HomeBtn />
            <form>
                <label htmlFor="input-name">name:</label>
                <input 
                    type="text"
                    value={form.name}
                    name="name"
                    onChange={handleChange}
                />

                <label htmlFor="input-tagline">tagline:</label>
                <input 
                    type="text"
                    value={form.tagline}
                    name="tagline"
                    onChange={handleChange}
                />
                <label htmlFor="input-description">description:</label>
                <input 
                    type="text"
                    value={form.description}
                    name="description"
                    onChange={handleChange}
                />
                <label htmlFor="input-first-brewed">First brewed:</label>
                <input 
                    type="text"
                    value={form.first_brewed}
                    name="firstBrewed"
                    onChange={handleChange}
                />
                <label htmlFor="input-brewers_tips">brewers tips:</label>
                <input 
                    type="text"
                    value={form.brewers_tips}
                    name="brewers_tips"
                    onChange={handleChange}
                />
                <label htmlFor="input-attenuation_level">attenuation_level:</label>
                <input 
                    type="text"
                    value={form.attenuation_level}
                    name="attenuation_level"
                    onChange={handleChange}
                />
                <label htmlFor="input-contributed_by">contributed_by:</label>
                <input 
                    type="text"
                    value={form.contributed_by}
                    name="contributed_by"
                    onChange={handleChange}
                />
                 <button type="button" 
                    onClick = {handleSubmit}
                    >
                    Create
                    </button>
            </form>

        </>
    )



   




}