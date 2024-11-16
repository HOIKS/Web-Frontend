import * as m from "../../styles/modals/deviceModalStyle.js";
import CloseBtn from "../../assets/imgs/closeBtn.png"
import KioskImg from "../../assets/imgs/kioskImg.png"
import { deviceDelete } from "../api/deviceService.js";
import { useState, useEffect } from "react";

const KioskSetupModal = ({onCancel, deviceInfo}) => {

    let [receivedDeviceInfo, setReceivedDeviceInfo] = useState(deviceInfo);

    const formatDateToLocale = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("ko-KR", { 
            year: "numeric", 
            month: "long", 
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    const handleDeviceDelete = async () => {
        try {
            const result = await deviceDelete(receivedDeviceInfo.id); // null will be storeId
            if (result) {
                window.alert(receivedDeviceInfo.name + " 이(가) 삭제되었습니다.");
                onCancel();
                return;
            }
        } catch (error) {
            window.alert(error);
        }
    }
    return (
        <m.KioskSetupModal>
            <div className="modalHeader">
                <div className="first">
                    <img className="mac-close-button" src={CloseBtn} alt="" onClick={onCancel}></img>
                    <h2>키오스크 기기 설정 </h2>
                </div>
            </div>
            <div className="mainWrapper">
                <div className="left">
                    <h3> {receivedDeviceInfo.name}</h3>
                    <img src={KioskImg} alt=""></img>
                </div>
                <div className="right">
                    <h3>기기 정보</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>상태</td>
                                <td><span style={{color: "green"}}> ■ </span>온라인</td>
                            </tr>
                            <tr>
                                <td>일련번호</td>
                                <td>{receivedDeviceInfo.code}</td>
                            </tr>
                            <tr>
                                <td>생성</td>
                                <td>{formatDateToLocale(receivedDeviceInfo.createdDate)}</td>
                            </tr>
                            <tr>
                                <td>최근수정</td>
                                <td>{formatDateToLocale(receivedDeviceInfo.updatedDate)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="buttons">
                        <button className="delete" onClick={handleDeviceDelete}>삭제</button>
                        <button className="reissue">인증서 재발급</button>

                    </div>
                </div>
                
            </div>         
        </m.KioskSetupModal>
    )
}

export default KioskSetupModal
