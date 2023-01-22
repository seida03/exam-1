import React from 'react'
import styles from '../section3/section3.module.scss'
function Section3() {
    return (
        <div className={styles.section3}>
            <div className={styles.pic}>
                <img src="https://preview.colorlib.com/theme/notary/images/atty_1.jpg.webp" />
                <img src="https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp" />
            </div>
            <div className={styles.textandbtn}>
                <div className={styles.text}>
                    <h2>
                        We Provide Highly Reliable & Effective Legal Solutions
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
               <button>Book an appointment</button>
               
                </div>
            </div>
        </div>
    )
}

export default Section3