"use client";

import { Inter } from "next/font/google";

import "./globals.css";

import dynamic from "next/dynamic";

import Header from "./components/header";

const Sidebar = dynamic(() => import("./components/sidebar"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Filipa Lacerda</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="author" content="Filipa Lacerda" />
        <meta name="keywords" content="Frontend Engineer" />
        <meta
          name="description"
          content="Filipa Lacerda online CV and blog. You can find my resume, recipes, coffees, diy projects"
        ></meta>
      </head>

      <body className={inter.className}>
        <Header
          navItems={[
            {
              href: "/",
              text: "Home",
            },
            {
              href: "/resume",
              text: "Resume",
            },
            {
              href: "/education",
              text: "Education",
            },
            {
              href: "/resources",
              text: "Resources",
            },
            // {
            //   link: "/blog",
            //   text: "Blog",
            // },
          ]}
        />
        <div className="flex h-full">
          <div className="content p-10 mt-10 overflow-auto w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
