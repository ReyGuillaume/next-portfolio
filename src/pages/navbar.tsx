import Link from "next/link";

export interface NavItem {
  link: string;
  text: string;
}

export default function NavBar() {
  const navItems: NavItem[] = [
    {
      link: '#presentation',
      text: 'Présentation',
    },
    {
      link: '#competences',
      text: 'Compétences',
    },
    {
      link: '#videos',
      text: 'Vidéos',
    },
    {
      link: '#portfolio',
      text: 'Portfolio',
    },
    {
      link: '#contact',
      text: 'Contact',
    },
  ];

  return (
    <nav className="text-white uppercase fixed top-0 w-full">
      <ul className="bg-blue-950 w-full flex gap-2">
        {
          navItems.map((navItem, i) => (
            <li key={i} className="p-5">
              <Link href={navItem.link}>{navItem.text}</Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}