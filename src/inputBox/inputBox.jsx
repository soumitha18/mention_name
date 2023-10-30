import { useState } from 'react';
import nameList from "../constant/data.json"
import MentionDataDropDown from './mentionDataDropDown/mentionDataDropDown';
import InputBoxComponent from './inputBoxComponent';

export default function InputBox() {

    const [data, setData] = useState("")
    const [mentionData, setMentionData] = useState([])

    const handleClick = (name) => {
        setData(data.replace(/@\w+$/, `@${name}`));
        setMentionData([]);
    }

    const handleChange = (e) => {
        let value = e.target.value
        setData(value)

        if (value.includes('@')) {
            value = value.split("@")
            const name = value[value.length - 1]
            const filteredNameList = nameList.filter(item => {
                const full_name = `${item.first_name} ${item.last_name}`.toLowerCase()

                return full_name.startsWith(name.toLowerCase());
            })

            setMentionData(filteredNameList)
        } else {
            setMentionData([])
        }
    }

    return (
        <>
            <InputBoxComponent value={data} onChange={handleChange} />
            {
                mentionData.length > 0
                &&
                <MentionDataDropDown mentionData={mentionData} handleClick={handleClick} />
            }
        </>
    )
}