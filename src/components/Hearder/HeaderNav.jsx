import { Fragment, useState } from "react";
import { Dialog, Menu, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "@mui/material";

const navigation = {
  categories: [
    {
      id: "Nike",
      name: "Nike",
      featured: [
        {
          name: "New Nike",
          href: "#",
          imageSrc:
            "https://giaysneaker.store/media/magefan_blog/hinh-anh-moi-nhat-cua-doi-giay-sneaker-nike-air-force-1-react-mid-grey-1.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Nike",
          href: "#",
          imageSrc:
            "https://kingshoes.vn/data/upload/media/849560-007-giay-nike-air-max-2017-gia-tot-den-king-shoes-1.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "Women",
          name: "Women",
          items: [
            { name: "Giày Nike Nữ Thời Trang", href: "#" },
            { name: "Giày Nike Nữ Chạy Bộ", href: "#" },
            { name: "Giày Nike Nữ Luyện Tập", href: "#" },
        
          ],
        },
        {
          id: "Men",
          name: "Men",
          items: [
            { name: " Giày Nike Nam Thời Trang", href: "#" },
            { name: " Giày Nike Nam Chạy Bộ", href: "#" },
            { name: " Giày Nike Nam Luyện Tập", href: "#" },
            { name: " Giày Nike Nam Bóng Rổ", href: "#" },
            { name: " Giày Nike Nam Bóng Đá", href: "#" },
          ],
        },
      ],
    },
    {
      id: "Adidas",
      name: "Adidas",
      featured: [
        {
          name: "New Adidas",
          href: "#",
          imageSrc:
            "https://media.karousell.com/media/photos/products/2022/4/10/bnib_authentic_adidas_ultraboo_1649593866_55fe4efe_progressive.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Adidas",
          href: "#",
          imageSrc:
            "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Giay_Co_Thap_Forum_trang_FY7756_01_standard.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "Women",
          name: "Women",
          items: [
            { name: "Giày Adidas Nữ Thời Trang", href: "#" },
            { name: "Giày Adidas Nữ Chạy Bộ", href: "#" },
            { name: "Giày Adidas Nữ Luyện Tập", href: "#" },
        
          ],
        },
        {
          id: "Men",
          name: "Men",
          items: [
            { name: " Giày Adidas Nam Thời Trang", href: "#" },
            { name: " Giày Adidas Nam Chạy Bộ", href: "#" },
            { name: " Giày Adidas Nam Luyện Tập", href: "#" },
            { name: " Giày Adidas Nam Bóng Rổ", href: "#" },
            { name: " Giày Adidas Nam Bóng Đá", href: "#" },
          ],
        },
      ],
    },
    {
      id: "Jordan",
      name: "jordan",
      featured: [
        {
          name: "New Jordan",
          href: "#",
          imageSrc:
            "https://sneakernews.com/wp-content/uploads/2021/01/air-jordan-35-cny-chinese-new-year-DD2234-001-5.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Shoes",
          href: "#",
          imageSrc:
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/24750e81-85ed-4b0e-8cd8-becf0cd97b2f/air-jordan-1-mid-shoes-7cdjgS.png",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "Women",
          name: "Women",
          items: [
            { name: "Giày Jordan Nữ Thời Trang", href: "#" },
            { name: "Giày Jordan Nữ Chạy Bộ", href: "#" },
            { name: "Giày Jordan Nữ Luyện Tập", href: "#" },
        
          ],
        },
        {
          id: "Men",
          name: "Men",
          items: [
            { name: " Giày Jordan Nam Thời Trang", href: "#" },
            { name: " Giày Jordan Nam Chạy Bộ", href: "#" },
            { name: " Giày Jordan Nam Luyện Tập", href: "#" },
            { name: " Giày Jordan Nam Bóng Rổ", href: "#" },
            { name: " Giày Jordan Nam Bóng Đá", href: "#" },
          ],
        },
      ], 
    },
    {
      id: "YeeZy",
      name: "YeeZy",
      featured: [
        {
          name: "New YeeZy",
          href: "#",
          imageSrc:
            "https://cdn.24.co.za/files/Cms/General/d/1875/c9d604fa43f14bc3bae27cbd5fc0b6bc.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Shoes",
          href: "#",
          imageSrc:
            "https://giaygiare.vn/upload/sanpham/large/adidas-yeezy-boost-350-v2-bone-ra-mat-21-03-2022.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "Women",
          name: "Women",
          items: [
            { name: "Giày YeeZy Nữ Thời Trang", href: "#" },
            { name: "Giày YeeZy Nữ Chạy Bộ", href: "#" },
            { name: "Giày YeeZy Nữ Luyện Tập", href: "#" },
        
          ],
        },
        {
          id: "Men",
          name: "Men",
          items: [
            { name: " Giày YeeZy Nam Thời Trang", href: "#" },
            { name: " Giày YeeZy Nam Chạy Bộ", href: "#" },
            { name: " Giày YeeZy Nam Luyện Tập", href: "#" },
            { name: " Giày YeeZy Nam Bóng Rổ", href: "#" },
            { name: " Giày YeeZy Nam Bóng Đá", href: "#" },
          ],
        },
      ],
    },
    {
      id: "Other Brands",
      name: "Other Brands",
      featured: [
        {
          name: "New Nike",
          href: "#",
          imageSrc:
            "https://giaysneaker.store/media/magefan_blog/hinh-anh-moi-nhat-cua-doi-giay-sneaker-nike-air-force-1-react-mid-grey-1.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Shoes",
          href: "#",
          imageSrc:
            "https://kingshoes.vn/data/upload/media/849560-007-giay-nike-air-max-2017-gia-tot-den-king-shoes-1.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "Women",
          name: "Women",
          items: [
            { name: "Giày Nike Nữ Thời Trang", href: "#" },
            { name: "Giày Nike Nữ Chạy Bộ", href: "#" },
            { name: "Giày Nike Nữ Luyện Tập", href: "#" },
        
          ],
        },
        {
          id: "Men",
          name: "Men",
          items: [
            { name: " Giày Nike Nam Thời Trang", href: "#" },
            { name: " Giày Nike Nam Chạy Bộ", href: "#" },
            { name: " Giày Nike Nam Luyện Tập", href: "#" },
            { name: " Giày Nike Nam Bóng Rổ", href: "#" },
            { name: " Giày Nike Nam Bóng Đá", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [{ name: "Sale", href: "#" }],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
  };
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900 flex flex-start"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a
                      href="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Create account
                    </a>
                  </div>
                </div> */}

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">
                      CAD
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white stick">
        <nav
          aria-label="Top "
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200 py-5">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src="../../publick/img/logo shoes.png" alt="" />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-40">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          {/* <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p> */}
                                          <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded m-t2">
                                            Shop now
                                          </button>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900 flex"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                {/* <a
                                                  href={item.href}
                                                  className="hover:text-gray-800"
                                                >
                                                  
                                                  {item.name}
                                                </a> */}
                                                <p
                                                  onClick={() =>
                                                    handleCategoryClick(
                                                      category,
                                                      section,
                                                      item
                                                    )
                                                  }
                                                  className="cursor-pointer hover:text-gray-800 button-item"
                                                  id="button-item"
                                                >
                                                  {item.name}
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                {/* SIGN IN / Create Account   */}
                {/* <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </a>
                </div> */}
                {/* CAD */}
                {/* <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center text-gray-700 hover:text-gray-800"
                  >
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div> */}
                <div className="hidden lg:ml-8 lg:flex font-normal">
                  <Menu>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem onClick={() => navigate("/account/order")}>
                      My Orders
                    </MenuItem>
                    <MenuItem>Log In</MenuItem>
                  </Menu>
                </div>
                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
