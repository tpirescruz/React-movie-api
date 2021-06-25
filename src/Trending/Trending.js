import React from 'react';

const Trending = (props) => {
    const {data, title}= props
    console.log(data)
    return (
        <div>
            <h3>{title}</h3>
            {data.map((movie, index)=>(
                <h3>{data.oringinal_title}</h3>
            ))}
        </div>
    );
};

export default Trending;