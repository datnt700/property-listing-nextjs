import styles from './Tab.module.scss';

interface Tab {
  label: string;
  id: string;
  onClick: () => void;
}

interface TabProps {
  tabs: Tab[];
  tapChecked: string;
}

export const Tab = ({ tabs, tapChecked }: TabProps) => {
  return (
    <div className={styles.tabs}>
      <ul className={styles['tab-list']}>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={tab.onClick}
              className={`${styles.tab}  ${tab.id === tapChecked && styles.active}`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
