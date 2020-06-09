import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Boletas from './boletas'

const BoletasListStyled = styled.div`

display: grid;
    grid-row-gap: 2.3em;
    grid-auto-flow: columns;
    grid-column-gap: 66px;
    grid-template-columns: repeat(auto-fill, 270px);
    background: var(--background);
    justify-content: center;
    /* border: 1px solid red; */
    padding: 4em 0;
`

function BoletasList() {
    const [boletasList, setBoletasList] = useState([])

    useEffect(() => {
        fetch('http://190.54.1.251:23251/api/checkdetailitem/2019-03-30')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setBoletasList(data)
                console.log(data)
            })
            .catch(() => {
                console.log('hubo un error, chequear')
            })        
        }, [])
    return (
        <BoletasListStyled>
            {
                boletasList.map(({CheckNumber, DateOfBusiness, EmployName,ItemId, ItemDescription, Total, }) => {
                    return(
                        <Boletas 
                            CheckNumber={CheckNumber}
                            DateOfBusiness={DateOfBusiness}
                            EmployName={EmployName}
                            ItemId={ItemId}
                            ItemDescription={ItemDescription}
                            Total={Total}
                        />   
                    )
                })
            }                                 
        </BoletasListStyled>
    );
}

export default BoletasList