import { css } from "@emotion/css"

const invoices = css({
    position: "relative",
    width: "100%"
})

const invoicesContainer = css({
    width: "60vw",
    margin: "0 auto",
})

const invoicesList = css({
    display: "grid",
    gridTemplateRows: "repeat(auto-fit, auto)",
    gridRowGap: "16px"
})

const invoicesHeader = css({
    padding: "71px 0px"
})
export const styles = {
    invoices,
    invoicesList,
    invoicesHeader,
    invoicesContainer
}