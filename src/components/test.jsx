// can be placed in app.jsx

//Now, you can import and use the getTestData function in any component where you need it. For example, in App.jsx:


import React, { useEffect, useState } from 'react';
import { getTestData } from './api';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getTestData()
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Data from MySQL</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
