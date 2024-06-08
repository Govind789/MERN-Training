import { useState,useContext } from "react";
import NavBar from "../common/navBar/navBar";
import PointsContext from "../../context/pointsContext.js";
import "./imageGenerator.css";

const Image = ()=>{
    const cValue = useContext(PointsContext);
    const [searchText, setSearchText] = useState();
    const [imageSrc, setImgSrc] = useState("");

    const func = (e) => {
        setSearchText(e.target.value);
    }
    
    const handleClick = async () => {
        try{  
            const res = await fetch(`${process.env.BACKEND_URL}api/v1/v.images`, {
                method: "POST",
                body: {
                    searchText: searchText,
                },
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+localStorage.getItem("authorization"),
                },
            });
            const data = await res.json();
            if(data?.status === 'success'){
                setImgSrc(data.data.imageUrl);
            }
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <NavBar page="imageGenerator"/>
            <div className="image-generator-main-container">
                <div className='image-search'>
                    <img src={imageSrc} />
                    <input onChange={(e)=>{func(e)}}/>
                    <button onClick={handleClick}>Generate</button>
                </div>
            </div>
        </div>
    )
};

export default Image;