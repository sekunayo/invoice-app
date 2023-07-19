import { css } from "@emotion/css"

const datePicker = css({
    borderRadius: "4px",
    border: "1px solid #DFE3FA",
    background: "#FFF",
    width: "100%",
    height: "48px"
})

const datePickerContainer = css({
    display: "flex",
    flexDirection: "column"
})

const datePickerLabel = css({
    color: "#7E88C3",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "15px",
    letterSpacing: "-0.1px"
})

const datePickerCalendar = css({
    borderRadius: "8px !important",
    boxShadow: "0px 10px 20px 0px rgba(72, 84, 159, 0.25)"
})

export const styles = {
    datePicker,
    datePickerLabel,
    datePickerCalendar,
    datePickerContainer
}