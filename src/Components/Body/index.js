import "./index.css";

import Form from "../Form/Index";
const Body = () => {
  return (
    <div className="body">
      <div>
        <div>
          <h1>Become ACCA in 18 Months</h1>
          <p>
            Acquire globally recognized accountancy qualification, ACCA (also
            called as Global
          </p>
          <p className="ca">CA), and get placed in top MNCs & Big4s.</p>
        </div>
        <div className="button">
          <button style={{ backgroundColor: "blue", color: "white" }}>
            DOWNLOAD BROCHURE
          </button>
          <button className="silver">
            silver Learning Partner <span className="but"> ACCA</span>
          </button>
        </div>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Body;
