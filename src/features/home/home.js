import { useSelector } from "react-redux"
import Card from "../../components/card/card"
import { selectAppLoading, selectHomeCard } from "../../app/appSlice"
import Loading from "../loading/loading"

//controls state and rendering of components in the home route
export default function Home() {
    const loading = useSelector(selectAppLoading)
    const homeCard = useSelector(selectHomeCard)

    return loading ?
        <Loading />
        : (
            <div className="App">
                <Card card={homeCard} />
            </div>
        )

}