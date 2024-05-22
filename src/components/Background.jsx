import desktopBackground from '../assets/images/background-pattern-desktop.svg';
import mobileBackground from '../assets/images/background-pattern-mobile.svg';

function Background() {
    return (
        <>
            <div className="background">
                <div className="background__desktop">
                    <img src={desktopBackground} />
                </div>
                <div className="background__mobile">
                    <img src={mobileBackground} />
                </div>
            </div>
        </>
    );
}

export default Background;