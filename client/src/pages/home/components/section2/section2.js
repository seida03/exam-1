import React, { useEffect, useState } from 'react'
import styles from '../section2/section2.module.scss'
import axios from 'axios'
function Section2() {

    const [users, setUsers] = useState([])
    const [searh, setSearch]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:4000/users")
      .then(res=>setSearch(res.data))
    })
    useEffect(() => {

        axios.get("http://localhost:4000/users")
            .then(res => setUsers(res.data)
            )
        console.log(users);
    }, [])

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:4000/users/${id}`)   
    }
    return (
        <div className={styles.section2}>
            <div className={styles.header}>
                <h2>Practice Areas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={styles.cards}>
                <div className={styles.umumicard}>
                        {users.map((elem)=>(
                    <div className={styles.carddiv}>
                        <div className={styles.card}>
                            <img src={elem.img} />
                            <h3>{elem.name} {elem.surname}</h3>
                            <p>{elem.age}</p>
                            <button onClick={()=>handleDelete(elem._id)}>Delete</button>
                        </div>
                    </div>
                        ))}

                </div>
            </div>
        </div>
    )
}

export default Section2