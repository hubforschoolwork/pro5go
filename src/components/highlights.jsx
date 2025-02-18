import React from 'react';

const Highlights = () => {
  return (

    <>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        <div className="col mb-3">
          <div className="card h-100" style={{ width: '300px', height: '300px', border: '5px solid #f86969', padding: '5px' }}>
            <div style={{ border: '5px solid white', padding: '5px' }}>
              <img src="src\assets\question-mark-3585355_1280.jpg" className="card-img-top" alt="question" style={{ height: '250px', width: '100%', objectFit: "cover" }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Q & A</h5>
                <p className="card-text">Join the community conversation.  Have a question regarding a topic?  Or, can you provide an answer?  This is a space where you can connect with our winter community.</p>
              </div>
            </div>
          </div>
        </div>


        <div className="col mb-3">
          <div className="card h-100" style={{ width: '300px', height: '300px', border: '5px solid  #f86969', padding: '5px' }}>
            <div style={{ border: '5px solid white', padding: '5px' }}>
              <img src="src\assets\skates-3623008_1280.jpg" className="card-img-top" alt="skates" style={{ height: '250px', width: '100%', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Activities</h5>
                <p className="card-text">Here's a list of the topics you can explore:</p>
                <p className="card-text" style={{ marginBottom: '5px' }}>-Outdoor Activities</p>
                <p className="card-text" style={{ marginBottom: '5px' }}>-Sports</p>
                <p className="card-text" style={{ marginBottom: '5px' }}>-Indoor Activities</p>
              </div>
            </div>
          </div>
        </div>


        <div className="col mb-3">
          <div className="card h-100" style={{ width: '300px', height: '300px', border: '5px solid  #f86969', padding: '5px' }}>
            <div style={{ border: '5px solid white', padding: '5px' }}>
              <img src="src\assets\good-idea-2844393_1280.jpg" className="card-img-top" alt="apple" style={{ height: '250px', width: '100%', objectFit: "cover" }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Ideas</h5>
                <p className="card-text">If you just want to browse the site for some great winter-related ideas, you are very welcome.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>

  );
};

export default Highlights;
