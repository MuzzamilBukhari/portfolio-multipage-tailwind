const projects = [
  {
    id: 1,
    title: "Rezupro – Resume Builder",
    description:
      "A modern and easy-to-use resume builder built with Next.js and Tailwind CSS. It allows users to quickly generate professional resumes with a clean UI and smooth UX.",
    imgUrl: "/images/projects/RezuPro.jpg",
    features: [
      "Professional resume builder UI",
      "Responsive and clean design",
      "Fast performance with Next.js",
      "Minimal and distraction-free layout",
    ],
    techStack: ["Next.js", "Tailwind CSS"],
    projectLink: "https://rezupro.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Online Bookstore",
    description:
      "A beautifully designed online bookstore focusing on UI and design using React and Tailwind CSS.",
    imgUrl: "/images/projects/online-bookstore.jpg",
    features: [
      "User-friendly UI",
      "Responsive design",
      "Interactive animations",
    ],
    techStack: ["React", "Tailwind CSS"],
    projectLink: "https://bookstore-mb-nu.vercel.app/",
    featured: false,
  },
  {
    id: 3,
    title: "Shoeway – Shoes E-commerce Store",
    description:
      "A stylish shoes e-commerce storefront built with Next.js and Tailwind CSS, using Sanity CMS as the headless admin/dashboard. The frontend (product listing, product pages, search, and UI) is complete and responsive; however the cart & checkout functionality is currently disabled because the Sanity free plan expired and the admin integrations are limited until the CMS is reactivated or migrated.",
    imgUrl: "/images/projects/shoeway.png",
    features: [
      "Product catalog with categories and filters",
      "Detailed product pages with image gallery",
      "Sanity-powered admin dashboard for product & content management",
      "Responsive mobile-first design",
      "Search and basic product sorting",
      "Cart & checkout integrated but currently non-functional (pending Sanity plan renewal or migration)",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    projectLink: "https://ecommerce-marketplace-hackathon.vercel.app/",
    featured: false,
  },
  {
    id: 4,
    title: "Embroidery & Graphic Design Agency Portfolio",
    description:
      "A professional portfolio website for an embroidery and graphic design agency, featuring high-quality work samples, service details, and a visually attractive showcase layout.",
    imgUrl: "/images/projects/coderateash.png",
    features: [
      "Showcase of embroidery and graphic design work",
      "Clean and aesthetic portfolio layout",
      "Services section with detailed offerings",
      "High-quality gallery for designs",
      "Fully responsive UI",
    ],
    techStack: ["Next.js", "Tailwind CSS"],
    projectLink: "https://coderateash.vercel.app/", 
    featured: false,
  },
  {
    id: 5,
    title: "DSAHub Blog Site",
    description:
      "A blogging site about Data Structures and Algorithms built using Next.js and Sanity CMS.",
    imgUrl: "/images/projects/dsahub-blog-site.jpg",
    features: ["Modern design", "CMS integration", "SEO optimized"],
    techStack: ["Next.js", "Sanity"],
    projectLink: "https://dsahub.vercel.app/",
    featured: true,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and achievements.",
    imgUrl: "/images/projects/portfolio-website.jpg",
    features: ["Dark modern theme", "Responsive design", "Dynamic content"],
    techStack: ["Next.js", "CSS"],
    projectLink: "https://muzzamilbukhari-portfolio.vercel.app/",
    featured: true,
  },
  {
    id: 7,
    title: "Gym Website",
    description:
      "A visually appealing website for a gym, highlighting services and facilities.",
    imgUrl: "/images/projects/gym-website.jpg",
    features: [
      "Attractive UI",
      "Mobile responsiveness",
      "Interactive sections",
    ],
    techStack: ["Next.js", "Tailwind CSS"],
    projectLink: "https://xtremefitness.vercel.app/",
    featured: true,
  },
  {
    id: 8,
    title: "Process Control Block (PCB) in OS",
    description:
      "A project demonstrating process scheduling algorithms with a UI.",
    imgUrl: "/images/projects/process-control-block-pcb-in-os.png",
    features: [
      "Gantt chart display",
      "Process details table",
      "Interactive user inputs",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://github.com/MuzzamilBukhari/process-control-block.git",
    featured: false,
  },
  {
    id: 9,
    title: "Social Network Graph in DSA",
    description:
      "A terminal-based project using multilists to implement a social network graph.",
    imgUrl: "/images/projects/social-network-graph.jpg",
    features: [
      "Terminal-based operations",
      "Multi-list implementation",
      "Data structure visualization",
    ],
    techStack: ["C++"],
    projectLink: "https://github.com/MuzzamilBukhari/DSA-Project.git",
    featured: false,
  },
  {
    id: 10,
    title: "Ecommerce Website Design",
    description: "A modern eCommerce website design built with Next.js.",
    imgUrl: "/images/projects/ecommerce-website.jpg",
    features: [
      "Responsive design",
      "Product showcase",
      "Minimalist aesthetics",
    ],
    techStack: ["Next.js", "CSS"],
    projectLink: "https://ecommerce-figma-to-nextjs-hackathon.vercel.app/",
    featured: false,
  },
  {
    id: 11,
    title: "Age Calculator",
    description:
      "A simple and interactive age calculator built with HTML, CSS, and JavaScript.",
    imgUrl: "/images/projects/age-calculator.jpg",
    features: ["Easy to use", "Real-time calculation", "Responsive layout"],
    techStack: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://age-calculator-green-sigma.vercel.app/",
    featured: false,
  },
  {
    id: 12,
    title: "QR Code Generator",
    description:
      "A tool to generate QR codes using an API and basic web technologies.",
    imgUrl: "/images/projects/qr-code-generator.jpg",
    features: ["API integration", "Custom QR code generation", "Responsive UI"],
    techStack: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://qr-code-generator-lake.vercel.app/",
    featured: false,
  },
];

export default projects;
