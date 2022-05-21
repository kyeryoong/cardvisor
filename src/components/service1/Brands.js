import styles from './Brands.module.css';

import SelectedBrands from './SelectedBrands';



function Brands(props) {
    return (
        <label>
            <input type="checkbox" name="" />

            <div className={styles.iconbox} onClick={() => {
                if (!SelectedBrands.includes(props.brandlogo)) {
                    SelectedBrands.push(props.brandlogo);
                    console.log(props.brandlogo, "on");
                }

                else {
                    var index = SelectedBrands.indexOf(props.brandlogo)

                    if (index > -1) {
                        SelectedBrands.splice(index, 1);
                    }

                    console.log(props.brandlogo, "off");
                }
            }
            }>
                <img className={styles.brandlogo}
                    alt={props.brandlogo}
                    src={process.env.PUBLIC_URL + '/images/brands_logo/' + props.brandlogo + '.png'} />
                <span>{props.name}</span>
            </div>
        </label>
    );
}

export default Brands;