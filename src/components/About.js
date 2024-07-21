import hikeImg from '../images/hike.jpg'
import Title from './Title.js';
const About = () => {
    return (
        <section className="section" id="about">
            <Title title='about' subTitle='us'></Title>

            <div className="section-center about-center">
                <div className="about-img">
                    <img
                        src={hikeImg}
                        className="about-photo"
                        alt="awesome beach"
                    />
                </div>
                <article className="about-info">
                    <h3>explore the hidden</h3>
                    <p>
                        Hiking in Switzerland offers an unparalleled opportunity to explore hidden gems
                        nestled within the majestic Swiss Alps. Imagine traversing well-marked trails that wind through
                        lush meadows, dense forests, and along crystal-clear lakes.
                    </p>
                    <p>
                        Whether you're a seasoned hiker or a casual walker, Switzerland's diverse trails cater to all levels.
                        Embrace the adventure and uncover the magic of Switzerland's hidden natural wonders,
                        where every hike is a journey of discovery.
                    </p>
                </article>
            </div>
        </section>
    )
}
export default About;