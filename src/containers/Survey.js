import React from 'react'
import classes from './Survey.module.scss'
import { useFormik } from 'formik'

const Survey = () => {
  const formik = useFormik({
    initialValues: {
      sex: '',
      name: '',
      age: ''
    },
    onSubmit: value => {
      console.log(value)
    }
  })
  return (
    <body className={classes.container}>
      <div className={classes.font}>
        <form onSubmit={formik.handleSubmit}>
          <h4>
            HPE.1. Do students in all year levels receive 120 minutes of
            scheduled PE (not including sport) every week?
          </h4>
          <input
            {...formik.getFieldProps('sex')}
            type="radio"
            name="sex"
            value="male"
          />
          Male
          <input
            {...formik.getFieldProps('sex')}
            type="radio"
            name="sex"
            value="female"
          />
          Female
          <h1>2</h1>
          <input
            {...formik.getFieldProps('name')}
            type="radio"
            name="name"
            value="male"
          />
          Male
          <input
            {...formik.getFieldProps('name')}
            type="radio"
            name="name"
            value="female"
          />
          Female
          <h1>3</h1>
          <input
            {...formik.getFieldProps('age')}
            type="radio"
            name="age"
            value="a"
          />
          a
          <input
            {...formik.getFieldProps('age')}
            type="radio"
            name="age"
            value="b"
          />
          b
          <input
            {...formik.getFieldProps('age')}
            type="radio"
            name="age"
            value="c"
          />
          c
          <input
            {...formik.getFieldProps('age')}
            type="radio"
            name="age"
            value="d"
          />
          d<button type={'submit'}>Submit</button>
        </form>
      </div>
    </body>
  )
}

export default Survey
