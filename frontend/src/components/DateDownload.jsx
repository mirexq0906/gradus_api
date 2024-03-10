import React, { useEffect, useState } from 'react';

const DateDownload = ({DateDownload}) => {
    const [date, setDate] = useState(DateDownload.createdAt.slice(0, 10)) 

    useEffect(() => {
        const format = {
            "01": "января",
            "02": "февраля",
            "03": "марта",
            "04": "апреля",
            "05": "мая",
            "06": "июня",
            "07": "июля",
            "08": "августа",
            "09": "сентября",
            "10": "октября",
            "11": "ноября",
            "12": "декабря",
          };
 
        let result = date.slice(5,7)
        let formatResult = format[result]
        setDate(date.slice(8, 10) + " " + formatResult + " " + date.slice(0, 4))         
    }, [DateDownload])

    return (
        <span className="article__calendar">
              <img src="/images/calendar-icon.svg" alt="foto" />
              {date}
        </span>
    );
};

export default DateDownload;