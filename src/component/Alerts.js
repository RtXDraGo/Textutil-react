import React from 'react'

function Alerts(props) {
    return (
        
            props.alert &&<div class={`alert alert-${props.alert.data} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.data}</strong>:{props.alert.title}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        
    )
}
export default Alerts
