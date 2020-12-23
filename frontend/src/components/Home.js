import React,{useState,useEffect} from 'react'
import axios from 'axios'


export default function Home() {
    const [planets,setPlantes]=useState([])

    useEffect(()=>{
        getPlanets()
    },[])

    const getPlanets=()=>{
    axios.get('https://assignment-machstatz.herokuapp.com/planet').then(data=>{
        setPlantes([data.data])
    }).catch(err=>{
        console.log(err)
    })
    }

    const favHandler=(id)=>{
    let favlist = []
        favlist = JSON.parse(localStorage.getItem('favs')) || []
        favlist.push(id)
        localStorage.setItem('favs', JSON.stringify(favlist));
    }

    const showPlants=(el)=>{
        if(el===[]){
            return <h3>loading...</h3>
        }else{
            if(el[0]===undefined){
                return<h3>loading...</h3>
            }else{
                return el[0].map((item,index)=>{
                    return(
                        <div key={index}>
                        <h4>{item.name}</h4>
                        <button onClick={()=>favHandler(item.id)}>mark as fav</button>
                        </div>
                    )
                
                })
            }
            
        }
        
    }

    return (
        <div>
            {showPlants(planets)}
        </div>
    )
}
