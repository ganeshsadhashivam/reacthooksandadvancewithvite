import React, { useState } from "react";

const Toggle = () => {
  const [showAlert, setShowAlert] = useState(true);

  //   const toggleAlert = () => {
  //     if (showAlert) {
  //       setShowAlert(false);
  //       return;
  //     }
  //   };

  return (
    <div>
      {/* <button className="btn" onClick={toggleAlert}> */}
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};

export default Toggle;
