/** Google Maps search for New Way Traders office (Ashram Road, Ahmedabad). */
export const GOOGLE_MAPS_NWT =
  "https://www.google.com/maps/search/?api=1&query=New+Way+Traders+Smart+billing+machines+Opposite+Kothawala+Flats+Pritmanagar+Ashram+Road+Ahmedabad";

export const SITE = {
  name: "RR POS",
  tagline: "Fast Billing. Smart Control. Real Growth.",
  description:
    "All-in-one POS system for modern retail stores. Simplify billing, inventory, reporting, and hardware in one seamless system.",
  url: "https://rrpos.in",
  phone: "+91 98765 43210",
  email: "hello@rrpos.in",
  whatsapp: "https://wa.me/919876543210",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Solution",
    href: "/solutions",
    children: [
      { label: "Retail POS", href: "/solutions#retail", description: "All-in-one solution for retail shops" },
      { label: "Inventory Tech", href: "/solutions#inventory", description: "Smart stock management & tracking" },
      { label: "Analytics Hub", href: "/solutions#analytics", description: "Data-driven insights for growth" },
      { label: "Multi-Store", href: "/solutions#multistore", description: "Scale your business effortlessly" },
    ],
  },
  { label: "Product", href: "/product" },
  { label: "Service", href: "/service" },
  { label: "Company", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];


export const FEATURES = [
  {
    title: "Instant Billing",
    description: "Generate invoices in under 2 seconds. Barcode scanning, quick-add items, and smart search make checkout blazing fast.",
    icon: "Zap",
  },
  {
    title: "Real-Time Inventory",
    description: "Track every product across all stores. Get low-stock alerts, auto purchase orders, and batch management.",
    icon: "Package",
  },
  {
    title: "Smart Reports",
    description: "Daily sales, profit margins, top sellers, and staff performance — all on a beautiful live dashboard.",
    icon: "BarChart3",
  },
  {
    title: "Multi-Store Control",
    description: "Manage inventory, pricing, and staff across all your branches from a single dashboard.",
    icon: "Store",
  },
  {
    title: "GST Compliant",
    description: "Automatic GST calculation, GSTR-ready reports, and e-invoicing support built right in.",
    icon: "FileCheck",
  },
  {
    title: "Customer Management",
    description: "Build loyalty programs, track purchase history, and send targeted offers to keep customers coming back.",
    icon: "Users",
  },
];

export const HARDWARE_PRODUCTS = [
  {
    name: "RR POS Terminal",
    subtitle: "Your all-in-one billing powerhouse",
    description: "The all-in-one billing powerhouse. 15.6\" touchscreen, built-in printer, and blazing performance.",
    price: "₹32,999",
    emi: "₹2,750/mo",
    highlight: true,
    image: "/pos-terminal.png",
    video: "/mixkit-pharmacy-worker-accepts-payment-at-checkout-5407-hd-ready.mp4",
  },
  {
    name: "Barcode Scanner",
    subtitle: "High-speed scanning that keeps up with you",
    description: "High-speed 1D/2D scanning. Wireless connectivity with 12-hour battery life.",
    price: "₹3,499",
    emi: "₹292/mo",
    highlight: false,
    image: "/barcode-scanner.png",
    video: "/mixkit-pharmacy-worker-accepts-payment-at-checkout-5407-hd-ready.mp4",
  },
  {
    name: "Thermal Printer",
    subtitle: "Fast receipts, every single time",
    description: "80mm fast thermal printing. Auto-cutter, USB + Bluetooth. Print receipts in under a second.",
    price: "₹5,999",
    emi: "₹500/mo",
    highlight: false,
    image: "/thermal-printer.png",
    video: "/mixkit-pharmacy-worker-accepts-payment-at-checkout-5407-hd-ready.mp4",
  },
  {
    name: "Cash Drawer",
    subtitle: "Secure cash management, built to last",
    description: "Heavy-duty metal build. 5 bill + 8 coin compartments. Auto-open on sale.",
    price: "₹3,999",
    emi: "₹334/mo",
    highlight: false,
    image: "/cash-drawer.png",
    video: "/mixkit-pharmacy-worker-accepts-payment-at-checkout-5407-hd-ready.mp4",
  },
];

export const PRICING_PLANS = [
  {
    name: "Basic",
    price: "₹799",
    period: "/month",
    description: "Perfect for single-store retail shops getting started.",
    features: [
      "1 store, 1 terminal",
      "Billing & invoicing",
      "Basic inventory management",
      "Daily sales reports",
      "GST invoicing",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹1,999",
    period: "/month",
    description: "For growing businesses that need advanced control.",
    features: [
      "Up to 3 stores, 5 terminals",
      "Everything in Basic",
      "Advanced inventory with alerts",
      "Multi-store management",
      "Customer loyalty program",
      "Analytics dashboard",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large retailers and franchise businesses.",
    features: [
      "Unlimited stores & terminals",
      "Everything in Pro",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced role management",
      "API access",
      "24/7 phone support",
      "On-site training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Owner, Kumar Supermart",
    content: "RR POS cut our billing time by 70%. The inventory alerts alone saved us lakhs in dead stock. Best investment we made.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Manager, FreshBasket Grocery",
    content: "Managing 3 branches used to be a nightmare. Now I see everything from one dashboard. The multi-store feature is a game-changer.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Owner, MedPlus Pharmacy",
    content: "GST compliance was our biggest headache. RR POS handles it automatically. Filing returns went from 2 days to 2 clicks.",
    rating: 5,
  },
  {
    name: "Sunita Reddy",
    role: "Owner, Style Studio Garments",
    content: "The barcode system is incredibly fast. My staff learned it in one day. Customer checkout is now under 30 seconds.",
    rating: 5,
  },
];

export const POS_FEATURES = [
  {
    id: "billing",
    title: "Instant Billing",
    description:
      "Generate invoices in seconds with barcode scanning, quick-add items, and smart search — making every checkout fast and accurate.",
    link: "/features#billing",
    image: "/pos-billing.png",
  },
  {
    id: "inventory",
    title: "Manage Your Inventory",
    description:
      "Track every product across all stores in real time. Get low-stock alerts, auto purchase orders, and batch management.",
    link: "/features#inventory",
    image: "/pos-inventory.png",
  },
  {
    id: "loyalty",
    title: "Grow Your Customer Base",
    description:
      "Build loyalty programs, send targeted campaigns, and track customer preferences to keep them coming back for more.",
    link: "/features#loyalty",
    image: "/pos-loyalty.png",
  },
  {
    id: "revenue",
    title: "Track Your Revenue",
    description:
      "See daily sales, profit margins, and expense breakdowns across all locations from one beautiful dashboard.",
    link: "/features#reports",
    image: "/pos-revenue.png",
  },
  {
    id: "hardware",
    title: "Connect Your Hardware",
    description:
      "POS terminals, barcode scanners, thermal printers, and cash drawers — all integrated seamlessly with RR POS.",
    link: "/hardware",
    image: "/pos-hardware.png",
  },
];

export const INDUSTRIES = [
  {
    name: "Grocery & Supermarket",
    description: "Fast billing, weight-based items, inventory tracking, and supplier management for high-volume retail.",
    stats: "2,500+ stores",
    icon: "ShoppingCart",
  },
  {
    name: "Pharmacy",
    description: "Batch tracking, expiry management, drug scheduling, and GST-compliant invoicing for medical retail.",
    stats: "800+ pharmacies",
    icon: "Pill",
  },
  {
    name: "Garments & Fashion",
    description: "Size-color variants, barcode labels, seasonal discounts, and customer loyalty programs for fashion retail.",
    stats: "1,200+ stores",
    icon: "Shirt",
  },
  {
    name: "Electronics",
    description: "Serial number tracking, warranty management, EMI billing, and multi-brand inventory for electronics retail.",
    stats: "600+ stores",
    icon: "Monitor",
  },
];
