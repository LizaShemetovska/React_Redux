import React from 'react';
import '../node_modules/bulma/css/bulma.css';

const styles = {
    borderBottom: '2px solid #000000',
    background: '33FFCE',
    margin: '0.75rem auto',
    padding: '0.6rem 1rem',
    maxWidth: '500px',
    borederRadius: '7px'
};

export default ({ post: { title, body, id }, onDelete }) => {
    return (
        <div style={styles}>
            <h2 className="title is-1"> {title}  </h2>
            <p className="subtitle is-3"> {body} </p>
            <button className="button is-primary is-rounded" type="button" onClick={() => onDelete(id)}>Remove</button>
        </div>
    );
}; 