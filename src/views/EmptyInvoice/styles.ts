import { css } from "@emotion/css";

const emptyInvoice = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
})

const emptyInvoiceTitle = css({
    marginTop: "66px",
    color: "#0C0E16",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "-0.75px"
})

const emptyInvoiceDescription = css({
    marginTop: "23px",
    color: "#888EB0",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "15px",
    letterSpacing: "-0.1px",
    textAlign: "center"
})

export const styles = {
    emptyInvoice,
    emptyInvoiceTitle,
    emptyInvoiceDescription
}