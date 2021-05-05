import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [hide, setHide] = useState(true);
    const [specificData, setSpecificData] = useState([]);
    console.log(specificData);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setSpecificData(data))
    }, [])
    const dataFind = specificData.find(data => data?.id == id);
    console.log(dataFind);
    return (
        <div className="container">
            <div className="row">
                <div className="justify-content-center align-items-center d-flex">
                    {
                        hide ? 
                        <div className="m-3 p-5" style={{ boxShadow: '0 0 10px grey' }}>
                            <h6>Username: {dataFind?.name}</h6>
                            <p>Name: {dataFind?.name}</p>
                            <p>Email: {dataFind?.email}</p>
                            <p>Address: {dataFind?.address?.city} {dataFind?.address?.street}</p>
                            <p>Company Name: {dataFind?.company?.name}</p>
                            <p>Website: {dataFind?.website}</p>
                            <p>Phone: {dataFind?.phone}</p>
                            <div className="justify-content-between d-flex">
                                <Link onClick={() => setHide(true)} className="btn btn-primary" to="/">Home</Link>
                                <button onClick={() => setHide(false)} className="btn btn-primary">Hide</button>
                            </div>
                        </div>
                            : <button onClick={() => setHide(true)} className="btn btn-primary mt-5">Show</button>
                    }
                </div>
             </div>
        </div>
    );
};

export default Details;