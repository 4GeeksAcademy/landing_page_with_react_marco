import React from "react";


const Jumbotron = ( {title, description, btntext}) => {
    return (
        <div className="container-fluid py-4 my-4 bg-secondary">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{description}</p>
            <button type="button" class="btn btn-primary">{btntext}</button>
        </div>
        
    );
};

export default Jumbotron;