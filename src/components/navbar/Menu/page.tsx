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
import { useCategories } from '@/modules/Add-Edit-Forms/hooks/useCategories';
import { Typography } from '@material-tailwind/react';

export default function NavigationMenus() {
  const { categories } = useCategories(null);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {categories &&
          categories.map((category) => (
            <NavigationMenuItem key={category.id}>
              <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Typography
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        as="div"
                      >
                        <Image src={category.name == "Car Services" ? carService : HomeService} alt="" />
                        <div className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          {category.name}
                        </div>
                        <div className="text-sm leading-tight text-muted-foreground">
                          {category.description}
                        </div>
                      </Typography>
                    </NavigationMenuLink>
                  </li>
                  {category.childCategories.nodes.map((childCategory) => (
                    <ListItem
                      key={childCategory.id}
                      title={childCategory.name}
                      href={childCategory.slug}
                      description={childCategory.description}
                    >
                      {childCategory.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps {
  title: string;
  href: string;
  description?: string;
  children?: React.ReactNode; // Define children explicitly
}

const ListItem: React.FC<ListItemProps> = ({ title, href, children }) => {
  return (
    <li>
      <Link href={href}>
        <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm font-medium leading-none">{title}</div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </div>
        </div>
      </Link>
    </li>
  );
};
