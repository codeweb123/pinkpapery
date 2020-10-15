import React from 'react';

const Ship = ({ title, img_url }) => (
    <div className="book"><center>
        <img src={ img_url } alt={title} />
        </center>
        <h3> { title } </h3>
    </div>
)

export default Ship;

//presentation component/functional component. Define how props should be displayed. 