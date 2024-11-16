import * as c from "../../styles/contents/kioskSetupContentStyle.js";
import * as l from "../../styles/common/layoutStyle.js";
import creditCardIcon from "../../assets/imgs/creditCard.png";
import couponIcon from "../../assets/imgs/coupon.png";
import menuAddImg from "../../assets/imgs/menuAdd.png";
import KioskImg from "../../assets/imgs/kioskImg.png";
import { devicesGet, deviceAdd, deviceEdit, deviceDelete } from "../api/deviceService.js";
import { useEffect, useState } from "react";
import KioskSetupModal from "./kioskSetupModal.js";
import KioskAddModal from "./kioskAddModal.js";


const KioskSetupContent = () => {

    let [isDeviceModalOpen, setDeviceModalOpen] = useState(false);
    let [deviceList, setDeviceList] = useState([]);
    let [selectedDeviceInfo, setSelectedDeviceInfo] = useState({});


    useEffect(() => {
        DevicesGet();
    },[])

    const DevicesGet = async () => {
        try {
            const deviceList = await devicesGet(null); // null will be storeId
            setDeviceList(deviceList);
        } catch (error) {
            console.error(error);
        }
    }

    const OpenDeviceModal = (e) => {
        const deviceId = parseInt(e.currentTarget.dataset.id, 10);
        setSelectedDeviceInfo(deviceList.find(device => device.id === deviceId));
        setDeviceModalOpen("Edit");
    }

    const OpenDeviceAddModal = () => {
        setDeviceModalOpen("Add");
    }

    const handleOnCancel = () => {
        setDeviceModalOpen("Closed");
        DevicesGet();
    }

    return (
        <l.MainContainer>
            {isDeviceModalOpen === "Edit" && (
                <KioskSetupModal deviceInfo={selectedDeviceInfo} onCancel={handleOnCancel}></KioskSetupModal>
            )}
            {isDeviceModalOpen === "Add" && (
                <KioskAddModal onCancel={handleOnCancel}></KioskAddModal>
            )}
            <c.KioskSetupContainer>
                <div className="buttons">
                    <button>키오스크 메뉴얼</button>
                </div>
                <div className="setupView">
                    <div className="deviceSetupItem deviceAdd" onClick={OpenDeviceAddModal}>
                        <h3> 추가 </h3>
                        <img src={menuAddImg} alt="" />

                    </div>
                    {deviceList.map((device) => (
                        <div className="deviceSetupItem" key={device.id} data-id={device.id} onClick={OpenDeviceModal}>
                            <h3> {device.name} </h3>
                            <img src={KioskImg} alt=""/>
                        </div>
                    ))}
                </div>
            </c.KioskSetupContainer>
        </l.MainContainer>
    )
}

export default KioskSetupContent;