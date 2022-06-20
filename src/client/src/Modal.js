import React from 'react';

const OVERLAY_STYLES={
    position: "fixed",
    top:0,
    left:0,
    right:0,
    bottom:0,
    background: "rgba(0,0,0,0.7)",
    zIndex: 1000,
    color:"#FFF",
    border:"solid",
    width:"60vh",
}



export default function Modal({open,children,onClose}){
    if(!open) return null;

    return (
        <div style = {OVERLAY_STYLES}>
            <button onClick={onClose}>Close</button>
            {children}
        </div>
    )
}