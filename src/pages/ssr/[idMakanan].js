import axios from "axios";
import FoodForm from "@/components/FoodForm";
import usePost from "@/hooks/usePost";
import FoodLayout from "@/layout/FoodLayout";

export async function getServerSideProps(context) {
  const resp = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.idMakanan}`,
    {
      headers: {
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        kataKunci: "Kopi enak bikin kembung",
      },
    }
  );

  return { props: { food: resp.data.data } };
}

export default function FoodDetailPage({ food }) {
  const { loading, post } = usePost();

  const handleUpdateFood = async ({
    name,
    imageUrl,
    description,
    ingredients,
  }) => {
    try {
      await post(`/update-food/${food.id}`, {
        name,
        imageUrl,
        description,
        ingredients,
      });
    } catch (error) {}
  };

  return (
    <FoodLayout>
      <div className="flex flex-col items-center">
        <img src={food?.imageUrl} className="w-64 aspect-w-1 aspect-h-1 mb-4" />
        <h1 className="text-xl font-bold mb-2 text-black">{food?.name}</h1>
        <p className="text-gray-700 mb-4">{food?.description}</p>
        <p className="text-lg font-semibold mb-2 text-black">
          Price: ${food?.price}
        </p>
        <FoodForm
          title={`Update ${food.name}`}
          defaultNama={food.name}
          defaultUrlGambar={food.imageUrl}
          defaultDeskripsi={food.description}
          defaultIngredients={food.ingredients}
          loading={loading}
          onSubmitFood={handleUpdateFood}
        />
      </div>
    </FoodLayout>
  );
}
