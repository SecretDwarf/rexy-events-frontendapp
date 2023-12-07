import React, { useState, useEffect } from 'react';
import slideshow from './components/slideshow';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './App.css';

const API_BASE_URL = 'YOUR_API_ENDPOINT';

function App() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/data`);
      if (!response.ok) {
        throw new Error('Network error.');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const postData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: 'value' }), 
      });
      if (!response.ok) {
        throw new Error('Network error.');
      }
      fetchData();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/data/ID_TO_DELETE`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network error.');
      }
      fetchData();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <NavBar />

      <main className="App-main">
        <div>
          <button onClick={postData}>Post Data</button>
          <button onClick={deleteData}>Delete Data</button>
        </div>
        {data && (
          <div>
            <h2>Data from API:</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}

      <section id="get">
        <h2>Get Section</h2>
        <p>To use the GET API:</p>
        <p>* Insert instructions for using the GET API *</p>
      </section>

      <section id="set">
        <h2>Set Section</h2>
        <p>To use the GET API:</p>
        <p>* Insert instructions for using the SET API *</p>
      </section>

      <section id="post">
        <h2>Post Section</h2>
        <p>To use the POST API:</p>
        <p>* Insert instructions for using the POST API *</p>
      </section>

      <section id="delete">
        <h2>Delete Section</h2>
        <p>To use the DELETE API:</p>
        <p> * Insert instructions for using the DELETE API *</p>
      </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
