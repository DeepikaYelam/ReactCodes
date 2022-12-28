import React from "react";
const HOC = (Component) => {
   
    return(
        class extends React.Component{
            state={
                auth:true
            }
            render(){
                return(
                    <div>
                        {this.state.auth? <Component name="Deepu"/>:<h2>Go to hell!!</h2>}
                    </div>
                )
            }
        }
    )
}
export default HOC;