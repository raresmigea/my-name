import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import './Banner.scss';

const Banner = ({ name }) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);

  //   useEffect(() => {
  //     const url = 'https://api.randomuser.me';
  //     const response = fetch(url);
  //     console.log('response: ', response);
  //   });

  useEffect(() => {
    async function fetchData() {
      const url = 'https://api.randomuser.me';

      const response = await fetch(url);
      const result = await response.json();
      console.log('response: ', result.results);
      setLoading(false);
      setPerson(result);
    }
    fetchData();
  }, []); // Or [] if effect doesn't need props or state

  return (
    <>
      {/* <Button color='primary'>Hello World</Button>
      <div className='banner'>this is banner{name}</div> */}
      {loading ? (
        <span>loading...</span>
      ) : (
        <div>
          {' '}
          <span>{person}</span>
          <img src={person} />
        </div>
      )}
    </>
  );
};

export default Banner;
