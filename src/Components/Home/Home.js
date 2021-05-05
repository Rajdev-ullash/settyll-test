import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Info from '../Info/Info';
import Mobile from '../Info/Mobile';

const Home = () => {
    const { allData } = useContext(UserContext);
    const [data, setData] = allData;
    // const [data, setData] = useState([]);
    console.log(data, setData);
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    data.map(data =>  width < breakpoint ? <Mobile data={data} /> : <Info data={data} />)
                }
            </div>
        </div>
    );
};

export default Home;