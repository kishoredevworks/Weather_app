import React, { useEffect, useState } from 'react'
import { useDate } from '../Utils/useDate'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'

const WeatherCard = ({
    temperature,
    windspeed,
    humidity,
    place,
    heatIndex,
    iconString,
    conditions,
}) => {
    const [icon, setIcon] = useState(sun)
    const { time } = useDate()

    useEffect(() => {
        if (iconString) {
            if (iconString.toLowerCase().includes('cloud')) {
                setIcon(cloud)
            } else if (iconString.toLowerCase().includes('rain')) {
                setIcon(rain)
            } else if (iconString.toLowerCase().includes('clear')) {
                setIcon(sun)
            } else if (iconString.toLowerCase().includes('thunder')) {
                setIcon(storm)
            } else if (iconString.toLowerCase().includes('fog')) {
                setIcon(fog)
            } else if (iconString.toLowerCase().includes('snow')) {
                setIcon(snow)
            } else if (iconString.toLowerCase().includes('wind')) {
                setIcon(wind)
            }
        }
    }, [iconString])

    const getHeatIndexMessage = (heatIndex) => {
        if (heatIndex <= 26) return "Safe";
        if (heatIndex <= 32) return "Caution";
        if (heatIndex <= 41) return "Extreme Caution";
        if (heatIndex <= 54) return "Danger";
        return "Extreme Danger";
    }

    return (
        <div className='w-[22rem] min-w-[22rem] h-[32rem] glassCard p-4'>
            <div className='flex w-full justify-center items-center gap-4 mt-8 mb-4'>
                <img src={icon} alt="weather_icon" className='h-[6rem]' />
                <p className='font-bold text-5xl flex justify-center items-center'>{temperature}&deg;C</p>
            </div>
            <div className='font-bold text-center text-xl'>
                {place}
            </div>
            <div className='w-full flex justify-between items-center mt-4'>
                <span className='flex-1 text-center'>{new Date().toDateString()}</span>
                <span className='flex-1 text-center'>{time}</span>
            </div>
            <div className='w-full flex justify-between items-center mt-4 gap-4'>
                <div className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>
                    <span>Wind Speed</span>
                    <span className='font-normal block'>{windspeed} km/h</span>
                </div>
                <div className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>
                    <span>Humidity</span>
                    <span className='font-normal block'>{humidity} gm/m&#179;</span>
                </div>
            </div>
            <div className='w-full p-3 mt-4 flex flex-col justify-between items-center bg-yellow-300 text-black rounded-lg'>
                <span className='font-semibold text-lg'>Heat Index</span>
                <span className='text-lg font-bold'>{heatIndex ? `${heatIndex}°C` : 'N/A'}</span>
                <span className='text-sm'>{heatIndex ? getHeatIndexMessage(heatIndex) : 'N/A'}</span>
            </div>
            <hr className='bg-slate-600 my-4' />
            <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
                {conditions}
            </div>
        </div>
    )
}

export default WeatherCard