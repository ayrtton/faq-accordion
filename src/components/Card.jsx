import iconStar from '../assets/images/icon-star.svg';
import iconMinus from '../assets/images/icon-minus.svg';
import iconPlus from '../assets/images/icon-plus.svg';

function Card() {
    return (
        <main className="main">
            <div className="faqs">
                <div className="faqs__header">
                    <img className="faqs__header-icon" src={iconStar} alt="Star Icon" srcSet="" />
                    <h1 className="faqs__header-title">FAQs</h1>
                </div>
                <div className="faqs__list">
                    <div className="faqs__list-item">
                        <div className="faqs__list-header">
                            <h2 className="faqs__list-title">What is Frontend Mentor, and how will it help me?</h2>
                            <img className="faqs__list-icon" src={iconMinus} alt="Minus Icon" srcSet="" />
                        </div>
                        <p className="faqs__list-text">
                            Frontend Mentor offers realistic coding challenges to help developers improve 
                            their frontend coding skills with projects in HTML, CSS, and JavaScript. It{"'"}s 
                            suitable for all levels and ideal for portfolio building.
                        </p>
                    </div>
                    <div className="faqs__list-item">
                        <div className="faqs__list-header">
                            <h2 className="faqs__list-title">Is Frontend Mentor free?</h2>
                            <img className="faqs__list-icon" src={iconPlus} alt="Plus Icon" srcSet="" />
                        </div>
                    </div>
                    <div className="faqs__list-item">
                        <div className="faqs__list-header">
                            <h2 className="faqs__list-title">Can I use Frontend Mentor projects in my portfolio?</h2>
                            <img className="faqs__list-icon" src={iconPlus} alt="Plus Icon" srcSet="" />
                        </div>
                    </div>
                    <div className="faqs__list-item">
                        <div className="faqs__list-header">
                            <h2 className="faqs__list-title">How can I get help if I'm stuck on a challenge?</h2>
                            <img className="faqs__list-icon" src={iconPlus} alt="Plus Icon" srcSet="" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Card;