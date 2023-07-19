import React from 'react'
import { styles } from './styles'

interface BadgeProps {
    status: InvoiceStatusType
}

const Badge = ({ status }: BadgeProps) => {
    return (
        <div className={styles.badge(status)}>
            <span className={styles.badgeCircle(status)}></span><span>{status}</span>
        </div>
    )
}

export default Badge