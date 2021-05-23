import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-">
        <div className="mt- flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/*Search */}

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow rflex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right*/}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div>
            <Image
              src="/images/colombiaflag.png"
              width={50}
              height={20}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
          {/* !session ? signIn : signOut le esta diciendo que al hacer click en iniciar sesion si no hay una cuenta que haga el signIn
           y los 2puntos : son el OTHERWISE es decir, si ya hay sesion entonces que haga signout */}
          <div
            onClick={!session ? signIn : signOut}
            className="cursor-pointer link"
          >
            <p className="hover:underline">
              {session ? `Hola, ${session.user.name}!` : "Hola! Inicia Sesión"}
            </p>
            <p className="font-extrabold md:text-sm ">Cuenta y Listas</p>
          </div>

          <div
            onClick={() => session && router.push("/orders")}
            className="cursor-pointer link"
          >
            <p>Devoluciones</p>
            <p className="font-extrabold md:text-sm ">y Pedidos</p>
          </div>

          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center "
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Carrito
            </p>
          </div>
        </div>
      </div>

      {/* Bottom nav */}

      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          Todo
        </p>
        <p className="link"> Prime Video </p>
        <p className="link"> Amazon para el trabajo </p>
        <p className="link"> Oferta del día </p>
        <p className="link hidden lg:inline-flex"> Electrónicos</p>
        <p className="link hidden lg:inline-flex"> Alimentos</p>
        <p className="link hidden lg:inline-flex"> Prime</p>
        <p className="link hidden lg:inline-flex"> Comprar de nuevo</p>
        <p className="link hidden lg:inline-flex"> Kit de compras</p>
        <p className="link hidden lg:inline-flex"> Salud y cuidado personal</p>
      </div>
    </header>
  );
}

export default Header;
