import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/searched/" + input);
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <FaSearch></FaSearch>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin: 0rem 2rem;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
