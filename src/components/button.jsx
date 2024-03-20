import React from 'react';

const Button = ({ name }) => {
    return (
        <button style={{ 
            backgroundColor: 'Green',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>
            {name}
        </button>
    );
};

export default Button;