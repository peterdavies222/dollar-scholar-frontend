import { createPortal } from "react-dom"
import { gsap } from "gsap"
import { useEffect, useRef } from "react"

export default function Toast(props) {

  const toastRef = useRef(null)

  useEffect(()=> {
    const tl = gsap.timeline()
    if(toastRef.current) {
      tl.from(toastRef.current, {y: -60, opacity: 0})
        .to(toastRef.current, {y: 0, opacity: 1, duration: 0.3})
        .to(toastRef.current, {opacity: 0, duration: 0.3,scale: 0.5, delay: 2})
        .to(toastRef.current, {y: -60,
            onComplete: ()=> {
              props.onRemove()
            }})
    }
  }, [props.onRemove])

  const portalRoot = document.getElementById('portal-root')
  return createPortal(
    <div ref={toastRef} className={`toast ${props.type ? props.type : ''}`}>
      {props.message ? props.message : "Toast notification"}
    </div>, portalRoot
  )
}