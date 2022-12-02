import React from "react";
import "./SearchBar.css";
const SearchBar = ({ UserInput, setUserInput, handleSubmit }) => {
  return (
    <div className="section-margins searchbar-container">
      <form>
        <input
          placeholder="https://........"
          value={UserInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleSubmit}>
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
