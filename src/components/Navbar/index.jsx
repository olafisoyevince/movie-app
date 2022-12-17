import Logo from "../../assets/svg/Logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-center bg-black pt-[1rem] pb-[1.0888rem] md:pt-[2.5rem] md:pb-[2.5rem] lg:pl-[4.8125rem] lg:justify-start">
      <img src={Logo} alt="" />
    </div>
  );
};

export default Navbar;
