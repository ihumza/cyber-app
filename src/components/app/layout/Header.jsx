import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="mx-auto">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/users">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Users
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/events">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Events
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Header;
