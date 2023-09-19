import './topbar.css';
import { 
  Search, Person, Chat, Notifications
} from "@material-ui/icons";
import { Link } from 'react-router-dom';


function Topbar() {
  return (
    <div className="topbar">
        <div className="topLeft">
          <Link to="/" className="link">
            <span className="logo">HopagoSocial</span>
          </Link>
        </div>
        <div className="topCenter">
          <div className="searchbar">
            <Search className='searchIcon' />
            <input placeholder='Search for friend, feed, post!' className="searchInput" />
          </div>
        </div>
        <div className="topRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">3</span>
            </div>
            <img src="/assets/person/1.png" alt="" className="topbarImg" />
          </div>
        </div>
    </div>
  )
}

export default Topbar
