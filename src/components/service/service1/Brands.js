import styles from './Brands.module.css';

import { useSelector, useDispatch } from "react-redux";
import { setSelectedBrands } from '../../../store/selectedBrandsSlice';



function Brands({ brandNameKor, brandNameEng }) {
    let selectedBrands = useSelector((state) => state.selectedBrands);
    let dispatch = useDispatch();

    return (
        <div className={selectedBrands.includes(brandNameEng) ? styles.iconboxChecked : styles.iconboxNotChecked} onClick={() => {
            if (!selectedBrands.includes(brandNameEng)) {
                let temp = selectedBrands;
                temp.push(brandNameEng);
                dispatch(setSelectedBrands(temp));
            }

            else {
                var index = selectedBrands.indexOf(brandNameEng);

                if (index > -1) {
                    let temp = selectedBrands;
                    temp.splice(index, 1);
                    dispatch(setSelectedBrands(temp));
                }
            }
        }}>

            <div className={styles.brandLogo}>
                <img
                    alt={brandNameEng}
                    src={process.env.PUBLIC_URL + "/images/brands_logo/" + brandNameEng + ".png"} />
            </div>

            <div className={styles.brandNameKor}>
                {brandNameKor}
            </div>
        </div>
    );
}

export default Brands;