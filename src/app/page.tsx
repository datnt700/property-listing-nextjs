'use client';
import { Card } from '../components/Card';
import { NavBar } from '../components/NavBar';
import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
import { CardType } from '../interfaces/CardType';

export default function Home() {
  const [tabChecked, setTabChecked] = useState<string>('All');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [cardData, setCardData] = useState<CardType[]>([]);
  const [filterdCardData, setFilterdCardData] = useState<CardType[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json'
    )
      .then((response) => response.json())
      .then((data) => {
        setCardData(data);
        setFilterdCardData(data);
      })
      .catch((error) => {
        setError('Failed to fetch data. Please try again later.');
      });
  }, []);

  const tabs = [
    {
      label: 'All Stays',
      id: 'All',
      onClick: () => handleTabClick('All'),
    },
    {
      label: 'Norway',
      id: 'Norway',
      onClick: () => handleTabClick('Norway'),
    },
    {
      label: 'Finland',
      id: 'Finland',
      onClick: () => handleTabClick('Finland'),
    },
    {
      label: 'Sweden',
      id: 'Sweden',
      onClick: () => handleTabClick('Sweden'),
    },
    {
      label: 'Switzerland',
      id: 'Switzerland',
      onClick: () => handleTabClick('Switzerland'),
    },
  ];

  const options = ['house', 'appartement', '...'];

  useEffect(() => {
    if (tabChecked === 'All') {
      setFilterdCardData(cardData);
    } else {
      const formattedCard = cardData.filter(
        (item) => item.location === tabChecked
      );
      setFilterdCardData(formattedCard);
    }
  }, [tabChecked, cardData]);

  const handleTabClick = (tapId: string) => {
    setTabChecked(tapId);
  };

  const handleSwitchButton = () => {
    setIsActive((e) => !e);
  };
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Peace, nature, dream</h1>
        <p className={styles.text}>Find and book a great experience.</p>
      </div>
      <NavBar
        tabs={tabs}
        tabChecked={tabChecked}
        isActive={isActive}
        handleSwitchButton={handleSwitchButton}
        options={options}
      />
      <div className={styles.content}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p className={styles['sous-title']}>Over 200 stays</p>
        <div className={styles['card-list']}>
          {filterdCardData.map((i) => (
            <Card
              key={i.id}
              image={i.image}
              title={i.title}
              label="Superhost"
              description={i.description}
              price={i.price}
              rating={i.rating}
              capacity={i.capacity}
              superhost={i.superhost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
