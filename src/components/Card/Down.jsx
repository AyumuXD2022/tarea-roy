import UserImage from '../../assets/img/roy.png';
import useClone from '../../hooks/useClone';
const Down = () => {
    const {likesCount} = useClone()
    return (
        <>
            <h4 className="likes">{likesCount} likes</h4>
            <h4 className="message">
                <b>Salvador</b>
                Te la come Chava
                <span>#roymonroy</span>
                <span>#selacome</span>
            </h4>
            <h4 className="comments">View all 16 comments</h4>
            <div className="addComments">
                <div className="userImg">
                    <img src={UserImage} alt="user" className="cover" />
                </div>
                <input type="text" className="text" placeholder="Add a comment..." />
            </div>
            <h5 className="postTime">5 hours ago</h5>
        </>
    )
}

export default Down
