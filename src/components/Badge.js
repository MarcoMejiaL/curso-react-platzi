import React from 'react';
import confLogo from '../images/Bitcoin.svg'

class Badge extends React.Component{
render(){
    return <div>
            <div>
                <img src={confLogo} alt="ejemplo"/>
            </div>

            <div>
                <h1>Marco  <br/>Mejia Lopez</h1>
            </div>
            <div>
                <p>Ingeniero en sistemas</p>
                <p>@rippermejia</p>
            </div>
            <div>#drpaquito</div>
    </div>
    
}
}

export default Badge;