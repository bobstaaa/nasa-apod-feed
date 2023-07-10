import { Link } from "react-router-dom"
import ROUTES from "../../app/routes"
import './nav.css'

//UI component displays nav and header
export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={ROUTES.home()}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={ROUTES.apod()}>
                        Apod
                    </Link>
                </li>
                <li>
                    <Link to={ROUTES.rover()}>
                        Donki
                    </Link>
                </li>
            </ul>
        </nav>
    )
}