import * as m from "../../styles/common/modalStyle";
import CloseBtn from "../../assets/imgs/closeBtn.png"
import { useState, useEffect } from "react";
import { mainCategoryFetch, subCategoryFetch } from "../api/menuService";
import { subCategoryAdd, subCategoryDelete, mainCategoryAdd, mainCategoryDelete } from "../api/categoryService";
import { is } from "date-fns/locale";
import { set } from "date-fns";

const CategorySettingModal = ({onCancel}) => {

    let [mainCategories, setMainCategories] = useState([]);
    let [subCategories, setSubCategories] = useState([]);

    let [selectedMainCategory, setSelectedMainCategory] = useState([null, "- - -"]); // [id, mainCategoryName]
    let [selectedSubCategory, setSelectedSubCategory] = useState([null, "- - -"]); //[id, subCategoryName]

    let [isSubCategoryAddMode, setSubCategoryAddMode] = useState(false);
    let [isMainCategoryAddMode, setMainCategoryAddMode] = useState(false);

    let [newItemName, setNewItemName] = useState(" ");
    let [selectedItem, setSelectedITem] = useState([1, " - - - ", null]); // [id, name, isMain]

    useEffect(() => {
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

    async function effectMainCategoryFetch() {
        try {
            const fetchedMainCategory = await mainCategoryFetch();
            setMainCategories(fetchedMainCategory);
        } catch (error) {
            window.alert(error);
        }
    }

    const handleInputChange = (e) => {
        const { value } = e.target;
        setNewItemName(value);
    }

    const handleMainCategoryClick = (e) => {
        const selectedMainCategory = e.target
        // console.log("MainCat Sel", selectedMainCategory.innerText);
        setSelectedITem([selectedMainCategory.value, selectedMainCategory.innerText, true]);
        effectSubCategoryFetch(selectedMainCategory.value);
        setSelectedMainCategory([selectedMainCategory.value, selectedMainCategory.innerText]);
        setSelectedSubCategory([null, null]);
        
    }
    const handleMainCateogoryAdd = async () => {
        try {
            const result = await mainCategoryAdd(newItemName, 1); // '1' will be storeId
            if (result) {
                window.alert(newItemName + " 이(가) 메인카테고리에 추가되었습니다.");
                ReleaseCategoryAdd();
                return;
            }
        } catch (error) {
            window.alert(error);
        }
    }

    const handleSubCategoryClick = (e) => {
        const selectedSubCategory = e.target
        // console.log("SubCat Sel", selectedSubCategory.innerText);
        setSelectedITem([selectedSubCategory.value, selectedSubCategory.innerText, false]);
        setSelectedSubCategory([selectedSubCategory.value, selectedSubCategory.innerText]);
    }

    const handleSubCateogoryAdd = async () => {
        try {
            const result = await subCategoryAdd(newItemName, selectedMainCategory[0]);
            if (result) {
                window.alert(newItemName + " 이(가) " + selectedMainCategory[1] + " 에 추가되었습니다.");
                ReleaseCategoryAdd();
                return;
            }
        } catch (error) {
            window.alert(error);
        }
    }

    const handleCategoryDelete = async () => {
        try {
            if (selectedItem[2] === true) { // 메인카테고리 삭제
                const result = await mainCategoryDelete(selectedItem[0]);
                if (result) {
                    window.alert(selectedItem[1] + " 이(가) 메인카테고리에서 삭제되었습니다.");
                    ReleaseCategoryAdd();
                }
                return;
            } else { // 서브카테고리 삭제
                const result = await subCategoryDelete(selectedItem[0]);
                if (result) {
                    window.alert(selectedItem[1] + " 이(가) " + selectedMainCategory[1] + " 에서 삭제되었습니다.");
                    ReleaseCategoryAdd();
                }
                return;
            }
        } catch (error) {
            window.alert(error);
        }
    }

    

    const OpenMainCategoryAdd = () => {
        setMainCategoryAddMode(true);
        setSubCategoryAddMode(false);
        setSelectedMainCategory([999, null]);

    }

    const OpenSubCategoryAdd = () => {
        setSubCategoryAddMode(true);
        setMainCategoryAddMode(false);
        setSelectedSubCategory([999, null]);
        if (selectedMainCategory[0] === 999 || selectedMainCategory[0] === null) {
            setSelectedMainCategory([1, '추천메뉴']);
        }
    }

    const ReleaseCategoryAdd = () => {
        setMainCategoryAddMode(false);
        setSubCategoryAddMode(false);
        setSelectedSubCategory([null, ' - - - ']);
        setSelectedMainCategory([null, ' - - - ']);
        setSelectedITem([1, " - - - ", null]);
        setNewItemName(" ");
        effectMainCategoryFetch();
        setSubCategories([]);
    }


    return (
        <m.CategorySettingModal onSubmit={(e) => e.preventDefault()}>
            <div className="modalHeader">
                <div className="first">
                    <img className="mac-close-button" src={CloseBtn} alt="" onClick={onCancel}></img>
                    <h2>카테고리 설정 </h2>
                </div>
            </div>
            <div className="mainWrapper">
                <div className="mainCatWrapper">
                    <h3> 메인 카테고리</h3>
                    <ul>
                        <li
                            key={999}
                            value={999}
                            onClick={OpenMainCategoryAdd}
                            style={{
                                color: selectedMainCategory[0] === 999 ? "black" : "",
                                border: selectedMainCategory[0] === 999 ? "2px solid #9A4BFF" : ""
                              }}>
                             + 추가하기
                        </li>
                        {mainCategories.map((category) => (
                            <li
                                key={category.id} 
                                value={category.id}
                                onClick={handleMainCategoryClick}
                                style={{
                                    color: selectedMainCategory[0] === category.id ? "black" : "",
                                    border: selectedMainCategory[0] === category.id ? "2px solid #9A4BFF" : ""
                                  }}
                            >
                                {category.name}
                            </li>
                        ))}
                        
                    </ul>
                </div>
                {!isMainCategoryAddMode && !isSubCategoryAddMode && (
                    <div className="subCatWrapper">
                        <h3>세부 카테고리</h3>
                        <ul>
                            <li
                                key={999}
                                value={999}
                                onClick={OpenSubCategoryAdd}
                                style={{
                                    color: selectedSubCategory[0] === 999 ? "black" : "",
                                    border: selectedSubCategory[0] === 999 ? "2px solid #9A4BFF" : ""
                                }}>
                                + 추가하기
                            </li>
                            {subCategories.map((category) => (
                                <li
                                    key={category.id} 
                                    value={category.id}
                                    onClick={handleSubCategoryClick}
                                    style={{
                                        color: selectedSubCategory[0] === category.id ? "black" : "",
                                        border: selectedSubCategory[0] === category.id ? "2px solid #9A4BFF" : ""
                                    }}
                                >
                                    {category.name}
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                )}
                
                {isMainCategoryAddMode && (
                    <div className="selectedCatWrapper extended">
                        <div className="selectedCat">
                            <h3> 메인 카테고리 추가하기</h3>
                            <input type="text" placeholder="카테고리명" onChange={handleInputChange}/>
                            <p>위 카테고리가 '메인 카테고리'에 추가됩니다.</p>
                                    
                        </div>
                        <div className="buttons">
                            <button className="addBtn" onClick={handleMainCateogoryAdd}> 카테고리 추가</button>
                            <button className="returnBtn" onClick={ReleaseCategoryAdd}> 취소 </button>
                        </div>
                    </div>
                )}
                {isSubCategoryAddMode && (
                    <div className="selectedCatWrapper extended">
                        <div className="selectedCat">
                            <h3> 세부 카테고리 추가하기</h3>
                            <input type="text" placeholder="카테고리명" onChange={handleInputChange}/>
                            <p>위 카테고리가 '{selectedMainCategory[1]}'에 추가됩니다.</p>
                                    
                        </div>
                        <div className="buttons addmode">
                            <button className="addBtn" onClick={handleSubCateogoryAdd}> 카테고리 추가</button>
                            <button className="returnBtn" onClick={ReleaseCategoryAdd}> 취소 </button>
                        </div>
                    </div>
                )}
                { !isMainCategoryAddMode && !isSubCategoryAddMode && (
                    <div className="selectedCatWrapper">
                        <div className="selectedCat">
                            <h3> 선택된 카테고리</h3>
                            <h2 style={{
                                color: selectedSubCategory[0] || selectedMainCategory[0] !== null ? "black" : "",
                                border: selectedSubCategory[0] || selectedMainCategory[0] !== null ? "2px solid #9A4BFF" : ""
                                }}> {selectedItem[1]} </h2>
                            <p>{selectedItem[2] ? "메인카테고리" : (selectedMainCategory[1]  + ' > ' + selectedItem[1])}</p>
                            <p>&lt;주의&gt; 선택 카테고리 하위 메뉴 및 세부카테고리가 모두 삭제됩니다!</p>
                                    
                        </div>
                        <div className="buttons">
                            <button className="deleteBtn" onClick={handleCategoryDelete}> 선택된 카테고리 삭제</button>
                        </div>
                    </div>

                )}
                
            </div>         
        </m.CategorySettingModal>
    )
}

export default CategorySettingModal
