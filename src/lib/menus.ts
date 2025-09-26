export type NavItem = { label: string; href: string };
export type Menu = { title: string; href?: string; items?: { label: string; href: string }[] };


export const NAV_MENUS: Menu[] = [
{
title: "Books",
items: [
{ label: "Featured", href: "/books/featured" },
{ label: "New Releases", href: "/books/new" },
{ label: "Best Sellers", href: "/books/best" },
],
},
{
title: "Videos",
items: [
{ label: "Tutorials", href: "/videos/tutorials" },
{ label: "Talks", href: "/videos/talks" },
{ label: "Reviews", href: "/videos/reviews" },
],
},
{
title: "Albums",
items: [
{ label: "Studio", href: "/albums/studio" },
{ label: "Live", href: "/albums/live" },
{ label: "Compilations", href: "/albums/compilations" },
],
},
{
title: "Blogs",
href: "/blog",
},
{
title: "About",
items: [
{ label: "Our Story", href: "/about" },
{ label: "Team", href: "/about/team" },
{ label: "Contact", href: "/about/contact" },
],
},
];