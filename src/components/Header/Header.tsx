import React, { useEffect, useState } from "react";
import { useTheme } from "../Theme/context/ThemeProvider"; // Adjust the import path accordingly
import "./Header.css";

type HeaderProps = {
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  logo?: string; // URL or path for the logo image
  logoPosition?: "left" | "center" | "right"; // Position of the logo
  navItems?: { label: string; href: string }[]; // Array of navigation buttons
  hasDropdown?: boolean; // Flag to add a dropdown menu
};

const Header = ({
  variant = "primary",
  size = "md",
  logo,
  logoPosition = "left",
  navItems = [],
  hasDropdown = false,
}: HeaderProps) => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // Update isMobile based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get colors based on variant
  const backgroundColor = theme.colors[variant];
  const textColor = theme.colors.text;

  // Split navItems into left and right for center alignment
  const leftNavItems = navItems.filter((_, index) => index % 2 === 0);
  const rightNavItems = navItems.filter((_, index) => index % 2 !== 0);

  return (
    <header
      className={`header ${size}`}
      style={{
        backgroundColor,
        color: textColor,
        fontFamily: theme.font.family,
        fontSize: theme.font.size[size],
      }}
    >
      <div
        className="header-row"
        style={{
          flexDirection: logoPosition === "right" ? "row-reverse" : "row",
        }}
      >
        {isMobile && hasDropdown && (
          <button
            className="hamburger"
            style={{
              color: textColor,
              order:
                logoPosition === "center"
                  ? -1
                  : logoPosition === "left"
                  ? 2
                  : 0,
            }}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            ☰
          </button>
        )}
        {logo && (
          <div
            className={`logo logo-${logoPosition}`}
            style={{ order: logoPosition === "right" ? 0 : 1 }}
          >
            <img src={logo} alt="logo" />
          </div>
        )}

        {logoPosition === "center" && !isMobile ? (
          <>
            <div className="nav-items-left">
              {leftNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="nav-item"
                  style={{ color: textColor }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            {logo && (
              <div className={`logo logo-${logoPosition}`}>
                <img src={logo} alt="logo" />
              </div>
            )}
            <div className="nav-items-right">
              {rightNavItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="nav-item"
                  style={{ color: textColor }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </>
        ) : (
          !isMobile && (
            <div className="nav-items">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="nav-item"
                  style={{ color: textColor }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )
        )}
      </div>
      {isMobile && dropdownOpen && (
        <div className="dropdown-menu">
          <ul className="dropdown-content">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
