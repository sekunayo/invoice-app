import { css } from "@emotion/css";

const formLayout = css({
    width: "50vw",
    height: "100vh",
    padding: "59px 56px 32px 56px",
    overflowY: "auto",
    backgroundColor: "#fff",
    borderRadius: "0px 20px 20px 0px"

})

const formLayoutHeading = css({
    color: "#7C5DFA",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "15px",
    letterSpacing: "-0.25px"
})

const formLayoutTitle = css({
    color: "#0C0E16",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "32px",
    letterSpacing: "-0.5px",
    marginBottom: "46px"

})

const formLayoutRow = (number: string) => css({
    display: "grid",
    gridTemplateColumns: `repeat(${number}, 1fr)`,
    columnGap: "24px"
})

const formLayoutFormSection = css({
    display: "grid",
    gridTemplateRows: "repeat(3, auto)",
    gridRowGap: "24px"
})

const formLayoutForm = css({
    display: "grid",
    gridTemplateRows: "repeat(auto-fit, auto)",
    gridRowGap: "46px"
})

const formLayoutSubHeading = css({
    color: "#777F98",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "32px",
    letterSpacing: "-0.375px"
})

const formLayoutSubHeadingTitle = css({
    display: 'grid',
    gridTemplateColumns: "2fr 100px 100px 1fr 50px"
})

const formLayoutSubHeadingTitleContent = css({
    color: "#7E88C3",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "15px",
    letterSpacing: "-0.1px"
})

const formLayoutAddItem = css({
    borderRadius: '24px',
    backgroundColor: '#F9FAFE',
    width: "100%",
    height: "48px",
    color: "#7E88C3",
    textAlign: "center",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "15px",
    letterSpacing: "-0.25px",

    "& svg path": {
        fill: "#7E88C3"
    }
})


export const styles = {
    formLayout,
    formLayoutHeading,
    formLayoutRow,
    formLayoutForm,
    formLayoutFormSection,
    formLayoutTitle,
    formLayoutSubHeading,
    formLayoutSubHeadingTitleContent,
    formLayoutSubHeadingTitle,
    formLayoutAddItem
}