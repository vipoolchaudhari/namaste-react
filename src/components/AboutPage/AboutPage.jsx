import './AboutPage.scss';
import about from '../../assets/img/about.svg'
import Heading from '../Heading/Heading';
import User from '../User/User';
import UserClass from '../User/UserClass';

const AboutPage = () => {
    return (
        <div className="about-wrapper">
            <div className="container">
                <p className="info">We build innovative products & solutions that deliver unparalleled convenience to urban consumers. The best part? Every bit of your work at <strong>Vifood</strong> will help elevate the lives of our users across India.</p>
                <Heading type="About" name="Who we are?" />
                <div className="details">
                    <div className='details-col'>
                        <p>Launched in 2024,<br/> Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants.</p>
                        <p>We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
                    </div>
                    <img src={about} alt="" />
                </div>
                <User name="vipul" location="Thane" />
                <UserClass name="vipool" location="Mumbai"/>
            </div>
        </div>
    )
}

export default AboutPage;