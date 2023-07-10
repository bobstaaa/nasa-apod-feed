import { useSelector } from "react-redux"
import { selectCards } from "../../app/appSlice"
import Card from '../card/card'
import './feed.css'

//UI component displays a list of cards
export default function Feed() {
    const cards = useSelector(selectCards)
    return (
        <div className="feedContainer">
            <div className="feed">
                {cards ? cards.map(card => <Card card={card} />) : 'Sorry something broke'}
            </div>
        </div>
    )
}