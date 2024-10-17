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
    

    // const accessToken = sessionStorage.getItem('accessToken');
    // const navigate = useNavigate();


    // async function mainCategoryFetch() {
    //     await Axios.get('http://hoiks.store:3000/admin/categories', {
    //         headers: {
    //             'Authorization': `Bearer ${accessToken}`,
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(response => {
    //         console.log(response.data);
    //         setMainCategories(response.data);
    //         setMainLoading(false);
            
    //     }).catch(error => {
    //         console.error('Error:', error);
    //         setError(error);
    //         setMainLoading(false);
    //         if (!error.status) {
    //             window.alert("로그인 후 이용해 주세요 (장시간 활동 감지되지 않으면 로그아웃 됩니다).")
    //             navigate('/login'); 
    //         }
    //     });
    // };

    // async function subCategoryFetch(inputId) {
    //     if (inputId) {
    //         await Axios.get(`http://hoiks.store:3000/admin/sub-categories?categoryId=${inputId}`, {
    //             headers: {
    //                 'Authorization': `Bearer ${accessToken}`,
    //                 'Content-Type': 'application/json'
    //             }
    //         }).then(response => {
    //             console.log(response.data);
    //             setSubCategories(response.data);
    //             setSubLoading(false);
                
    //         }).catch(error => {
    //             console.error('Error:', error);
    //             setError(error);
    //             setSubLoading(false);
    //         });
    //     } else {
    //         await Axios.get(`http://hoiks.store:3000/admin/sub-categories?categoryId=${selectedMainCategory}`, {
    //             headers: {
    //                 'Authorization': `Bearer ${accessToken}`,
    //                 'Content-Type': 'application/json'
    //             }
    //         }).then(response => {
    //             console.log(response.data);
    //             setSubCategories(response.data);
    //             setSubLoading(false);
                
    //         }).catch(error => {
    //             console.error('Error:', error);
    //             setError(error);
    //             setSubLoading(false);
    //         });
    //     }
    // };

    // async function menuFetch(inputId) {
    //     if (inputId) {
    //         await Axios.get(`http://hoiks.store:3000/admin/menus?subCategoryId=${inputId}`, {
    //             headers: {
    //                 'Authorization': `Bearer ${accessToken}`,
    //                 'Content-Type': 'application/json'
    //             }
    //         }).then(response => {
    //             console.log(response.data);
    //             setMenus(response.data);
                
    //         }).catch(error => {
    //             console.error('Error:', error);
    //             setError(error);
    //         });
    //     } else {
    //         await Axios.get(`http://hoiks.store:3000/admin/menus?subCategoryId=${selectedSubCategory}`, {
    //             headers: {
    //                 'Authorization': `Bearer ${accessToken}`,
    //                 'Content-Type': 'application/json'
    //             }
    //         }).then(response => {
    //             console.log(response.data);
    //             setMenus(response.data);
    //         }).catch(error => {
    //             console.error('Error:', error);
    //             setError(error);
    //         });
    //     }
    // }


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

    if (isLoading) return <h2>Loading...</h2>;
    if (error) return <h2>Error: {error.message}</h2>;

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
                        <img className="menuImg" src={"http://hoiks.store:3000/file/static/" + menu.photoUrl} onError={e => e.target.src = "https://via.placeholder.com/150"} alt=""/>
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