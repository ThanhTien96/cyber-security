import React from 'react'
import { Row, Col } from 'antd';
import image3 from '../public/images/09.jpg'
import Image from 'next/image';
import { Collapse } from 'antd';
import { AiOutlinePlus } from "react-icons/ai";

const { Panel } = Collapse;

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.
`;

type Props = {}

const Assessments = (props: Props) => {
    return (
        <div className='py-20 lg:py-40'>
            <Row>
                <Col className='flex items-center lg:pr-10 px-5' span={24} lg={12}>
                    <div>
                        <h1 className='text-2xl text-4xl'>Cybersecurity risk assessment</h1>
                        <p className='my-10 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                        <Collapse accordion defaultActiveKey={'1'}>
                            <Panel header={<h2 className='text-xl m-0 p-0'>Endpoint device security protection</h2>} key="1">
                                <p className='text-lg py-10'>{text}</p>
                            </Panel>
                            <Panel header={<h2 className='text-xl m-0 p-0'>Spam and malware protection</h2>} key="2">
                                <p className='text-lg py-10'>{text}</p>
                            </Panel>
                            <Panel header={<h2 className='text-xl m-0 p-0'>Website breach protection</h2>} key="3">
                                <p className='text-lg py-10'>{text}</p>
                            </Panel>
                        </Collapse>
                    </div>

                </Col>

                <Col className='lg:pl-10 mt-10 lg:mt-0' span={24} lg={12}>
                    <Image className='block w-full md:h-full lg:h-auto' src={image3} alt={'...'} width={0} height={0} unoptimized />
                </Col>
            </Row>
        </div>
    )
}

export default Assessments