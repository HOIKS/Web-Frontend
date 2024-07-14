import styled from "styled-components"

// 맨 밑의 모달을 위한 레이아웃
export const ModalBackgroundContainer = styled.div`
  position: absolute;
  width : 100%;
  height : 100%;
  z-index: 20;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(0.2rem);
`