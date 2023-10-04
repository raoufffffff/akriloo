import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import data from '../../data'
import './index.css'
import { FcCheckmark } from "react-icons/fc"
import { BsFillTelephoneFill } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import Gal from './gal'
import VilaMap from './VilaMap'
import { hlp1 } from '../help'
import Calnder from './calnder'

const VillaInfo = () => {
    const params = useParams()
    let vila = data.find((e) => {
        return e.id == params.id
    })

    return (
        <div className='villa'>
            <div className='minigalorry'>
                <Gal photo={vila.images} />
            </div>
            <div className='info'>
                <div className='titel'>
                    <h1>{vila.titel} , {vila.for}</h1>
                    <div className='titel-nav'>
                        <Link className='revu'>0 revus</Link>
                        <span className='locatoin'>{vila.state}, {vila.city}</span>

                    </div>
                </div>
                <div className='titel'>
                    <h3>about:</h3>
                    <p className='offers'>{vila.describtoin}</p>
                    <span>{vila.type} </span>,  <span>{vila.f}</span>

                </div>
                <div className='titel owner'>
                    <div className='o-inf'>
                        <h4>the owner :{vila.owner.fullname}</h4>
                        <h5>owner contact</h5>
                        <ul>
                            <li>{vila.owner.email}</li>
                            <li>{vila.owner.tel}</li>
                        </ul>
                    </div>
                    <img src={vila.owner.img} />
                </div>

                <div className='titel'>
                    <h3>What this place offers :</h3>
                    {vila.offers.map(e => {
                        return (<p key={e} className='offers'><FcCheckmark /> {e}</p>)
                    })}
                </div>
                <div className='titel map'>
                    <VilaMap position={vila.position} />
                </div>
                <div className='titel'>
                    {vila.for == "vacatoin" ? (<Calnder prix={vila.prix} />) : <>the price is{vila.prix}DA {hlp1(vila.for)} </>}
                </div>
            </div>
        </div>
    )
}

export default VillaInfo