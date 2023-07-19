import { Form, Formik } from 'formik'
import React, { useRef } from 'react'
import { useClickAway } from 'react-use'
import { initialValues, paymentTermsOptions } from '../../common/utils/constants'
import Dropdown from '../../components/Dropdown'
import Input from '../../components/Input'
import InputDatePicker from '../../components/InputDatePicker'
import ItemsRow from '../../components/ItemsRow'
import { styles } from './styles'
import { ReactComponent as Plus } from '../../common/assets/icons/plus.svg'

interface FormLayoutProps {
    title: string;
    handleClose?: () => void;
}

const FormLayout = ({ title, handleClose }: FormLayoutProps) => {
    const ref = useRef(null);
    useClickAway(ref, () => {
        handleClose?.()
    });

    return (
        <div ref={ref} className={styles.formLayout}>
            <h3 className={styles.formLayoutTitle}>{title}</h3>
            <Formik initialValues={initialValues} onSubmit={() => console.log("submitted")}>
                <Form className={styles.formLayoutForm}>
                    <div className={styles.formLayoutFormSection}>
                        <h5 className={styles.formLayoutHeading}>Bill From</h5>
                        <Input name="senderAddress.street" type='text' label="Street Address" placeholder='e.g 19 Union Terrace' />
                        <div className={styles.formLayoutRow("3")}>
                            <Input name="senderAddress.city" type='text' label="City" placeholder='e.g London' />
                            <Input name="senderAddress.postCode" type='text' label="Post Code" placeholder='e.g E1 3EZ' />
                            <Input name="senderAddress.country" type='text' label="Country" placeholder='e.g United Kingdom' />
                        </div>
                    </div>
                    <div className={styles.formLayoutFormSection}>
                        <h5 className={styles.formLayoutHeading}>Bill To</h5>
                        <Input name="clientName" type='text' label="Client's Name" placeholder='e.g Alex Grim' />
                        <Input name="clientEmail" type='email' label="Client's Email" placeholder='e.g alexgrim@mail.com' />
                        <Input name="clientAddress.street" type='text' label="Street Address" placeholder='e.g 84 Church Way' />
                        <div className={styles.formLayoutRow("3")}>
                            <Input name="clientAddress.city" type='text' label="City" placeholder='e.g London' />
                            <Input name="clientAddress.postCode" type='text' label="Post Code" placeholder='e.g E1 3EZ' />
                            <Input name="clientAddress.country" type='text' label="Country" placeholder='e.g United Kingdom' />
                        </div>
                        <div className={styles.formLayoutRow("2")}>
                            <InputDatePicker label="Invoice Date" />
                            <Dropdown label="Payment Terms" options={paymentTermsOptions} />
                        </div>
                        <Input name="description" type='text' label="Project Description" placeholder='e.g. Graphic Design' />

                        <h5 className={styles.formLayoutSubHeading}>Item List</h5>
                        <div className={styles.formLayoutSubHeadingTitle}>
                            <h6 className={styles.formLayoutSubHeadingTitleContent}>Item Name</h6>
                            <h6 className={styles.formLayoutSubHeadingTitleContent}>Qty.</h6>
                            <h6 className={styles.formLayoutSubHeadingTitleContent}>Price</h6>
                            <h6 className={styles.formLayoutSubHeadingTitleContent}>Total</h6>
                        </div>
                        <ItemsRow total={189.00} />
                        <button className={styles.formLayoutAddItem} type="button"><Plus /> Add New Item</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default FormLayout