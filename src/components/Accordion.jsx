import { useState } from 'react';
import { accordionData } from '../utils/content';
import iconMinus from '../assets/images/icon-minus.svg';
import iconPlus from '../assets/images/icon-plus.svg';

function Accordion() {
    const [accordion, setAccordion] = useState(0);
    
    const accordionToggle = function(index) {
        setAccordion( accordion === index ? null : index );
    }

    return (
        <div className="faqs__list">
            {accordionData.map(( item, index ) => (
            <div className="faqs__list-item" key={index}>
                <div className="faqs__list-header" onClick={() => accordionToggle(index)}>
                    <h2 className="faqs__list-title">{item.title}</h2>
                    <img className="faqs__list-icon" src={ accordion === index ? iconMinus : iconPlus } alt="Accordion Toggle Icon" srcSet="" />
                </div>
                <p className={`faqs__list-text ${ accordion === index ? "open" : "" }`}>{item.content}</p>
            </div>
            ))}
        </div>
    )
}

export default Accordion;