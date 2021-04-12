import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { timeoutAcknowledged } from "./actions-creators";

export interface WsTimeoutErrorProps {
  dispatch: Function;
  closable: boolean;
}

const onHide = (closable: boolean, dispatch: Function) => () => {
  if (closable) {
    dispatch(timeoutAcknowledged());
  }
};

const onClick = (dispatch: Function) => () => dispatch(timeoutAcknowledged());

export class WsTimeoutError extends Component<WsTimeoutErrorProps> {
  render() {
    return (
      <Modal
        show={true}
        onHide={onHide(this.props.closable, this.props.dispatch)}
      >
        <Modal.Header closeButton={this.props.closable}>
          <Modal.Title className="text-warning">
            Wolne połączenie internetowe.
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-warning">
          <p>
            Proszę sprawdzić połączenie z internetem i spróbować jeszcze raz.
          </p>
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
