import React from 'react';
import { Link } from 'react-router-dom';

const Info = ({data}) => {
    return (
        <div className="col-md-3 m-4 p-3" style={{boxShadow:'0 0 10px grey'}}>
            <h4 className="text-center">Name: {data.name}</h4>
            <p className="text-center">Email: {data.email}</p>
            <p className="text-center">Phone: {data.phone}</p>
            <Link to={`/data/${data.id}`} className="btn btn-primary justify-content-center align-items-center d-flex m-5">Show Details</Link>
        </div>
    );
};

export default Info;