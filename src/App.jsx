import { Navbar } from "./components";
import { DineBoard } from "./composites";

const App = () => {
  return (
    <div className="text-white bg-background">
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Navbar/>
        <DineBoard/>
      </div>
    </div>
  );
};

export default App;
