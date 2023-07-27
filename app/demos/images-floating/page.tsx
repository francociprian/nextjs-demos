'use client'

import gsap from 'gsap';
import Image from 'next/image';
import {
  floating1,
  floating2,
  floating3,
  floating4,
  floating5,
  floating6,
  floating7,
  floating8
} from '@/data/Data';
import { useRef } from 'react';

const Page = () => {
  const planeOne = useRef(null)
  const planeTwo = useRef(null)
  const planeThree = useRef(null)

  let requestAnimationFrameId: any = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { movementX, movementY } = e
    xForce += movementX * speed;
    yForce += movementY * speed;

    if(requestAnimationFrameId == null){
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  }

  const lerp = (start: number, target: number, amount: number) => start * (1 - amount) +target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(planeOne.current, {x: `+=${xForce}`, y: `+=${yForce}`})
    gsap.set(planeTwo.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})
    gsap.set(planeThree.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})

    if(Math.abs(xForce) < 0.01) xForce = 0;
    if(Math.abs(yForce) < 0.01) yForce = 0;
    
    if(xForce != 0 || yForce != 0){
      requestAnimationFrame(animate);
    }
    else{
      cancelAnimationFrame(requestAnimationFrameId)
      requestAnimationFrameId = null;
    }
  }

  return (
    <div
      onMouseMove={(e) => { manageMouseMove(e) }}
      className='h-[calc(100vh-3rem)] w-screen overflow-hidden relative'
    >
      <div className='absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-50'>
        <h1 className=' font-normal text-black dark:text-white m-0 text-center text-6xl'>Floating Images</h1>
      </div>
      <div ref={planeOne} className='w-full h-full absolute brightness-[0.7]'>
        <Image
          className='absolute left-[80%] top-[70%]'
          src={floating1}
          alt='image'
          width={300}
        />
        <Image
          className='absolute left-[5%] top-[65%]'
          src={floating2}
          alt='image'
          width={300}
        />
        <Image
          className='absolute left-[35%] top-[0%]'
          src={floating7}
          alt='image'
          width={265}
        />
      </div>
      <div ref={planeTwo} className='w-full h-full absolute brightness-[0.6]'>
        <Image
          className='absolute left-[5%] top-[10%]'
          src={floating4}
          alt='image'
          width={250}
        />
        <Image
          className='absolute left-[80%] top-[5%]'
          src={floating6}
          alt='image'
          width={200}
        />
        <Image
          className='absolute left-[60%] top-[60%]'
          src={floating8}
          alt='image'
          width={225}
        />
      </div>
      <div ref={planeThree} className='w-full h-full absolute brightness-[0.5]'>
        <Image
          className='absolute left-[65%] top-[2.5%]'
          src={floating3}
          alt='image'
          width={150}
        />
        <Image
          className='absolute left-[35%] top-[65%]'
          src={floating5}
          alt='image'
          width={300}
        />
      </div>
    </div>
  )
}

export default Page;