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

    const logincol = (e)=>{
        return { backgroundColor: (page === 'login' || page === 'signup' || page === 'HomePage')?'red':'rgb(22, 200, 25)',
                padding: '4px', color: 'brown'
        };
    }
    return(
        <div className="header-parent-container">
            <div className="left">
                <Link to="/home" style={customColor('HomePage')}>Home</Link>
                <Link to="/imageGenerator" style={customColor('imageGenerator')}>Image Generator</Link>
                <Link to="/history" style={customColor('history')}>History</Link>
                <Link to="/contactUs" style={customColor('contactUs')}>Contact Us</Link>
                <Link to="/help" style={customColor('help')}>Help</Link>
                <Link to="/signup" style={customColor('signup')}>Signup</Link>
                <Link to="/login" style={customColor('login')}>Login</Link>
            </div>
            <div className="islogin-main">
                <div className="right" style={logincol(page)}>
                </div>
                {contextValues.isLoggedIn?
                    <button onClick={contextValues.logout}>Logout</button>
                    :<button onClick={contextValues.login}><Link to="/login">Login</Link></button>
                }
            </div>
        </div>
    )
}

export default NavBar;


