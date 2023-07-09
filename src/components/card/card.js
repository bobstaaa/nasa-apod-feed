import './card.css'

// UI component for a normal card
export default function Card(props) {
    return (
        <section className='card'>
            <div className='border'>
                <div className='container'>
                    <img src={props?.card.url} alt={'Refer to description'} className='cardMedia' />
                </div>
                <div className='cardTitleBlock'>
                    <h2 className='cardTitle'>{props.card.title}</h2>
                    <h3 className='cardDate'>{props.card.date}</h3>
                </div>
                <p className='cardBody'>{props.card.explanation}</p>
            </div>
        </section>
    )
}