import React, {useState} from "react";

const CurrentDate = () => {
    let  [date,editDate] = useState('')

    setInterval(() => editDate(new Date().toLocaleString()), 1000)

        return (
            <div>
               Current Time : {date}
            </div>
        );
}

export default CurrentDate;