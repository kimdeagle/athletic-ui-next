"use client";

import "./globals.css";

import { logout } from "@/services/auth.service";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { H4 } from "@/components/ui/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AvatarIcon,
  BarChartIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  DropdownMenuIcon,
  GearIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function Home() {
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex">
      {/* left side */}
      <Card className={`w-[${collapse ? 10 : 15}vw] h-[100vh]`}>
        {/* logo and collapse area */}
        <div className="h-[7vh] flex justify-between items-center">
          {!collapse && (
            <H4 className="ml-12 cursor-pointer">
              <Link href="/">Athletic</Link>
            </H4>
          )}
          <Button variant="outline" size="icon" className="mx-6" onClick={toggleCollapse}>
            {collapse ? (
              <DoubleArrowRightIcon className="h-4 w-4" />
            ) : (
              <DoubleArrowLeftIcon className="h-4 w-4" />
            )}
          </Button>
        </div>
        {/* menu area */}
        <div className="h-[93vh] flex justify-center px-4 pt-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center">
                  <AvatarIcon className="mr-2 w-4 h-4" />
                  {!collapse && <p>회원 관리</p>}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-2">
                <Button variant="link" className="font-normal">
                  <PersonIcon className="mr-2 w-4 h-4" />
                  {!collapse && <p>회원승인 관리</p>}
                </Button>
              </AccordionContent>
              <AccordionContent className="pb-2">
                <Button variant="link" className="font-normal">
                  <BarChartIcon className="mr-2 w-4 h-4" />
                  {!collapse && <p>회원 통계</p>}
                </Button>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center">
                  <GearIcon className="mr-2 w-4 h-4" />
                  {!collapse && <p>시스템 관리</p>}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-2">
                <Button variant="link" className="font-normal">
                  <PersonIcon className="mr-2 w-4 h-4" />
                  {!collapse && <p>관리자 관리</p>}
                </Button>
              </AccordionContent>
              <AccordionContent className="pb-2">
                <Button variant="link" className="font-normal">
                  <DropdownMenuIcon className="mr-2 w-4 h-4" />
                  {!collapse && <p>메뉴 관리</p>}
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Card>
      {/* top menu */}
      <Card className="w-[100vw] h-[7vh] p-3 flex justify-end items-center">
        {/* avatar */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="flex flex-col">
              <p className="text-lg">테스터</p>
              <p className="text-sm text-muted-foreground">tester</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>내정보</DropdownMenuItem>
              <DropdownMenuItem>테스트</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={handleLogout}>로그아웃</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </Card>
    </div>
  );
}
