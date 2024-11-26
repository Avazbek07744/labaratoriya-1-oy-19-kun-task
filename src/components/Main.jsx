import React, { useEffect, useState } from 'react';
import img from '../assets/user.png'

const Main = () => {

    return (
        <>
            <div className='flex justify-between max-w-[1312px] mx-auto'>
                <div className='flex items-center gap-8'>
                    <img src={img} height={288} alt="" />
                    <div className='flex flex-col'>
                        <h1 className=' text-[44px] mb-8'><span className='font-bold'>Азамат Шарипов</span><br /> Абдуллажон угли</h1>
                        <div className='mb-9'>
                            <p className='text-xl text-[#495057] flex gap-10'><span>Тугилган сана:</span>30.09.1997 йил</p>
                            <p className='text-xl text-[#495057] flex gap-10'><span>Тугилган жой:</span>Чуст ш., Наманган.</p>
                        </div>
                        <ul className='flex gap-3'>
                            <li className='flex flex-col text-xl font-semibold'>Буйи: <span className='font-bold'>175см</span></li>
                            <li className='flex flex-col text-xl font-semibold'>Вазни: <span className='font-bold'>70кг</span></li>
                            <li className='flex flex-col text-xl font-semibold'>Индекс: <span className='font-bold'>22,9</span></li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-[#212529] text-xl w-[421px] leading-8'><span>Лавозими:</span><br />
                        Қорақалпоғистон Республикаси Камбағалликни қисқартириш ва бандлик вазири уринбосари
                    </p>
                    <p className='text-[#212529] text-xl w-[421px] leading-8'><span>Номзод:</span><br />
                        Қорақалпоғистон Республикаси Камбағалликни қисқартириш ва бандлик вазири
                    </p>
                </div>
            </div>
        </>
    );
};

export default Main;
