import React from 'react'
import classes from './Survey.module.scss'
import questions from '../questions/questions'
import { useFormik } from 'formik'

const Survey = () => {
  const obj = {}
  questions.forEach((item, index) => {
    obj[item.quesNum] = ''
  })
  const formik = useFormik({
    initialValues: obj,
    onSubmit: value => {
      localStorage.setItem('data', JSON.stringify(value))
    }
  })
  return (
    <body className={classes.container}>
      <div className={classes.font}>
        <form onSubmit={formik.handleSubmit}>
          {questions.map((q, i) => {
            return (
              <div>
                <h4>{q.quesName}</h4>
                {q.answer.map((a, i) => {
                  return (
                    <div>
                      <input
                        {...formik.getFieldProps(q.quesNum)}
                        type="radio"
                        name={q.quesNum}
                        value={a}
                      />
                      <p>{q.options[i]}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}

          <button type={'submit'}>Submit</button>
        </form>
      </div>
    </body>
  )
}
export default Survey
