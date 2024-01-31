import React from 'react'
import styles from './HighlightCard.module.scss'
import { formatTimestamp } from '@/app/utils/services'
import Image from 'next/image';
interface HighlightCardType{
    heading: string;
    heading_value: string
    image: string
    imgSize: number
}

const HighlightCard = ({heading, heading_value, image, imgSize}:HighlightCardType) => {
  return (
    <div className={styles.card_container}>
            <div className={styles.card_info}>
              <p className={styles.heading}>{heading}</p>
              <p className={styles.heading_val}>{heading_value}</p>
            </div>
            <Image
              src={`/openweathermap/${image}.png`}
              alt="weather"
              width={imgSize}
              height={imgSize}
              priority
            />
          </div>
  )
}

export default HighlightCard