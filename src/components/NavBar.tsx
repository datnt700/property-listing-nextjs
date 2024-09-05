import styles from './NavBar.module.scss';
import { Tab } from './Tab';
import { ButtonSwitch } from './ButtonSwitch';
import { Dropdown } from './Dropdown';

interface Tab {
  label: string;
  id: string;
  onClick: () => void;
}

interface NavBarProps {
  tabs: Tab[];
  tabChecked: string;
  isActive: boolean;
  handleSwitchButton: () => void;
  options: string[];
}

export const NavBar = ({
  tabs,
  tabChecked,
  isActive,
  handleSwitchButton,
  options,
}: NavBarProps) => {
  return (
    <div className={styles['nav-container']}>
      <div className={styles['nav-content']}>
        <Tab tabs={tabs} tapChecked={tabChecked} />
        <div className={styles['nav-button']}>
          <ButtonSwitch
            isActive={isActive}
            handleSwitchButton={handleSwitchButton}
          />
          <span>Superhost</span>
          <Dropdown options={options} />
        </div>
      </div>
    </div>
  );
};
