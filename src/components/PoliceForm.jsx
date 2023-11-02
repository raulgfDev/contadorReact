import { InputButton } from "./InputButton";
import { PoliceClass } from "../classes/PoliceClass.js";
import { useForm } from "../hooks/useForm.js";
import {useState} from "react";


export const PoliceForm = () => {

    const policeClass = new PoliceClass();

    const { formState, setFormState, handleInputChange } = useForm( policeClass );

    const [ lastButtonPush, setLastButtonPush ] = useState( null );

    const {
        nip,
        year,
        semana,
        Mornings,
        Tardes,
        Noches,
        Ma_Ta,
        Ta_No
    } = formState;

    const handleSubmit = ( event ) => {
        event.preventDefault();
    }

    const handleSave = () => {

        if ( nip === '' ) {
            alert("Nip vacio");
            return;
        }

        console.log( formState );
        setFormState( policeClass );
        setLastButtonPush( null );
    }

    const handleReset = () => {
        setFormState( policeClass );
        setLastButtonPush( null )
    }

    const handleButton = ( name, value ) => {
        setFormState({
            ...formState,
            [ name ]: value
        });
        setLastButtonPush( name );

    }

    const getYearsSelect = () => {

        const options = [];
        for ( let i = 2021; i < 2032; i++ ) {
            options.push( i );
        }
        return options;
    }

    return (

        <form onSubmit={ handleSubmit } >

            <div>
                <label>NIP: </label>
                <input
                    type="text"
                    maxLength="2"
                    minLength="2"
                    autoComplete="off"
                    name="nip"
                    value={ nip }
                    onChange={ event => handleInputChange( event ) }
                />
            </div>

            <div>
                <label>AÑO: </label>
                <select
                    name="year"
                    value={ year }
                    onChange={ event => handleInputChange( event )}
                >
                    {
                        getYearsSelect().map( year => {
                            return (
                                <option key={ year } value={ year }>
                                    { year }
                                </option>
                            );
                        })
                    }
                </select>
            </div>

            <div>
                <label>SEMANA: </label>

                <label>
                    <input
                        type="radio"
                        checked={ semana === 'A' }
                        name="semana"
                        value='A'
                        onChange={ event => handleInputChange( event )}
                    />
                    A
                </label>

                <label>
                    <input
                        type="radio"
                        checked={ semana === 'B'}
                        name="semana"
                        value="B"
                        onChange={ event => handleInputChange( event )}
                    />
                    B
                </label>
            </div>

            <InputButton
                name={"Mornings"}
                numberHoursButton={ 4 }
                propClass={ Mornings }
                handleInputChange={ event => handleInputChange( event ) }
                handleButton={ handleButton }
                lastPush={ lastButtonPush === 'Mornings' || false }
            />

            <InputButton
                name={"Tardes"}
                numberHoursButton={ 4 }
                propClass={ Tardes }
                handleInputChange={ event => handleInputChange( event ) }
                handleButton={ handleButton }
                lastPush={ lastButtonPush === 'Tardes' || false }
            />

            <InputButton
                name={"Noches"}
                numberHoursButton={ 4 }
                propClass={ Noches }
                handleInputChange={ event => handleInputChange( event ) }
                handleButton={ handleButton }
                lastPush={ lastButtonPush === 'Noches' || false }

            />

            <InputButton
                name={"Ma_Ta"}
                numberHoursButton={ 3 }
                propClass={ Ma_Ta }
                handleInputChange={ event => handleInputChange( event ) }
                handleButton={ handleButton }
                lastPush={ lastButtonPush === 'Ma_Ta' || false }
            />

            <InputButton
                name={"Ta_No"}
                numberHoursButton={ 3 }
                propClass={ Ta_No }
                handleInputChange={ event => handleInputChange( event ) }
                handleButton={ handleButton }
                lastPush={ lastButtonPush === 'Ta_No' || false }
            />

            <button onClick={ handleSave }>Guardar</button>

            <button onClick={ handleReset }>Limpiar</button>

        </form>
    )

}