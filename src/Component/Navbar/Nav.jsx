import profile from "../../assets/images/profile.png"

const Nav = () => {
  return (
    <div>
      <div className="flex justify-between lg:w-4/5 lg:mx-auto p-2 items-center border-b-2 pb-4">
         <h1 className="text-3xl lg:text-6xl font-bold">Knowledge Cafe</h1>
         <div>
            <img src={profile} alt="" />
         </div>
      </div>
    </div>
  );
};

export default Nav;