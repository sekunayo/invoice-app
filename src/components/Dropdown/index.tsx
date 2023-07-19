import React, { useRef } from 'react'
import { useState } from 'react'
import { useClickAway } from 'react-use';
import { styles } from './styles';
import { ReactComponent as CaretDown } from '../../common/assets/icons/caret_down.svg';

interface DropdownProps {
    options: string[];
    label: string;
}
const Dropdown = ({ options, label }: DropdownProps) => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [currentDropdownItem, setCurrentDropdownItem] = useState("")
    const ref = useRef(null);

    const handleToggleDropdown = () => {
        setToggleDropdown(!toggleDropdown);
    }

    const handleDropdownItemChange = (newDropdownItem: string) => {
        setCurrentDropdownItem(newDropdownItem)
    }

    useClickAway(ref, () => {
        setToggleDropdown(false)
    });


    return (
        <div ref={ref}>
            <p className={styles.dropdownLabel}>{label}</p>

            <div className={styles.dropdown}>
                <p className={styles.dropdownText}>{currentDropdownItem}</p>

                <button type="button" onClick={handleToggleDropdown} >
                    <CaretDown />
                </button>

                <ul className={styles.dropdownList(toggleDropdown)}>
                    {
                        options.map((element, index) => {
                            return <li className={styles.dropdownListItem} key={index + 1}><button type='button' onClick={() => handleDropdownItemChange(element)}>{element}</button></li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Dropdown