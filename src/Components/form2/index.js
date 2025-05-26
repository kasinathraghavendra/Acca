import "./index.css";
const LastForm = () => {
  return (
    <div className="form">
      <h3>Aspiring to be an ACAA ? Get in Touch with us </h3>
      <br />
      <form type="submit" className="Submit">
        <div>
          <input type="text" placeholder="Name" />
        </div>
        <br />
        <div>
          <input type="text" placeholder="Email" />
        </div>
        <br />
        <div>
          <input type="text" placeholder="Mobile number" />
        </div>
        <br />
        <button className="sub">Request Calllback</button>
      </form>
    </div>
  );
};
export default LastForm;
