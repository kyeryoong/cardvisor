import styles from "./Footer.module.css"



function Footer() {
    return (
        <div className={styles.footerZone}>
            <img alt="cardvisor" className={styles.cardvisorLogo1} src={process.env.PUBLIC_URL + "/images/cardvisor_logo/cardvisor_icon_black.png"} />

            <img alt="cardvisor" className={styles.cardvisorLogo2} src={process.env.PUBLIC_URL + "/images/cardvisor_logo/cardvisor_title_black.png"} />

            <div className={styles.copyright}>
                © Copyright. All rights reserved.
            </div>
        </div>
    )
}

export default Footer;