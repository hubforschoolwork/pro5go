import React from 'react';
import Modal from 'react-bootstrap/Modal';

function Questionbox() {
    return (
        <>
<div className="modal" tabindex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Outdoor Activities</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Enter question here...</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Back</button>
        <button type="button" className="btn btn-primary">Submit Question</button>
      </div>
    </div>
  </div>
</div>


</>
);
}

export default Questionbox;

