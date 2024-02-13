import React from 'react'

import facebook from '../Assets/Icons/facebook.svg'
import linkedin from '../Assets/Icons/linkedin.svg'
import twitter from '../Assets/Icons/twitter.svg'
import youtube from '../Assets/Icons/youtube.svg'
import instagram from '../Assets/Icons/instagram.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='bg-[#E7ECFF] py-20'>
        <div className='w-[90%] max-w-[1100px] m-auto'>
            <div className="flex justify-between items-center">
                <p className='text-sm text-[#939EA4] leading-6'>©2023 Yourcompany</p>
                <h1 className='text-2xl text-[#37447E] font-black leading-10'>Landing</h1>
                <button className="text-white bg-[#111B47] px-6 py-[6px] rounded-sm text-xs">Purchase Now</button>
            </div>
            <div className='w-full h-[1px] bg-[#CDD1D4] my-5'></div>
            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-10">
                    <p className='text-sm text-[#939EA4] leading-6'>Home</p>
                    <p className='text-sm text-[#939EA4] leading-6'>About</p>
                    <p className='text-sm text-[#939EA4] leading-6'>Contact</p>
                </div>
                <div className="flex justify-start items-center gap-8">
                    <Image src={facebook} className="w-[16px] h-[16px]" />
                    <Image src={linkedin} className="w-[16px] h-[16px]" />
                    <Image src={twitter} className="w-[16px] h-[16px]" />
                    <Image src={youtube} className="w-[16px] h-[16px]" />
                    <Image src={instagram} className="w-[16px] h-[16px]" />
                </div>
            </div>
        </div>
    </div>
  )
}
