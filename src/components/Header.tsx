import * as React from 'react'
import logo from '../assets/Logo.png'
import noti from '../assets/noti.svg'
import info from '../assets/info.svg'
import menu from '../assets/menu.svg'


function Header() {

    const [today, setToday] = React.useState<string>("")
    const [todayTime, setTodayTime] = React.useState<string>("")

    React.useEffect(() => {
        const today = new Date();
        
        const year = today.getFullYear()
        let day = today.getDay().toString()
        let month = (today.getMonth() + 1).toString()
        let hour = today.getHours().toString()
        let minits = today.getMinutes().toString()

        if (parseInt(day) < 10) day = '0' + day
        if (parseInt(month) < 10) month = '0' + month

        if (parseInt(hour) < 10) hour = '0' + hour
        if (parseInt(minits) < 10) minits = '0' + minits
        const formattedTodayTime = hour + ':' + minits 
        const formattedToday = day + '.' + month + '.' + year

        setToday(formattedToday)
        setTodayTime(formattedTodayTime)
    }, [])


    return ( 
        <header className='header sticky flex justify-between'>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div className='flex justify-between items-center gap-8'>
                <div>
                    <p className='m-0 text-sm text-gray-400 '>Time and date</p>
                    <p className='m-0 text-base font-bold'>
                        <span>{today}</span>
                        <span className='px-5'>|</span>
                        <span>{todayTime}</span>
                    </p>
                </div>
                <div className='flex gap-8'>
                    <button>
                        <img src={info} alt=""  className='rounded-full'/>
                    </button>
                    <button>
                        <img src={noti} alt=""  className='rounded-full'/>
                    </button>
                </div>
                <div className='
                        flex justify-between items-center
                '>
                    <img src="http://placekitten.com/50/50" alt=""  className='rounded-full w-[50px] h-[50px]'/>
                    <div className='ml-4'>
                        <p className='m-0 text-sm text-gray-400'>Operator</p>
                        <p className='m-0 text-base font-bold'>Frank Muller</p>
                    </div>
                </div>
                <div>
                    <img src={menu} alt="Menu" />
                </div>
            </div>
        </header>
     )
}

export default Header