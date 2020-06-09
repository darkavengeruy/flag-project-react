import React from 'react'
import styled from 'styled-components'

const BoletasStyled = styled.div`
 width: 264px;
 text-align: left;
 margin: 1em;
 overflow: hidden;
 box-shadow: 0 0 7px 2px rgba(0,0,0,.03);
 img{
     width: 100%;
     height: 160px;
     object-fit: cover;
 }
 .details{
     padding: 1.5em;
 }
 h2{
     margin: 0;
     margin-bottom: 1em;
     font-size: 18px;
     font-weigth:700;
 }
 p{
     font-size: .9em;
     margin-buttom: .5em;
 }
 
`
function Boletas({
    CheckNumber, 
    DateOfBusiness, 
    EmployName,
    ItemId, 
    ItemDescription, 
    Total, 
}) {
    return(
        <BoletasStyled>            
            <div className="details">
                <h2>Nro Cuenta: {CheckNumber}</h2>
                <p><strong>Dia Negocio: </strong>{DateOfBusiness}</p>
                <p><strong>Empleado: </strong>{EmployName}</p>
                <p><strong>ItemId: </strong>{ItemId}</p>
                <p><strong>Descripcion: </strong>{ItemDescription}</p>
                <p><strong>Precio Venta: </strong>{Total}</p>                                
            </div>            
        </BoletasStyled>
    )
}

export default Boletas
