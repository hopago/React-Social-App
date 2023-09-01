import "./rightbar.css";

export default function Rightbar({ profile }) {


  const HomeRightbar = () => (
    <>
      <div className="birthdayContainer">
        <img className="birthdayImg" src="assets/gift.png" alt="" />
        <span className="birthdayText">
          <b>Pola Foster</b> and <b>3 other friends</b> has a birthday today
        </span>
      </div>
      <div className="rightbarAd">
        <img src="assets/ad.png" alt="" className="rightbarAd" />
      </div>
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img
              src="assets/person/3.png"
              alt=""
              className="rightbarProfileImg"
            />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">PongPongE</span>
        </li>
      </ul>
    </>
  );

  const ProfileRightbar = () => (
    <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Seoul</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Republic of Korea</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="assets/person/2.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">PongPongE</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">PongPongE</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">PongPongE</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">PongPongE</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">PongPongE</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.png" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">PongPongE</span>
        </div>
      </div>
    </>
  )

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
