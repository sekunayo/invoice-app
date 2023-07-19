import { css } from "@emotion/css";


const setBadgeColor = (status: InvoiceStatusType) => {
    let color: string = "";
    let bgColor: string = "";

    if (status === "paid") {
        bgColor = "rgba(51, 214, 160, 0.06)";
        color = "#33D69F"
    }
    else if (status === "pending") {
        bgColor = "rgba(255, 143, 0, 0.06)";
        color = "#FF8F00"
    }
    else {
        bgColor = "rgba(55, 59, 83, 0.06)";
        color = "#373B53"
    }

    return { color, bgColor }
}

const badge = (status: InvoiceStatusType) => css({
    borderRadius: "6px",
    backgroundColor: `${setBadgeColor(status).bgColor}`,
    width: "104px",
    height: "40px",
    display: "flex",
    gap: "8px",
    justifyContent: "center",
    alignItems: "center",
    color: `${setBadgeColor(status).color}`,
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "15px",
    letterSpacing: "-0.25px",
    textTransform: "capitalize"
})

const badgeCircle = (status: InvoiceStatusType) => css({
    width: "8px",
    height: "8px",
    backgroundColor: `${setBadgeColor(status).color}`,
    borderRadius: "50%"
})


export const styles = {
    badge,
    badgeCircle
}