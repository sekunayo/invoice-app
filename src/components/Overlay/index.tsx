import React from 'react'
import { styles } from './styles'

interface OverlayProps {
    children: JSX.Element;
}
const Overlay = ({ children }: OverlayProps) => {
    return (
        <div className={styles.overlay}>
            {children}
        </div>
    )
}

export default Overlay