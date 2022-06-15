import styles from './PaySystem.module.css'

function PaySystem(props) {
    return (
        <div className={styles.paySystemZone}>
            <img className={styles.brandLogo}
                    alt={props.paySystemName}
                    src={process.env.PUBLIC_URL + '/images/paysystem_logo/left_aligned/' + props.paySystemName + '.png'} />

            <a className={styles.nameZone}>
                {props.paySystemName}
            </a>
            
            <a className={styles.amountZone}>
                {props.paySystemAmount}원
            </a>
        </div>
    )
}

export default PaySystem;