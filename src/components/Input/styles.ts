import { css } from "@emotion/css";
import { colors } from "../../common/styles/colors";

const input = css({
    borderRadius: "4px",
    border: "1px solid #DFE3FA",
    backgroundColor: colors.white,
    paddingLeft: "20px",
    display: "flex",
    alignItems: "center",
    height: "48px",
    width: "100%",
    color: "#0C0E16",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "15px",
    letterSpacing: "-0.25px",

    '&:placeholder': {
        color: "#0C0E16"
    }
})

const inputContainer = css({
    display: "flex",
    flexDirection: "column",
    gap: "10px"
})

const inputLabel = css({
    color: "#7E88C3",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "15px",
    letterSpacing: "-0.1px"
})

export const styles = {
    input,
    inputLabel,
    inputContainer
}