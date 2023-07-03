import { useDispatch } from "react-redux"
import { setInitialState } from "../../app/appSlice"

//controls state and rendering of components in the home route
export default function Home() {
    const dispatch = useDispatch()

    dispatch(setInitialState())
    return (
        <div className="App">
            Home Page
        </div>
    )
}