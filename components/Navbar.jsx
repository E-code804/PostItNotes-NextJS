import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-black to-orange-500 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Erik Pfeffer
      </Link>
      <Link className="bg-white p-2 rounded" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
    // <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
    //   <Link className="text-white font-bold" href={"/"}>
    //     Erik Pfeffer
    //   </Link>
    //   <Link className="bg-white p-2" href={"/addTopic"}>
    //     Add Topic
    //   </Link>
    // </nav>
  );
};

export default Navbar;
