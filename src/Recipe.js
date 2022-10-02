import React from 'react'
import "./App.css";

function Recipe({name, cuisine, photo, ingredients, preparation, handleDelete, index}) {
    return (
        <tr key={index}>
            <td>{name}</td>
            <td>{cuisine}</td>
            <td><img src={`${photo}`} alt="" /></td>
            <td className="content_td"><p>{ingredients}</p></td>
            <td className="content_td"><p>{preparation}</p></td>
            <td><button name="delete" onClick={handleDelete}>Delete</button></td>
        </tr>
    )
}

export default Recipe;