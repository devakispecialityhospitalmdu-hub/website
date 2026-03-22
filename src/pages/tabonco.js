import React,{ useState } from "react";
import "./tabs.css";

function List1() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         Radiation Oncologist
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Surgical Oncologist
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
         Medical Oncologist
        </button>
        
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>OUR CONSULTANT DOCTORS</h2>
          
          <p>
           DR.N.Rajaram., MD.RT<br />
            DR.T.Rethinesh Kumar., MD.RT<br />
            DR.v.s.Jeyaraman., MD.RT(DNB)RD
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>OUR CONSULTANT DOCTOR</h2>
         
          <p>
           Dr.M.Ramesh., MS.Mch
          
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>OUR CONSULTANT DOCTOR</h2>
          
          <p>
          Dr.T.Deenadayalan.,MD.DM
            
          </p>
        </div>
        
      </div>
    </div>
    </>
  );
}

export default List1;