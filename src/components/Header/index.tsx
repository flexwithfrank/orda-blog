/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { Button } from "../Button"

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
    href: "#",
  },
  {
    name: "Login",
    href: "#",
  },
]

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
  {
    name: "Reports",
    description:
      "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: DocumentReportIcon,
  },
]
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function Header() {
  return (
    <Popover className="relative bg-darker-blue">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Orda logo</span>
            <img className="h-8 w-auto sm:h-10" src="/logo.png" alt="" />
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
          className="hidden md:flex md:items-center space-x-20"
        >
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "text-gray-200" : "text-white",
                    "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  )}
                >
                  <span>Products</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "text-white" : "text-white",
                      "ml-2 h-5 w-5 group-hover:text-white"
                    )}
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
                            <ul className="space-y-6 mt-12 text-xl">
                              {column.links.map((link) => (
                                <li key={link.name}>
                                  <a href={link.href}>{link.name}</a>
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

          <a
            href="#"
            className="text-base font-medium text-white hover:text-gray-200"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-base font-medium text-white hover:text-gray-200"
          >
            Blog
          </a>
          <a
            href="#"
            className="whitespace-nowrap text-base font-medium text-white hover:text-gray-200"
          >
            Login
          </a>
          <Button />
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
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/logo.png" alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white">
                        <solution.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {solution.name}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Blog
                </a>

                {resources.map((resource) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-white">
                  Existing customer?{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
