import React from 'react'

const Avatar = ({ childern, backgroundColor, px, py, color, borderRadius, fontSize, cursor}) => {
    const Style = {
        backgroundColor,
        padding: `${py} ${px}`,
        color: color ||'black',
        borderRadius,
        fontSize,
        textAlign: "center",
        cursor: cursor ||  null,
        textDecoration:"none"
    }
    return (
        <div style={Style}>
            { childern }
        </div>
    )
}

export default Avatar