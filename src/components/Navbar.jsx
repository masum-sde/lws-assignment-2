
import DineLogoIcon from '../assets/logo.svg'
import UserIcon from '../assets/user-icon.svg'
const Navbar = () => {
  return (
    <nav class="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center">
      <div class="flex items-center ">
        <div class="text-primary mr-2">
          <img src={DineLogoIcon}/>
        </div>
        <h1 class="text-2xl font-bold">
          <span class="text-primary">Dine</span>Out
        </h1>
      </div>
      <div class="flex items-center">
        <img src={UserIcon} class="h-10" />
      </div>
    </nav>
  );
};

export default Navbar;
