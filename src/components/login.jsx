
import { Button, Card, InputGroup, Form } from 'react-bootstrap';
import { useState } from 'react';

function Login() {

    const [username, setUsername] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setUsername(value);

        if (value.toLowerCase().includes('o')) {
            alert('Por favor, ¡Nombres de usuario sin la letra o!');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === '' || username.toLowerCase().includes('o')) {
            alert('Usuario inválido');
        } else {
            alert('Usuario registrado');
        }
    };
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Card style={{ width: '35rem' }} className='bg-dark text-light'>
                <Card.Header>Registro de Usuario</Card.Header>
                <Card.Body>
                    <Card.Title>Nombre de usuario</Card.Title>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Usuario</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre de usuario"
                            value={username}
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <Button variant="primary" onClick={handleSubmit} className="mt-1">
                        Registrarse
                    </Button>
                    <p className="mt-3">Usuario ingresado: {username}</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login


