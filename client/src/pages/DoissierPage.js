import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";

import 'bootstrap/dist/css/bootstrap.min.css'
import { useHttp } from "../hooks/http.hook";
import { Loader } from "../components/Loader";


export const Doissier = () => {
    const {token} = useContext(AuthContext)
    const [doissiers, setDoissier]=useState([])
    const {request, loading} = useHttp()

    const getDoissiers = useCallback( async ()=>{
        try {
           const fetched = await request('/api/doissierList/doissierList', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setDoissier(fetched)
        } catch (error) {
            
        }
    }, [token, request])


    const deleteObject = useCallback ( async () =>{
        const fetched = await request('/api/doissierList/doissierList', 'DELETE', null, {
            Authorization: `Bearer ${token}`
        })
    }, [token, request] )

    useEffect (()=>{
        getDoissiers()
    }, [getDoissiers])

    if (loading){
        return <Loader />
    }

    return (
        <div className="container mt-5 w-51 h-51 bg-light rounded">
            <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">№</th>
                    <th scope="col">Ім'я</th>
                    <th scope="col">Прізвище</th>
                    <th scope="col">Вік</th>
                    <th scope="col">Номер телефону</th>
                    <th scope="col">День народження</th>
                    <th scope="col">Місце роботи</th>
                    </tr>
                </thead>
                <tbody >
                    {doissiers.map( (doissier, index) =>{
                        return(
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{doissier.firstName}</td>
                                <td>{doissier.lastName}</td>
                                <td>{doissier.age}</td>
                                <td>{doissier.phoneNumber}</td>
                                <td>{doissier.birthDay}</td>
                                <td>{doissier.workPlace}</td>
                                <td><button type="submit" class="btn btn-danger btn-sm" 
                                onClick={() =>{
                                    deleteObject()
                                    window.location.reload()
                                }}
                                >🗑️</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}