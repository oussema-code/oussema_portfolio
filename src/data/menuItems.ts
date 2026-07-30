export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  isSignature: boolean;
}

export const menuItems: MenuItem[] = [
  // === BOISSONS SIGNATURES (avec photos) ===
  {
    id: 'sig-1',
    name: 'Iced Matcha Latte',
    description: 'Matcha, lait d\'amande et une pointe de miel. Frais et léger.',
    price: '8.50 TND',
    category: 'Boissons Signatures',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80',
    isSignature: true,
  },
  {
    id: 'sig-2',
    name: 'Spanish Latte au Lait d\'Amande',
    description: 'Double espresso, lait concentré sucré et lait d\'amande. Un classique espagnol revisité.',
    price: '9.00 TND',
    category: 'Boissons Signatures',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80',
    isSignature: true,
  },
  {
    id: 'sig-3',
    name: 'Cold Brew Caramel & Vanille',
    description: 'Infusion froide 24h, sirop caramel maison, vanille. Ultra rafraîchissant.',
    price: '8.00 TND',
    category: 'Boissons Signatures',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
    isSignature: true,
  },
  {
    id: 'sig-4',
    name: 'Latte à la Pistache',
    description: 'Espresso onctueux, crème de pistache, lait moussé. Notre best-seller — testé et approuvé.',
    price: '9.50 TND',
    category: 'Boissons Signatures',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&q=80',
    isSignature: true,
  },

  // === CAFÉS CLASSIQUES (texte uniquement) ===
  {
    id: 'clas-1',
    name: 'Espresso (Simple / Double)',
    description: 'Corsé et intense. Notre mélange maison Éthiopie & Brésil.',
    price: '3.00 / 4.50 TND',
    category: 'Cafés Classiques',
    image: '',
    isSignature: false,
  },
  {
    id: 'clas-2',
    name: 'Americano',
    description: 'Espresso allongé à l\'eau chaude. Simple et efficace.',
    price: '4.00 TND',
    category: 'Cafés Classiques',
    image: '',
    isSignature: false,
  },
  {
    id: 'clas-3',
    name: 'Cappuccino',
    description: 'Espresso, lait moussé et un nuage de mousse. Le rituel du matin.',
    price: '5.00 TND',
    category: 'Cafés Classiques',
    image: '',
    isSignature: false,
  },
  {
    id: 'clas-4',
    name: 'Flat White',
    description: 'Double shot, micro-mousse veloutée. D\'origine australienne.',
    price: '5.50 TND',
    category: 'Cafés Classiques',
    image: '',
    isSignature: false,
  },
  {
    id: 'clas-5',
    name: 'Latte',
    description: 'Espresso généreux + lait chaud. Impossible de se tromper.',
    price: '5.50 TND',
    category: 'Cafés Classiques',
    image: '',
    isSignature: false,
  },
  {
    id: 'clas-6',
    name: 'Mocha',
    description: 'Espresso, chocolat noir fondant et lait crémeux. Pour les gourmands.',
    price: '6.50 TND',
    category: 'Cafés Classiques',
    image: '',
    isSignature: false,
  },
  {
    id: 'clas-7',
    name: 'Café Turc',
    description: 'Préparé à l\'ancienne dans le cezve. Servi avec un petit loukoum.',
    price: '3.50 TND',
    category: 'Cafés Classiques',
    image: '',
    isSignature: false,
  },

  // === THÉS & INFUSIONS (texte uniquement) ===
  {
    id: 'tea-1',
    name: 'Thé Vert à la Menthe',
    description: 'Thé vert gunpowder, menthe fraîche, sucre. La vraie recette marocaine.',
    price: '4.00 TND',
    category: 'Thés & Infusions',
    image: '',
    isSignature: false,
  },
  {
    id: 'tea-2',
    name: 'Chai Latte',
    description: 'Épices douces (cannelle, cardamome, gingembre), lait moussé, miel.',
    price: '6.00 TND',
    category: 'Thés & Infusions',
    image: '',
    isSignature: false,
  },
  {
    id: 'tea-3',
    name: 'Infusion Camomille & Miel',
    description: 'Camomille bio, miel local, verveine. Pour décompresser.',
    price: '4.00 TND',
    category: 'Thés & Infusions',
    image: '',
    isSignature: false,
  },

  // === PÂTISSERIES (avec photos) ===
  {
    id: 'pat-1',
    name: 'Croissant aux Amandes',
    description: 'Pâte feuilletée pur beurre, crème d\'amandes maison, amandes effilées.',
    price: '4.50 TND',
    category: 'Pâtisseries',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80',
    isSignature: true,
  },
  {
    id: 'pat-2',
    name: 'Cheesecake Speculoos',
    description: 'Onctueux, croustillant et caramélisé — la pause sucrée parfaite.',
    price: '6.50 TND',
    category: 'Pâtisseries',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=600&q=80',
    isSignature: true,
  },
  {
    id: 'pat-3',
    name: 'Cookie Chocolat & Noisette',
    description: 'Chocolat noir 70%, noisettes torréfiées, fleur de sel. Cuit sur place.',
    price: '3.50 TND',
    category: 'Pâtisseries',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80',
    isSignature: true,
  },
  {
    id: 'pat-4',
    name: 'Muffin Myrtille & Citron',
    description: 'Myrtilles, zeste de citron et streusel craquant. Idéal avec un café.',
    price: '4.00 TND',
    category: 'Pâtisseries',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80',
    isSignature: true,
  },
];
