import React from 'react'
import { styles } from './styles'
import { ReactComponent as Logo } from '../../common/assets/icons/logo.svg'
import { ReactComponent as Moon } from '../../common/assets/icons/moon.svg'


const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Logo />

            <div>
                <div className={styles.sidebarThemeIcon}>
                    <Moon />
                </div>

                <div className={styles.sidebarPicture}>
                    <div className={styles.sidebarPictureContainer}>
                        <img src="../../common/assets/icons/image-avatar.jpg" alt="sidebar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar