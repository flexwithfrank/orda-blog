/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, ShieldCheckIcon, XIcon } from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import { SignUpButton } from "../SignUpButton";

const headerConfig = [
  {
    name: "Products",
    submenu: [
      {
        name: "Ordering",
        icon: ShieldCheckIcon,
        description: "All you need for digital ordering",
        links: [
          {
            name: "Mobile app ordering",
            href: "#",
          },
          {
            name: "Self-service ordering",
            href: "#",
          },
          {
            name: "Kitchen Display System",
            href: "#",
          },
        ],
      },
      {
        name: "Marketing",
        icon: ShieldCheckIcon,
        description: "Reach new customers around you",
        links: [
          {
            name: "Promote Tools",
            href: "#",
          },
          {
            name: "Email & SMS Marketing",
            href: "#",
          },
          {
            name: "Marketing Services",
            href: "#",
          },
        ],
      },
      {
        name: "Support",
        icon: ShieldCheckIcon,
        description: "Your knowledge base for success",
        links: [
          {
            name: "Feedback",
            href: "#",
          },
          {
            name: "University",
            href: "#",
          },
          {
            name: "Talk To An Expert",
            href: "#",
          },
        ],
      },
    ],
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Login",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Header() {
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

  // useEffect(() => {
  //   show && (document.body.style.overflow = "hidden");
  //   !show && (document.body.style.overflow = "unset");
  // }, [show]);

  return (
    <Popover className="relative bg-darker-blue">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="/">
            <span className="sr-only">Orda logo</span>
            <img
              className="h-8 w-auto sm:h-12"
              src="/orda-logo-min.png"
              alt="Orda Logo"
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-trasparent rounded-md p-2 inline-flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-inset">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group
          as="nav"
          className="hidden md:flex md:items-center space-x-16"
        >
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    "group text-white rounded-md inline-flex items-center text-base font-medium px-2 py-2 sm:rounded-full hover:bg-header-hover-blue"
                  )}
                >
                  <span>Products</span>
                  <ChevronDownIcon
                    className="text-white ml-2 h-5 w-5 group-hover:text-white"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-4xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-3">
                        {headerConfig[0].submenu.map((column) => (
                          <div
                            key={column.name}
                            className="border-r border-gray-300 last:border-r-0"
                          >
                            <h2 className="text-4xl mb-3 font-medium flex items-baseline">
                              <column.icon className="h-6 w-6 mr-4 text-light-blue" />
                              {column.name}
                            </h2>
                            <p className="text-xs font-medium text-light-blue">
                              {column.description}
                            </p>
                            <ul className="space-y-6 mt-12 text-lg">
                              {column.links.map((link) => (
                                <li key={link.name}>
                                  <a
                                    className="group inline-flex items-center hover:bg-gray-hover hover: px-3 py-2 rounded-full"
                                    href={link.href}
                                  >
                                    {link.name}
                                    <ChevronRightIcon
                                      className="ml-2 h-5 w-5 text-white group-hover:text-darker-blue transition"
                                      aria-hidden="true"
                                    />
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          {headerConfig.slice(1).map((link) => {
            return (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white px-4 py-2 sm:rounded-full transition hover:bg-header-hover-blue"
              >
                {link.name}
              </a>
            );
          })}

          <SignUpButton />
        </Popover.Group>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="fixed z-10 top-0 overflow-y-scroll h-full inset-x-0 transition transform origin-top-right md:hidden"
        >
          <div className="ring-1 min-h-screen ring-black ring-opacity-5 bg-darker-blue">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between ">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/orda-logo-min.png"
                    alt="Orda logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-white">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  <button
                    className="-m-3 p-3 flex items-center border-b border-white"
                    onClick={() => setSubMenuIsOpen(!subMenuIsOpen)}
                  >
                    <div className="ml-4 text-base flex justify-between font-medium w-full text-white">
                      <p>Products</p>
                      {subMenuIsOpen ? (
                        <ChevronUpIcon
                          className="text-white h-7 w-7"
                          aria-hidden="true"
                        />
                      ) : (
                        <ChevronDownIcon
                          className="text-white h-7 w-7"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </button>
                  {subMenuIsOpen
                    ? headerConfig[0].submenu.map((column) => (
                        <div key={column.name} className="text-white">
                          <h2 className="text-xl font-medium flex items-baseline">
                            <column.icon className="h-6 w-6 mr-4" />
                            {column.name}
                          </h2>
                          <ul className="space-y-6 mt-6 text-base ml-10">
                            {column.links.map((link) => (
                              <li key={link.name}>
                                <a href={link.href}>{link.name}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    : null}
                  {headerConfig.slice(1).map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="-m-3 p-3 flex items-center border-b border-white"
                    >
                      <div className="ml-4 text-base font-medium text-white">
                        {link.name}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="mt-6 flex justify-center">
                <SignUpButton textColor="darker-blue" bgColor="white" />
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
