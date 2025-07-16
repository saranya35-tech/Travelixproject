import React from "react";

const TourListComponent = (props) => {
    return (
        <div className="col-md-4 m-btm-40">
            <div className="item">
                <div className="project-destination">
                    <a href="#" className="img"
                        style={{ "backgroundImage": `url(${props.destinationImage})` }}>
                        <div className="text">
                            <h3>{props.destinationName}</h3>
                            <span>{props.destinationCount} Tour</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TourListComponent;