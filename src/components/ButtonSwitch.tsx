import styles from './ButtonSwitch.module.scss';

interface ButtonSwitchProps {
  isActive: boolean;
  handleSwitchButton: () => void;
}

export const ButtonSwitch = ({
  isActive,
  handleSwitchButton,
}: ButtonSwitchProps) => {
  return (
    <div
      onClick={handleSwitchButton}
      className={isActive ? `${styles.btn} ${styles.active}` : styles.btn}
    >
      <div
        className={
          isActive
            ? `${styles['btn-indicator']} ${styles.active}`
            : styles['btn-indicator']
        }
      ></div>
    </div>
  );
};
