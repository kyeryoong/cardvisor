import styles from './Benefit.module.css'

function Benefit(props) {
    return (
        <div className={styles.benefitDetail}>
            <img className={styles.brandLogo}
                alt={props.benefitNameEng}
                src={process.env.PUBLIC_URL + '/images/brands_logo/' + props.benefitNameEng + '.png'} />
            <div>
                <a className={styles.benefitDetail1}>
                    {props.benefitNameKor}
                </a>

                <a className={styles.benefitDetail2}>
                    {props.benefitInfo}
                </a>
            </div>

            <br />
        </div>
    )
}

export default Benefit;