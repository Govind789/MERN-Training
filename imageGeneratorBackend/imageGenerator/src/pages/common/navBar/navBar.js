import { useContext } from "react";
// import "./navBar.css";
import { Link } from "react-router-dom";
import PointsContext from '../../../context/pointsContext.js';
const cssName = require('../navBar/navBar.css');

const NavBar = (props)=>{
    const contextValues = useContext(PointsContext);
    const page = props.page;

    const customColor = (e)=>{
        return { color: page === e?'red':cssName};
    }
    const pth = 'https://mern-training-0ufm.onrender.com/api/v1/images'
    return(
        <div className="header-parent-container">
            <div className="left">
                <Link to="https://mern-training-0ufm.onrender.com/api/v1/images/home" style={customColor('HomePage')}>Home</Link>
                <Link to="https://mern-training-0ufm.onrender.com/api/v1/images/imageGenerator" style={customColor('imageGenerator')}>Image Generator</Link>
                <Link to="https://mern-training-0ufm.onrender.com/api/v1/images/history" style={customColor('history')}>History</Link>
                <Link to="https://mern-training-0ufm.onrender.com/api/v1/images/contactUs" style={customColor('contactUs')}>Contact Us</Link>
                <Link to="https://mern-training-0ufm.onrender.com/api/v1/images/help" style={customColor('help')}>Help</Link>
                <Link to="https://mern-training-0ufm.onrender.com/api/v1/images/signup" style={customColor('signup')}>Signup</Link>
                <Link to="https://mern-training-0ufm.onrender.com/api/v1/images/login" style={customColor('login')}>Login</Link>
            </div>
            <div className="right" style={{padding: '4px', color: 'brown'}}>
            </div>
            {contextValues.isLoggedIn?
                <button onClick={contextValues.logout}>Logout</button>
                :<button onClick={contextValues.login}>Login</button>
            }
        </div>
    )
}

export default NavBar;