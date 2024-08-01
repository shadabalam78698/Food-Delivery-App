import React from "react";

export default function Card({ imageSrc }) {
  return (
    <div>
      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={imageSrc} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">Fast Food</h5>
          <p className="card-text">Best quality and taste</p>
          <div className="container w-100 p-0" style={{ height: "38px" }}>
            <select
              className="m-2 h-100 w-20 bg-success text-black rounded"
              style={{ select: "#FF0000" }}
            >
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }}>
              <option value='half'>Half</option>
              <option value='full'>Full</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
