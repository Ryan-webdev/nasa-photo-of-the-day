import React from 'react'
import './tiles.css';

function Tiles(props){

    return(
        <div>
            <h2>{props.tile.title}</h2>
                <span>&copy; {props.tile.copyright}</span>
                    <p>Date: {props.tile.date}</p>
            
                <img src={props.tile.url} alt ="Astronomy Pic of the Day"/>
            
            
                    <p style={{fontSiize: 1.5 + 'rem'}}>{props.tile.explanation}</p>
            
        </div>
    );
}

export default Tiles; 