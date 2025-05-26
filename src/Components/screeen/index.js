import "./index.css";
import Learn from "../lLearn";
const Screen = () => {
  const data = [
    {
      name: "Levels",
      desc: "Three (13 pages)",
      icon: "https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_book_icon.png",
    },
    {
      name: "Duration",
      desc: "6-30 Months",
      icon: "https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_calendar_icon.png",
    },
    {
      name: "EXAMS",
      desc: "Quarterly",
      icon: "https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_exam_icon.png",
    },
    {
      name: "ExemPtions",
      desc: "Upto 9 Months",
      icon: "https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_calendar_icon.png",
    },
  ];
  return (
    <div>
      <div className="scre">
        {data.map((eachitem) => {
          return (
            <div className="icon">
              <div className="mana">
                <img src={eachitem.icon} alt="img" className="book" />
              </div>
              <div className="para">
                <h1>{eachitem.name}</h1>
                <h5>{eachitem.desc}</h5>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Learn />
      </div>
    </div>
  );
};
export default Screen;
