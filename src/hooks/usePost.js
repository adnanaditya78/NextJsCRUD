import axios from "axios";
import { useState } from "react";

// hooks: "useXXXX"
export default function usePost() {
  const [loading, setLoading] = useState();

  const post = async (url, body) => {
    setLoading(true);
    await axios.post(`https://api-bootcamp.do.dibimbing.id/api/v1${url}`, body, {
      headers: {
        "Content-Type": " application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
      },
    });
    setLoading(false);
  };

  return { post, loading };
}
