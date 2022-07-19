import style from './table.module.css'
import ImageTemplate from './ImageTemplate'
import React, {useEffect, useState} from "react";


const Table = (props) => {

    const [images, setImages] = useState([])

    const deletedImages = (id) => {
        setImages([...images,{id}])
    }
    let result1 = images.map(id=>id)
    let result = props.imagesState.filter(e=>result1.findIndex(i=>i.id == e.id) === -1);



    let allImages = result.map(items => <ImageTemplate
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