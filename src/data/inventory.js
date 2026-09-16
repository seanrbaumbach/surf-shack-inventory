// Mock inventory data for Salt Line Surf Co. — a fictional surf brand & shop.
// All data below is fabricated for portfolio/demo purposes only.

export const company = {
  name: 'Salt Line Surf Co.',
  tagline: 'Inventory Dashboard',
  locations: ['Huntington Beach, CA', 'Oceanside, CA', 'Waikiki, HI'],
};

export const categories = [
  'Surfboards',
  'Wetsuits',
  'Apparel',
  'Accessories',
  'Footwear',
];

// icon keyword used by the UI to pick an emoji per category
export const categoryIcons = {
  Surfboards: '🏄',
  Wetsuits: '🤿',
  Apparel: '👕',
  Accessories: '🧢',
  Footwear: '🩴',
};

export const inventory = [
  // Surfboards
  { id: 'SL-1001', name: 'Longboard Classic 9\'2"', category: 'Surfboards', sku: 'SB-LB92', stock: 6, reorderLevel: 5, price: 899, cost: 480, supplier: 'Pacific Shapers Co-op', location: 'Huntington Beach, CA', unitsSoldLast30: 9 },
  { id: 'SL-1002', name: 'Shortboard Pro 6\'0"', category: 'Surfboards', sku: 'SB-SP60', stock: 3, reorderLevel: 6, price: 749, cost: 410, supplier: 'Pacific Shapers Co-op', location: 'Huntington Beach, CA', unitsSoldLast30: 14 },
  { id: 'SL-1003', name: 'Fish Retro 5\'8"', category: 'Surfboards', sku: 'SB-FR58', stock: 8, reorderLevel: 4, price: 679, cost: 360, supplier: 'Pacific Shapers Co-op', location: 'Oceanside, CA', unitsSoldLast30: 5 },
  { id: 'SL-1004', name: 'Funboard 7\'6"', category: 'Surfboards', sku: 'SB-FB76', stock: 2, reorderLevel: 5, price: 599, cost: 320, supplier: 'Islander Board Works', location: 'Waikiki, HI', unitsSoldLast30: 11 },
  { id: 'SL-1005', name: 'Foamie Beginner 8\'0"', category: 'Surfboards', sku: 'SB-FM80', stock: 15, reorderLevel: 8, price: 349, cost: 180, supplier: 'Islander Board Works', location: 'Waikiki, HI', unitsSoldLast30: 22 },
  { id: 'SL-1006', name: 'Gun 7\'0" Big Wave', category: 'Surfboards', sku: 'SB-GN70', stock: 1, reorderLevel: 3, price: 1099, cost: 610, supplier: 'Pacific Shapers Co-op', location: 'Huntington Beach, CA', unitsSoldLast30: 2 },
  { id: 'SL-1007', name: 'Mini Simmons 5\'4"', category: 'Surfboards', sku: 'SB-MS54', stock: 5, reorderLevel: 4, price: 629, cost: 340, supplier: 'Islander Board Works', location: 'Oceanside, CA', unitsSoldLast30: 7 },

  // Wetsuits
  { id: 'SL-2001', name: '4/3mm Fullsuit - Men\'s', category: 'Wetsuits', sku: 'WS-M43F', stock: 18, reorderLevel: 10, price: 289, cost: 150, supplier: 'Coldwater Neoprene Ltd.', location: 'Huntington Beach, CA', unitsSoldLast30: 26 },
  { id: 'SL-2002', name: '3/2mm Fullsuit - Women\'s', category: 'Wetsuits', sku: 'WS-W32F', stock: 14, reorderLevel: 10, price: 269, cost: 140, supplier: 'Coldwater Neoprene Ltd.', location: 'Huntington Beach, CA', unitsSoldLast30: 19 },
  { id: 'SL-2003', name: '2mm Spring Suit', category: 'Wetsuits', sku: 'WS-2SPR', stock: 22, reorderLevel: 12, price: 149, cost: 78, supplier: 'Coldwater Neoprene Ltd.', location: 'Oceanside, CA', unitsSoldLast30: 31 },
  { id: 'SL-2004', name: '5/4mm Hooded Fullsuit', category: 'Wetsuits', sku: 'WS-54HD', stock: 4, reorderLevel: 6, price: 399, cost: 215, supplier: 'Coldwater Neoprene Ltd.', location: 'Oceanside, CA', unitsSoldLast30: 8 },
  { id: 'SL-2005', name: 'Youth 3/2mm Fullsuit', category: 'Wetsuits', sku: 'WS-Y32F', stock: 9, reorderLevel: 8, price: 179, cost: 92, supplier: 'Coldwater Neoprene Ltd.', location: 'Waikiki, HI', unitsSoldLast30: 12 },
  { id: 'SL-2006', name: 'Wetsuit Boots 3mm', category: 'Wetsuits', sku: 'WS-BT3M', stock: 5, reorderLevel: 10, price: 69, cost: 32, supplier: 'Coldwater Neoprene Ltd.', location: 'Waikiki, HI', unitsSoldLast30: 15 },

  // Apparel
  { id: 'SL-3001', name: 'Salt Line Logo Tee', category: 'Apparel', sku: 'AP-LGTEE', stock: 64, reorderLevel: 25, price: 32, cost: 11, supplier: 'Coastal Cotton Mills', location: 'Huntington Beach, CA', unitsSoldLast30: 48 },
  { id: 'SL-3002', name: 'UPF 50 Long Sleeve Rashguard', category: 'Apparel', sku: 'AP-RSHG', stock: 33, reorderLevel: 20, price: 54, cost: 24, supplier: 'Coastal Cotton Mills', location: 'Oceanside, CA', unitsSoldLast30: 37 },
  { id: 'SL-3003', name: 'Boardshorts - Classic Fit', category: 'Apparel', sku: 'AP-BSHT', stock: 12, reorderLevel: 20, price: 58, cost: 26, supplier: 'Coastal Cotton Mills', location: 'Huntington Beach, CA', unitsSoldLast30: 41 },
  { id: 'SL-3004', name: 'Bikini Set - Tidepool Print', category: 'Apparel', sku: 'AP-BKNI', stock: 19, reorderLevel: 15, price: 72, cost: 30, supplier: 'Coastal Cotton Mills', location: 'Waikiki, HI', unitsSoldLast30: 29 },
  { id: 'SL-3005', name: 'Zip Hoodie - Salt Line', category: 'Apparel', sku: 'AP-HOOD', stock: 8, reorderLevel: 15, price: 68, cost: 29, supplier: 'Coastal Cotton Mills', location: 'Oceanside, CA', unitsSoldLast30: 21 },
  { id: 'SL-3006', name: 'Snapback Hat - Wave Logo', category: 'Apparel', sku: 'AP-SNAP', stock: 27, reorderLevel: 15, price: 28, cost: 10, supplier: 'Coastal Cotton Mills', location: 'Huntington Beach, CA', unitsSoldLast30: 33 },

  // Accessories
  { id: 'SL-4001', name: 'Surfboard Wax - Warm Water', category: 'Accessories', sku: 'AC-WAXW', stock: 140, reorderLevel: 60, price: 4, cost: 1, supplier: 'Grip & Glide Supply', location: 'Huntington Beach, CA', unitsSoldLast30: 96 },
  { id: 'SL-4002', name: 'Surfboard Wax - Cold Water', category: 'Accessories', sku: 'AC-WAXC', stock: 88, reorderLevel: 60, price: 4, cost: 1, supplier: 'Grip & Glide Supply', location: 'Oceanside, CA', unitsSoldLast30: 52 },
  { id: 'SL-4003', name: 'Leash 6\' Competition', category: 'Accessories', sku: 'AC-LSH6', stock: 21, reorderLevel: 20, price: 34, cost: 14, supplier: 'Grip & Glide Supply', location: 'Huntington Beach, CA', unitsSoldLast30: 27 },
  { id: 'SL-4004', name: 'Traction Pad - 3 Piece', category: 'Accessories', sku: 'AC-TRPD', stock: 16, reorderLevel: 18, price: 45, cost: 19, supplier: 'Grip & Glide Supply', location: 'Oceanside, CA', unitsSoldLast30: 18 },
  { id: 'SL-4005', name: 'Board Bag - Day Bag 7\'', category: 'Accessories', sku: 'AC-BGDY', stock: 7, reorderLevel: 10, price: 89, cost: 41, supplier: 'Grip & Glide Supply', location: 'Waikiki, HI', unitsSoldLast30: 9 },
  { id: 'SL-4006', name: 'Fin Set - FCS Compatible', category: 'Accessories', sku: 'AC-FINS', stock: 24, reorderLevel: 15, price: 79, cost: 35, supplier: 'Grip & Glide Supply', location: 'Huntington Beach, CA', unitsSoldLast30: 16 },
  { id: 'SL-4007', name: 'Roof Rack Board Straps', category: 'Accessories', sku: 'AC-STRP', stock: 3, reorderLevel: 12, price: 24, cost: 9, supplier: 'Grip & Glide Supply', location: 'Oceanside, CA', unitsSoldLast30: 14 },
  { id: 'SL-4008', name: 'Polarized Surf Sunglasses', category: 'Accessories', sku: 'AC-SUNG', stock: 41, reorderLevel: 20, price: 62, cost: 26, supplier: 'Grip & Glide Supply', location: 'Waikiki, HI', unitsSoldLast30: 23 },

  // Footwear
  { id: 'SL-5001', name: 'Reef Walker Sandals', category: 'Footwear', sku: 'FW-RFWK', stock: 6, reorderLevel: 15, price: 38, cost: 16, supplier: 'Tidepool Footwear Co.', location: 'Waikiki, HI', unitsSoldLast30: 25 },
  { id: 'SL-5002', name: 'Classic Rubber Flip Flops', category: 'Footwear', sku: 'FW-FLIP', stock: 55, reorderLevel: 25, price: 22, cost: 8, supplier: 'Tidepool Footwear Co.', location: 'Huntington Beach, CA', unitsSoldLast30: 44 },
  { id: 'SL-5003', name: 'Neoprene Surf Booties Low', category: 'Footwear', sku: 'FW-BOOT', stock: 9, reorderLevel: 12, price: 55, cost: 24, supplier: 'Tidepool Footwear Co.', location: 'Oceanside, CA', unitsSoldLast30: 13 },
];

// Trailing 6-month revenue trend (aggregate across all locations, in USD)
export const revenueTrend = [
  { month: 'Feb', revenue: 48200, unitsSold: 612 },
  { month: 'Mar', revenue: 55400, unitsSold: 701 },
  { month: 'Apr', revenue: 61250, unitsSold: 774 },
  { month: 'May', revenue: 72800, unitsSold: 902 },
  { month: 'Jun', revenue: 89600, unitsSold: 1088 },
  { month: 'Jul', revenue: 79300, unitsSold: 964 },
];
