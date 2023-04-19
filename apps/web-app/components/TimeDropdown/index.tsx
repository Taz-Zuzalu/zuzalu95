import React from "react"

interface TimeDropdownProps {
    id: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const TimeDropdown: React.FC<TimeDropdownProps> = ({ id, value, onChange }) => {
    const times = []

    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 2; j++) {
            const hour = i < 10 ? `0${i}` : i
            const minute = j === 0 ? "00" : "30"
            times.push(`${hour}:${minute}`)
        }
    }

    return (
        <select
            id={id}
            className="border-[#C3D0CF] bg-white border-2 p-1 rounded-[8px] h-[42px] w-full"
            value={value}
            onChange={onChange}
        >
            <option value="" disabled selected>
                Please Select
            </option>
            {times.map((time, index) => (
                <option key={index} value={time}>
                    {time}
                </option>
            ))}
        </select>
    )
}

export default TimeDropdown
