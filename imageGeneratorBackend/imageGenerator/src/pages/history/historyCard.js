import React, { useEffect, useState } from 'react';
import NavBar from "../common/navBar/navBar.js";
import './history.css';

const HistoryCard = () => {
    const contextValues = useContext(PointsContext);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                if(contextValues.isLoggedIn)
                {

                    const res = await fetch('/api/v1/history', {
                        
                    });
                    const data = await res.json();
                    if (data.status === 'success') {
                        setHistory(data.data);
                    }
                }else{
                    <Navigate to='/login'/>
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchHistory();
    }, []);

    return (
        <div>
            <NavBar page='history' />
            <div className='history-main-container'>
                <h2>Search History</h2>
                {history.length === 0 ? (
                    <p>No search history found.</p>
                ) : (
                    <ul>
                        {history.map((item, index) => (
                            <li key={index}>
                                <p>{item.searchText}</p>
                                <span>{new Date(item.createdAt).toLocaleString()}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};



export default HistoryCard;