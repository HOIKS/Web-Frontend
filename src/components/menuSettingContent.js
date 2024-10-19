import * as c from "../styles/common/contentStyle";
import * as l from "../styles/common/layoutStyle";
import { mainCategoryFetch,  subCategoryFetch, menuFetch, } from "../components/api/menuSettingFetch.js";
import menuAddImg from "../assets/imgs/menuAdd.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuSettingModal from "./menuSettingModal.js";


const MenuSettingContent = () => {
    let [isLoading, setLoading] = useState(true);
    let [error, setError] = useState(null);

    let [mainCategories, setMainCategories] = useState([]);
    let [subCategories, setSubCategories] = useState([]);

    let [selectedMainCategory, setSelectedMainCategory] = useState(1);
    let [selectedSubCategory, setSelectedSubCategory] = useState(1);
    
    let [isAddModalOpen, setAddModalOpen] = useState(false);

    let [menus, setMenus] = useState([]);

    // 컨텐츠 로드시 메인 메뉴 GET
    useEffect(() => {
    /**
     * 컨텐츠 로드시 메인 메뉴 GET
     * 
     * useEffect 내부에 정의된 함수
     * mainCategoryFetch 함수를 호출하여 메인 메뉴를 가져옴
     * 가져온 메인 카테고리를 state에 저장
     * 에러가 있으면 state에 저장
     */
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


    /**
     * 서브 메뉴 GET
     * 
     * 선택된 메인 메뉴 ID를 파라미터로 받아 서브 메뉴를 GET
     * 가져온 서브 카테고리를 state에 저장
     * 에러가 있으면 state에 저장
     * @param {number} MainCategoryId - 선택된 메인 메뉴 ID
     */
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

    
    /**
     * 선택된 서브 메뉴 ID를 파라미터로 받아 메뉴를 GET
     * 가져온 메뉴를 state에 저장
     * 에러가 있으면 state에 저장
     * @param {number} SubCategoryId - 선택된 서브 메뉴 ID
     */
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


    const handleSelectMainCategory = (e) => {
        const { name, value } = e.target;
        setSelectedMainCategory(value);
        effectSubCategoryFetch(value);
    }

    const handleSelectSubCategory = (e) => {
        const { value } = e.target;
        setSelectedSubCategory(value);
        effectMenuFetch(value);
    }

    const handleOpenAddModal = () => {
        setAddModalOpen(true); // 모달 열기
    };

    const handleCloseAddModal = () => {
        setAddModalOpen(false); // 모달 닫기
    };

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    return (
      <l.MainContainer>
        {isAddModalOpen && (
                <MenuSettingModal onCancel={handleCloseAddModal}>
                </MenuSettingModal>
        )}
        <c.MenuSettingContainer>
            <div className="categoryView">
                <div className="categorySelection">
                    <div className="categoryTitle">메인 카테고리</div>
                    <select name="mainCategory" onChange={handleSelectMainCategory} >
                        <option value="none">카테고리를 선택해주세요</option>
                        {mainCategories.map((category) => (
                            <option 
                                key={category.id} 
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="categorySelection">
                    <div className="categoryTitle">세부 카테고리</div>
                    <select name="subCategory" onChange={handleSelectSubCategory}>
                        <option value="none">카테고리를 선택해주세요</option>
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

            <div className="menuView">
                <div className="menuBox menuCreate"> 
                    <div className="menuCreateButton">
                        <img className="menuAddImg" src={menuAddImg} onClick={handleOpenAddModal}/>
                    </div>
                </div>
                {menus.map((menu, index) => (
                    <div className="menuBox" key={menu.id}>
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