import { css } from "@emotion/css";

const itemsRow = css({
    display: 'grid',
    gridTemplateColumns: "2fr 100px 100px 1fr 50px",
    gridColumnGap: "16px",
    alignItems: "center"
})

const itemsRowTotal = css({
    color: "#888EB0",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "15px",
    letterSpacing: "-0.25px"
})

export const styles = {
    itemsRow,
    itemsRowTotal
}