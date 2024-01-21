import Hero from "../Hero";
import ScreenCard from "../shared/ScreenCard";

const Home = () => {
  const tasks = [
    {
      title: "Task 1",
      desc: "Form with validation",
      link:"screenone"
    },
    {
      title: "Task 2",
      desc: "Blockchain explorer",
        link:"screentwo"
    },
  ];
  return (
    <div className="pt-16 pb-12 min-h-screen w-full bg-hero-pattern bg-cover bg-no-repeat ">
      <Hero />
      <div className=" flex justify-center md:flex-row flex-col items-center md:items-start gap-8 pt-24">
        {tasks.map((task, index) => (
          <ScreenCard key={index} title={task.title} desc={task.desc} link={task.link} />
        ))}
      </div>
    </div>
  );
};

export default Home;
