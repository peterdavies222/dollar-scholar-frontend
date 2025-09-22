import { SlDialog } from '@shoelace-style/shoelace/dist/react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import PoppingButton from './PoppingButton'

export default function LessonIntro(props) {
  const portalRoot = document.getElementById('portal-root')
  const dialogRef = useRef(null)

  // Watch `props.open` and tell Shoelace to animate
  useEffect(() => {
    if (!dialogRef.current) return
    if (props.open) {
      dialogRef.current.show()  // animate in
    } else {
      dialogRef.current.hide()  // animate out
    }
  }, [props.open])

  const topicsCovered = props.topicsCovered?.map((topic, i) => (
    <li key={i}>{topic}</li>
  ))

  return createPortal(
    <SlDialog
      ref={dialogRef}
      className="lesson__intro"
      onSlAfterHide={props.onClose} // fires after animation
    >
      <div className="lesson__intro--header" slot="label">
        <h3 className="lesson__intro--number subheading">Lesson {props.number}</h3>
        <h2 className="lesson__intro--title">{props.title}</h2>
      </div>

      <div className="lesson__intro--main dialog-main">
        <h3 className="subheading">Overview</h3>
        <p>{props.overview}</p>
        <p>We'll be going through things like:</p>
        <ul>{topicsCovered}</ul>
        <p>and more!</p>
      </div>

      <div slot="footer" className="lesson__intro--footer">
        <PoppingButton 
          link={props.link}
          buttonColor="pink"
          label="Let's go!"
        />
        <button
          className="dismiss-button"
          onClick={() => dialogRef.current?.hide()}
        >
          Maybe later...
        </button>
      </div>
    </SlDialog>,
    portalRoot
  )
}
