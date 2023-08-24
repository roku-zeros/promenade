import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [width, setWidth] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setWidth((prevWidth) => prevWidth + 0.106);
        }, 10);
        setTimeout(() => {
            clearInterval(interval);
            setIsLoading(false); // установка состояния после завершения загрузки
        }, 5000);
    }, []);


    return (
        <div className="Main">
            {isLoading ? (
                <div className="PreLoad">
                    <div className="Center">
                        <h1>PROMENADE</h1>
                        <div className="loader">
                            <div className="load-back"></div>
                            <div className="load-front" style={{width: `${width}%`}}></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="Promo">
                    <div className="Center">
                        <h1>PROMENADE</h1>
                        <span style={{ marginTop: "-8px"}}>la vie c’est une promenade</span>
                        <span>moscow</span>
                        <span style={{ marginTop: "4px"}}>2024</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
