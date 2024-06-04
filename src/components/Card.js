import React from 'react'

export default function Card(props) {
    const classes = () => {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : '';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card w-100' + bg + txt;
    }

    return (
        <div className={classes()}>
            <div className="card-body">
                {props.title && (<h3 className="card-title">{props.title}</h3>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus' style={{ marginTop: 10}}>{props.status}</div>)}
            </div>
        </div>
    );
}
