import styles from './Dropdown.module.scss';

interface DropdownProps {
  options: string[];
}

export const Dropdown = ({ options }: DropdownProps) => {
  return (
    <div className={styles['drop-list']}>
      <div className={styles['arrow-icon']}></div>
      <select className={styles['drop-select']}>
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
