import React from 'react'
import { styles } from './styles'
const ViewInvoice = () => {
    return (
        <div className={styles.viewInvoice}>
            <div className={styles.viewInvoiceContainer}>

                <div className={styles.viewInvoiceBanner}></div>
                <div className={styles.viewInvoiceContent}>
                    {/* <div className={styles.viewInvoiceContentId}>
                        <p className={styles.viewInvoiceContentBold}>#XM9141</p>
                        <p className={styles.voe}>Graphic Design</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ViewInvoice