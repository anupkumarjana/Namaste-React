import React, { useState } from "react";
import datas from "../data/Data";
import Card from "./Card";


function Search() {
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);

  function handleSearch(e) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }
  //  const emptyResult = "";
  function handleClick() {
    const lowerCaseSearch = search.toLowerCase();
    const filteredProducts = datas.filter(
      (product) =>
        product.data.name.toLowerCase().includes(lowerCaseSearch) ||
        product.data.cuisines.map((cuisine) => cuisine.toLowerCase()).includes(lowerCaseSearch)
    );
    setSearchedData(filteredProducts);
    setButtonClick(!buttonClick);
    console.log(searchedData);
  }

  return (
    <div className="mt-40 flex justify-center items-center flex-col">
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="border rounded-lg w-[70%] px-10 py-5 outline-none text-zinc-700"
          placeholder="Search your favourites..."
          name="search"
          value={search}
          onChange={handleSearch}
        />
        <button
          className="px-10 py-5 border rounded text-zinc-700"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
      <div className=" flex gap-4 flex-row flex-wrap justify-center items-center my-10">
        {buttonClick && searchedData.length === 0 ? (
          <h2>No result found</h2>
        ) : (
          searchedData.map((product) => (
            <Card key={product.data?.id} {...product.data} />
          ))
        )}
        {/* <h2>{emptyResult}</h2> */}
      </div>
    </div>
  );
}

export default Search;

//   const [isSearch, setIsSearch] = useState("");

//   const [searchedFood, setSearchedFood] = useState([]);

//   function handleSearch(e) {
//     setIsSearch(e.target.value);
//     console.log(e.target.value);
//   }
//   function handleClick() {
//     const lowercaseSearch = isSearch.toLowerCase();
//     const filteredProducts = datas.filter(
//       (product) =>
//         product.data.name.toLowerCase().includes(lowercaseSearch) ||
//         product.data.cuisines
//           .map((cuisine) => cuisine.toLowerCase())
//           .includes(lowercaseSearch)
//     );
//     setSearchedFood(filteredProducts);
//   }

//   console.log(searchedFood);
