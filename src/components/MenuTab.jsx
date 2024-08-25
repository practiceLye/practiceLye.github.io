import React from 'react';
import styled from "styled-components";

const Menus = styled.div`
    position: absolute;
    width: 60px;
    height: 400px;
    top: 19%;
    right: 21%;
`

const Tab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;
    background-color: white;
    width: 70px;
    height: 32px;
    font-size: 0.85rem;
    border: 2px solid rgb(255, 191, 191);
    border-radius: 5px;
`

function MenuTab(props) {
    
    return (
        <Menus>
            {props.menu.map((list)=> {
                return (<Tab onclick={() => props.menuClick(list)}>{list}</Tab>)
            })}
        </Menus>
    );
}

export default MenuTab;