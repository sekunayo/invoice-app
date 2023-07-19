import { css } from "@emotion/css"

const header = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"

})

const headerTitle = css({
    color: "#0C0E16",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "-1.125px"
})

const headerTitleDescription = css({
    color: "#888EB0",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "15px",
    letterSpacing: "-0.1px"
})

const headerContent = css({
    display: "flex",
    flexDirection: "column"
})

const headerButton = css({
    borderRadius: "24px",
    backgroundColor: "#9277FF",
    color: "#FFF",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "15px",
    letterSpacing: "-0.25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 17px 8px 8px",
    gap: "16px"
})

const headerButtonCircle = css({
    width: "32px",
    height: "32px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%"
})

const headerButtonContainer = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

export const styles = {
    header,
    headerTitle,
    headerTitleDescription,
    headerContent,
    headerButton,
    headerButtonCircle,
    headerButtonContainer
}