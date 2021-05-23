import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function success() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div claaName="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3l">¡Gracias, su orden ha sido confirmada!</h1>
          </div>
          <p>
            Gracias por hacer un test de compra! esto me ayuda a mejorar en mis
            habilidades como desarrolladora, a hacer presencia del talento
            Colombiano y tener oportunidad de romper la brecha de género en el
            campo de STEM! 🤓
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Regresa a compras
          </button>
        </div>
      </main>
    </div>
  );
}

export default success;
