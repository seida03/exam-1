import React from 'react'
import styles from '../section4/section4.module.scss'
function Section4() {
    return (
        <div className={styles.section4}>
            <div className={styles.head}>
                <h2>Happy Customers
                </h2>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp' />
                        <div>
                            <p>Lina Gold</p>
                            <span>Owner, Ford
                            </span>
                        </div>
                    </div>
                    <div>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp' />
                        <div>
                            <p>Lina Gold</p>
                            <span>Owner, Ford
                            </span>
                        </div>
                    </div>
                    <div>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <img src='https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp' />
                        <div>
                            <p>Lina Gold</p>
                            <span>Owner, Ford
                            </span>
                        </div>
                    </div>
                    <div>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4