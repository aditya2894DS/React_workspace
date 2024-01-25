import React, { useEffect, useState } from 'react';

export default function ErrorComponent(){

    const [errorState, setErrorState] = useState(false);
    const [myError, setMyError] = useState(false)

    function handleClick(){
        setErrorState(true)
    }

    useEffect(setErrorState(true), [myError])

    return(
        <>
            <div className='error-component-container'>
                <p></p>
                <button onClick={handleClick}>Start error</button>
            </div>
        </>
    )
}