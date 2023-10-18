import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { upCount } from "../utils/slices/user";

const Home = () => {
  const a = useSelector((store) => store.User);
  const dispatch = useDispatch();
  console.log(a);
  return (
    <div>
      Home
      <button
        onClick={(e) => {
          dispatch(upCount());
        }}
      >
        COUNT
      </button>
    </div>
  );
};

export default Home;
