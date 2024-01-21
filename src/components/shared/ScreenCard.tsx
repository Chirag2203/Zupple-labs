import { Tilt } from "react-tilt";
import {Link} from "react-router-dom";
const ScreenCard = ({
  title,
  desc,
  link,
}: {

  title: string;
  desc: string;
  link: string;
}) => {
  return (
    <Link to={link}>
    <Tilt className=" rounded-md w-64  " >
      <div className="glass rounded-md h-[200px] py-12 px-4 flex flex-col items-center gap-4">
        
          <div className="text-xl font-bold">{title}</div>
          <div className="text-lg text-center">{desc}</div>
        
      </div>
    </Tilt>
    </Link>
  );
};

export default ScreenCard;
