import React, { useState } from "react"
import classes from "./Survey.module.scss"
import questions from "../questions/questions"
import { useFormik } from "formik"
import { useToasts } from "react-toast-notifications"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Visualization from "../components/Visualization/Visualization"

const Survey = () => {
  const { addToast } = useToasts()
  const [isOpen, setIsOpen] = useState(false)
  const Success = () => {
    addToast("Please check your result", {
      appearance: "success",
      autoDismiss: true,
      transitionDuration: 300,
      autoDismissTimeout: 2000,
    })
  }
  const obj = {}
  questions.forEach((item, index) => {
    obj[item.quesNum] = ""
  })
  const formik = useFormik({
    initialValues: obj,
    onSubmit: (value) => {
      localStorage.setItem("data", JSON.stringify(value))
    },
  })
  return (
    <body className={classes.container}>
      <CSSTransition
        classNames="slideDown"
        in={isOpen}
        timeout={300}
        unmountOnExit
      >
        <div
          className={classes.bg}
          onClick={() => {
            setIsOpen(false)
          }}
        >
          <div className={classes.modal}>
            <Visualization size={"small"} />
          </div>
        </div>
      </CSSTransition>
      <div className={classes.content}>
        <div className={classes.font}>
          <h1>Physical Activity Survey</h1>
          <form onSubmit={formik.handleSubmit}>
            {questions.map((q, i) => {
              return (
                <div>
                  <h4>{q.quesName}</h4>
                  {q.answer.map((a, i) => {
                    return (
                      <div className={classes.input_wrapper}>
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

            <button
              onClick={() => {
                Success()
                setTimeout(() => {
                  setIsOpen(true)
                }, 2000)
              }}
              className={classes.button}
              type={"submit"}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </body>
  )
}
export default Survey
