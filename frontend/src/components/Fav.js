import React,{useState,useEffect} from 'react'
import { ToastContainer,toast } from 'react-toastify'
import Header from './Header'
import {useHistory} from 'react-router-dom'

export default function Fav() {
    const [myFav,setMyFav]=useState([])
    const history=useHistory()

    useEffect(() => {
        setMyFav([JSON.parse(localStorage.getItem('favs'))])
    }, [])

    const clearHandler=()=>{
        localStorage.clear()
        toast.success('All Favourites are clear')
        setTimeout(() => {
            history.push('/')
        }, 5000);
    }

    const showFavs=(el)=>{
        if(el===[]){
            return(
                <div class="spinner-border text-danger" role="status">
                    <span class="visually-hidden"></span>
                </div>
            )
        }else{
            if(el[0]===undefined){
                return(
                    <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden"></span>
                    </div>
                )
            }else{
                if(el.length<1){
                    return (<h5>No Records</h5>)
                }else{
                    if(el[0]===null){
                        return<h5 id="empty_text">Favourite is empty</h5>
                    }else{
                        const filtered=[...new Set(el[0])]
                        return filtered.map((item,index)=>{
                            return(
                                <div key={index} className="planet_info">
                                <h4 className="planet_text">{item}</h4>
                                </div>
                            )
                        }) 
                    }
                }
               
            }
        }
    }

    return (
       <div>
       <Header/>
       <div className="main">
       <section className="hero">
            <div className="main_area">
            <ToastContainer/>
                <div className="planet_heading">my favourite</div>
                    {showFavs(myFav)}
                <button id="planet_clear" onClick={()=>clearHandler()}>clear all</button>
                
            </div>
        </section>
        </div>
       
       </div>
    )
}
