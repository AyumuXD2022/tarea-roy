import DotImage from '../../assets/img/dot.png';
import UserImage from '../../assets/img/roy.png';
const Top = () => {
    return (
        <div className="top">
            <div className="userDeatils">
                <div className="profileImg">
                    <img src={UserImage} alt="user" className="cover" />
                </div>
                <h3>Roy Monroy<br /><span>Front End</span></h3>
            </div>
            <div className="dot">
                <img src={DotImage} alt="dot" />
            </div>
        </div>
    )
}

export default Top
