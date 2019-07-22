import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {unexpectedErrorAcknowledged} from "./actions-creators";

interface WsUnexpectedErrorProps {
    dispatch: Function;
    closable: boolean
}

export class WsUnexpectedError extends Component<WsUnexpectedErrorProps> {
    render() {
        return (<Modal show={true} onHide={() => {
            if (this.props.closable) {
                this.props.dispatch(unexpectedErrorAcknowledged());
            }
        }}>
            <Modal.Header closeButton={this.props.closable}>
                <Modal.Title className='text-danger'>Nastąpił nieoczekiwany błąd.</Modal.Title>
            </Modal.Header>

            <Modal.Body className='text-danger'>
                <p>Proszę sprawdź połączenie z internetem i spróbuj ponownie.</p>
            </Modal.Body>

            {this.props.closable ?
                (<Modal.Footer>
                    <Button variant='secondary' onClick={() => {
                        this.props.dispatch(unexpectedErrorAcknowledged())
                    }}>Ok</Button>
                </Modal.Footer>) : undefined}
        </Modal>)
    }
}
