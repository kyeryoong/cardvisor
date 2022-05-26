import styles from './Brands.module.css';

import SelectedBrands from './SelectedBrands';



function Brands(props) {
    return (
        <label>
            <input type="checkbox" name="" />

            <div className={styles.iconbox} onClick={() => {
                if (!SelectedBrands.includes(props.brandNameEng)) {
                    SelectedBrands.push(props.brandNameEng);
                }

                else {
                    var index = SelectedBrands.indexOf(props.brandNameEng)

                    if (index > -1) {
                        SelectedBrands.splice(index, 1);
                    }
                }

                props.setSel(SelectedBrands.length);
            }
            }>
                <img className={styles.brandLogo}
                    alt={props.brandNameEng}
                    src={process.env.PUBLIC_URL + '/images/brands_logo/' + props.brandNameEng + '.png'} />
                <div className={styles.brandNameKor}>{props.brandNameKor}</div>
            </div>
        </label>
    );
}

export default Brands;