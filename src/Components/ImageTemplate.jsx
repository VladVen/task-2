import style from "./table.module.css";
import delete1 from "../state/images/close-not-allowed-11563187754a9l63qt2fx.png";


const imageTemplate = (props) => {
    const openModal = (url) => {
        props.setUrl(url)
        props.setActive(true)
    }

    return(
        <span>
                <img src={props.url} className={style.images} onClick={() => openModal(props.url)}/>
                <img src={delete1} className={style.delete} onClick={() => props.deletedImages(props.id) }/>
            </span>
    )
}

export default imageTemplate