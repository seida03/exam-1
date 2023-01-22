import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from '../header/header.module.scss'
const Header = ({ search, setSearch }) => {
  {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };

    if (searchInput.length > 0) {
      search.filter((user) => {
        if(user.name==searchInput){
          return(
            <div>hey</div>
          )
        }
      });
    }
    return (
      <>

        <div className={styles.header}>
          <div className={styles.title}>
            <h2>Notary</h2>
          </div>
          <div className={styles.ul}>
            <ul>
              <li><Link to="/" className={styles.link}>Home</Link></li>
              <li><Link to='/add' className={styles.link}>Add</Link></li>
            </ul>
          </div>
          <input onChange={handleChange} value={searchInput} className={styles.search} placeholder="Search name.." />
        </div>

      </>
    )
  }
}

export default Header