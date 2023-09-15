import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import carService from 'public/NavBar/8959247.jpg';
import HomeService from 'public/NavBar/2208.i121.001.S.m005.c13.isometric husband hour.jpg';

interface ServiceItem {
  category: string;
  title: string;
  href: string;
  description: string;
}

export default function NavigationMenus() {
  const services: ServiceItem[] = [
    {
      category: 'Car Services',
      title: 'Car General Services',
      href: '/dashboard/user',
      description: 'Keeping Your Car in Peak Condition, One Service at a Time.',
    },
    {
      category: 'Car Services',
      title: 'Car Washing',
      href: '/docs/installation',
      description: 'Shine Bright! Pamper Your Car with Our Expert Car Washing Services.',
    },
    {
      category: 'Home Services',
      title: 'Ac Services',
      href: '/docs',
      description: 'Stay Cool and Comfortable with Our Home AC Services!',
    },
    {
      category: 'Home Services',
      title: 'Home Cleaning Services',
      href: '/docs/installation',
      description: 'Experience the Freshness of a Spotless Home!',
    },
    {
      category: 'Home Services',
      title: 'Plumber Services',
      href: '/docs/installation',
      description: "Plumbing Problems? We've Got the Pipes Covered!",
    },
    // Add more service items here if needed
  ];

  const renderServiceItems = (category: string) => {
    return services
      .filter((item) => item.category === category)
      .map((item, index) => (
        <ListItem key={index} title={item.title} href={`/category/${item.title.replace(/ /g, '-').toLowerCase()}`} description={item.description}>
          {item.description}
        </ListItem>
      ));
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Car Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={`/category/${("Car Services").replace(/ /g, '-').toLowerCase()}`}
                  >
                    <Image src={carService} alt="" />
                    <div className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">Car Services</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Revitalize Your Ride with Our Expert Car Service!
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {renderServiceItems('Car Services')}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={`/category/${("Home Services").replace(/ /g, '-').toLowerCase()}`}
                  >
                    <Image src={HomeService} alt="" />
                    <div className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">Home Services</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Your One-Stop Solution for All Your Home Service Needs!
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {renderServiceItems('Home Services')}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps {
  title: string;
  href: string;
  description: string;
  children?: React.ReactNode; // Define children explicitly
}

const ListItem: React.FC<ListItemProps> = ({ title, href, description, children }) => {
  return (
    <li>
      <Link href={href}>
        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </Link>
    </li>
  );
};
