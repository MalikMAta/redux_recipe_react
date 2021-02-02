import React,{useState} from 'react'

function List(props) {

const {Data} = props

    return (
        <div className="rowL">

        {Data && Data.map(recipe =>{
            return(
                <>
                <div className="indiv-recipe z-depth-1">
                <p>{recipe.title }</p>
                </div>
                </>
            )
        })}

        </div>
    )
}

export default List
