import React from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from '../form/form.module.scss'
import axios from 'axios';
const Formpage=({users, setUsers})=>{ {


    const validationSchema = Yup.object({
        name: Yup.string().required().min(3),
        surname: Yup.string().required().min(5),
        age: Yup.number().required(),
        img: Yup.string().required()
    });


    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    surname: "",
                    age: "",
                    img: "",
                }
                }
                validationSchema={validationSchema}
                onSubmit={values => {
                    console.log(values);
                    let userObj={
                        name:values.name,
                        surname:values.surname,
                        age:values.age,
                        img:values.img
                    }

                    axios.post("http://localhost:4000/users", userObj)
                    setUsers([...users, userObj])
                }}
            >
                {
                    ({ errors, touched }) => (
                        <Form className={styles.form}>

                            <Field className={styles.field} component="input" name="name" placeholder="name" />
                            {errors.name && touched.name ? (
                                <div>error name</div>
                            ) : null}
                            <Field className={styles.field} component="input" name="surname" placeholder="surname" />
                            {errors.surname && touched.surname ? (
                                <div>error surname</div>
                            ) : null}
                            <Field className={styles.field} component="input" name="age" placeholder="age" />
                            {errors.age && touched.age ? (
                                <div>error age</div>
                            ) : null}
                            <Field className={styles.field} component="input" name="img" placeholder="image" />
                            {errors.img && touched.img ? (
                                <div>error img</div>
                            ) : null}
                            <button className={styles.btn} type="Submit" >Sign up</button>
                        </Form>
                    )
                }
            </Formik>
        </>
    )
}
}
export default Formpage