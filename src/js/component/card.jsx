import React from "react";

const Card = ({ title, text, btnText, imgLink}) => {
    return (
        <div className="card text-center" style={{ width: '18rem', margin: '5px' }}>
        <div className="card-body">
            <img src={imgLink} className="card-img-top" alt="..." />
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <hr/>
            <a href="#" className="btn btn-primary">{btnText}</a>
        </div>
        </div>
    );
};

export default Card;