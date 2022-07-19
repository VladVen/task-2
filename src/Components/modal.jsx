import "./modal.module.css"

const Modal = ({setActive, url}) => {
    return <div className={'modal'} >
            <img src={url}/>
           <button onClick={() => setActive(false)}>Close</button>
    </div>
}

export default Modal