import Navbar from "./navbar.js";
import Categoryrow from "./categoryRow.js";
import Caraousal from "./Caraousal.js";
import Card from './card.js';

const Homepage = ()=>{
    return (
        <div>
            <Navbar />
            <Categoryrow />
            <Caraousal />
            <Card />
        </div>
    );
}

export default Homepage;