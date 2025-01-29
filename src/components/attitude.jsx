import React from 'react';


function Attitude() {
  return (
    <>
      <div className="d-flex" style={{marginLeft: "300px"}}>
        <div className="card mb-3 me-3" style={{ maxWidth: "620px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="src/assets/man-498473_1280.jpg" className="img-fluid rounded-start" alt="..." style={{ height: "100%", objectFit: "cover" }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Outdoor Activities</h5>
                <p className="card-text">Roast marshmallows!</p>
                <p className="card-text">Go sledding!</p>
                <p className="card-text">Snowball Fight!</p>
                <p className="card-text">Decorate the outside of your house!</p>
                <p className="card-text">Build a snowman!</p>
              
              </div>
            </div>
          </div>
        </div>
    </div>

    </>
  );
}

export default Attitude;


