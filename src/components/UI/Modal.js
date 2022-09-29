import classes from "./Modal.module.css"
import { Fragment } from "react"
import ReactDom from "react-dom"
const Backdrop = props => {
    return (<div className={classes.backdrop}></div>)

}


const ModalOverlay = props => {
    return (<div className={classes.modal}>
        <div className={classes.modalOverlay}>{props.children}</div>
    </div>)
}

const protalElement = document.getElementById("overlays") //need to change in public => index.html with new div id="overlays"
const Modal = props => {
        return (
            <Fragment>
                {ReactDom.createPortal(<Backdrop/>,protalElement)}
                {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,protalElement)}
            </Fragment>)
    
    }


// When we dont use portal 
// const Modal = props => {
//     return (
//         <Fragment>
//             <Backdrop />
//             <ModalOverlay {props.children}/>
//         </Fragment>)

// }


export default Modal