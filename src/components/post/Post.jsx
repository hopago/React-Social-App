import { useState } from 'react';
import './post.css';
import { MoreVert } from '@material-ui/icons';


export default function Post() {

    const [like,setLike] = useState(0);
    const [heart,setHeart] = useState(0);

    const [isLiked, setIsLiked] = useState(false);
    const [isHearted, setIsHearted] = useState(false);

    const handleClick = (name) => {

        if(name === 'like') {
            setLike(!isLiked ? like + 1 : like - 1);
            setIsLiked(!isLiked);
        } else if(name === 'heart') {
            setHeart(!isHearted ? heart + 1 : heart - 1);
            setIsHearted(!isHearted);
        } 

    };

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.png" alt="" className='postProfileImg' />
                    <span className="postUsername">Hopago</span>
                    <span className="postDate">1 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    Hey! It's my first post :)
                </span>
                <img src="assets/post/1.png" alt="" className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img 
                      className='likeIcon' 
                      src="assets/like.png" 
                      alt="" 
                      onClick={() => handleClick('like')}
                    />
                    <span className="postLikeCounter">{like !== 0 ? like : ""}</span>
                    <img 
                      className='likeIcon' 
                      src="assets/heart.png" 
                      alt="" 
                      onClick={() => handleClick('heart')}
                    />
                    <span className="postHeartCounter">{heart !== 0 ? heart : ""}</span>
                    <span 
                      className="postTotalCounter" 
                    >
                        {heart + like !== 0 ? 
                        (<>{heart + like} people like it!</>) : null}
                    </span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
