import React from 'react'
import styled from 'styled-components'
import Search from './search';
import {Region as FilterByRegion} from './region'
import Wrapper from './wrapper';

const ActionListStyled = styled.div`
    .grid{
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 40px;      
    }  
    @media screen and (min-width: 768px){
        .grid{
            grid-template-columns: 480px 1fr 200px;
        }
    }
`

function ActionList() {
    return (
        <ActionListStyled>
            <Wrapper>
                <div className="grid">
                    <Search />
                    <span></span>   
                    <FilterByRegion />                   
                </div>
            </Wrapper>
        </ActionListStyled>
    )
}

export default ActionList
