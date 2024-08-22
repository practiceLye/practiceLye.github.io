import React, { useState } from 'react';

const menus = {
    position: 'absolute',
    width: '60px',
    height: '400px',
    top: '19%',
    right: '23%'
}

const tabs = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '60px',
    height: '30px',
    fontSize: '0.9rem',
    border: '2px solid rgb(255, 191, 191)',
    borderRadius: '5px'
}

function MenuTab(props) {
    const [isCurrent, setIsCurrent] = useState(false);
    
    return (
        <div style={menus}>
            <div style={tabs}>홈</div>
        </div>
    );
}

export default MenuTab;