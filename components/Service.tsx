import { Row, Col } from 'antd';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import img1 from '../public/images/03.jpg';
import img2 from '../public/images/14.jpg';
import { AiOutlineArrowRight } from "react-icons/ai";
import Assessments from './Assessments';

type Props = {}

const Service = (props: Props) => {
    return (
        <div className='container mx-auto py-96 my-96'>
            <Row>
                <Col className='order-1 flex justify-center items-center p-10 bg-teal-100' span={24} md={12}>
                    <div>
                        <h1 className='text-2xl lg:text-4xl mb-5'>Certified cybersecurity experts</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <Link href={'/'} className='lg:mt-16 mt-5 inline-block text-lg uppercase flex items-center'><span>Learn More</span> <AiOutlineArrowRight className='inline-block ml-2' /></Link>
                    </div>
                </Col>

                <Col className='order-2' span={24} md={12}>
                    <Image className='block w-full md:h-full lg:h-auto' src={img1} alt={'...'} width={0} height={0} unoptimized />
                </Col>

                <Col className='order-4 md:order-3' span={24} md={12}>
                    <Image className='block w-full md:h-full lg:h-auto' src={img2} alt={'...'} width={0} height={0} unoptimized />
                </Col>

                <Col className='flex justify-center items-center p-10 bg-teal-100 order-3 md:order-4' span={24} md={12}>
                    <div>
                        <h1 className='text-2xl lg:text-4xl mb-5'>Deliver reliable security intelligence</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <div className='flex lg:mt-16 mt-10'>
                            <div className='mr-16 flex flex-col justify-center items-center'>
                                <h3 className='text-4xl lg:text-6xl font-semibold text-gray-400'>19K</h3>
                                <p>GIGABYTES</p>
                            </div>

                            <div className='flex flex-col justify-center items-center'>
                                <h3 className='text-4xl lg:text-6xl font-semibold text-gray-400'>653+</h3>
                                <p>CYBER PROJECTS</p>
                            </div>
                    
                        </div>
                    </div>
                </Col>
            </Row>

            <Assessments />
        </div>
    )
}

export default Service