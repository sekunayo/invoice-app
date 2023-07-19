import React from 'react'
import { styles } from './styles';
import { ReactComponent as EmptyIcon } from '../../common/assets/icons/empty.svg';

const EmptyInvoice = () => {
    return (
        <div className={styles.emptyInvoice}>
            <EmptyIcon />
            <h4 className={styles.emptyInvoiceTitle}>There is nothing here</h4>
            <p className={styles.emptyInvoiceDescription}>Create an invoice by clicking the
                New Invoice button and get started</p>
        </div>
    )
}

export default EmptyInvoice