import * as c from "../styles/common/contentStyle";
import * as l from "../styles/common/layoutStyle";
import { mainCategoryFetch,  subCategoryFetch, menuFetch, } from "../components/api/menuSettingFetch.js";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const MenuSettingContent = () => {
    let [isLoading, setLoading] = useState(true);
    let [error, setError] = useState(null);

    let [mainCategories, setMainCategories] = useState([]);
    let [subCategories, setSubCategories] = useState([]);

    let [selectedMainCategory, setSelectedMainCategory] = useState(1);
    let [selectedSubCategory, setSelectedSubCategory] = useState(1);

    let [menus, setMenus] = useState([]);


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

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    return (
      <l.MainContainer>
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
                    <div className="menuCreateButton"></div>
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