import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { unexpectedErrorAcknowledged } from "./actions-creators";

export interface UnexpectedErrorProps {
  dispatch: Function;
  closable: boolean;
}

const onHide = (closable: boolean, dispatch: Function) => () => {
  if (closable) {
    dispatch(unexpectedErrorAcknowledged());
  }
};

const onClick = (dispatch: Function) => () =>
  dispatch(unexpectedErrorAcknowledged());

export class UnexpectedError extends Component<UnexpectedErrorProps> {
  render() {
    return (
      <Modal
        show={true}
        onHide={onHide(this.props.closable, this.props.dispatch)}
      >
        <Modal.Header closeButton={this.props.closable}>
          <Modal.Title className="text-danger">
            Nastąpił nieoczekiwany błąd.
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-danger">
          <p>Proszę spróbować jeszcze raz.</p>
        </Modal.Body>

        {this.props.closable ? (
          <Modal.Footer>
            <Button variant="secondary" onClick={onClick(this.props.dispatch)}>
              Ok
            </Button>
          </Modal.Footer>
        ) : null}
      </Modal>
    );
  }
}
