import React from "react";

import "./GameGrid.css"


export default function GameGrid({
    pics
}) {

    return 
    <div className = "game-container">
    {
        pics.map((pic) => {
            <img src = {pic.source} className = "game-box" id = {pic.id} onClick = {pic.clickHandler}></img>
        })
    }
  </div>
}