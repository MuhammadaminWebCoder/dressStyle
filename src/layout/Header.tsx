import { Link, useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from "../components/ui/alert";
import { PATH } from "../hooks/getPath";
import { ChevronDown, Chrome, CircleUser, EyeIcon, EyeOffIcon, Github, Instagram, LogOut, Search, ShoppingCart, X } from 'lucide-react';
import { Logo } from "../assets/icons";
import { Input } from "../components/ui/input";
import { UsePageType } from "../types/headerPathType";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import useAppStore from "../store";
import { toast } from "sonner";
import { useLogin } from "../services/postUser";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useAuthStore } from "../store/authStore";

const Header = () => {
  const usePages: UsePageType[] = [
    {
      id: 1,
      title: 'Shop',
      dropdown: [
        { id: 1, title: 'cazual', path: '/cazual' },
      ]
    },
    { id: 2, title: 'On Sale', path:'/#sale'},
    { id: 3, title: 'New Arrivals', path:'/#arrivals'},
    { id: 4, title: 'Brands', path:'/#brands'},
  ];

  const [handleOpenSearch, setHandleOpenSearch] = useState(false);
  const [alertClose, setAlertColse] = useState(false);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();
  const toggle = () => setIsOpen(!isOpen);
  const closeAlertHandler = () => setAlertColse(true);
  const useSetSearch = useAppStore(state => state.setSearchValue)
const handleSubmitSearch = (e:React.FormEvent<HTMLFormElement>) =>{
  e.preventDefault()
  useSetSearch(search)
  navigate('/cazual')
  setHandleOpenSearch(false)
  // ishlatimlayotganlarni olib tashlash,
  // full page bug fix and any fix
}

const [loginPassword, setLoginPassword] = useState<string>('') 
const [loginUsername, setLoginUsername] = useState<string>('')
const [validateUser, setValidateUser] = useState<null | boolean>(null)
const [validatePass, setValidatePass] = useState<null | boolean>(null)
const useAuth = useAuthStore((state) => state.user )
 const { mutate, isPending, isError, error } = useLogin()

const onHandleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
e.preventDefault()
  let isValid = true;
if (loginUsername.length <= 4) {
  setValidateUser(false);
  isValid = false;
} else {
  setValidateUser(true);
}
if (loginPassword.length <= 8) {
  setValidatePass(false);
  isValid = false;
} else {
  setValidatePass(true);
}
if (isValid) {
  mutate({
    username: loginUsername,
    password: loginPassword
  });
  
  toast.success("Product added to cart", { description: `Success logIn enter` });
}} 
const [open, setOpen] = useState(false);
const logout = useAuthStore.getState().logout;

const handleOnLogOut = () => {
  setTimeout(() => {
  logout();
}, 200);
  setOpen(false);
}
const [showPassword, setShowPassword] = useState(false) 
  return (
    <>
      <Alert className={`w-full bg-black py-2 flex rounded-none border-0 ${alertClose == true ? 'hidden' : ''}`}>
        <div className="container mx-auto flex relative max-sm:text-[10px] text-white justify-center">
          <AlertTitle>
            Sign up and get 20% off to your first order.
            <button className="underline cursor-pointer ms-2" onClick={() => setOpen(true)}>Sign Up Now</button>
          </AlertTitle>
          <X onClick={closeAlertHandler} className="cursor-pointer max-sm:hidden absolute right-0" />
        </div>
      </Alert>
    <div className="header sticky top-0 z-50 bg-white w-full py-5">
      <div>
        <div className="container max-md:px-4 lg:gap-5 justify-between flex items-center">

          <div className="flex items-center gap-4">
            <div onClick={toggle} className="md:hidden w-6 h-4 flex flex-col justify-between items-center cursor-pointer group">
              <span className={`w-full  h-0.5 bg-black rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5 mt-[1px]" : ""}`} />
              <span className={`w-full h-0.5 bg-black rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full  h-0.5 bg-black rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5 mb-[1px]" : ""}`} />
            </div>
            <Link to={PATH.home}><Logo /></Link>
          </div>

          <ul className="hidden md:flex lg:mx-3 relative">
            {usePages.map((item) => (
              <li key={item.id} className="relative h-[40px] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full flex items-center group mx-2">
                {item.path ? <a href={item.path}>{item.title}</a> : item.title}
                {item.dropdown && (
                  <>
                    <ChevronDown size={16} className="ms-1 mt-1 transition-transform duration-300 ease-in-out group-hover:rotate-180" />
                    <ul className="absolute left-0 top-10 hidden group-hover:block w-[170px] bg-white border shadow-lg rounded p-2 z-10">
                      {item.dropdown.map((drop) => (
                        <li key={drop.id} className="p-1 hover:text-blue-500">
                          {drop.path && <Link to={drop.path}>{drop.title}</Link>}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center relative gap-2">
            <form onSubmit={(e) => handleSubmitSearch(e)} className="bg-slate-200 max-[505px]:hidden mx-2 relative rounded-full">
              <Input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="md:w-[200px] lg:w-[400px] xl:w-[577px] rounded-full !ps-10 !h-[48px]"
                placeholder="Search for products..."
              />
              <Search className="absolute left-3 top-3.5 w-5" />
            </form>
            
            <Search onClick={() => setHandleOpenSearch(true)} className="left-3 min-[505px]:hidden top-3.5 w-5 cursor-pointer" />
            <Link to={PATH.shoping}><ShoppingCart /></Link>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTitle>
                <DialogTrigger onClick={() => setOpen(true)} asChild>
                {useAuth == null ? <CircleUser className="cursor-pointer" /> : <div className="rounded-full w-8 h-8 cursor-pointer bg-black text-white font-bold capitalize flex items-center justify-center border">{useAuth.username.split("")[0]}</div>}
              </DialogTrigger>
              </DialogTitle>
              <DialogContent className={`sm:max-w-[425px] grid max-[380px]:grid-cols-1 pt-9 ${useAuth == null ? 'grid-cols-2' : 'grid-cols-1'} `}>
                {useAuth == null ? <><form onSubmit={onHandleSubmit} className="flex flex-col space-y-2">
                  <Input onChange={(e)=> setLoginUsername(e.target.value)} value={loginUsername} className={`w-full ${validateUser  ? 'border-green-500': validateUser == false && 'border-red-500'}`} placeholder="username"/>
                <div className="relative">
                  <Input  
                  onChange={(e)=> setLoginPassword(e.target.value)}
                  value={loginPassword}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className={`pr-10 ${validatePass  ? 'border-green-500': validatePass == false && 'border-red-500'}`}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute cursor-pointer bottom-1 right-1 h-7 w-7"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                    <span className="sr-only">Toggle password visibility</span>
                  </Button>
                </div>
                <Button className="w-full cursor-pointer">Ok</Button>
                </form>
                <hr className="max-[380px]:block hidden" /> 
                <div className="space-y-2">
                  <Button className="w-full bg-black text-white flex gap-2 items-center"><Github size={18}/> GitHub</Button>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white flex gap-2 items-center"><Instagram size={18}/> Instagram</Button>
                  <Button className="w-full bg-white text-black border flex gap-2 items-center"><Chrome size={18}/> Google</Button>
                </div></> : <div className="w-full">
                    <p className="flex items-center justify-center text-2xl font-bold my-3">username: {useAuth?.username}</p>
                    <p className="flex items-center justify-center text-2xl font-bold my-3">password: {useAuth?.password}</p>
                    <DialogDescription><Button onClick={handleOnLogOut} className="mx-auto cursor-pointer flex bg-red-500"><LogOut/> Log out</Button></DialogDescription>
                  </div>}
              </DialogContent>
            </Dialog>
          </div>
          <form onSubmit={(e) => handleSubmitSearch(e)} className={`bg-slate-200 ${handleOpenSearch ? 'max-[505px]:flex' : 'hidden'} absolute w-[70vw] top-20 transform -translate-x-[50%] left-[50%] rounded-full z-50`}>
              <Input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="md:w-[200px] lg:w-[400px] xl:w-[577px] rounded-full !ps-10 !h-[48px]"
                placeholder="Search for products..."
              />
              <Search className="absolute left-3 top-[50%] transform -translate-y-1/2 w-5" />
              <X className="absolute right-3 top-[50%] transform -translate-y-1/2 w-5 cursor-pointer" onClick={() => setHandleOpenSearch(false)} />
            </form>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-20 max-[506px]:top-18 border w-full bg-white z-50 flex flex-col gap-4 p-6 ">
          
          <ul className="flex flex-col gap-3">
            {usePages.map((item) => (
              <li key={item.id}>
                {item.path ? (
                  <Link to={item.path} onClick={toggle} className="text-gray-800 hover:text-blue-500 block">{item.title}</Link>
                ) : (
                  <div>
                    <p className="text-gray-800 flex">{item.title} <ChevronDown size={16} className="ms-1 mt-1 transition-transform duration-300 ease-in-out group-hover:rotate-180" /></p>
                      <ul className="absolute left-6 top-12 hidden group-hover:block w-[170px] bg-white border shadow-lg rounded p-2 z-10">
                        
                        {item?.dropdown?.map((drop) => (
                          <li key={drop.id} className="p-1 hover:text-blue-500">
                          {drop.path && <Link to={drop.path}>{drop.title}</Link>}

                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
};

export default Header;
