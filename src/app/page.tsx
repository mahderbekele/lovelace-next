"use client"
import Image from "next/image";
import Link from "next/link";
import useFetchUsers from "./hooks/useFetchUsers";

export default function Home() {

  const {users, loading, error} = useFetchUsers()

return (
<div>
  <h1 className="text-green-900 text-[50px]">Intro to Next.js</h1>
  <p>We are learning TypeScript and Tailwind.css</p>
  <Link href={"/about"}>About us</Link>
  <div>
    {loading && <h3>Loading..</h3>}
    {error && <h3>{error}</h3>}
    <div className="grid grid-cols-5 ml-25 border border-none w-430 bg-red-200 px-30">
      {users?.map(user=>(
        <div key={user.id} className="border border-none bg-black-500">
          <img alt={user.id + "image"} src={user.image} width={200} height={200}/>
          <h3>First name: {user.firstName}</h3>
          <h3>Last name: {user.lastName}</h3>
          <h3>Username: {user.userName}  </h3>
          <h3>Age: {user.age}</h3>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
}