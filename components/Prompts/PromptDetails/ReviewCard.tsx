import Ratings from '@/utils/Ratings'
import { styles } from '@/utils/styles'
import { Avatar } from '@nextui-org/react'
import React from 'react'

type Props = {}

const ReviewCard = (props: Props) => {
    return (
        <div className='flex my-2'>
            <div>
                <Avatar
                    size='lg'
                    src='https://i.pravatar.cc/150?u=a04258114e29026302d'
                />
            </div>
            <div className='pl-3'>
                <div className='flex items-center'>
                    <span className={`${styles.label} !text-xl text-white`}>
                        Allen
                    </span>
                    <span className={`${styles.label} pl-3`}>
                        5 days ago
                    </span>
                    <Ratings rating={5}/>
                </div>
                <p className={`${styles.paragraph} whitespace-pre-line`}>
                    laskdm maskd maslkd m kalsmd aslkmd asdm aslkd maskd maslkd mas
                     dmsa dmaskl mdas mas mas kams dsamd kasm asdasd km dmlka smd
                </p>
            </div>
        </div>
    )
}

export default ReviewCard