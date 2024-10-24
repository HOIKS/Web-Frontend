import * as c from "../styles/common/contentStyle";
import * as l from "../styles/common/layoutStyle";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuAddModal from "./menuAddModal.js";
import MenuSettingModal from "./menuSettingModal.js";
import CustomSelect from "./customSelect.js";
import { mainCategoryFetch,  subCategoryFetch, menuFetch, } from "../components/api/menuSettingFetch.js";
import menuAddImg from "../assets/imgs/menuAdd.png";



const MenuSettingContent = () => {
    let [isLoading, setLoading] = useState(true);
    let [error, setError] = useState(null);

    let [mainCategories, setMainCategories] = useState([]);
    let [subCategories, setSubCategories] = useState([]);

    // selectedMainCategory, selectedSubCategory: [id, StringName]
    let [selectedMainCategory, setSelectedMainCategory] = useState([1, null]);
    let [selectedSubCategory, setSelectedSubCategory] = useState([1, null]);

    let [isAddModalOpen, setAddModalOpen] = useState(false);
    let [isSettingModalOpen, setSettingModalOpen] = useState(false);

    let [menus, setMenus] = useState([]);
    let [selectedMenu, setSelectedMenu] = useState([]);


    useEffect(() => {
        async function effectMainCategoryFetch() {
            try {
                const fetchedMainCategory = await mainCategoryFetch();
                setMainCategories(fetchedMainCategory);
                setLoading(false);
                setError(null);
            } catch (error) {
                setError(error);
            }
        }
        effectMainCategoryFetch();
        }, []);

    async function effectSubCategoryFetch(MainCategoryId) {
        try {
            const fetchedSubCategory = await subCategoryFetch(MainCategoryId);
            setSubCategories(fetchedSubCategory);
            setLoading(false);
            setError(null);
        } catch (error) {
            setError(error);
        }
    }

    async function effectMenuFetch(SubCategoryId) {
        try {
            const fetchedMenus = await menuFetch(SubCategoryId);
            setMenus(fetchedMenus);
            setLoading(false);
            setError(null);
        } catch (error) {
            setError(error);
        }
    }

    const handleSelectMainCategory = (valueId, nameString) => {
        // const { value } = e.target;
        setSelectedMainCategory([valueId, nameString]);
        effectSubCategoryFetch(valueId);
    }

    const handleSelectSubCategory = (valueId, nameString) => {
        // const { value } = e.target;
        setSelectedSubCategory([valueId, nameString]);
        effectMenuFetch(valueId);
    }

    const handleOpenAddModal = () => {
        setAddModalOpen(true); // 메뉴 추가 모달 열기
    };

    const handleCloseAddModal = () => {
        setAddModalOpen(false); // 메뉴 추가 모달 닫기
        effectMenuFetch(selectedSubCategory[0]);
    };

    const handleOpenSettingModal = (menu) => {
        setSelectedMenu({
            menuId: menu.id,
            photoUrl: menu.photoUrl,
            name: menu.name,
            price: menu.price,
            info: menu.info,
            mainCategoryId: selectedMainCategory[0],
            mainCategoryString : selectedMainCategory[1],
            subCategoryId: selectedSubCategory[0],
            subCategoryString : selectedSubCategory[1]
        });
        setSettingModalOpen(true);
    };

    const handleCloseSettingModal = () => {
        setSettingModalOpen(false); // 메뉴 설정 모달 닫기
        effectMenuFetch(selectedSubCategory[0]);
    };

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    return (
      <l.MainContainer>
        {isAddModalOpen && (
            <MenuAddModal onCancel={handleCloseAddModal}>
            </MenuAddModal>
        )}
        {isSettingModalOpen && (
            <MenuSettingModal onCancel={handleCloseSettingModal} selectedMenu={selectedMenu}>
            </MenuSettingModal>
        )}
        <c.MenuSettingContainer>
            <div className="categoryView">
                <div className="categorySelection">
                    <div className="categoryTitle">메인 카테고리</div>
                    <CustomSelect
                        name="mainCategory"
                        options={mainCategories}
                        onChange={handleSelectMainCategory}
                        defaultValue={selectedMainCategory[0]}
                    ></CustomSelect>
                </div>
                <div className="categorySelection">
                    <div className="categoryTitle">세부 카테고리</div>
                    <CustomSelect
                        name="subCategory"
                        options={subCategories}
                        onChange={handleSelectSubCategory}
                        defaultValue={selectedSubCategory[0]}
                    ></CustomSelect>
                </div>
            </div>

            <div className="menuView">
                <div className="menuBox menuCreate"> 
                    <div className="menuCreateButton">
                        <img className="menuAddImg" src={menuAddImg} onClick={handleOpenAddModal}/>
                    </div>
                </div>
                {menus.map((menu, index) => (
                    <div className="menuBox" key={menu.id} onClick={() => handleOpenSettingModal(menu)}>
                        <img className="menuImg" src={"/api/file/static/" + menu.photoUrl} onError={e => e.target.src = "https://via.placeholder.com/150"} alt=""/>
                        <div className="menuInfo">
                            <div className="menuName">{menu.name}</div>
                            <div className="menuPrice">{menu.price.toLocaleString()}원</div>
                        </div>
                    </div>
                ))}
            </div>
        </c.MenuSettingContainer>
      </l.MainContainer>
    )
  }
  
  export default MenuSettingContent;