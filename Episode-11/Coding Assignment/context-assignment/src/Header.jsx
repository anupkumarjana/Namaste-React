import { useContext } from "react";
import { UserContext } from "./UserContext";

export const Header = () => {
  const { defaultUser } = useContext(UserContext);
  //   console.log(data);
  return (
    <div className="App px-40 py-4 flex justify-between items-center bg-slate-300">
      <div>
        <h1 className="font-bold text-2xl text-red-600">Logo</h1>
      </div>
      <div>
        <ul className="flex gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>{defaultUser}</li>
        </ul>
      </div>
    </div>
  );
};
