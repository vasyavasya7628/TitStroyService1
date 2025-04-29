"use client";

import React, { useEffect, useState } from "react";

import api from "@utils/api/main";

import styles from "@style/header.module.scss";
import Link from "next/link";

interface MenuItem {
  item_id: string;
  link: string;
  link_type: string;
  menu: string;
  order: number;
  parent: string | null;
  target: string;
  title: string;
  visibility: boolean;
  additional_settings: Record<string, unknown>;
  icon: Record<string, unknown>;
  children: MenuItem[];
}

export default function Header() {
  const getApi = api();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getApi.getUrlHeader();
        setMenuItems(data);
      } catch (error) {
        console.error("Failed to load header data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_container}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="logo" />
          </Link>

                    <nav>
                        {menuItems.map((item, index) => (
                            item.visibility && (
                                <Link href={item.link} className={styles.menu_link} key={index}>
                                    {item.title}
                                </Link>
                            )
                        ))}
                    </nav>

          <a href="tel:+375445044771">
            <span className="icon-phone" />
            <span>+375 (44) 504-47-71</span>
          </a>
          <ul className="header_menu">
            <li>
              <a href="#">#</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
