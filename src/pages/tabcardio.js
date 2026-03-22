import React,{ useState } from "react";
import "./tabs.css";

function List2() {
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
        Chief Cardiothoracic Surgeon
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Interventional Cardiologists
        </button>
        
        
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>OUR CONSULTANT DOCTOR</h2>
          
          <p>
           DR.X.Reenus Demel., MS.Mch(CTS)
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>OUR CONSULTANT DOCTOR</h2>
         
          <p>
            DR.S.Balasubramanian., MD.DM<br />
            DR.M.Saravanan., MD.DM<br />
            DR.M.Basaldeen., MD.DM<br />
            DR.R.A.Janarthanan., MD.DM
          
          </p>
        </div>

      
      </div>
    </div>
    </>
  );
}

export default List2;