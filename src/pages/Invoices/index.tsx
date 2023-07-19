import React from 'react'
import InvoiceCard from '../../components/InvoiceCard'
import { styles } from './styles'
import invoices from '../../common/mock/data.json'
import Header from '../../components/Header'
import EmptyInvoice from '../../views/EmptyInvoice'
import Overlay from '../../components/Overlay'
import FormLayout from '../../views/FormLayout'
import { useState } from 'react'

const Invoices = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const isInvoiceEmpty = Boolean(invoices?.length === 0);

    const handleOverlayClick = () => {
        setShowOverlay(!showOverlay);
    }

    return (
        <div className={styles.invoices}>
            <div className={styles.invoicesContainer}>
                <div className={styles.invoicesHeader}>
                    <Header handleClick={handleOverlayClick} invoiceLength={invoices?.length} />
                </div>
                {isInvoiceEmpty ? <EmptyInvoice /> : <div className={styles.invoicesList}>
                    {
                        invoices?.map((element) => {
                            return (
                                <InvoiceCard key={element.id} id={element.id} paymentDue={element.paymentDue} total={element.total} clientName={element.clientName} status={element.status as InvoiceStatusType} />
                            )
                        })
                    }
                </div>}
            </div>

            {
                showOverlay && <Overlay>
                    <FormLayout handleClose={handleOverlayClick} title="New Invoice" />
                </Overlay>
            }

        </div>
    )
}

export default Invoices