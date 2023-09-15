'use client';

import {
  Bars2Icon,
  ChevronDownIcon,
  PowerIcon,
  Square3Stack3DIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';
import {
  Avatar,
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/ExpertEase-Logo.png';
import React from 'react';
import NavigationMenus from './Menu/page';

// profile menu component
const profileMenuItems = [
  {
    label: 'My Profile',
    icon: UserCircleIcon,
  },
  {
    label: 'Sign Out',
    icon: PowerIcon,
  },
];
const isLoggedIn = !true;

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return isLoggedIn ? (
    <>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? 'rotate-180' : ''
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                    : ''
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? 'red' : 'inherit'}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  ) : (
    <Link href="/auth/SignIn" className="md:absolute md:left-[90vw]">
      <Button className="px-4 py-3 ">LogIn</Button>
    </Link>
  );
}

// nav list menu
const CarServicesList = [
  {
    title: 'Car Services',
    description:
      'Revitalize Your Ride with Our Expert Car Service!',
  },
  {
    title: 'Car General Services',
    
      description:
      'Keeping Your Car in Peak Condition, One Service at a Time.',
  },
  {
    title: 'Car Washing',
    description:
      'Shine Bright! Pamper Your Car with Our Expert Car Washing Services.',
  },
];

const HomeServicesList = [
  {
    title: 'Home Services',
    description:
      'Your One-Stop Solution for All Your Home Service Needs!',
  },
  {
    title: 'Ac Services',
    
      description:
      'Stay Cool and Comfortable with Our Home AC Services!',
  },
  {
    title: 'Home Cleaning Services',
    description:
      'Experience the Freshness of a Spotless Home!',
  },
  {
    title: 'Plumber Services',
    description:
      "Plumbing Problems? We've Got the Pipes Covred!!",
  },
];

interface INavListMenuProps {
  header : string;
  navListMenuItems: {
    title: string;
    description : string;
  }[]
}

function NavListMenu({ header , navListMenuItems }: INavListMenuProps) {

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <Link href={`/category/${title.replace(/ /g, '-').toLowerCase()}`} key={header}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> {header}{' '}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu header="Car services" navListMenuItems={CarServicesList} />
      <NavListMenu header="Home services"  navListMenuItems={HomeServicesList}/>
    </ul>
  );
}

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar
      className="sticky opacity-[99%] mx-auto lg:pl-6 top-0 z-50"
      fullWidth
    >
      <div className="relative flex items-center text-blue-gray-900">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="ml-5 cursor-pointer font-semibold hover:animate-bounce"
            height={140}
            width={140}
          />
        </Link>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavigationMenus />
        </div>
        {/* <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div> */}
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <Collapse open={isNavOpen} className="z-50">
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
