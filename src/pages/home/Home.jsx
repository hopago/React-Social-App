import Topbar from '../../components/topbar/Topbar';
import './home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';


export default function Home() {
  return (
    <div className="home">
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <Feed />
          <Rightbar />
      </div>
    </div>
  )
}
