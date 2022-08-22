import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Person from '@mui/icons-material/Person';

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">32152</span>
        <span className="link">See all user</span>
      </div>
      <div className="right">
        <div className="pecentage">
          <KeyboardArrowUpIcon/>
          20%
        </div>
         <Person/>
      </div>
    </div>
  )
}

export default Widget
