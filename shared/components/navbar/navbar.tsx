import React from "react";
import NikeIcon from "../../assets/icons/nike";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../components/ui/hover-card";
import css from "./navbar.module.css";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"

type MenuItem = {
  name: string;
  href: string;
};

type MenuSection = {
  section: MenuItem;
  items: MenuItem[];
};

type Menu = {
  title: MenuItem;
  sections: MenuSection[];
};
const NavBar = () => {
  const newMenu: Menu = {
    title: { name: "New", href: "#" },
    sections: [
      {
        section: { name: "Featured", href: "#" },
        items: [
          { name: "New Arrivals", href: "#" },
          { name: "Best Sellers", href: "#" },
          { name: "Latest Drops", href: "#" },
          { name: "Style Your Air", href: "#" },
          { name: "Vomero 18", href: "#" },
          { name: "Fairway Ready", href: "#" },
          { name: "SNKRS Launch Calendar", href: "#" },
        ],
      },
      {
        section: { name: "Shop New", href: "#" },
        items: [
          { name: "Men", href: "#" },
          { name: "Women", href: "#" },
          { name: "Kids", href: "#" },
          { name: "Shop All", href: "#" },
        ],
      },
      {
        section: { name: "Trending", href: "#" },
        items: [
          { name: "24.7 Collection", href: "#" },
          { name: "Nike Style By", href: "#" },
          { name: "So Win Collection", href: "#" },
          { name: "ACG Essentials", href: "#" },
          { name: "Rare Air Collection", href: "#" },
          { name: "Running Shoe Finder", href: "#" },
        ],
      },
    ],
  };

  const menMenu: Menu = {
    title: { name: "Men", href: "#" },
    sections: [
      {
        section: { name: "Featured", href: "#" },
        items: [
          { name: "New Arrivals", href: "#" },
          { name: "Best Sellers", href: "#" },
          { name: "Latest Drops", href: "#" },
          { name: "Style Your Air", href: "#" },
          { name: "Spring Essentials", href: "#" },
          { name: "Shop All Sale", href: "#" },
        ],
      },
      {
        section: { name: "Shoes", href: "#" },
        items: [
          { name: "All Shoes", href: "#" },
          { name: "Basketball", href: "#" },
          { name: "Lifestyle", href: "#" },
          { name: "Jordan", href: "#" },
          { name: "Retro Running", href: "#" },
          { name: "Running", href: "#" },
          { name: "Training & Gym", href: "#" },
          { name: "Sandals & Slides", href: "#" },
          { name: "Shoes $100 & Under", href: "#" },
        ],
      },
      {
        section: { name: "Clothing", href: "#" },
        items: [
          { name: "All Clothing", href: "#" },
          { name: "Hoodies & Sweatshirts", href: "#" },
          { name: "Jordan", href: "#" },
          { name: "Jackets & Vests", href: "#" },
          { name: "Tracksuits", href: "#" },
          { name: "24.7 Collection", href: "#" },
          { name: "Pants", href: "#" },
          { name: "Shorts", href: "#" },
          { name: "Tops & T-Shirts", href: "#" },
        ],
      },
      {
        section: { name: "Accessories", href: "#" },
        items: [
          { name: "Bags & Backpacks", href: "#" },
          { name: "Hats & Headwear", href: "#" },
          { name: "Socks", href: "#" },
          { name: "Sunglasses", href: "#" },
          { name: "Belts", href: "#" },
        ],
      },
    ],
  };

  const womenMenu: Menu = {
    title: { name: "Women", href: "#" },
    sections: [
      {
        section: { name: "Featured", href: "#" },
        items: [
          { name: "New Arrivals", href: "#" },
          { name: "Best Sellers", href: "#" },
          { name: "Latest Drops", href: "#" },
          { name: "Style Your Air", href: "#" },
          { name: "Nike Style By", href: "#" },
          { name: "So Win Collection", href: "#" },
          { name: "Spring Essentials", href: "#" },
          { name: "Shop All Sale", href: "#" },
        ],
      },
      {
        section: { name: "Shop by Color", href: "#" },
        items: [
          { name: "Blue", href: "#" },
          { name: "Peach", href: "#" },
          { name: "Purple", href: "#" },
          { name: "Neon", href: "#" },
          { name: "Neutral", href: "#" },
        ],
      },
      {
        section: { name: "Shoes", href: "#" },
        items: [
          { name: "All Shoes", href: "#" },
          { name: "Basketball", href: "#" },
          { name: "Lifestyle", href: "#" },
          { name: "Jordan", href: "#" },
          { name: "Retro Running", href: "#" },
          { name: "Running", href: "#" },
          { name: "Sandals & Slides", href: "#" },
          { name: "Training & Gym", href: "#" },
          { name: "Shoes $100 & Under", href: "#" },
        ],
      },
      {
        section: { name: "Clothing", href: "#" },
        items: [
          { name: "All Clothing", href: "#" },
          { name: "Bras", href: "#" },
          { name: "Hoodies & Sweatshirts", href: "#" },
          { name: "Leggings", href: "#" },
          { name: "Matching Sets", href: "#" },
          { name: "24.7 Collection", href: "#" },
          { name: "Jackets & Vests", href: "#" },
          { name: "Pants", href: "#" },
          { name: "Skirts & Dresses", href: "#" },
          { name: "Shorts", href: "#" },
          { name: "Tops & T-Shirts", href: "#" },
        ],
      },
      {
        section: { name: "Accessories", href: "#" },
        items: [
          { name: "Bags & Backpacks", href: "#" },
          { name: "Hats & Headwear", href: "#" },
          { name: "Socks", href: "#" },
          { name: "Sunglasses", href: "#" },
          { name: "Belts", href: "#" },
        ],
      },
    ],
  };

  const kidsMenu: Menu = {
    title: { name: "Kids", href: "#" },
    sections: [
      {
        section: { name: "Featured", href: "#" },
        items: [
          { name: "New Arrivals", href: "#" },
          { name: "Best Sellers", href: "#" },
          { name: "Latest Drops", href: "#" },
          { name: "Style Your Air", href: "#" },
          { name: "Spring Essentials", href: "#" },
          { name: "Shop All Sale", href: "#" },
        ],
      },
      {
        section: { name: "Shoes by Age", href: "#" },
        items: [
          { name: "Big Kids (1Y - 7Y)", href: "#" },
          { name: "Little Kids (8C - 3Y)", href: "#" },
          { name: "Baby & Toddler (1C - 10C)", href: "#" },
          { name: "Teen", href: "#" },
        ],
      },
      {
        section: { name: "Clothing by Age", href: "#" },
        items: [
          { name: "Big Kids (XS - XL)", href: "#" },
          { name: "Little Kids (4 - 7)", href: "#" },
          { name: "Baby & Toddler (0M - 4T)", href: "#" },
          { name: "Teen", href: "#" },
        ],
      },
      {
        section: { name: "Accessories", href: "#" },
        items: [
          { name: "Bags & Backpacks", href: "#" },
          { name: "Hats & Headwear", href: "#" },
          { name: "Socks", href: "#" },
          { name: "Sunglasses", href: "#" },
          { name: "Belts", href: "#" },
        ],
      },
      {
        section: { name: "All Shoes", href: "#" },
        items: [
          { name: "Basketball", href: "#" },
          { name: "Lifestyle", href: "#" },
          { name: "Jordan", href: "#" },
          { name: "Retro Running", href: "#" },
          { name: "Running", href: "#" },
          { name: "Sandals & Slides", href: "#" },
          { name: "Soccer", href: "#" },
        ],
      },
      {
        section: { name: "All Clothing", href: "#" },
        items: [
          { name: "Bras", href: "#" },
          { name: "Hoodies & Sweatshirts", href: "#" },
          { name: "Jordan", href: "#" },
          { name: "Matching Sets", href: "#" },
          { name: "Jackets & Vests", href: "#" },
          { name: "Pants & Tights", href: "#" },
          { name: "Shorts", href: "#" },
          { name: "Tops & T-Shirts", href: "#" },
        ],
      },
      {
        section: { name: "Shop By Sport", href: "#" },
        items: [
          { name: "Gymnastics", href: "#" },
          { name: "Basketball", href: "#" },
          { name: "Football", href: "#" },
          { name: "Running", href: "#" },
          { name: "Soccer", href: "#" },
        ],
      },
    ],
  };

  const jordanMenu: Menu = {
    title: { name: "Jordan", href: "#" },
    sections: [
      {
        section: { name: "Featured", href: "#" },
        items: [
          { name: "New Arrivals", href: "#" },
          { name: "Best Sellers", href: "#" },
          { name: "Rare Air Collection", href: "#" },
          { name: "Shop All Sale", href: "#" },
        ],
      },
      {
        section: { name: "Men", href: "#" },
        items: [
          { name: "Shop All", href: "#" },
          { name: "Shoes", href: "#" },
          { name: "AJ1", href: "#" },
          { name: "Clothing", href: "#" },
          { name: "Basketball", href: "#" },
        ],
      },
      {
        section: { name: "Women", href: "#" },
        items: [
          { name: "Shop All", href: "#" },
          { name: "Shoes", href: "#" },
          { name: "AJ1", href: "#" },
          { name: "Clothing", href: "#" },
          { name: "Basketball", href: "#" },
        ],
      },
      {
        section: { name: "Kids", href: "#" },
        items: [
          { name: "Shop All", href: "#" },
          { name: "Shoes", href: "#" },
          { name: "AJ1", href: "#" },
          { name: "Clothing", href: "#" },
          { name: "Basketball", href: "#" },
          { name: "Big Kids", href: "#" },
          { name: "Little Kids", href: "#" },
          { name: "Baby & Toddler", href: "#" },
        ],
      },
      {
        section: { name: "Accessories", href: "#" },
        items: [
          { name: "Shop All", href: "#" },
          { name: "Bags & Backpacks", href: "#" },
          { name: "Hats & Headwear", href: "#" },
        ],
      },
      {
        section: { name: "Collections", href: "#" },
        items: [
          { name: "Jordan Heat Check", href: "#" },
          { name: "Jordan Cleats", href: "#" },
          { name: "Jordan Sleeper Picks", href: "#" },
          { name: "Colors of the Season", href: "#" },
        ],
      },
    ],
  };

  const sportMenu: Menu = {
    title: { name: "Sport", href: "#" },
    sections: [
      {
        section: { name: "Basketball", href: "#" },
        items: [
          { name: "Shoes", href: "#" },
          { name: "Apparel", href: "#" },
          { name: "Equipment", href: "#" },
          { name: "Kobe", href: "#" },
          { name: "Jordan", href: "#" },
          { name: "NBA Gear", href: "#" },
          { name: "WNBA Gear", href: "#" },
          { name: "NCAA Gear", href: "#" },
        ],
      },
      {
        section: { name: "Running", href: "#" },
        items: [
          { name: "Road", href: "#" },
          { name: "Race", href: "#" },
          { name: "Trail", href: "#" },
          { name: "Track & Field", href: "#" },
          { name: "Apparel", href: "#" },
          { name: "Equipment", href: "#" },
          { name: "Stride & Swift Collection", href: "#" },
          { name: "Running Shoe Finder", href: "#" },
        ],
      },
      {
        section: { name: "Soccer", href: "#" },
        items: [
          { name: "Cleats", href: "#" },
          { name: "Indoor Footwear", href: "#" },
          { name: "Apparel", href: "#" },
          { name: "Equipment", href: "#" },
          { name: "National Team Gear", href: "#" },
          { name: "Club Team Gear", href: "#" },
          { name: "NWSL Gear", href: "#" },
        ],
      },
      {
        section: { name: "More Sports", href: "#" },
        items: [
          { name: "Baseball", href: "#" },
          { name: "Cheer", href: "#" },
          { name: "Fan Gear", href: "#" },
          { name: "Football", href: "#" },
          { name: "Gymnastics", href: "#" },
          { name: "Lacrosse", href: "#" },
          { name: "Pickleball", href: "#" },
          { name: "Softball", href: "#" },
          { name: "Swimming", href: "#" },
          { name: "Tennis", href: "#" },
          { name: "Volleyball", href: "#" },
          { name: "Wrestling", href: "#" },
        ],
      },
      {
        section: { name: "Training", href: "#" },
        items: [
          { name: "Shoes", href: "#" },
          { name: "Socks", href: "#" },
          { name: "Apparel", href: "#" },
          { name: "Equipment", href: "#" },
        ],
      },
      {
        section: { name: "Golf", href: "#" },
        items: [
          { name: "Fairway Ready", href: "#" },
          { name: "Shoes", href: "#" },
          { name: "Apparel", href: "#" },
          { name: "Equipment", href: "#" },
          { name: "Jordan", href: "#" },
        ],
      },
    ],
  };
  const fullMenu: Menu[] = [
    newMenu,
    menMenu,
    womenMenu,
    kidsMenu,
    jordanMenu,
    sportMenu,
  ];

  return (
    <div
      className={`p-4 px-[3.8rem] flex flex-row gap-[20rem] relative w-full ${css.navbar}`}
    >
      <NikeIcon />

      <div className="flex flex-row  gap-[2rem] ">
        {fullMenu.map((menu) => {
          return (
            <HoverCard open={true} key={menu.title.name}>
              <HoverCardTrigger
                href={menu.title.href}
                className=" font-medium hover:underline underline-offset-[0.47rem] "
              >
                {menu.title.name}
              </HoverCardTrigger>

              {/* {(menu.title.name === "New" ||
                menu.title.name === "Men" ||
                menu.title.name === "Women") && (
                <HoverCardContent className="py-[3rem] flex flex-row justify-center gap-[8rem]">
                  {menu.sections.map((section) => (
                    <div
                      key={section.section.name}
                      className="flex flex-col gap-[0.5rem]"
                    >
                      <Link href={section.section.href}>
                        {section.section.name}
                      </Link>
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-sm text-gray-700 hover:text-black text-[0.75rem]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </HoverCardContent>
              )} */}

              {menu.title.name === "Kids" && (
              <HoverCardContent className="flex justify-center w-full  ">
                
<Table className="table-fixed w-fit mx-auto border-separate ">
  <TableHeader  >
    <TableRow >
      {menu.sections.slice(0, 4).map((section)=>{
        return (
          <TableHead className="pr-[5rem]">{section.section.name}</TableHead>

        )
      })}
      
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      {menu.sections.slice(0, 4).map((section) => (
        <TableCell key={section.section.name} className="font-medium align-top ">
          <div className="flex flex-col gap-1">
            {section.items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-700 hover:text-black text-[0.75rem]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </TableCell>
      ))}
    </TableRow>
  </TableBody>
</Table>



              {/* {menu.sections.map((section) => (
                <div
                  key={section.section.name}
                  className="flex flex-col gap-[0.5rem]"
                >
                  <Link href={section.section.href}>
                    {section.section.name}
                  </Link>
                  {section.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-gray-700 hover:text-black text-[0.75rem]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))} */}
            </HoverCardContent>
              )}
            </HoverCard>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
