import React from "react";
import "./home.css";

export const Home = () => {

  const crysos = () => {
    window.location.href = "/crysos";
  };

  const desserte = () => {
    window.location.href = "/desserte";
  };
  const res = () => {
    window.location.href = "/res";
  };

  const toon = () => {
    window.location.href = "/toon";
  };

  const thjerrza = () => {
    window.location.href = "/thjerrza";
  };

  return (
    <div className="agents col2">
      <div className="agent agents1 " onClick={() => crysos("/crysos")}>
        <h5 className="h5Vl gradtext">Crysos</h5>
      </div>

      <div className="agent agents2 " onClick={() => desserte("/desserte")}>
        <h5 className="h5Vl gradtext">desserte</h5>
      </div>

      <div className="agent agents3 " onClick={() => res("/res")}>
        <h5 className="h5Vl gradtext">Res</h5>
      </div>

      <div className="agent agents4 " onClick={() => toon("/toon")}>
        <h5 className="h5Vl gradtext">TooN</h5>
      </div>

      <div className="agent agents5 " onClick={() => thjerrza("/thjerrza")}>
        <h5 className="h5Vl gradtext">Thjerrza</h5>
      </div>
    </div>
  );
};
