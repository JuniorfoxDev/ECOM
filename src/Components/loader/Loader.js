import loaderImg from "../../assets/loader.gif";
import  "./Loader.css";
import  ReactDOM  from 'react-dom';
const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
        <div className="loader">
            <img src={loaderImg} alt="Loading....." />
        </div>
    </div>,
    document.getElementById("loader")
  )
}

export default Loader