import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from  '../footer/footer.module.scss'
function Footer() {
  return (
    <>
    <div className={styles.footer}>
        <p>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
    </div>
    
    </>
  )
}

export default Footer