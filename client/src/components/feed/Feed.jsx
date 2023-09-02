import { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
import axios from 'axios';


function Feed({ username }) {

  const [posts,setPosts] = useState([]);

  useEffect(() => {

    const fetchPost = async () => {

      const res = username 
      ?  await axios.get("/posts/profile/" + username)
      :  await axios.get("/posts/timeline/64f1b138c01c25c5e94abbca");

      setPosts(res.data);

    };

    fetchPost();

  }, [username]);

  return (
    <div className="feed">
        <div className="feedWrapper">
          <Share />
          {posts.map(post => (
            <Post key={post._id} post={post} />
          ))}
        </div>
    </div>
  )
}

export default Feed
