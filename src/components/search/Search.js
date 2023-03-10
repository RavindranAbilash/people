import React, { useState } from 'react';
import './Search.css';
import { Button } from "@material-ui/core";

function Search() {
    const [input, setInput] = useState("");

    const search = (e) => {
        e.preventDefault();
        console.log('You hit the Google Search button : ',input);
    };

  return (
    <form className='search'>
        <div className='search__input'>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
                    <div className='search__buttons'>
                    <Button type='submit' onClick={search} variant="outlined">Search</Button>
                </div>
    </form>
  );
}

export default Search;