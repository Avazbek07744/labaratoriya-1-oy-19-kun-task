import React, { useEffect, useState } from 'react'
import lord from '../axios'
const Section = () => {
    const [text, settext] = useState('')
    useEffect(() => {
        lord.get("/psychologic")
            .then(data => {
                settext(data.data)
            })
            .catch(err => {
                console.log(err);

            })
    }, [])
    return (
        <div className='max-w-[1312px] mx-auto my-8'>
            <h2 className='text-4xl font-bold flex gap-2.5'><p className='w-3 h-10 bg-blue-800'></p>Психологик диагностика</h2>
            <div className='mt-9 flex gap-6'>
                <p className='w-[644px] text-xl '>{text.text1}</p>
                <p className='w-[644px] text-xl'>{text.text2}</p>
            </div>
        </div>
    )
}

export default Section
