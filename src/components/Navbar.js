const Navbar = () => {
  return <div className="flex justify-between items-center py-4 mx-auto w-4/5">
    <div className="font-semibold text-gray-400 text-4xl">Pomodoro 🍅</div>
    <div className="hover:scale-110 hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 21z" fill="rgba(255,255,255,1)"/></svg></div>
  </div>;
};
export default Navbar;