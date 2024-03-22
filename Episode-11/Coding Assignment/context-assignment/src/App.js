import { useContext } from "react";
import { Header } from "./Header";
import { UserContext } from "./UserContext";
import Card from "./Card";

function App() {
  const { defaultUser } = useContext(UserContext);
  return (
    <>
      <UserContext.Provider value={{ defaultUser }}>
        <Header />
      </UserContext.Provider>
      <div className="flex gap-10 flex-wrap">
        <UserContext.Provider value={{ defaultUser: "Arpita" }}>
          <Card />
          <Card />
        </UserContext.Provider>
      </div>
      <UserContext.Provider value={{ defaultUser: "Bholu" }}>
        <Card />
        <Card />
      </UserContext.Provider>
    </>
  );
}

export default App;
