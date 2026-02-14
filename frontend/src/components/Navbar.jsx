import { useState, useContext } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/images/renviologo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const { user, logout } = useContext(AuthContext);

  // Scroll Hide/Show
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Portfolio", to: "/portfolio" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: -120 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 inset-x-0 z-[100]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between px-8 py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center relative group">
              <div className="absolute -inset-2 bg-white/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.img
                src={logo}
                alt="Renvio Logo"
                className="relative z-10 h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((item) => (
                <DesktopNavItem key={item.name} to={item.to}>
                  {item.name}
                </DesktopNavItem>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-6">
              {user ? (
                <>
                  <span className="text-sm font-semibold text-[#00ff11]">
                    {user.name}
                  </span>

                  <button
                    onClick={logout}
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
                >
                  Login
                </Link>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px]"
              >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00ff11_0%,#00ff1100_50%,#00ff11_100%)]" />
                
              </motion.button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1.5 p-2 z-[110]"
            >
              <div
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <div
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <div
                className={`h-0.5 w-6 bg-white transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : "w-4 self-end"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 mx-6 rounded-3xl bg-black/95 backdrop-blur-2xl border border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-6 p-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold text-gray-300 hover:text-[#00ff11] transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <hr className="border-white/10" />

              {user ? (
                <>
                  <span className="text-xl font-semibold text-[#00ff11] text-center">
                    {user.name}
                  </span>

                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="w-full py-4 border border-white/10 rounded-2xl text-white hover:bg-white/5 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="w-full py-4 border border-white/10 rounded-2xl text-white hover:bg-white/5 transition-colors text-center"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    onClick={() => setOpen(false)}
                    className="w-full py-4 rounded-2xl font-bold text-black bg-[#00ff11] hover:brightness-110 transition-all text-center"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function DesktopNavItem({ children, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative px-5 py-2 text-sm font-medium transition-colors ${
          isActive ? "text-white" : "text-gray-400 hover:text-white"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span className="relative z-10">{children}</span>
          {isActive && (
            <motion.div
              layoutId="nav-pill"
              className="absolute inset-0"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </>
      )}
    </NavLink>
  );
}
