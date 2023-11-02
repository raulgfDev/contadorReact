import { useState} from "react";

import "./inputButton.css";

export const InputButton = ({
                                name,
                                numberHoursButton,
                                propClass,
                                handleInputChange,
                                handleButton,
                                lastPush
}) => {

    return (

        <div>
            <button onClick={ () => handleButton(name, propClass + numberHoursButton) }>
                { numberHoursButton }
            </button>

            <label>{ name }</label>

            <input
                type="number"
                disabled
                className={ ( lastPush ) ? 'last-push' : ''}
                name={ name }
                value={ propClass }
                onChange={ event => handleInputChange( event ) }
            />
        </div>

    )
}