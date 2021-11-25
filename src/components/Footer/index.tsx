import { SignUpButton } from "../SignUpButton";

const navigation = {
  LinkCol: [
    {
      name: "Resources",
      links: [
        { name: "Mobile App Ordering", href: "#" },
        { name: "Self-Service Kiosk", href: "#" },
        { name: "Kitchen Display System", href: "#" },
        { name: "Promote Tools", href: "#" },
        { name: "Marketing", href: "#" },
        { name: "Blog", href: "/blog" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      name: "Hello",
      links: [
        { name: "Chat", href: "#" },
        { name: "Email Us", href: "#" },
        { name: "Text Us", href: "#" },
        { name: "Support", href: "#" },
      ],
      address: "199 Orchard St.",
      addressComplement: "New York, 10002",
    },
    {
      name: "Support",
      links: [
        { name: "Feedback", href: "#" },
        { name: "University", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ],
    },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Linkedin",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"></path>
        </svg>
      ),
    },
    {
      name: "Youtube",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z"></path>
        </svg>
      ),
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-darker-blue" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          <div className="space-y-8 md:col-span-1">
            <img className="h-10" src="/logo.png" alt="Orda Logo" />
            <SignUpButton bgColor="white" textColor="darker-blue" />
          </div>

          {navigation.LinkCol.map((item) => (
            <div key={item.name} className="mt-10 sm:mt-0 md:col-span-1">
              <div>
                <h3 className="text-4xl font-semibold text-white tracking-wider">
                  {item.name}
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {item.links.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-lg text-white hover:text-light-blue"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-lg mt-4 text-white">{item.address}</p>
                <p className="text-lg mt-4 text-white">
                  {item.addressComplement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-0 sm:mt-12 border-t border-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center sm:inline-grid sm:grid-cols-4 sm:gap-8 sm:place-items-center w-full">
            <p className="col-start-2 col-span-2 text-base text-white xl:text-center">
              &copy; Get Orda, 2021. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-8 sm:mt-0 mx-auto sm:mr-auto col-start-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-200 ease-in-out duration-150"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
