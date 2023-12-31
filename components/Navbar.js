import Image from "next/image";
import Link from "next/link";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search", link: "/" },
  { src: "/assets/icons/black-heart.svg", alt: "heart", link: "/products" },
  { src: "/assets/icons/user.svg", alt: "user", link: "/profile/" },
];

const Navbar = () => {
  return (
    <header className="w-full px-6 md:px-20 py-4">
      {/* px-6 md:px-20 py-24 */}
      <nav className="nav flex justify-between items-center ">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          />

          <p className="nav-logo font-spaceGrotesk text-[21px] text-secondary font-bold">
            Price<span className="text-primary">Wise</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Link href={icon.link} key={icon.alt}>
              <Image
                src={icon.src}
                alt={icon.alt}
                width={28}
                height={28}
                className="object-contain"
              />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
