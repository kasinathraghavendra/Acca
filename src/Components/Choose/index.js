import "./index.css";

const Choose = () => {
  const data = [
    {
      image: "https://www.indigolearn.com/media/images/ca_concept.png",
      name: "Expert Faculty",
      para: "Our qualified Faculty with significant practical experience guide students every step of the way",
    },
    {
      image: "https://www.indigolearn.com/media/images/ca_top_faculties.png",
      name: "Complete Success Package",
      para: "Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, MCQs, Practice tests, Webinars",
    },
    {
      image: "https://www.indigolearn.com/media/images/placement.png",
      para: "Resume building workshops, mock interviews and placement drives will help you impress the top employers and get your Dream Job.",
      name: "Placements",
    },
  ];
  return (
    <div>
      <h1 className="Choose">WHY CHOOSE US ? </h1>
      <div className="place">
        {data.map((each) => {
          return (
            <div className="download">
              <img src={each.image} alt="image" className="placeimage" />

              <button className="now">{each.name}</button>
              <p className="expert">{each.para}</p>
            </div>
          );
        })}
      </div>
      <button className="enrol">Enroll now</button>
    </div>
  );
};
export default Choose;
