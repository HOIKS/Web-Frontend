import styled from 'styled-components';
import theme from '../styles/theme';
import moment from 'moment';
import { useState } from 'react';
import { Calendar } from 'react-calendar';
import "react-calendar/dist/Calendar.css";

const CustomCalendarContainer = styled.div`
    padding: 2.5rem;
    width: 70%;
    height: 100%;

`;

const StyledCalendar = styled(Calendar)`
    border: none;
    width: 100%;
    height: 100%;

    .react-calendar {
        width: 100%;
        height: 60vh;
        
    }
    .react-calendar__viewContainer {
        
    }

    .react-calendar__navigation__prev2-button,
    .react-calendar__navigation__next2-button {
        display: none;
    }

    .react-calendar__navigation__prev-button,
    .react-calendar__navigation__next-button {
        min-width: 44px;
        margin: 0 2px;
        border: 1px solid ${theme.colors.gray4};
        border-radius: 10px;
        box-shadow: 0px 12px 12px 0px rgba(255, 255, 255, 0.12) inset, 0px -2px 2px 0px rgba(48, 48, 48, 0.10) inset;
    }

    .react-calendar__navigation__label__labelText {
        font-family: Pretendard;
        font-size: 42px;
        font-style: normal;
        font-weight: 600;
    }

    .react-calendar__month-view__weekdays {
        text-align: left;
        border: 1px solid var(--HOIKS-lightColor, #D9BBFF);
        background: var(--HOIKS-lightestColor, #ECDDFF);
        color: var(--HOIKS-darkColor, #5411A9);

        abbr {
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
        }
    }

    .react-calendar__month-view__weekdays__weekday {
        border: 1px solid var(--HOIKS-lightColor, #D9BBFF);
    
    }

    .react-calendar__tile { 
        max-width: 100%;
        height: 130px;
        border: 1px solid ${theme.colors.gray2};
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .react-calendar__tile--now,
    .react-calendar__tile--now:enabled:hover,
    .react-calendar__tile--now:enabled:focus {
        background-color: ${theme.colors.gray2};
    }

    .react-calendar__tile--active {
        border: 2.657px solid var(--HOIKS-mainColor, #9A4BFF);
        background: rgba(236, 221, 255, 0.30);
        color: ${theme.colors.mainColor};
    }

    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
        background: rgba(236, 221, 255, 0.30);
    }

    .react-calendar__month-view__days__day--neighboringMonth {
        opacity: 0.3;
    }

    .saturday-tile {
        color: #0066ff;  // 토요일 날짜 텍스트 색상
    }

    .sunday-tile {
        color: #ff0000;  // 일요일 날짜 텍스트 색상
    }
    
`

const CustomCalendar = () => {

    const [value, onChange] = useState(new Date());

    const getTileClassName = ({ date }) => {
        const day = date.getDay();
        if (day === 0) return 'sunday-tile';    // 일요일(0)인 경우
        if (day === 6) return 'saturday-tile';  // 토요일(6)인 경우
        return null;
    };

    return (
        <CustomCalendarContainer>
            <StyledCalendar 
                onChange={onChange} 
                value={value} 
                locale="en-US"
                formatDay={(locale, date) => moment(date).format("D")} // 일 제거 숫자만 보이게
                formatYear={(locale, date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
                formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
                tileClassName={getTileClassName}  // 타일 클래스 설정 함수 추가
            />
        </CustomCalendarContainer>
    )
}

export default CustomCalendar;