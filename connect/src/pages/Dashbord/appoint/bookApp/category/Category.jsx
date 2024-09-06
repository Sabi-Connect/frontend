// import React from 'react';
// import style from './Category.module.css'
//
// const Category = ({categoryName, click}) => {
//
//     return (
//         <button onClick={click(categoryName)} className={style.main}>
//             {categoryName}
//         </button>
//     );
// };
//
// export default Category;

import React from 'react';
import style from './Category.module.css';

const Category = ({ categoryName, click }) => {
    return (
        <button onClick={() => click(categoryName)} className={style.main}>
            {categoryName}

        </button>
    );
};

export default Category;
