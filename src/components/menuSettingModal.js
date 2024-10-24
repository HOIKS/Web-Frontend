import * as m from "../styles/common/modalStyle.js";
import menuAddImg from "../assets/imgs/menuAdd.png";
import CustomSelect from "./customSelect.js";
import { useState, useEffect } from "react";
import { mainCategoryFetch,  subCategoryFetch } from "./api/menuSettingFetch.js";
import { menuImgAdd } from "./api/menuSettingAdd.js";
import { menuPut } from "./api/menuSettingPut.js";
import { menuDelete } from "./api/menuSettingDelete.js";

const MenuSettingModal = ({onCancel, selectedMenu}) => {

    let [mainCategories, setMainCategories] = useState([]);
    let [subCategories, setSubCategories] = useState([]);

    let [menu, setMenu] = useState({
        id : selectedMenu.menuId,
        name : selectedMenu.name,
        info : selectedMenu.info,
        price : selectedMenu.price,
        photoUrl : selectedMenu.photoUrl,
        subCategoryId : selectedMenu.subCategoryId,
        mainCategoryId : selectedMenu.mainCategoryId
    });

    let [isPhotoChanged, setIsPhotoChanged] = useState(false);

    let [image, setImage] = useState(menuAddImg);
    let [preview, setPreview] = useState(null);

    async function effectSubCategoryFetch(MainCategoryId) {
        try {
            const fetchedSubCategory = await subCategoryFetch(MainCategoryId);
            setSubCategories(fetchedSubCategory);
        } catch (error) {
            window.alert(error);
        }
    }

    async function handleMenuPut(e) {
        e.preventDefault();

        const addFormData = new FormData(e.target);

        const data = {
            menuId : parseInt(menu.id, 10),
            name: menu.name,
            info: menu.info,
            price: parseInt(menu.price, 10),
            photoURL : menu.photoUrl,
            subCategoryId: parseInt(menu.subCategoryId, 10),
            mainCategoryId: parseInt(menu.mainCategoryId, 10)
        }
        const photoFile = addFormData.get('menuPhoto');

        try {
            if(isPhotoChanged) {
                const responseMenuImgAdd = await menuImgAdd(photoFile);
                data.photoURL = responseMenuImgAdd.url.split("/").pop();
            } else {
                data.photoURL = menu.photoUrl
            }
            
            const responseMenuPut = await menuPut(data.menuId, data.name, data.info, data.price, data.photoURL, data.subCategoryId);

            if(responseMenuPut) {
                window.alert("메뉴가 수정되었습니다!");
                onCancel();
            }
            
        } catch (error) {
            window.alert(error);
        }
    }

    async function handleMenuDelete() {

        try {
            const responseMenuDelete = await menuDelete(parseInt(menu.id, 10));
            if(responseMenuDelete) {
                window.alert("메뉴가 삭제되었습니다!");
                onCancel();
            }
        } catch (error) {
            window.alert(error);
        }
        
    }

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
        effectSubCategoryFetch(selectedMenu.mainCategoryId);

    }, [ selectedMenu.mainCategoryId ]);


    const handleMenuImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setIsPhotoChanged(true);
            const reader = new FileReader();
            console.log(reader);
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
      };


    const handleSelectMainCategory = (valueId, nameString) => {
        setMenu({
            ...menu,
            mainCategoryId: valueId
        })   
    }

    const handleSelectSubCategory = (valueId, nameString) => {
        setMenu({
            ...menu,
            subCategoryId: valueId
        })
    }

    const handleInfoChange = (e) => {
        const { value } = e.target;
        setMenu({
            ...menu,
            info: value
        })

    }

    const handlePriceChange = (e) => {
        const { value } = e.target;
        setMenu({
            ...menu,
            price: value
        })

    }

    const handleNameChange = (e) => {
        const { value } = e.target;
        setMenu({
            ...menu,
            name: value
        })

    }

    return (
        <m.MenuSettingModal onSubmit={handleMenuPut}>
            <input type="hidden" name="menuId" value={menu.id}/>
            <div className="menuTop">
                <input  type="text" name="menuName" 
                        placeholder={menu.name} 
                        value={menu.name}
                        onChange={handleNameChange}/> 
                <div className="menuCategory">
                    <CustomSelect
                        className="customSelect" 
                        name="mainCategory"
                        options={mainCategories} 
                        defaultValue={menu.mainCategoryId} 
                        onChange={handleSelectMainCategory}/>
                    <CustomSelect
                        className="customSelect"
                        name="subCategory" 
                        options={subCategories} 
                        defaultValue={menu.subCategoryId} 
                        onChange={handleSelectSubCategory}/>
                </div>
            </div>

            <div className="menuMid">
                <div>
                    <img src={ preview ? preview : "/api/file/static/" + menu.photoUrl} />
                    <input  type="file" accept="image/*" name="menuPhoto"
                            onChange={handleMenuImgChange}/>
                </div>
                    <input  type="textarea" className="menuDesc" name="menuInfo" 
                            placeholder={menu.info} 
                            value={menu.info}
                            onChange={handleInfoChange}/> 
                </div>

            <div className="menuBottom">
                <div>
                    <input  type="number" min='10' max="9999999" name="menuPrice" 
                            placeholder={menu.price} 
                            value={menu.price} 
                            onChange={handlePriceChange}/>
                    <h3>원</h3>
                </div>
                <div>
                    <button className="modalClose" type="button" onClick={onCancel}>취소</button>
                    <button className="menuDelete" type="button" onClick={handleMenuDelete}>메뉴 삭제하기</button>
                    <button type="submit">메뉴 수정하기</button>
                </div>
            </div>
        </m.MenuSettingModal>
    )
}
export default MenuSettingModal
