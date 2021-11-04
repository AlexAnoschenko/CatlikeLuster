import { FC } from "react";
import "./styles.css";

const Landing: FC = () => {
  return (
    <div className="main">
      <div
        style={{
          paddingTop: "15vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="https://i.ibb.co/J7WRPdw/big-logo.png"
            alt="big-logo"
            style={{ width: 100 }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: 46,
          }}
        >
          <h1 className="title">CATLIKE</h1>
          <h1 className="title-end">LUSTER</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h2 style={{ width: 351, borderTop: "1px solid black" }}>
            ПИТОМНИК БЕНГАЛЬСКИХ КОШЕК
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
