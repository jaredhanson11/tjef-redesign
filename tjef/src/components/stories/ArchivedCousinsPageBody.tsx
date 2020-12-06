/** @jsx jsx */
import {jsx} from "@emotion/core"
import {useEffect, useState} from "react"
import {_cousins} from "../../data/stories"

type ArchivedCousinsPageBodyProps = {
  edition?: string
}

export default function ArchivedCousinsPageBody(
  props: ArchivedCousinsPageBodyProps
) {
  let [loading, setLoading] = useState(false)
  let [is404, setIs404] = useState(props.edition === undefined)
  let [html, setHtml] = useState("")
  useEffect(() => {
    if (props.edition) {
      let edition = _cousins[props.edition]
      let htmlPath = edition.html
      fetch(`/data/cousins/${htmlPath}`)
        .then((resp) => {
          return resp.text()
        })
        .then((text) => {
          setHtml(text)
          setLoading(false)
        })
        .catch((err) => {
          setIs404(true)
          setLoading(false)
        })
      setLoading(true)
    }
  }, [props.edition])
  return is404 ? (
    <div>This edition doesn't exist</div>
  ) : loading ? (
    <div>Loading...</div>
  ) : (
    <div dangerouslySetInnerHTML={{__html: html}}></div>
  )
}
