import homebtnlogo from "../../assets/homebutton.png"
import { Link } from "react-router-dom"

export function HomeBtn () {
    return (
        <>
            <Link to="/" >
            <img src={homebtnlogo} alt="homebtn" />
            </Link>
        </>
    )
}