"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Stethoscope,
  Phone,
  Calendar,
  Settings,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Palette,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SideNavbarProps {
  className?: string;
}

export default function SideNavbar({ className = "" }: SideNavbarProps) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const isAdmin = typeof window !== "undefined" ? localStorage.getItem("adminAuthenticated") === "true" : false;
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Adjust sidebar width based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Auto-collapse on smaller tablets
      if (window.innerWidth < 1024 && window.innerWidth >= 768) {
        setCollapsed(true);
      } else if (window.innerWidth >= 1024) {
        setCollapsed(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation items with updated options page
  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/services", label: "Services", icon: Stethoscope },
    { href: "/contact", label: "Contact", icon: Phone },
    { href: "/options", label: "Options", icon: Palette },
  ];

  if (isAdmin) {
    navItems.push({ href: "/admin", label: "Admin", icon: Settings });
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </Button>

      <aside
        className={cn(
          "fixed top-0 left-0 h-screen transition-all duration-300 z-40",
          collapsed ? "w-20" : "w-64 lg:w-80",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          className
        )}
        style={{ borderColor: "var(--border)", backgroundColor: "var(--base-primary)" }}
      >
        <div className="h-full flex flex-col border-r" style={{ borderColor: "var(--border)" }}>
          <div
            className={`p-6 border-b flex items-center justify-between ${collapsed ? "p-4" : ""}`}
            style={{ borderColor: "var(--border)" }}
          >
            {!collapsed ? (
              <Link href="/" className="text-xl font-bold font-poppins tracking-tight">
                <span style={{ color: "var(--accent)" }}>Dr. Salumu</span>
              </Link>
            ) : (
              <Link href="/" className="text-xl font-bold font-poppins tracking-tight">
                <span style={{ color: "var(--accent)" }}>DS</span>
              </Link>
            )}

            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors md:block hidden"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center p-3 rounded-md transition-colors duration-200 ${
                        isActive ? "bg-opacity-10" : "hover:bg-opacity-5"
                      }`}
                      style={{
                        backgroundColor: isActive ? "var(--accent)" : "transparent",
                        color: isActive ? "var(--accent)" : "var(--text-primary)",
                        opacity: isActive ? 1 : 0.8,
                      }}
                      title={collapsed ? item.label : ""}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: isActive ? "var(--accent)" : "inherit" }}
                      />
                      {!collapsed && <span className="font-medium ml-3">{item.label}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {!collapsed && (
              <div className="mt-8">
                <h3
                  className="px-3 text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: "var(--muted)" }}
                >
                  Quick Actions
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/contact"
                      className="flex items-center p-3 rounded-md transition-colors duration-200"
                      style={{ color: "var(--text-primary)" }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <MessageCircle className="w-5 h-5 mr-3" style={{ color: "var(--accent)" }} />
                      <span className="font-medium">Book Appointment</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>

          <div
            className={`p-4 border-t ${collapsed ? "flex justify-center" : ""}`}
            style={{ borderColor: "var(--border)" }}
          >
            {!collapsed ? (
              <>
                <Link
                  href="/contact"
                  className="flex items-center justify-center p-3 rounded-md transition-colors duration-200 mb-4"
                  style={{ backgroundColor: "var(--accent)", color: "white" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-medium">Book Appointment</span>
                </Link>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: "var(--muted)" }}>
                    {theme === "dark" ? "Dark Mode" : "Light Mode"}
                  </span>
                  <ThemeToggle />
                </div>
              </>
            ) : (
              <ThemeToggle />
            )}
          </div>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
