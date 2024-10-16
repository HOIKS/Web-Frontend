import * as c from "../styles/common/contentStyle";
import * as l from "../styles/common/layoutStyle";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import { sub } from "date-fns";


const MenuSettingContent = () => {
    let [mainLoading, setMainLoading] = useState(true);
    let [subLoading, setSubLoading] = useState(true);
    let [error, setError] = useState(null);

    let [mainCategories, setMainCategories] = useState([]);
    let [subCategories, setSubCategories] = useState([]);

    let [selectedMainCategory, setSelectedMainCategory] = useState(1);
    let [selectedSubCategory, setSelectedSubCategory] = useState(1);

    let [menus, setMenus] = useState([]);
    let [photoUrl, setPhotoUrl] = useState([]);
    

    const accessToken = sessionStorage.getItem('accessToken');
    const navigate = useNavigate();

    async function mainCategoryFetch() {
        await Axios.get('http://hoiks.store:3000/admin/categories', {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log(response.data);
            setMainCategories(response.data);
            setMainLoading(false);
            
        }).catch(error => {
            console.error('Error:', error);
            setError(error);
            setMainLoading(false);
            if (error.response.status === 401) {
                window.alert("장시간 활동이 감지되지 않아 로그아웃 되었습니다.")
                navigate('/login'); 
            }
        });
    };

    async function subCategoryFetch(inputId) {
        if (inputId) {
            await Axios.get(`http://hoiks.store:3000/admin/sub-categories?categoryId=${inputId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response.data);
                setSubCategories(response.data);
                setSubLoading(false);
                
            }).catch(error => {
                console.error('Error:', error);
                setError(error);
                setSubLoading(false);
            });
        } else {
            await Axios.get(`http://hoiks.store:3000/admin/sub-categories?categoryId=${selectedMainCategory}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response.data);
                setSubCategories(response.data);
                setSubLoading(false);
                
            }).catch(error => {
                console.error('Error:', error);
                setError(error);
                setSubLoading(false);
            });
        }
    };

    async function menuFetch(inputId) {
        if (inputId) {
            await Axios.get(`http://hoiks.store:3000/admin/menus?subCategoryId=${inputId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response.data);
                setMenus(response.data);
                setPhotoUrl(response.data.photoUrl);
                
            }).catch(error => {
                console.error('Error:', error);
                setError(error);
            });
        } else {
            await Axios.get(`http://hoiks.store:3000/admin/menus?subCategoryId=${selectedSubCategory}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response.data);
                setMenus(response.data);
                setPhotoUrl(response.data.photoUrl);
            }).catch(error => {
                console.error('Error:', error);
                setError(error);
            });
        }
        
    }


    useEffect(() => {
        mainCategoryFetch();
        menuFetch();
    }, []);

    const handleSelectMainCategory = (e) => {
        const { name, value } = e.target;
        setSelectedMainCategory(value);
        subCategoryFetch(value);
        
    }

    const handleSelectSubCategory = (e) => {
        const { value } = e.target;
        setSelectedSubCategory(value);
        menuFetch(value);
        
    }

    if (mainLoading && subLoading) return <h2>Loading...</h2>;
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
                        <img className="menuImg" src={"http://hoiks.store:3000/files/static/" + menu.photoUrl} onError={e => e.target.src = "https://via.placeholder.com/150"} alt=""/>
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