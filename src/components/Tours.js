import Title from "./Title";
import {tours} from '../data.js'
import Tour from "./Tour";

const Tours = () => {
    return (
        <section className="section" id="tours">
            <div className="section-title">
                <Title title='featured' subTitle='Tours'></Title>
            </div>

            <div className="section-center featured-center">
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour}/>
                })}
            </div>
        </section>
    )
}

export default Tours;