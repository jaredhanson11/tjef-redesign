import {createBrowserHistory} from "history"
import React from "react"
import {Router} from "react-router-dom"
import Stack from "./Stack"

const history = createBrowserHistory()

export default function App() {
  return (
    <Router history={history}>
      <Stack />
    </Router>
  )
}
