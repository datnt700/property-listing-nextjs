import React from 'react';
import styles from './Card.module.scss';
import homeIcon from '../../public/Home_duotone.svg';
import peopleIcon from '../../public/User_alt_duotone.svg';
import starIcon from '../../public/Starfill.svg';

import Image from 'next/image';

interface CardProps {
  image: string;
  title: string;
  label: string;
  description: string;
  price: number;
  rating: number;
  capacity: { bedroom: number; people: number };
  superhost: boolean;
}

export const Card = ({
  image,
  title,
  label,
  description,
  price,
  rating,
  capacity,
  superhost,
}: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Image src={image} alt="image" width={100} height={10} />

        {superhost && <span className={styles.label}>{label} ⭐️</span>}
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.quantity}>
            <div className={styles.item}>
              <Image src={homeIcon} alt="homeIcon" width={25} height={40} />
              <span>{capacity.bedroom} bedroom</span>
            </div>
            <div className={styles.item}>
              <Image src={peopleIcon} alt="peopleIcon" width={25} height={40} />
              <span>{capacity.people} guests</span>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.footer}>
          <p className={styles.price}>
            ${price}
            <span>/night</span>
          </p>
          <div className={styles.rating}>
            <Image src={starIcon} alt="starIcon" width={25} height={40} />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
