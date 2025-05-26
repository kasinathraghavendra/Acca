import "./index.css";
import LastForm from "../form2";

const Last = () => {
  return (
    <div className="kick">
      <div className="kickoff">
        <div>
          <h1 className="prep">
            Kick Off your ACCA preperation with Indigo Indigo Learn
          </h1>
          <p></p>
          <p className="ca">
            Signin and get instant access to our free courses.
          </p>
        </div>
        <div className="button">
          <button className="silver">
            silver Learning Partner <span className="but"> ACCA</span>
          </button>
        </div>
      </div>
      <div>
        <LastForm />
      </div>
    </div>
  );
};

export default Last;
