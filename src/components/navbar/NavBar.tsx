'use client';

import { useCurrentUserQuery } from '@/generated/graphql';
import { useCategories } from '@/modules/Add-Edit-Forms/hooks/useCategories';
import { useLogout } from '@/modules/auth/hooks';
import {
  Bars2Icon,
  ChevronDownIcon,
  PowerIcon,
  Square3Stack3DIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import {
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/ExpertEase-Logo.png';
import profileImage from 'public/MyProfile/my-profile.jpg';
import React from 'react';
import NavigationMenus from './Menu/page';

// profile menu component
const profileMenuItems = [
  {
    label: 'My Profile',
    icon: UserCircleIcon,
  },
  {
    label: 'Service Provider Profile',
    icon: UserCircleIcon,
  },
  {
    label: 'Sign Out',
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const { data } = useCurrentUserQuery();

  const { logout } = useLogout();

  const isLoggedin = !!data?.currentUser?.id;
  const isServiceProvider = !!data?.currentUser?.company?.id;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return isLoggedin ? (
    <>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Image
              src={profileImage}
              alt=""
              className="w-9 h-9 overflow-hidden rounded-full border border-gray-900"
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
          {profileMenuItems
            .filter(
              ({ label }) =>
                !(label === 'Service Provider Profile' && !isServiceProvider)
            )
            .map(({ label, icon }, key) => {
              return (
                <MenuItem
                  key={label}
                  onClick={closeMenu}
                  className={`flex items-center gap-2 rounded ${
                    label === 'Sign Out'
                      ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                      : ''
                  }`}
                >
                  {React.createElement(icon, {
                    className: `h-4 w-4 ${
                      label === 'Sign Out' ? 'text-red-500' : ''
                    }`,
                    strokeWidth: 2,
                  })}
                  <Link
                    href={
                      label === 'Sign Out'
                        ? '/'
                        : `/dashboard/${label
                            .replaceAll(' ', '-')
                            .toLowerCase()}`
                    }
                  >
                    <Typography
                      as="span"
                      variant="small"
                      className="font-normal"
                      onClick={label === 'Sign Out' ? logout : undefined}
                      color={label === 'Sign Out' ? 'red' : 'inherit'}
                    >
                      {label}
                    </Typography>
                  </Link>
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

interface INavListMenuProps {
  header: string;
  navListMenuItems: {
    name: string;
    description: string;
    slug: string;
  }[];
}

function NavListMenu({ header, navListMenuItems }: INavListMenuProps) {
  const renderItems = navListMenuItems.map(
    ({ name, description, slug }, index) => (
      <Link href={slug} key={`${header}-${index}`}>
        <MenuItem>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            {name}
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {description}
          </Typography>
        </MenuItem>
      </Link>
    )
  );

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
  const { categories } = useCategories(null);
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {categories &&
        categories.map((category, index) => (
          <NavListMenu
            key={category.id}
            header={`${category.name}`}
            navListMenuItems={category.childCategories.nodes}
          />
        ))}
      {/* <NavListMenu header="Home services" navListMenuItems={HomeServicesList} /> */}
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
