import styles from './Brands.module.css';

function Brands(props) {
    return (
        <label>
            <input type="checkbox" name="" />
            <div className={styles.iconbox}>
                <img className={styles.brandlogo} alt={props.brandlogo} src={process.env.PUBLIC_URL + '/images/brands_logo/'+ props.brandlogo + '.png'} />
                <span>{props.name}</span>
            </div>          
        </label>
    );
}

export default Brands;