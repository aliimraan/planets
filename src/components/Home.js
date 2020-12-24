import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios'
import Header from './Header'
import { ToastContainer, toast } from 'react-toastify';



export default function Home() {
    const [planets,setPlantes]=useState([])
    const [isFavourite,setIsFavourite]=useState(false)
    let btnRef = useRef();

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

    const favHandler=(item)=>{
           let favlist = []
            favlist = JSON.parse(localStorage.getItem('favs')) || []
            favlist.push(item)
            localStorage.setItem('favs', JSON.stringify(favlist));
            toast.success('Added to Favourite')
    }

    const showPlants=(el)=>{
        if(el===[]){
            return (
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
                    return el[0].map((item,index)=>{
                        const {id,name}=item
                        return(
                            <div key={index} className="planet_info">
                            <h4 className="planet_text">{name}</h4>
                            <button className="planet_btn" onClick={()=>favHandler(id)}>mark as fav</button>
                            </div>
                        )
                    
                    })
                
            }
            
        }
        
    }

    return (
        <div>
            <Header/>
            <div className="main">
            <section className="hero">
            <ToastContainer/>
                <div className="main_area">
                    <div className="planet_heading">all planets</div>
                    {showPlants(planets)}
                </div>
            </section>
            </div>
        </div>
    )
}
