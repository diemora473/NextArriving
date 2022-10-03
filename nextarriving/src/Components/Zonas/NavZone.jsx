import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo2 from '../Img/logo2.png'
import { Link } from "react-router-dom";

export default function NavZone() {
    return (
        <div class="drawer absolute ">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar nav  ">
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>
                        </label>
                    </div>
                    <div className="flex flex-shrink-0 items-center flex justify-center md:px-10  px-20">
                    <Link to='/'>
                        <img
                            className="block h-12 w-auto lg:hidden"
                            src={logo2}
                            alt="Your Company"
                            />
                            </Link>
                        <div>

                            <Link to='/'>
                                <img
                                    className="hidden h-8 w-auto lg:block flex-1 px-2 mx-2"
                                    src={logo2}
                                    alt="Your Company"
                                />
                            </Link>
                        </div>
                    </div>
                    <div class="flex-none hidden lg:block pl-72">

                        <div class="navbar nav bg-base-100  top-0  pl-96">
<Link to='/'>
                            <div class="flex-none pr-5 text-white">
                                <div class="btn btn-ghost normal-case text-lg hover:bg-orange-500 rounded-full ">Home</div>
                            </div>
 </Link>
                            <div class="flex-none pr-5 text-white">
                                <div class="btn btn-ghost normal-case text-lg rounded-full  hover:bg-orange-500">Servicios</div>
                            </div>
                            <div class="flex-none  text-white">
                                <div class="btn btn-ghost normal-case text-lg rounded-full  hover:bg-orange-500">Contactos</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    <li><div className='bg-orange-400 text-white'>Sidebar Item 1</div></li>
                    <li><div>Sidebar Item 2</div></li>


                </ul>
            </div>
        </div>
    )
}