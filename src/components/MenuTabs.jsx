import React, { useState } from 'react';

const style = {
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

function MenuTabs(props) {
    const [isCurrent, setIsCurrent] = useState(false);
    
    return (
        <div style={style}>홈</div>
    );
}

export default MenuTabs;