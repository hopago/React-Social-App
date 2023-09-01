import './profile.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Topbar from '../../components/topbar/Topbar';
import Rightbar from '../../components/rightbar/Rightbar';


export default function Profile() {
  return (
    <>
    <Topbar />
    <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                  <img src="assets/post/3.png" alt="" className='profileCoverImg' />
                  <img src="assets/person/3.png" alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>Hopago</h4>
                    <span className="profileInfoDesc">Hello Friends!</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar />
            </div>
        </div>
    </div>
    </>
  )
}
