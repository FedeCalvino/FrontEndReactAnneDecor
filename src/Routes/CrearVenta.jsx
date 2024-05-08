import React, { useEffect, useCallback } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NavBar } from '../Componentes/NavBar';
import { SelecctCliente } from '../Componentes/SelecctCliente';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';


export const CrearVenta = () => {

    const [validated, setValidated] = useState(false);
    const [AlertaClienteNotSelecc, setAlertaClienteNotSelecc] = useState(false);
    const [VentaCreada, setVentaCreada] = useState(false);

    const [IdCliV, setIdCliV] = useState('')

    const [Telas, setTelas] = useState([])

    const [motorizada, setMotorizada] = useState(false)

    const [selectedTelaRoler, setselectedTelaRoler] = useState("");
    const [selectedTelaRolerNombre, setselectedTelaRolerNombre] = useState("");

    const [selectedAreaRoler, setselectedAreaRoler] = useState("");
    const [AnchoRoller, setAnchoRoller] = useState('')
    const [LargoRoller, setLargoRoller] = useState('')
    const [CanoRoller, setCanoRoller] = useState('')
    const [Cadena, setCadena] = useState('')
    const [Cortinas, setCortinas] = useState([])

    const [NombreNuevoAmbiente, setNuevoNombreAmbiente] = useState("")
    const [Ambientes, setAmbientes] = useState([])

    const [NombreCliN, setCliNomN] = useState('');
    const [TelefonoCliN, setCliTelN] = useState('');
    const [RutCliN, setCliRutN] = useState('');
    const [DireccCliN, setCliDireccN] = useState('');


    const [idCor, setidCor] = useState(0)

    const [Precio, setPrecio] = useState(0)


    useEffect(() => {
        FetchTelas();
    }, []);

    const UrlTelas = "http://localhost:8085/TipoTela"

    function AgregarRoller() {
        const nuevaCortinaRoler = {
            Id: idCor,
            Ambiente: { selectedAreaRoler }.selectedAreaRoler,
            tela: { id: { selectedTelaRoler }.selectedTelaRoler, Nombre: selectedTelaRolerNombre },
            ancho: { AnchoRoller }.AnchoRoller,
            largoRoller: { LargoRoller }.LargoRoller,
            cadena: { Cadena }.Cadena,
            Cano: { CanoRoller }.CanoRoller,
            motorizada: { motorizada }.motorizada
        }
        console.log(nuevaCortinaRoler)
        setidCor(idCor + 1)

        setCortinas([...Cortinas, nuevaCortinaRoler]);
    }

    const FetchTelas = async () => {
        try {
            const res = await fetch(UrlTelas)
            const data = await res.json()
            setTelas(data);
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    };

    const FormCortinaTradicional = () => {
        return (
            <>
                <Row>
                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Select as={Col} md="2" aria-label="Default select example">
                            <option>Tipo de Tela</option>
                            {(Telas.map(Tel =>
                                <option value={Tel.id} key={Tel.id}>
                                    {Tel.Nombre}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Control
                            required
                            type="number"
                            placeholder="Ancho"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Control
                            required
                            type="number"
                            placeholder="Largo"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Select>
                            <option>Paños</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
            </>
        )
    };

    const handleSelectChange = (e) => {
        //console.log(e.target.value)
        setselectedTelaRoler(e.target.value);
        console.log(e.target.value);
        console.log(e);
        const selectedValue = parseInt(e.target.value, 10);
        const selectedTela = Telas.find(tela => tela.Id === selectedValue);
        console.log(selectedTelaRoler)
        // Obtener el Nombre del objeto seleccionado
        selectedTela ? setselectedTelaRolerNombre(selectedTela.Nombre) : "";
    };

    const handleSelectAmbienteChange = (e) => {
        setselectedAreaRoler(e.target.value)
    }


    const FormCortinaRoller = () => {
        return (
            <>
                <Row>
                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Ambiente</Form.Label>
                        <Form.Select as={Col} md="2" aria-label="Default select example" onChange={handleSelectAmbienteChange} value={selectedAreaRoler}>
                            <option>Ambiente</option>
                            {Ambientes.map(amb =>
                                <option value={amb.Nombre} key={amb.Nombre}>
                                    {amb.Nombre}
                                </option>
                            )}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Tela</Form.Label>
                        <Form.Select as={Col} md="2" aria-label="Default select example" onChange={handleSelectChange} value={selectedTelaRoler}>
                            <option>Tipo de Tela</option>
                            {Telas.map(Tel =>
                                <option value={Tel.id} key={Tel.id}>
                                    {Tel.Nombre}
                                </option>
                            )}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Ancho</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            value={AnchoRoller}
                            onChange={(e) => { setAnchoRoller(e.target.value) }}
                            placeholder="Ancho"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Largo</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            value={LargoRoller}
                            onChange={(e) => { setLargoRoller(e.target.value) }}
                            placeholder="Largo"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Largo Cadena</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            value={Cadena}
                            onChange={(e) => { setCadena(e.target.value) }}
                            placeholder="Cadena"
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "1em" }} >Caño</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            value={CanoRoller}
                            onChange={(e) => { setCanoRoller(e.target.value) }}
                            placeholder="Cadena"
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom01">
                        <Form.Check
                            style={{ marginLeft: "5em", marginTop: "3em", transform: 'scale(1.2)' }}// prettier-ignore
                            type="switch"
                            checked={motorizada}
                            onChange={(e) => { setMotorizada(e.target.checked); console.log(motorizada) }}
                            id="custom-switch"
                            label="Motorizada"
                        />
                    </Form.Group>
                </Row>
            </>
        )
    };






    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };


    function BorrarCor(id) {
        console.log(id);
        const nuevasCortinas = Cortinas.filter(cortina => cortina.Id !== id);
        setCortinas(nuevasCortinas);
    }

    function CrearNuevaVenta() {
        const precioFinalInt = parseInt({ Precio }.Precio, 10);
        if (IdCliV != '') {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        "IdCliente": { IdCliV }.IdCliV,
                        "PrecioFinal": precioFinalInt
                    }
                )
            };
            fetch('http://localhost:8085/Ventas', requestOptions)
                .then(response => response.json())
                .then(result => {
                    setVentaCreada(true)
                    AgregarCortinasRollers(result.id)
                    setTimeout(() => {
                        setVentaCreada(false);
                    }, 8000);
                });

        } else {
            setAlertaClienteNotSelecc(true)
            setTimeout(() => {
                setAlertaClienteNotSelecc(false);
            }, 8000); 
        }


    }

    async function AgregarCortinasRollers(idVenta) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };

        // Usar Promise.all para enviar todas las Cortinas en paralelo y esperar su finalización
        await Promise.all(Cortinas.map(async (Cor) => {
            const bodyData = {
                "Alto": Cor.largoRoller,
                "Ancho": Cor.ancho,
                "Ambiente": Cor.Ambiente,
                "motorizada": Cor.motorizada,
                "IdTipoTela": Cor.tela.id,
                "largoCadena": Cor.cadena,
                "cadenaMetalica": false,
                "Tubo": Cor.Cano
            };
            requestOptions.body = JSON.stringify(bodyData);
            fetch('http://localhost:8085/Cortinas/Roller', requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    AgregarCortinaRollerAVenta(result.id, idVenta);
                });
        }));
    }

    function AgregarCortinaRollerAVenta(cortinaid, idVenta) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        const IdcorParse = parseInt(cortinaid, 10);
        const IdVentParse = parseInt(idVenta, 10);
        const url = 'http://localhost:8085/Ventas/' + IdcorParse + "/" + IdVentParse
        console.log(url)
        fetch('http://localhost:8085/Ventas/' + IdcorParse + "/" + IdVentParse, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
            });
    }


    const CrearAmbiente = () => {
        const nuevoAmbiente = {
            Nombre: { NombreNuevoAmbiente }.NombreNuevoAmbiente
        }
        setAmbientes([...Ambientes, nuevoAmbiente]);
        setNuevoNombreAmbiente("")
        //console.log(Ambientes)
    }

    const setIdCliCallBack = useCallback(
        (val) => {
            setIdCliV(val)
            console.log(val)
        }, []
    )


    const AlertaCliente = () => {
        return (
            <>
                <Alert variant="danger">
                    Selecciona un cliente primero
                </Alert>
            </>
        )
    }
    const AlertaVentaCreada = () => {
        return (
            <>
                <Alert style={{justifyContent:"center",alignItems:"center"}} variant='success'>
                    VentaCreada
                </Alert>
            </>
        )
    }

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {AlertaClienteNotSelecc ? <AlertaCliente/> : null}
                {VentaCreada ? <AlertaVentaCreada/> : null}
                <SelecctCliente
                    IdCliPass={(selectedId) => { setIdCliV(selectedId) }}
                    NombreCliPass={(selectedNomb) => { setCliNomN(selectedNomb) }} />
                <Row style={{ marginBottom: "2em" }}>
                    <h1>Ambientes</h1>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <InputGroup>
                            <InputGroup.Text>Nuevo Ambiente</InputGroup.Text>
                            <Form.Control
                                type="text"
                                value={NombreNuevoAmbiente}
                                onChange={(e) => setNuevoNombreAmbiente(e.target.value)}
                            />
                            <Button style={{ marginLeft: "1em" }} type="submit" onClick={CrearAmbiente}>Crear</Button>
                        </InputGroup>

                    </Form.Group>
                </Row>
                <Row>
                    <Tabs
                        defaultActiveKey="profile"
                        id="fill-tab-example"
                        as={Col}
                        className="mb-2"
                    >
                        <Tab eventKey="Roll" title="Roller">
                            {FormCortinaRoller()}
                            <Row style={{ marginTop: "1em" }}>
                                <Form.Group controlId="validationCustom01">
                                    <Button style={{ marginTop: "1em" }} type="submit" as={Col} md="1" onClick={AgregarRoller}>Agregar Roller</Button>
                                </Form.Group>
                            </Row>
                        </Tab>
                        <Tab eventKey="Tra" title="Tradicional">
                            {FormCortinaTradicional()}
                        </Tab>
                        <Tab eventKey="Pan" title="Panel">
                            Tab content for Panel
                        </Tab>
                    </Tabs>
                    <ListGroup as={Col} md="8">

                    </ListGroup>
                </Row>

            </Form>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Area</th>
                        <th>Tela</th>
                        <th>Ancho</th>
                        <th>Largo</th>
                        <th>Caño</th>
                        <th>Cadena</th>
                        <th>Motorizada</th>
                    </tr>
                </thead>
                <tbody>
                    {Cortinas.map(Cor =>
                        <>
                            <tr key={Cor.Id} style={{ marginBottom: "1em" }}>
                                <td>{Cor.Id}</td>
                                <td>{Cor.Ambiente}</td>
                                <td>{Cor.tela.Nombre}</td>
                                <td>{Cor.ancho}</td>
                                <td>{Cor.largoRoller}</td>
                                <td>{Cor.Cano}</td>
                                <td>{Cor.cadena}</td>
                                {Cor.motorizada ? <td> Si</td> : <td>No</td>}
                                <td>
                                    <Button type="submit" onClick={() => BorrarCor(Cor.Id)}>Borrar</Button>
                                </td>
                            </tr>
                        </>
                    )}

                </tbody>
            </Table>
            <Row style={{ alignItems: "center", justifyContent: "center" }}>
                <Form.Group as={Col} md="2" controlId="validationCustom01">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        value={Precio}
                        onChange={(e) => { setPrecio(e.target.value) }}
                        placeholder="Precio"
                    />
                </Form.Group>
                <Button type="submit" as={Col} md="1" onClick={() => CrearNuevaVenta()}>Crear Venta</Button>
            </Row>
        </>
    )
}
