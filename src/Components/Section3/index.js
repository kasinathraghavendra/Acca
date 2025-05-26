import "./index.css";
import Last from "../Last";
const Card = () => {
  return (
    <>
      <div>
        <div className="Placement">
          <h2>100% Placement assistance </h2>
          <div className="counselling">
            <div className="build">
              <h1>Resume Building</h1>
              <p className="guide">
                1FIN provides professional guidance to help you create an
                effective resume to help you create a lasting impression
              </p>
            </div>
            <div className="build">
              <h1>Career Counselling</h1>
              <p className="guide">
                We provide career counselling to conducting mock interviews and
                aptitude tests – we will assist you at every step, all the way,
                we make you job ready
              </p>
            </div>
            <div className="build">
              <h1>Jobs</h1>
              <p className="guide">
                We will give you an edge over others with our direct corporate
                affiliations which will ensure that you are placed right.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Last />
        </div>
      </div>
    </>
  );
};
export default Card;
