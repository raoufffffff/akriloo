import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { IoLocationSharp, IoCaretDownOutline } from "react-icons/io5";
import { BsFilterSquare, BsFillMapFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import './index.css'
import data from '../../data'
import Model from './Model';
import { useSnapshot } from 'valtio';
import state from '../../stor';
import Map from './map';
import { filter } from '../help';
import { motion } from 'framer-motion'

const Allhaous = () => {
    let [SearchParams, setSearchParams] = useSearchParams()
    let snap = useSnapshot(state)
    let con = snap.menu ? "container flex" : "container "
    let menu = snap.menu ? "menu none" : "menu "
    let showlocatoin = snap.menu ? "navigatoin" : "navigatoin none"
    const typeFilter = SearchParams.get("type")
    const typeFilter2 = SearchParams.get("type2")
    let na = filter(typeFilter, typeFilter2, data).map(e => {
        return (
            <Model key={e.id} data={e} />
        )
    })

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }
    let abc = () => {
        handleFilterChange("type", null)
        handleFilterChange("type2", null)
    }
    let raouf = typeFilter || typeFilter2 ? true : false
    return (
        <div className={con}>
            <div
                className={showlocatoin}>
                <div className='locatoin'>
                    <div className='close' onClick={() => state.menu = !state.menu}>
                        <AiOutlineClose />
                    </div>
                    <Link className='locatoin-titel'>locatoin  <IoCaretDownOutline /></Link>
                    <h5 ><IoLocationSharp /> all states , algerai</h5>
                </div>
                <div className='type border'>
                    <p>reson for :</p>
                    <ul>
                        <button
                            onClick={() => handleFilterChange("type", "rent")}
                            className={
                                `
                        ${typeFilter === "rent" ? "green" : ""}`
                            }
                        >
                            rent
                        </button>
                        <button
                            onClick={() => handleFilterChange("type", "buy")}
                            className={`${typeFilter === "buy" ? "green" : ""}`}
                        >
                            buy
                        </button>
                        <button
                            onClick={() => handleFilterChange("type", "vacatoin")}
                            className={`${typeFilter === "vacatoin" ? "green" : ""}`}
                        >vacotion
                        </button>

                    </ul>
                </div>
                <div className='catigory border'>
                    <p className='catigory-titel'>catigory : </p>
                    <ul>
                        <button
                            onClick={() => handleFilterChange("type2", "appartment")}
                            className={`${typeFilter2 === "appartment" ? "green" : ""}`}
                        >appartment</button>
                        <button
                            onClick={() => handleFilterChange("type2", "vila")}
                            className={`${typeFilter2 === "vila" ? "green" : ""}`}
                        >villa</button>
                        <button
                            onClick={() => handleFilterChange("type2", "roum")}
                            className={`${typeFilter2 === "roum" ? "green" : ""}`}
                        >rome</button>
                    </ul>
                </div>
                <center>{raouf && <ul><button
                    onClick={() => abc()
                    }>claer</button></ul>}</center>
            </div>
            <div className={menu}>
                <div className='filter' onClick={() => state.menu = !state.menu}>
                    <span>filter:</span> <BsFilterSquare />
                </div>
                <div className='map' onClick={() => {
                    state.zbi = !state.zbi
                }}><span>map:</span> <BsFillMapFill /></div>
            </div>
            <div className='resolt'>
                {snap.zbi ? <Map mark={filter(typeFilter, typeFilter2, data)} /> : <>{na}</>}
            </div>
        </div >
    )
}

export default Allhaous