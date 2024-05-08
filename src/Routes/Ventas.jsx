import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components'

export const Ventas = () => {

    const [IdVenta, setIdVenta] = useState(null)
    const [ClienteVenta, setClienteVenta] = useState(null)
    const [FechaVenta, setFechaVenta] = useState(null)


    const [Ventas, setVentas] = useState([])
    const [Venta, setVenta] = useState([])
    const [Cortinas, setCortinas] = useState([])

    const UrlVentas = "http://localhost:8085/Ventas/Dto"
    const UrlVenta = "http://localhost:8085/Ventas/DtoVentaCor/"

    useEffect(() => {
        FetchVentas();
    }, []);

    useEffect(() => {
        FetchVentaCortinas();
    }, [IdVenta]);


    function MostrarVenta(venta) {
        console.log("click");
        setIdVenta(venta.IdVenata)
        setClienteVenta(venta.NombreCliente)
        setFechaVenta(venta.FechaVenta)
    }


    const FetchVentas = async () => {
        try {
            const res = await fetch(UrlVentas)
            const data = await res.json()
            setVentas(data);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    };
    const StyledTableRow = styled.tr`
    &:hover {
        background-color: beige;
    }
`;

    const FetchVentaCortinas = async () => {
        if (IdVenta != null) {
            try {
                const res = await fetch(UrlVenta + {IdVenta}.IdVenta)
                const data = await res.json()
                setCortinas(data);
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        }
    };

    return (
        <>
            <Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Table responsive>
                        <thead style={{ fontFamily: 'Arial, sans-serif' }}>
                            <tr>
                                <th style={{ padding: '10px' }}>Cliente</th>
                                <th style={{ padding: '10px' }}>Fecha</th>
                                <th style={{ padding: '10px' }}>Monto</th>
                                <th style={{ padding: '10px' }}>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Ventas.map(Ven =>
                                <StyledTableRow key={Ven.IdVenata}>
                                    <td onClick={() => MostrarVenta(Ven)} style={{ padding: '10px' }}>{Ven.NombreCliente}</td>
                                    <td onClick={() => MostrarVenta(Ven)} style={{ padding: '10px' }}>{Ven.FechaVenta}</td>
                                    <td onClick={() => MostrarVenta(Ven)} style={{ padding: '10px' }}>{Ven.Monto}</td>
                                    <td onClick={() => MostrarVenta(Ven)} style={{ borderRadius: '20px', textAlign: "Center", padding: '10px', backgroundColor: `${Ven.ColorEstado}90`, fontSize: '18px', fontWeight: 'normal' }}>{Ven.EstadoActual}</td>
                                </StyledTableRow>
                            )}
                        </tbody>
                    </Table>
                </Form.Group>
                <Form.Group as={Col} md="8" controlId="validationCustom01">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <h2>Cliente {ClienteVenta}</h2>
    <h2>Fecha {FechaVenta}</h2>
</div>
                    <Table responsive>
                        <thead style={{ fontFamily: 'Arial, sans-serif' }}>
                            <tr>
                                <th style={{ padding: '10px' }}>ambiente</th>
                                <th style={{ padding: '10px' }}>altoCortina</th>
                                <th style={{ padding: '10px' }}>anchoCortina</th>
                                <th style={{ padding: '10px' }}>nombreTela</th>
                                <th style={{ padding: '10px' }}>colorTela</th>
                                <th style={{ padding: '10px' }}>cano</th>
                                <th style={{ padding: '10px' }}>cadena</th>
                                <th style={{ padding: '10px' }}>estadoCortina</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Cortinas.map(Cor =>
                                <StyledTableRow key={Cor.idCortina}>
                                    <td style={{ padding: '10px' }}>{Cor.ambiente}</td>
                                    <td style={{ padding: '10px' }}>{Cor.altoCortina}</td>
                                    <td style={{ padding: '10px' }}>{Cor.anchoCortina}</td>
                                    <td style={{ padding: '10px' }}>{Cor.nombreTela}</td>
                                    <td style={{ padding: '10px' }}>{Cor.colorTela}</td>
                                    <td style={{ padding: '10px' }}>{Cor.cano}</td>
                                    <td style={{ padding: '10px' }}>{Cor.cadena}</td>
                                    <td style={{ borderRadius: '20px', textAlign: "Center", padding: '10px', fontSize: '18px', fontWeight: 'normal' }}>{Cor.estadoCortina}</td>
                                </StyledTableRow>
                            )}
                        </tbody>
                    </Table>
                </Form.Group>
            </Row>
        </>
    );
}
