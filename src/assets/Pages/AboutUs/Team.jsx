import React from 'react';

const Team = (props) => {
    const { name, img, intake, section, Position } = props.member






    return (
        <div className="card w-96  glass flex flex-row hover:ring ring-primary offset-base-100">
            <div className="avatar">
                <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 hover:ring-offset-base-300  ">
                    <img src={img} />
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{Position}</p>

            </div>
        </div>



    );
};

export default Team;