import React from 'react';

const InfoCard = ({ cardData }) => {
    const { name, description, icon, bgClass } = cardData;
    return (
        <div>
            <div className={`card p-6 md:card-side shadow-xl ${bgClass}`}>
                <figure><img src={icon} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;