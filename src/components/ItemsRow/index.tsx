import React from 'react'
import Input from '../Input'
import { styles } from "./styles"
import { ReactComponent as DeleteIcon } from '../../common/assets/icons/delete.svg'

interface ItemsRowProps {
    total: number;
}
const ItemsRow = ({ total }: ItemsRowProps) => {
    return (
        <div className={styles.itemsRow}>
            <Input name="name" type='text' placeholder='e.g Banner Design' />
            <Input name="quantity" type='number' />
            <Input name="price" type='number' />
            <p className={styles.itemsRowTotal}>{total}</p>
            <DeleteIcon />

        </div>
    )
}

export default ItemsRow