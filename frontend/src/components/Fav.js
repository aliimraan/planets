import React,{useState,useEffect} from 'react'

export default function Fav() {
    const [myFav,setMyFav]=useState([])

    useEffect(() => {
        setMyFav([JSON.parse(localStorage.getItem('favs'))])
    }, [])

    const showFavs=(el)=>{
        if(el===[]){
            return <h3>loading...</h3>
        }else{
            if(el[0]===undefined){
                return<h3>loading...</h3>
            }else{
                return el[0].map((item,index)=>{
                    return(
                        <div key={index}>
                        <h4>{item}</h4>
                        </div>
                    )
                })
            }
        }
    }

    return (
       <div>{showFavs(myFav)}</div>
    )
}
