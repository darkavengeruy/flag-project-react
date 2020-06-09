import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.label`
    display: inline-flex;
    background: var (--white);
    align-items: center;
    box-shadow: 0 2px 9px 0 rgba(0,0,0,.05);
    padding: 0 2rem;
    border-radius: 5px;
    flex: 1;
    i {
        margin-rigth: 1em;
        color: #C4C4C4;
    }
    input{
        border-radius: 5px;
        border: none;
        flex: 1;
        font-size: .9em;
        height: 48px;
        line-height: 48px;     
        outline: 0;           
        &::-webkit-input-placeholder {
            color: #C4C4C4;
        }
    }
`

function Input({...props}) {
    return (
        <InputStyled>
            <i class="fas fa-search"></i>
            <input type="text" {...props} />
        </InputStyled>
    )
}

export default Input
