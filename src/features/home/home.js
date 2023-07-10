import { useSelector } from "react-redux"
import { selectAppLoading } from "../../app/appSlice"
import Loading from "../loading/loading"
import Feed from "../../components/feed/feed"

//controls state and rendering of components in the home route
export default function Home() {
    const loading = useSelector(selectAppLoading)

    return loading ? <Loading /> : <Feed />
}