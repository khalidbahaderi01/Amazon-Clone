import React from "react";

interface CardProps {
  gridNumber: number;
  itemsNumber: number;
}

const Card: React.FC<CardProps> = ({ gridNumber, itemsNumber }) => {

return (
    <>
      <div className="card">
        <p>
          <b>Gaming accessories</b>
        </p>
        <div
          className="GridBox"
          style={{ gridTemplateColumns: `repeat(${gridNumber}, 1fr)` }}
        >
          {itemsNumber == 1 ? (
            <div className="box">
              <img src="1.jpg" alt="" className="img" />
              <p>Headsets</p>
            </div>
          ) : itemsNumber == 2 ? (
            <div>
              <div className="box">
                <img src="2.jpg" alt="" className="img" />
                <p>Keyboards</p>
              </div>

              <div className="box">
                <img src="3.jpg" alt="" className="img" />
                <p>Computer mice</p>
              </div>
            </div>
          ) : itemsNumber == 3 ? (
            <div>
              <div className="box">
                <img src="2.jpg" alt="" className="img" />
                <p>Keyboards</p>
              </div>

              <div className="box">
                <img src="3.jpg" alt="" className="img" />
                <p>Computer mice</p>
              </div>

              <div className="box">
                <img src="4.jpg" alt="" className="img" />
                <p>Chairs</p>
              </div>
            </div>
          ) : (
            <div>
            <div className="box">
              <img src="1.jpg" alt="" className="img" />
              <p>Keyboards</p>
            </div>

            <div className="box">
              <img src="2.jpg" alt="" className="img" />
              <p>Computer mice</p>
            </div>

            <div className="box">
              <img src="3.jpg" alt="" className="img" />
              <p>Chairs</p>
            </div>

            <div className="box">
              <img src="4.jpg" alt="" className="img" />
              <p>Chairs</p>
            </div>

          </div>
          )}
        </div>
      </div>
    </>
  );

}

export default Card;