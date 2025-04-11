import React from "react";
import JordanIcon from "../../assets/icons/jordan";
import ConverseIcon from "../../assets/icons/converse";
import { Separator } from "../../../components/ui/separator";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../components/ui/hover-card";
import Link from "next/link";
import css from "./topbar.module.css";
type SimpleLink = { label: string; href: string };
type DropdownLink = {
  label: string;
  dropdown: { label: string; href: string }[];
};

const TopBar = () => {
  const dropdownMenu: DropdownLink[] = [
    {
      label: "Help",
      dropdown: [
        { label: "Order Status", href: "#" },
        { label: "Shipping & Delivery", href: "#" },
        { label: "Returns", href: "#" },
        { label: "Order Cancellation", href: "#" },
        { label: "Size Charts", href: "#" },
        { label: "Contact Us", href: "#" },
        { label: "Membership", href: "#" },
        { label: "Promotions & Discounts", href: "#" },
        { label: "Product Advice", href: "#" },
        { label: "Send Us Feedback", href: "#" },
      ],
    },
  ];

  const topLinks: SimpleLink[] = [
    {
      label: "Find a Store",
      href: "/retail",
    },
    {
      label: "Join Us",
      href: "/membership",
    },
    {
      label: "Sign In",
      href: "/signup",
    },
  ];
  return (
    <div className="hidden lg:flex bg-[#f5f5f5] p-2 px-[4rem]  flex-row justify-between  ">
      <div className="flex flex-row gap-[1.5rem]">
        <Link href="/jordan">
          <JordanIcon />
        </Link>
        <Link href="/converse">
          <ConverseIcon />
        </Link>
      </div>

      <div className="flex flex-row gap-[1rem] items-center ">
        <Link
          href={topLinks[0].href}
          className="text-[0.75rem] font-medium  hover:text-muted-foreground"
        >
          {topLinks[0].label}
        </Link>
        <Separator orientation="vertical" className={css.separator} />

        <HoverCard >
          <HoverCardTrigger className="text-[0.75rem] font-medium cursor-pointer hover:text-muted-foreground">
            {dropdownMenu[0].label}
          </HoverCardTrigger>
          <HoverCardContent
            side="bottom"
            align="end"
            alignOffset={-24}
            sideOffset={10}
            className="!w-[15rem]"
          >
            {dropdownMenu.map((menu, index) => (
              <div key={index} className="flex flex-col gap-[0.6rem]">
                <p className="text-[1.25rem] font-medium">{menu.label}</p>
                <div className="flex flex-col gap-[0.5rem] max-w-[8rem]">
                  {menu.dropdown.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      href={dropdownItem.href}
                      className="text-muted-foreground text-[0.75rem] w-full hover:text-foreground  "
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </HoverCardContent>
        </HoverCard>
        <Separator orientation="vertical" className={css.separator} />

        <Link
          href={topLinks[1].href}
          className="text-[0.75rem] font-medium hover:text-muted-foreground"
        >
          {topLinks[1].label}
        </Link>
        <Separator orientation="vertical" className={css.separator} />

        <Link
          href={topLinks[2].href}
          className="text-[0.75rem] font-medium  hover:text-muted-foreground"
        >
          {topLinks[2].label}
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
