import * as c from "../../styles/common/contentStyle.js";
import * as l from "../../styles/common/layoutStyle.js";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuAddModal from "./menuAddModal.js";
import MenuSettingModal from "./menuSettingModal.js";
import CustomSelect from "../customSelect.js";
import { mainCategoryFetch,  subCategoryFetch, menuFetch, } from "../api/menuSettingFetch.js";
import menuAddImg from "../../assets/imgs/menuAdd.png";



const MenuSettingContent = () => {
    // 에러 처리 및 로딩 표시
    let [isLoading, setLoading] = useState(true);
    let [error, setError] = useState(null);

    // 서버로부터 가져온 메인카테고리들, 서브카테고리들을 저장하기 위한 State
    let [mainCategories, setMainCategories] = useState([]);
    let [subCategories, setSubCategories] = useState([]);

    // 사용자가 선택한 카테고리 항몯을 저장하기 위한 State
    // selectedMainCategory, selectedSubCategory: [id, StringName]
    let [selectedMainCategory, setSelectedMainCategory] = useState([1, null]);
    let [selectedSubCategory, setSelectedSubCategory] = useState([1, null]);

    // 메뉴 추가 모달 , 메뉴 수정 모달 조건부 렌더링을 위한 State
    let [isAddModalOpen, setAddModalOpen] = useState(false);
    let [isSettingModalOpen, setSettingModalOpen] = useState(false);

    // 선택한 메뉴에 대한 정보를 저장하기 위한 State
    let [menus, setMenus] = useState([]);
    let [selectedMenu, setSelectedMenu] = useState([]);


    // 로드 시 메인 카테고리 항목 가져오기 (API > Fetch)
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

    // 사용자가 선택한 메인 카테고리에 대한 서브카테고리 항목들 가져오기 (API > Fetch)
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

    // 사용자가 선택한 서브 카테고리에 대한 메뉴 항목들 가져오기 (API > Fetch)
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
    // 메인카테고리 select onChange 핸들링
    const handleSelectMainCategory = (valueId, nameString) => {
        setSelectedMainCategory([valueId, nameString]);
        effectSubCategoryFetch(valueId);
    }

    // 서브카테고리 selsect onChange 핸들링
    const handleSelectSubCategory = (valueId, nameString) => {
        setSelectedSubCategory([valueId, nameString]);
        effectMenuFetch(valueId);
    }

    // 메뉴 추가 onClick 핸들링
    const handleOpenAddModal = () => {
        setAddModalOpen(true); // 메뉴 추가 모달 열기
    };

    // 메뉴 추가 모달 닫기 onCancel 핸들링 (모달 컴포넌트로부터 받아옴)
    const handleCloseAddModal = () => {
        setAddModalOpen(false); // 메뉴 추가 모달 닫기
        effectMenuFetch(selectedSubCategory[0]);
    };

    // 메뉴 설정 모달 열기 및 사용자가 선택한 메뉴에 대한 정보를 모달에 넘겨주기
    // onClink 핸들링
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

    // 메뉴 설정 모달 닫기 onCancel 핸들링 (모달 컴포넌트로부터 받아옴)
    const handleCloseSettingModal = () => {
        setSettingModalOpen(false); // 메뉴 설정 모달 닫기
        effectMenuFetch(selectedSubCategory[0]); // 메뉴 항목 새로고침 (=다시 가져오기)
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