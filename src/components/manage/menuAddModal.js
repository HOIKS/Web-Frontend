import * as m from "../../styles/common/modalStyle";
import menuAddImg from "../../assets/imgs/menuAdd.png";
import { useState, useEffect } from "react";
import { menuAdd, menuImgAdd } from "../api/menuSettingAdd.js";
import { mainCategoryFetch,  subCategoryFetch } from "../api/menuSettingFetch.js";


const MenuAddModal = ({onCancel, currentMainCategory, currentSubCategory}) => {

    let [mainCategories, setMainCategories] = useState([]);
    let [subCategories, setSubCategories] = useState([]);

    let [selectedMainCategory, setSelectedMainCategory] = useState(1);
    let [selectedSubCategory, setSelectedSubCategory] = useState(1);

    let [image, setImage] = useState(menuAddImg);
    let [preview, setPreview] = useState(null);
    async function handleMenuAdd(e) {
        e.preventDefault();

        const addFormData = new FormData(e.target);
        const data = {
            name: addFormData.get('menuName'),
            info: addFormData.get('menuInfo'),
            price: parseInt(addFormData.get('menuPrice'),10),
            subCategoryId: parseInt(addFormData.get('subCategory'),10)
        }

        const photoFile = addFormData.get('menuPhoto');


        try {
            const responseMenuImgAdd = await menuImgAdd(photoFile);
            data.photoUrl = responseMenuImgAdd.url.split("/").pop();
            const responseMenuAdd = await menuAdd(data.name, data.info, data.price, data.photoUrl, data.subCategoryId);
            
            console.log(responseMenuAdd);
            console.log(responseMenuImgAdd);

            if(responseMenuAdd || responseMenuImgAdd) {
                window.alert("메뉴가 추가되었습니다!");
                onCancel();
            }
            
        } catch (error) {
            window.alert(error);
        }
    }


    const handleMenuImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            console.log(reader);
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
      };

    useEffect(() => {
        async function effectMainCategoryFetch() {
            try {
                const fetchedMainCategory = await mainCategoryFetch();
                setMainCategories(fetchedMainCategory);
            } catch (error) {
                window.alert(error);
            }
        }
        effectMainCategoryFetch();
    }, []);


    async function effectSubCategoryFetch(MainCategoryId) {
        try {
            const fetchedSubCategory = await subCategoryFetch(MainCategoryId);
            setSubCategories(fetchedSubCategory);
        } catch (error) {
            window.alert(error);
        }
    }

    const handleSelectMainCategory = (e) => {
        const { value } = e.target;
        setSelectedMainCategory(value);
        effectSubCategoryFetch(value);
    }

    const handleSelectSubCategory = (e) => {
        const { value } = e.target;
        setSelectedSubCategory(value);
    }

    return (
        <m.MenuCommonModal onSubmit={handleMenuAdd}>
            <div className="menuTop">
                <input type="text" name="menuName"placeholder="메뉴 명"/>
                <div>
                    <select name="mainCategory" onChange={handleSelectMainCategory}>
                        <option value="none"> 메인 카테고리</option>
                        {mainCategories.map((category) => (
                            <option 
                                key={category.id} 
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <select name="subCategory" onChange={handleSelectSubCategory}>
                        <option value="none"> 세부 카테고리</option>
                        {subCategories.map((category) => (
                            <option 
                                key={category.id} 
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select> 
                </div>
            </div>

            <div className="menuMid">
                <div>
                    <img src={preview} />
                    <input type="file" accept="image/*" name="menuPhoto" onChange={handleMenuImgChange}/>
                </div>
                <input type="textarea" className="menuDesc" name="menuInfo" placeholder="메뉴 설명"/> 
            </div>

            <div className="menuBottom">
                <div className="menuBottomFieldOne">
                    <input type="number" min='10' max="9999999" name="menuPrice" placeholder="메뉴 가격"/>
                    <h3>원</h3>
                </div>
                <div className="menuBottomFieldTwo">
                    <button className="modalClose" onClick={onCancel}>취소</button>
                    <button type="submit">메뉴 추가하기</button>
                </div>
                
            </div>

        </m.MenuCommonModal>
    )
}

export default MenuAddModal
