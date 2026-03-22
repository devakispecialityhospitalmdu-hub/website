import React,{ useState } from "react";
import "./tabs.css";

function List() {
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
          Arasaradi
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          East Veli
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Seva
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Sivakasi
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Virudhunagar
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>OUR CONSULTANT DOCTORS</h2>
          
          <p>
            Dr.S.Alagappan, M.D.R.D<br />
            Dr.K.Devaki, M.B.B.S, DMRD
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>OUR CONSULTANT DOCTORS</h2>
         
          <p>
          Dr.A.Kirubanithi, M.B.B.S, DMRD<br />
          Dr.K.Rajalakshmi, M.B.B.S, DMRD
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>OUR CONSULTANT DOCTORS</h2>
          
          <p>
            DR.A.Kirubanithi, MBBS, DMRD, DNB<br />
            DR.R.Ravi, MBBS, DMRD<br />
            DR.K.Vijayakumar, MBBS, DMRD(DNB)RD
          </p>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>OUR CONSULTANT DOCTORS</h2>
         
          <p>
          DR.Anandkumar, MBBS, DMRD
          </p>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <h2>OUR CONSULTANT DOCTORS</h2>
         
          <p>
          DR.A.Kirubanithi, MBBS, DMRD(DNB)
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default List;