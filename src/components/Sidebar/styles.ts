import { css } from "@emotion/css";

const sidebar = css({
    width: "103px",
    height: "100vh",
    overflow: "hidden",
    borderRadius: "0px 20px 20px 0px",
    backgroundColor: "#373B53",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
})

const sidebarPicture = css({
    height: "88px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "1px solid #494E6E"
})

const sidebarPictureContainer = css({
    height: "40px",
    width: "40px",
    borderRadius: "50%",

    "& img": {
        borderRadius: "50%",
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
})

const sidebarThemeIcon = css({
    marginBottom: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

export const styles = {
    sidebar,
    sidebarPicture,
    sidebarPictureContainer,
    sidebarThemeIcon
}