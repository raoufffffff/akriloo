import React from 'react'
import Calander from '../calander'
import { useSnapshot } from 'valtio'
import state from '../../stor'

const Calnder = ({ prix }) => {
    let snap = useSnapshot(state)

    let getdaynam = () => {
        let a = (snap.endtday.getMonth() + 1) - (snap.startday.getMonth() + 1)
        a = (a * 30)
        a += (snap.endtday.getDate() + 1)
        a -= (snap.startday.getDate() + 1)
        return a
    }
    return (
        <>
            <center>
                {snap.endtday && <><span>{snap.startday.toLocaleDateString()}, {snap.endtday.toLocaleDateString()}</span>
                    <br />
                    for one night = {prix}DA
                    <br />
                    this for {
                        getdaynam()

                    } nights = {getdaynam() * prix}DA
                </>}
            </center>
            <center>
                <Calander />
            </center>
        </>
    )
}

export default Calnder