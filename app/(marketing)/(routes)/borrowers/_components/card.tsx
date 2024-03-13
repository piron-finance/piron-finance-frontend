import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

interface Props {
    title: string;
    description: string;
    imageUrl: string;
    color: string;
    index?: number;
}

const Card = ({title, description, imageUrl, color, index}: Props) => {
  return (
    <div className='flex items-stretch '>
      
        <div className='flex flex-col bg-white gap-2 rounded-bl-3xl  w-4/6  p-5'>
            <h1 className='text-xl font-medium text-[#546162]'>{title}</h1>
            <p className=' py-3 text-[#76888A]'>{description}</p>
        </div>

        {/* using index for items 2 and 3 is a temp fix. find out why the hexcodes arent working */}
        <div className={cn(`flex flex-col  rounded-tr-3xl items-center justify-center bg-[${color}]  p-5  w-2/6  `, index == 2 ? "bg-pink-100" : index === 3 && "bg-purple-100")}>
            <Image className=' w-auto h-auto' src={imageUrl} width={48} height={48} alt="header" />
        </div>
    </div>
  )
}

export default Card