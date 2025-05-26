import "./index.css";
const Learn = () => {
  return (
    <div>
      <h1 className="you">what you Learn in ACAA ?</h1>
      <div className="row">
        <div className="first">
          <h1>3papers</h1>
          <h1>knowledge level</h1>
          <div className="second">
            <ul>
              <li>Business and Technology (BT)</li>
              <li>Management Accounting (MA)</li>
              <li>Financial Accounting (FA)</li>
            </ul>
          </div>
        </div>
        <div className="first">
          <h1>6papers</h1>
          <h1>skill level</h1>
          <div className="second">
            <ul>
              <li>Corporate and Business Law(LW) </li>
              <li>Performance Management (PM)</li>
              <li>TAXATION</li>
              <li>Financial Reporting (FR)</li>
              <li>Audit and Assurance (AA)</li>
              <li>Financial Management (FM)</li>
            </ul>
          </div>
        </div>
        <div className="first">
          <h1>4papers</h1>
          <h1>professional level</h1>
          <div className="second">
            <ul>
              <h4>Compulsory</h4>
              <li>SBL - Strategic Business Leader</li>
              <li>SBR - Strategic Business Reporting</li>
              <h4>Two out of the following </h4>
              <li>Advanced Financial Management (AFM)</li>
              <li>Advanced Performance Management (APM)</li>
              <li>Advanced Taxation (ATX)</li>
              <li>Advanced Audit and Assurance (AAA)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Learn;
