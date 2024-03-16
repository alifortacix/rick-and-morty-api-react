import React from 'react'

function AboutCard(props) {
    return (
        <div className="d-flex justify-content-center border-bottom">
            <div
                className="card border-0 d-flex flex-column justify-content-center align-items-center"
                style={{ width: "33%" }}
            >
                <img
                    src={props.image}
                    className="card-img-top img-fluid"
                    alt={props.heading}
                    style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        objectPosition: "top",
                    }}
                />
                <div className="card-body">
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutCard