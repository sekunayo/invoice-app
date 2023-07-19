import React from 'react'
import { formatDate } from '../../common/utils/helpers';
import Badge from '../Badge'
import { styles } from './styles'
import { ReactComponent as CaretRight } from '../../common/assets/icons/caret_right.svg';

interface InvoiceCardProps {
    id: string;
    paymentDue: string;
    clientName: string;
    total: number;
    status: InvoiceStatusType;
}
const InvoiceCard = ({ id, paymentDue, clientName, total, status }: InvoiceCardProps) => {
    return (
        <div className={styles.invoiceCard}>
            <h5>#{id}</h5>
            <p>Due {formatDate(paymentDue)}</p>
            <p>{clientName}</p>
            <h5>£{total}</h5>
            <Badge status={status} />
            <CaretRight />
        </div>
    )
}

export default InvoiceCard