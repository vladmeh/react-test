import React from 'react';

export default function(props)
{
    return <div style={{float:'right', width: 200, cursor: 'pointer'}}>
        Список комнат:
        <ul>
            {props.items.map((name) => {
                if(name == props.room)
                    return <li onClick={() => props.onSelect(name)}><b>[ {name} ]</b></li>;

                return <li onClick={() => props.onSelect(name)}>{name}</li>
            })}
        </ul>
    </div>
}