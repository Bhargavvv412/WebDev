import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import cars from './practice'

console.log(cars);

const [Honda, Tesla] = cars;
const {
    speedStats: {
        topSpeed: HondaTopSpeed
    }
} = Honda;
const { speedStats: { topSpeed: TeslaTopSpeed } } = Tesla;

const { coloursByPopularity: [HondaTopColour] } = Honda;
const { coloursByPopularity: [TeslaTopColour] } = Tesla;

function Car() {
    return (
        <>
            <table>
                <tr>
                    <th>Brand</th>
                    <th>Top Speed</th>
                    <th>Top Colours</th>
                </tr>
                <tr>
                    <td>{Tesla.model}</td>
                    <td>{TeslaTopSpeed}</td>
                    <td>{TeslaTopColour}</td>
                </tr>
                <tr>
                    <td>{Honda.model}</td>
                    <td>{HondaTopSpeed}</td>
                    <td>{HondaTopColour}</td>
                </tr>
            </table>
        </>
    )
}
export default Car;