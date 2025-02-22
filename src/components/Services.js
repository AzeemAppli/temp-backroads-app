import Title from "./Title";
import {services} from "../data";
import Service from "./Service";

const Services = () => {
    return (
        <section className="section services" id="services">
            <div className="section-title">
                <Title title='our' subTitle='Services'></Title>
            </div>
            <div className="section-center services-center">
                {services.map((service) => {

                    return <Service key={service.id} {...service}/>;
                })}
            </div>
        </section>
    )
}

export default Services;