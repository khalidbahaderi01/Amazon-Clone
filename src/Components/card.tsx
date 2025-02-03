interface gridParam {
  num: number;
  gridnum: number;
}

export default function Card({ gridParam }: { gridParam: gridParam }) {
  return (
    <>
      <div className="card">
        <p>
          <b>Gaming accessories</b>
        </p>
        <div
          className="GridBox"
          style={{ gridTemplateColumns: `repeat(${gridParam}, 1fr)` }}
        >
          {gridParam == 1 ? (
            <div className="box">
              <img src="1.jpg" alt="" className="img" />
              <p>Headsets</p>
            </div>
          ) : gridParam == 2 ? (
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
          ) : gridParam == 3 ? (
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
