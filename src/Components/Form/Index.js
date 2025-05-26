import "./index.css";
const Form = () => {
  return (
    <div className="form">
      <h3>Aspiring to be an ACAA ?</h3>
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
        <button className="sub">submit</button>
      </form>
    </div>
  );
};
export default Form;
