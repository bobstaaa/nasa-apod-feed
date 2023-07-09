import { useSelector } from "react-redux"
import { selectDonki } from "../../features/donki/donkiSlice"
import { selectApod } from "../../features/apod/apodSlice"

//UI component displays a list of cards
export default Feed = ({ type }) => {
    let items;
    switch (type) {
        case 'donki': items = useSelector(selectDonki)
        case 'apod': items = useSelector(selectApod)
    }
    return (
        <div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}