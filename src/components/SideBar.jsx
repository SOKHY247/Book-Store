import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const SideBar = () => {
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <RxHamburgerMenu />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <SheetDescription className="flex flex-col space-y-4 p-2">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/contacts">Contact us</Link>
          </SheetDescription>

          <SheetFooter>theme</SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideBar;
