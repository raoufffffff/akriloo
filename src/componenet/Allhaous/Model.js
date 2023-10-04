import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { hlp1 } from '../help'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { motion } from 'framer-motion'
const Model = ({ data }) => {
    let [a, seta] = useState(0)
    let b = a == data.images.length - 1 ? false : true
    return (
        <motion.div
            initial={{ x: 400, }}
            animate={{ x: 0 }}
            transition={{ duration: 2, type: "spring" }}
            exit={{ y: 1000 }}
            className='l'>
            {a > 0 && <span className='left s' onClick={() => { seta(p => a - 1) }}><BsArrowLeftCircleFill /></span>}
            {b && <span className='right s' onClick={() => { seta(p => a + 1) }}><BsArrowRightCircleFill /></span>}

            <Link
                to={`${data.id}`}
                className='article'
                data-for={data.for}
            >
                <img src={data.images[a]} />
                <h3>{data.titel}</h3>
                <h4>{data.state}, <span>{data.city}</span></h4>
                <h5>{data.prix} DA/<span>{hlp1(data.for)}</span></h5>
            </Link >
        </motion.div>
    )
}

export default Model