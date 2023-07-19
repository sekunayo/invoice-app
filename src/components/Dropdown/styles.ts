import { css } from "@emotion/css";

const dropdown = css({
    borderRadius: "4px",
    border: "1px solid #DFE3FA",
    background: "#FFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    height: "48px",
    padding: "0px 23px 0px 20px "
})

const dropdownText = css({
    color: "#0C0E16",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "15px",
    letterSpacing: "-0.25px"
})

const dropdownList = (toggleDropdown: boolean) => css({
    borderRadius: "8px",
    backgroundColor: "#FFF",
    boxShadow: "0px 10px 20px 0px rgba(72, 84, 159, 0.25)",
    position: "absolute",
    top: "100%",
    right: "0px",
    marginTop: "24px",
    width: "100%",
    zIndex: "20",
    display: toggleDropdown ? "block" : "none"
})

const dropdownListItem = css({

    borderBottom: "1px solid #DFE3FA",
    padding: "24px 0px 15px 16px",

    "& button": {
        width: "100%",
        height: "100%",
        fontSize: "15px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "15px",
        letterSpacing: "-0.25px",
        color: "#0C0E16",
        textAlign: "left"
    }
})

const dropdownLabel = css({
    color: "#7E88C3",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "15px",
    letterSpacing: "-0.1px"
})


export const styles = {
    dropdown,
    dropdownText,
    dropdownListItem,
    dropdownList,
    dropdownLabel
}