import React, {useState} from 'react'
import Header from './Header'
import {Data} from '../data/Data'
import List from '../recipe/List'

function Main() {




    return (
        <div>
            <Header />

            <List Data ={Data} />
   
        

        
        </div>
    )
}

export default Main
