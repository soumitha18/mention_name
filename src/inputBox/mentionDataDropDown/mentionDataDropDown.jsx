import "../style.css"

export default function MentionDataDropDown({ mentionData, handleClick }) {
    return (
        <div className="dropdown">
            {
                mentionData.map(item => (
                    <div 
                        className="dropdown-name" 
                        key={item.id} 
                        onClick={() => handleClick(`${item.first_name} ${item.last_name}`)}
                    >
                        {item.first_name} {item.last_name}
                    </div>
                    )
                )
            }
        </div>
    )

}