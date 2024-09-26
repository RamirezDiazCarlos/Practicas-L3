import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AgregarTarea = ({ agregarTarea }) => {
    const [nuevaTarea, setNuevaTarea] = useState('');

    const manejarCambio = (e) => {
        setNuevaTarea(e.target.value);
    };

    const manejarSubmit = (e) => {
        e.preventDefault();// se me actualizaba la página al agregar una tarea
        if (nuevaTarea.trim() !== '') {
            agregarTarea(nuevaTarea);
            setNuevaTarea('');
        }
    };

    return (
        <Form onSubmit={manejarSubmit}>
            <Form.Group>
                <Form.Label>Agregar nueva tarea</Form.Label>

                <Form.Control
                    type="text"
                    placeholder="Escribe una tarea"
                    value={nuevaTarea}
                    onChange={manejarCambio}
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
                Agregar Tarea
            </Button>
        </Form>
    );
};


AgregarTarea.propTypes = {
    agregarTarea: PropTypes.func.isRequired,
};

export default AgregarTarea;
