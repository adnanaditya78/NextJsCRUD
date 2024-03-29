import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFoods = async () => {
      setLoading(true);
      try {
        const resp = await axios.get(
          "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
          {
            headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
          }
        );

        setData(resp.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    getFoods();
  }, []);

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(
        `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${id}`,
        {
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
          },
        }
      );
      setData(data.filter((food) => food.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
    setLoading(false);
  };

  if (loading) return <div>Loading . . .</div>;

  return (
    <div>
      <Header />
      <div className="space-y-8">
        {data.map((food) => (
          <div key={food.id}>
            <img src={food.imageUrl} className="w-64 aspect-video" />
            <h1 className="text-xl font-bold mb-2">{food?.name}</h1>
            <p className="text-white mb-4">{food?.description}</p>
            <button
              onClick={() => handleDelete(food.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
