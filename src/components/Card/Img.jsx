import BgImage from '../../assets/img/bg.jpg';
import HeartImage from '../../assets/img/heart.png';
import HeartRedImage from '../../assets/img/heart_red.png';
import CommentImage from '../../assets/img/comment.png';
import ShareImage from '../../assets/img/share.png';
import BookmarkImage from '../../assets/img/bookmark.png';
import useClone from '../../hooks/useClone';
const Img = () => {
    const {isLiked,likeButton} = useClone()
    return (
        <>
            <div className="imgBg">
                <img src={BgImage} alt="bg" className="cover" />
            </div>
            <div className="btns">
                <div className="left">
                    <img src={isLiked ? HeartRedImage : HeartImage} alt="heart" className="heart" onClick={likeButton} />
                    <img src={CommentImage} alt="comment" />
                    <img src={ShareImage} alt="share" />
                </div>
                <div className="right">
                    <img src={BookmarkImage} alt="bookmark" />
                </div>
            </div>
        </>
    )
}

export default Img
