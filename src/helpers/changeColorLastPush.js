
export const changeColorLastPush = ( { target }, elements ) => {

    elements.map( ( element ) => {
        ( target.name === element.name ) ?
            element.className = 'last-push' :
            element.className = ''
    });
}