import { css } from "@emotion/css"

const viewInvoice = css({
    width: "100%"
})

const viewInvoiceContainer = css({
    width: "60vw",
    margin: "0 auto",
})

const viewInvoiceBanner = css({
    borderRadius: "8px",
    backgroundColor: "#FFF",
    boxShadow: "0px 10px 10px - 10px rgba(72, 84, 159, 0.10)",
    width: "100%",
    height: "88px"
})

const viewInvoiceContent = css({
    borderRadius: "8px",
    backgroundColor: "#FFF",
    boxShadow: "0px 10px 10px - 10px rgba(72, 84, 159, 0.10)"
}
export const styles = {
    viewInvoiceBanner,
    viewInvoice,
    viewInvoiceContainer,
    viewInvoiceContent
}