import styles from './Brands.module.css';

import SelectedBrands from './SelectedBrands';



function Brands({ brandNameKor, brandNameEng, setSelNumber, setSelArray }) {
    return (
        <label>
            <input type="checkbox" name="" />

            <div className={styles.iconbox} onClick={() => {
                if (!SelectedBrands.includes(brandNameEng)) {
                    SelectedBrands.push(brandNameEng);
                }

                else {
                    var index = SelectedBrands.indexOf(brandNameEng);

                    if (index > -1) {
                        SelectedBrands.splice(index, 1);
                    }
                }

                setSelNumber(SelectedBrands.length);
                setSelArray(SelectedBrands);
            }
            }>
                <div className={styles.brandLogo}>
                    <img
                        alt={brandNameEng}
                        src={process.env.PUBLIC_URL + "/images/brands_logo/" + brandNameEng + ".png"} />
                </div>

                <div className={styles.brandNameKor}>
                    {brandNameKor}
                </div>
            </div>
        </label>
    );
}

export default Brands;