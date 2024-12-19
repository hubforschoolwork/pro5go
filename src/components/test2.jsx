// import React, { useState } from 'react';
// import ForumForm from './ForumForm';

// function TopicPage({ topic }) {
//   const [posts, setPosts] = useState([]);

//   const handleFormSubmit = (text) => {
//     setPosts([...posts, text]);
//   };

//   return (
//     <div className="container">
//       <h1>{topic}</h1>
//       <ForumForm onSubmit={handleFormSubmit} />
//       <div className="mt-4">
//         {posts.map((post, index) => (
//           <div key={index} className="card mb-2">
//             <div className="card-body">
//               {post}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TopicPage;



// //***********************************************

// import 'bootstrap/dist/css/bootstrap.min.css';


// //************************************************ */

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import TopicPage from './TopicPage';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/topic1">
//           <TopicPage topic="Topic 1" />
//         </Route>
//         <Route path="/topic2">
//           <TopicPage topic="Topic 2" />
//         </Route>
//         {/* Add more routes for additional topics */}
//         <Route path="/">
//           <h1>Welcome to the Forum</h1>
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));


// //***************************************************** */

// /src
//   /components
//     ForumForm.js
//     TopicPage.js
//   App.js
//   index.js


//   //**************************************************** */

//   //ForumForm.js

//   import React, { useState } from 'react';

// function ForumForm({ onSubmit }) {
//   const [text, setText] = useState('');

//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(text);
//     setText('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <textarea
//           className="form-control"
//           value={text}
//           onChange={handleChange}
//           placeholder="Ask or answer a question..."
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">Submit</button>
//       <button type="button" className="btn btn-secondary" onClick={() => setText('')}>Back</button>
//     </form>
//   );
// }

// export default ForumForm;


// //***************TOPICPAGE.JS */

// import React, { useState } from 'react';
// import ForumForm from './ForumForm';

// function TopicPage({ topic }) {
//   const [posts, setPosts] = useState([]);

//   const handleFormSubmit = (text) => {
//     setPosts([...posts, text]);
//   };

//   return (
//     <div className="container">
//       <h1>{topic}</h1>
//       <ForumForm onSubmit={handleFormSubmit} />
//       <div className="mt-4">
//         {posts.map((post, index) => (
//           <div key={index} className="card mb-2">
//             <div className="card-body">
//               {post}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TopicPage;


// //******************APP.JS */

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import TopicPage from './TopicPage';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/topic1">
//           <TopicPage topic="Topic 1" />
//         </Route>
//         <Route path="/topic2">
//           <TopicPage topic="Topic 2" />
//         </Route>
//         {/* Add more routes for additional topics */}
//         <Route path="/">
//           <h1>Welcome to the Forum</h1>
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// //********************************INDEX.JS */

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(<App />, document.getElementById('root'));

// //***************************FILE STRUCTURE */
// /src
//   /components
//     ForumForm.js
//     TopicPage1.js
//     TopicPage2.js
//     // Add more TopicPage components as needed
//   App.js
//   index.js

//   //************************************ */

