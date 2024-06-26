'use client';
import { useLogout } from '@/modules/auth/hooks';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/ExpertEase-Logo.png';
import SmallLogo from 'public/ExpertEase-icon.jpg';
import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { IoMdLogOut } from 'react-icons/io';
import { PiUserSwitchDuotone } from 'react-icons/pi';
import { TbLayoutSidebarLeftCollapseFilled } from 'react-icons/tb';
import { GrServices } from 'react-icons/gr';

const menuItems = [
  {
    id: 1,
    label: 'Dashboard',
    icon: AiOutlineHome,
    link: '/dashboard/admin/home',
  },
  {
    id: 2,
    label: 'Manage Service Providers',
    icon: PiUserSwitchDuotone,
    link: '/dashboard/admin/manage-serviceproviders',
  },
  {
    id: 3,
    label: 'Manage Services',
    icon: GrServices,
    link: '/dashboard/admin/manage-services',
  },
];

const Sidebar = () => {
  const { logout } = useLogout();

  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const wrapperClasses = classNames(
    'h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col',
    {
      ['w-72']: !toggleCollapse,
      ['w-20']: toggleCollapse,
    }
  );
  const logoClass = classNames('flex items-center pl-1 gap-4 w-[60%] h-[60%]', {
    ['w-80']: !toggleCollapse,
    ['hidden']: toggleCollapse,
  });
  const smallLogoClass = classNames(
    'flex items-center pl-1 gap-4 w-[80%] h-[80%]',
    {
      ['hidden']: !toggleCollapse,
      ['w-20']: toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    'p-4 rounded bg-light-lighter absolute right-0',
    {
      'rotate-180 mt-20': toggleCollapse,
    }
  );

  const getNavItemClasses = () => {
    return classNames(
      'flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap',
      {}
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative nohidden">
          <div className={logoClass}>
            <Image src={Logo} alt="" />
          </div>
          <div className={smallLogoClass}>
            <Image src={SmallLogo} alt="" />
          </div>
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <TbLayoutSidebarLeftCollapseFilled size={30} />
            </button>
          )}
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses();
            return (
              <div key={menu.id} className={classes}>
                <Link href={menu.link}>
                  <div className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: '2.5rem' }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <div className={classNames('text-md font-medium ', {})}>
                        {menu.label}
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses()} px-3 py-4`}>
        <div style={{ width: '2.5rem' }}>
          <IoMdLogOut />
        </div>
        {!toggleCollapse && (
          <span
            onClick={logout}
            className={classNames('text-md font-medium text-text-light')}
          >
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
