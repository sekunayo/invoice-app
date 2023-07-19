
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { styles } from './styles';

interface InputDatePickerProps {
    label: string;
}

const InputDatePicker = ({ label }: InputDatePickerProps) => {
    const [startDate, setStartDate] = useState<Date | null>(null);

    return (
        <div className={styles.datePickerContainer}>
            <label className={styles.datePickerLabel}>{label}</label>
            <DatePicker placeholderText='e.g 07/08/2023' calendarClassName={styles.datePickerCalendar} className={styles.datePicker}
                selected={startDate} onChange={(date: Date) => setStartDate(date)} />
        </div>
    );

}

export default InputDatePicker