import axios from "axios";

const base_URL = "https://api.themoviedb.org/3";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjA5ZGQxZmZkMGY5MWI0MjE4YWRkN2JkOGViZjVlMyIsInN1YiI6IjY0YjZiMTYwMzc4MDYyMDBmZjNhODEwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YEzCXvUx2oWgN0_0WQkiZDERgv0IFk6TyzNgAx7tAzU";

const headers = {
  Authorization: "bearer " + API_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(base_URL + url, { headers, params });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
