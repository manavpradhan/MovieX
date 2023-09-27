import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./style.scss";

const Genres = ({ data }) => {
  const { genre } = useSelector((state) => state.home);
  return (
    <div className="genres">
      {data?.map((id) => {
        if (!genre[id]?.name) return;

        return (
          <div key={id} className="genre">
            {genre[id]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
