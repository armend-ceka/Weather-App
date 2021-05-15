import React from 'react'

const style = {

    width: "60%",
    backgroundColor:"white",
    margin: "30px auto",
    borderRadius: "10px",
    padding: "20px",
    fontSize : "30px",
    textAlign: "center",
    
}

function Error() {
    return (
        <div style={style}>Couldnt a find city with this name, please try again</div>
    );
}

export default Error;