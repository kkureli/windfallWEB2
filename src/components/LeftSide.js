import React from "react";

const LeftSide = () => {
  return (
    <div
      style={{
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "column",
        width: "33.33%",
        alignItems: "center",
      }}
    >
      <div>
        <h3 style={{ color: "rgb(246,161,91)", textAlign: "center" }}>
          Anlık Takip Et
        </h3>
        <p
          style={{
            width: 250,
            fontWeight: "bold",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Mobil uygulamamızda, yapılan çekilişleri anlık olarak takip
          edebilirsiniz.
        </p>
      </div>
      <div>
        <h3 style={{ color: "rgb(246,161,91)", textAlign: "center" }}>
          Çekiliş Ekle
        </h3>
        <p
          style={{
            width: 250,
            fontWeight: "bold",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Kendi çekilişinizi ekleyebilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default LeftSide;
