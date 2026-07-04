import p1Main from '../assets/product1.jpeg'
import p1Img2 from '../assets/2.jpeg'
import p1Img3 from '../assets/3.jpeg'
import p1Img4 from '../assets/4.jpeg'

import p2Img1 from '../assets/2.1.jpeg'
import p2Img2 from '../assets/2.2.jpeg'
import p2Img3 from '../assets/2.3.jpeg'
import p2Img4 from '../assets/2.4.jpeg'

import p3Img1 from '../assets/3.1.jpeg'
import p3Img2 from '../assets/3.2.jpeg'
import p3Img3 from '../assets/3.3.jpeg'
import p3Img4 from '../assets/3.4.jpeg'

export const products = [
  {
    id: 'p1',
    name: 'Noir Rose 3-Piece Suit',
    category: 'Ladies Suits',
    price: 4499,
    originalPrice: 5999,
    discountPercent: 25,
    rating: 4.8,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Pink'],
    description:
      'A black floral-printed 3-piece suit with intricate pink and white embroidery on the neckline and hem, paired with a soft blush lace-edged dupatta. Elegant, breathable fabric perfect for festive days out.',
    images: [p1Main, p1Img2, p1Img3, p1Img4],
    badge: 'Best Seller',
  },
  {
    id: 'p2',
    name: 'Ivory Chikankari 3-Piece Suit',
    category: 'Ladies Suits',
    price: 3999,
    originalPrice: 5499,
    discountPercent: 27,
    rating: 4.7,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White'],
    description:
      'A crisp white suit with delicate cutwork embroidery on the neckline and a subtle floral print throughout, finished with a pastel pink and blue printed dupatta. Timeless and light for everyday elegance.',
    images: [p2Img1, p2Img2, p2Img3, p2Img4],
    badge: 'New Arrival',
  },
  {
    id: 'p3',
    name: 'Wild Zebra Embroidered Suit',
    category: 'Ladies Suits',
    price: 4799,
    originalPrice: 6499,
    discountPercent: 26,
    rating: 4.9,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Red'],
    description:
      'A bold black and white zebra-print suit with statement red and gold embroidered motifs on the yoke, paired with a striking matching dupatta. A head-turning pick for celebrations.',
    images: [p3Img1, p3Img2, p3Img3, p3Img4],
    badge: 'Trending',
  },
];
