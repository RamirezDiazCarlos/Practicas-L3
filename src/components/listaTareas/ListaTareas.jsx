import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const ListaTareas = ({ tareas, alternarCompletada, eliminarTarea }) => {
    if (tareas.length === 0) {
        return <p>No hay tareas todavía.</p>;
    }

    return (
        <ListGroup as="ol" numbered>
            {tareas.map((tarea) => (
                <ListGroup.Item
                    as="li"
                    key={tarea.id}
                    className="d-flex justify-content-between align-items-start mb-2"
                >
                    <div className="ms-2 me-auto">
                        <div
                            className="fw-bold"
                            style={{
                                textDecoration: tarea.completada ? 'line-through' : 'none',
                                color: tarea.completada ? 'lightgray' : 'black',
                            }}
                            onClick={() => alternarCompletada(tarea.id)}
                        >
                            {tarea.texto}
                        </div>
                    </div>
                    <Badge bg={tarea.completada ? 'success' : 'warning'} pill className="me-2">
                        {tarea.completada ? 'Completada' : 'Pendiente'}
                    </Badge>
                    <Button variant="danger" size="sm" onClick={() => eliminarTarea(tarea.id)}>
                        Eliminar
                    </Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

// Definición de los propTypes para el componente ListaTareas
ListaTareas.propTypes = {
    tareas: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            texto: PropTypes.string.isRequired,
            completada: PropTypes.bool.isRequired,
        })
    ).isRequired,
    alternarCompletada: PropTypes.func.isRequired,
    eliminarTarea: PropTypes.func.isRequired,
};

export default ListaTareas;
