import React from 'react';
import { styles } from './styles';
import { ReactComponent as Plus } from '../../common/assets/icons/plus.svg';

interface HeaderProps {
    invoiceLength: number;
    handleClick: () => void;
}
const Header = ({ invoiceLength, handleClick }: HeaderProps) => {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <h5 className={styles.headerTitle}>Invoices</h5>
                <p className={styles.headerTitleDescription}>There are {invoiceLength} total invoices</p>
            </div>

            <div className={styles.headerButtonContainer}>
                <p>a</p>
                <button type="button" onClick={handleClick} className={styles.headerButton}><span className={styles.headerButtonCircle}>
                    <Plus />
                </span>New Invoice</button>
            </div>

        </div>
    )
}

export default Header