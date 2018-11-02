import * as React from 'react';


const NewHOC = (PassedComponent) => {
    return class extends React.Component {
        render(){
            return (
                <div>
                    <PassedComponent {...this.props}/>
                </div>
            )
        }
    }
}

export default NewHOC;