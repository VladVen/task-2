import style from './table.module.css'
import ImageTemplate from './ImageTemplate'
import React from "react";


const Table = (props) => {

    let imagesArray = []

    const deletedImages = (id) => {
        imagesArray.push(id)
    }


    let allImages = props.imagesState.map(items => <ImageTemplate
            url={items.url} key={items.id} id={items.id}
            setActive={props.setActive} setUrl={props.setUrl}
            deletedImages={deletedImages}/>)


    let imagesCount = allImages.length


    return (
        <div className={style.body}>
            <div className={style.imagesCount}>
                How many images : {imagesCount}
            </div>
            {allImages}
        </div>
    )
}

export default Table