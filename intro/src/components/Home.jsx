import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
export default function Home() {
    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(true)
    async function getMovies(){
        try {
            let result = await axios.get('https://ghibliapi.vercel.app/films')
            if(result.status === 200){
                setMovies(result.data)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>
            <Navbar />
            <hr />
            <Outlet />

            <hr />

            {
                loading?
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
                    </div>
                </div>:
                <div className="container">
                    <div className="row">
                        {
                              movies.map((item) => {
                    return (
                        <div key={item.id} className="p-3 col-md-6">
                            <div className="card bg-secondary-subtle">
                                <h1>{item.title}</h1>
                            <h2>{item.description}</h2>
                            </div>
                        </div>
                    )
                })
                        }
                    </div>
                </div>
              
            }

        </div>
    )
}