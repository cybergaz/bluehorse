type NavLink = {
  title: string;
  url?: string;
  hasDropdown?: boolean;
  categories?: {
    title: string;
    links: {
      title: string;
      url: string;
      icon: string;
      color?: string;
    }[];
  }[];
};

export const NAVLINKS: NavLink[] =
  [
    { title: "Home", url: "/" },
    {
      title: 'Services',
      hasDropdown: true,
      categories: [
        {
          title: "Development",
          links: [
            { title: "Website Development", url: "/services/web-development", icon: "globe", color: "cyan" },
            { title: "App Development", url: "/services/app-development", icon: "smartphone", color: "indigo" },
          ],
        },

        {
          title: "Cloud & Operations",
          links: [
            { title: "Cloud Migration", url: "/services/cloud-operations", icon: "cloud", color: "sky" },
            { title: "DevOps", url: "/services/cloud-operations", icon: "git-branch", color: "violet" },
            { title: "FinOps", url: "/services/cloud-operations", icon: "wallet", color: "green" },
          ],
        },
        {
          title: "Digital Solutions",
          links: [
            { title: "Digital Marketing", url: "/services/digital-marketing", icon: "megaphone", color: "blue" },
            { title: "E-Commerce Solutions", url: "/services/e-commerce", icon: "shopping-cart", color: "emerald" },
            { title: "SEO", url: "/services/seo", icon: "bar-chart-3", color: "amber" },
          ],
        },
      ]
    },

    { title: "About", url: "/about-us" },
    { title: "Blog", url: "/blog" },
    // {
    //   title: "About",
    //   hasDropdown: true,
    //   categories: [
    //     {
    //       title: "About Company",
    //       links: [
    //         { title: "About Us", url: "/about-us", icon: "building-2" },
    //         { title: "Testimonials", url: "/testimonials", icon: "quote" },
    //         { title: "Portfolio", url: "/portfolio", icon: "folder-open" },
    //         { title: "Careers", url: "/careers", icon: "briefcase" },
    //         { title: "Blog", url: "/blog", icon: "book-open-text" },
    //       ],
    //     },
    //   ]
    // },
    { title: "Contact ", url: "/contact" },
  ]


