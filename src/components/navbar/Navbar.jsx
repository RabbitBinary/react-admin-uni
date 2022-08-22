import './navbar.scss';
import Avatar from '../../img/avatar.jpg';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ListAltIcon from '@mui/icons-material/ListAlt';



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className="search">
          <input type="text" className="text" placeholder='Search...'/>
          <SearchOutlinedIcon className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon"/>           
          </div>
          <div className="item">
            <FullscreenIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon"/>
            <div className="counter">3</div>
          </div>
          <div className="item">
            <ListAltIcon className="icon"/>
          </div>
          <div className="item">
            <img 
               src={Avatar} 
               alt="" 
               className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar