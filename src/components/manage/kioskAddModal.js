import * as m from "../../styles/modals/deviceModalStyle.js";
import CloseBtn from "../../assets/imgs/closeBtn.png"
import KioskImg from "../../assets/imgs/kioskImg.png"
import { useState, useEffect } from "react";
import { deviceAdd} from "../api/deviceService.js";

const KioskAddModal = ({onCancel}) => {

    let [newDeviceInfo, setNewDeviceInfo] = useState("");

    const handleInputChange = (e) => {
        const { value } = e.target;
        setNewDeviceInfo(value);
    }

    const submitDeviceAdd = async (e) => {
        e.preventDefault();
        // console.log(newDeviceInfo);
        try {
            const result = await deviceAdd(newDeviceInfo, null); // null will be storeId
            if (result) {
                window.alert(newDeviceInfo + " 이(가) 등록되었습니다.");
                onCancel();
                return;
            }
        } catch (error) {
            window.alert(error);
        }

    }

    return (
        <m.KioskAddModal onSubmit={submitDeviceAdd}>
            <div className="modalHeader">
                <div className="first">
                    <img className="mac-close-button" src={CloseBtn} alt="" onClick={onCancel}></img>
                    <h2>키오스크 기기 추가 </h2>
                </div>
            </div>
            <form className="mainWrapper">
                <div className="left">
                    <img src={KioskImg} alt=""></img>
                </div>
                <div className="right">
                    <div className="name">
                        <p>기기 명  </p>
                        <input name="deviceName" type="text" placeholder="기기 이름" onChange={handleInputChange}/>

                    </div>
                    <div className="desc">
                        <p>기기 추가 후, 인증을 위해 인증서 발급을 진행해주세요</p>

                    </div>
                    <div className="buttons">
                        <button className="cancel" onClick={onCancel}>취소</button>
                        <button type="submit" className="add">기기 추가</button>

                    </div>
                </div>
                
            </form>         
        </m.KioskAddModal>
    )
}
export default KioskAddModal;
