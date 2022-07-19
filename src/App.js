import './App.css';
import Table from "./Components/table";
import CurrentDate from "./Components/CurrentDate";
import imagesState from "./state/imagesState";
import {useState} from "react";
import Modal from "./Components/modal";


const App = () => {
    const [active, setActive] = useState(false)
    const [url, setUrl] = useState('')
    return (
        <div className='App'>
            <CurrentDate/>
            {active
                ? <Modal active={active} setActive={setActive} url={url}/>
                : <Table imagesState={imagesState} setActive={setActive} setUrl={setUrl}/>
            }

        </div>
    );
}

export default App;
