"use client";

import { Inter } from "next/font/google";

import "./globals.css";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="description"
          content="Filipa Lacerda online CV and blog. You can find my resume, recipes, coffees, diy projects"
        ></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={inter.className}>
        <div className="app">
          <Sidebar
            items={[
              {
                link: "/",
                text: "Home",
              },
              {
                link: "/resume",
                text: "Resume",
              },
              {
                link: "/talks",
                text: "Talks",
              },
              {
                link: "/blog",
                text: "Blog",
              },
            ]}
          />
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  );
}
