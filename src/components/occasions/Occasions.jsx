import {useState} from "react";
import { useNavigate } from "react-router-dom";
import AllOcassionsDropDown from "../all-ocassions-drop-down/AllOcassionsDropDown";

const Occasions = () => {
  const navigate = useNavigate();
  const [openOcassions, setOpenOcassions] = useState(false)
  return (
    <div style={{ padding: "0 3rem", position:"relative" }}>
      <div className="parent-container-padding flex-between occasion-tab">
        <button className="occasions flex-between g-1" onClick={() => setOpenOcassions(!openOcassions)}>
          <p>Occasions</p>
          <i className="ri-arrow-down-s-line"></i>
        </button>
        <ul className="flex-between g-3">
          <li onClick={()=> navigate("/upload-card-cover-birthday")}>Birthday</li>
          <li onClick={()=> navigate("/upload-card-cover-annivasary")}>Annivasary</li>
          <li onClick={()=> navigate("/upload-card-cover-goodwill")}>Goodwill</li>
          <li onClick={()=> navigate("/upload-card-cover-festival")}>Festival</li>
          <li onClick={()=> navigate("/upload-card-cover-sympathy")}>Sympathy</li>
          <li onClick={()=> navigate("/upload-card-cover-love")}>Love</li>
          <li onClick={()=> navigate("/upload-card-cover-relationship")}>Relationship</li>
        </ul>
        <button className="occasions" onClick={() => navigate("/try-demo")}>
          Try Demo
        </button>
      </div>
      {openOcassions && <AllOcassionsDropDown /> }
      
    </div>
  );
};

export default Occasions;
