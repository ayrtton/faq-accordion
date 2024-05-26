import iconStar from '../assets/images/icon-star.svg';
import Accordion from './Accordion';

function Card() {
    return (
        <main className="main">
            <div className="faqs">
                <div className="faqs__header">
                    <img className="faqs__header-icon" src={iconStar} alt="Star Icon" srcSet="" />
                    <h1 className="faqs__header-title">FAQs</h1>
                </div>
                <Accordion />
            </div>
        </main>
    );
}

export default Card;