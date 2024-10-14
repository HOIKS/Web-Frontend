import * as c from "../styles/common/contentStyle";
import * as l from "../styles/common/layoutStyle";
import { Link } from "react-router-dom";


const MenuSettingContent = () => {

    return (
      <l.MainContainer>
        <c.MenuSettingContainer>
            <div className="categoryView">
                <div className="categorySelection">
                    <div className="categoryTitle">메인 카테고리</div>
                    <select name="mainCategory">
                        <option value="none">카테고리를 선택해주세요</option>
                        <option value="korean">한국어</option>
                        <option value="english">영어</option>
                        <option value="chinese">중국어</option>
                        <option value="spanish">스페인어</option>
                    </select>
                </div>
                <div className="categorySelection">
                    <div className="categoryTitle">세부 카테고리</div>
                    <select name="subCategory">
                        <option value="none">카테고리를 선택해주세요</option>
                        <option value="korean">한국어</option>
                        <option value="english">영어</option>
                        <option value="chinese">중국어</option>
                        <option value="spanish">스페인어</option>
                    </select>
                </div>
            </div>

            <div className="menuView">
                <div className="menuBox menuCreate"> 
                    <div className="menuCreateButton"></div>
                </div>
                <div className="menuBox"> 
                    <div className="menuImg"> </div>
                    <div className="menuInfo">
                        <div className="menuName">에스프레소</div>
                        <div className="menuPrice">3,000원</div>
                    </div>
                </div>
                <div className="menuBox"> 
                    <div className="menuImg"> </div>
                    <div className="menuInfo">
                        <div className="menuName">에스프레소</div>
                        <div className="menuPrice">3,000원</div>
                    </div>
                </div>
                <div className="menuBox"> 
                    <div className="menuImg"> </div>
                    <div className="menuInfo">
                        <div className="menuName">에스프레소</div>
                        <div className="menuPrice">3,000원</div>
                    </div>
                </div>
                <div className="menuBox"> 
                    <div className="menuImg"> </div>
                    <div className="menuInfo">
                        <div className="menuName">에스프레소</div>
                        <div className="menuPrice">3,000원</div>
                    </div>
                </div>
                <div className="menuBox"> 
                    <div className="menuImg"> </div>
                    <div className="menuInfo">
                        <div className="menuName">에스프레소</div>
                        <div className="menuPrice">3,000원</div>
                    </div>
                </div>

            </div>

        </c.MenuSettingContainer>
       
      </l.MainContainer>
    )
  }
  
  export default MenuSettingContent;