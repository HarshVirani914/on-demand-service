import React from 'react'
import imgNotFound from 'public/404-NotFound.png';
import Image from 'next/image';

const page = () => {
  return (
    <>
    <div>
        <Image src={imgNotFound} alt='' className='lg:ml-[20%]' height={600}/>
    </div>
    </>
  )
}

export default page