import {pageLinks, socialLinks} from "../data";
import SocialLinks from "./SocialLinks";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <h3>SwissHike</h3>
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <ul className="nav-links" id="nav-links">
                    {pageLinks.map((link)=> {
                        const {id, href, text} = link
                        return (
                            <li key={id}>
                            <a href={href} className="nav-link">{text}</a>
                        </li>)
                    })}
                </ul>

                <ul className="nav-icons">
                    {socialLinks.map((link) => {
                        return (
                            <SocialLinks key={link.id} {...link} itemClass='nav-icon'/>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;