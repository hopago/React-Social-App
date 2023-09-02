import { useEffect, useState } from 'react';
import './post.css';
import { MoreVert } from '@material-ui/icons';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';


export default function Post({ post }) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [user,setUser] = useState({});

    const [like,setLike] = useState(post.likes.length);
    const [heart,setHeart] = useState(post.hearts.length);

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

    useEffect(() => {

        const fetchUser = async () => {

            const res = await axios.get(`/users?userId=${post.userId}`);

            setUser(res.data);

        };

        fetchUser();

    }, [post.userId]);

    console.log(user);

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`/profile/${user.username}`} className="link">
                      <img 
                        src={user.profilePicture ? user.profilePicture : `${PF}/person/3.png`} 
                        alt="" 
                        className='postProfileImg' 
                      />
                    </Link>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    {post.desc}
                </span>
                <img src={post.img && post.img} alt="" className='postImg' />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img 
                      className='likeIcon' 
                      src={`${PF}/like.png`} 
                      alt="" 
                      onClick={() => handleClick('like')}
                    />
                    <span className="postLikeCounter">{like !== 0 ? like : ""}</span>
                    <img 
                      className='likeIcon' 
                      src={`${PF}/heart.png`}
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
