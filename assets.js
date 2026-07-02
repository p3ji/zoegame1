// Cozy Plating Game - Asset Definitions (SVG Graphics & Themes)

export const THEMES = {
  tea_party: {
    id: 'tea_party',
    name: 'Cozy Afternoon Tea',
    description: 'A delicate selection of scones, creams, and dainty pastries for a quiet rainy afternoon.',
    recommendedPlate: 'porcelain_plate',
    ingredients: ['scone_top', 'scone_bottom', 'strawberry_jam', 'clotted_cream', 'macaron_pink', 'macaron_green', 'teacup_vintage', 'teapot_vintage', 'tea_bag', 'honey_jar', 'sugar_cube', 'lemon_slice', 'mint_leaf', 'lavender_sprig']
  },
  autumn_feast: {
    id: 'autumn_feast',
    name: 'Harvest Forest Feast',
    description: 'Warm, rustic flavors of squash, pecans, figs, and pumpkin soup celebrating the autumn colors.',
    recommendedPlate: 'slate_plate',
    ingredients: ['soup_bowl', 'roasted_squash', 'pecan_half', 'fig_slice', 'pomegranate_seeds', 'maple_leaf', 'rosemary_sprig', 'cinnamon_stick', 'warm_cider']
  },
  midnight_snack: {
    id: 'midnight_snack',
    name: 'Starlit Midnight Cafe',
    description: 'Fluffy pancakes, sweet syrups, rich brownies, and fresh berries to accompany late night thoughts.',
    recommendedPlate: 'starry_saucer',
    ingredients: ['pancakes', 'syrup_drizzle', 'brownie_square', 'whipped_cream', 'cocoa_mug', 'fried_egg', 'banana_slice', 'strawberry_whole', 'blueberry', 'star_sprinkles', 'chamomile_flower']
  },
  zen_bento: {
    id: 'zen_bento',
    name: 'Zen Table Bento',
    description: 'A balanced and beautiful arrangement of rice, noodles, fresh edamame, and shaped vegetables.',
    recommendedPlate: 'bento_box',
    ingredients: ['rice_bed', 'soba_nest', 'matcha_cup', 'salmon_sushi', 'soy_sauce_dish', 'edamame_pod', 'carrot_star', 'tamagoyaki', 'cucumber_fan', 'cherry_blossom', 'tofu_cube']
  }
};

export const CLIENTS = [
  {
    name: 'Clara',
    avatar: '👵',
    messages: [
      "Hello Zoe, dear. Could you make me a sweet scone with cream and jam? A hot cup of tea on a vintage porcelain plate would remind me of my grandmother's garden.",
      "Good afternoon Zoe. I feel like writing a letter today. Could you plate a couple of colorful macarons, a slice of lemon, and a warm teapot to keep me company?",
      "Zoe, my sweet. It is raining so softly outside. I would love a herbal tea bag, some sugar cubes, and a freshly sliced scone with plenty of clotted cream."
    ],
    theme: 'tea_party'
  },
  {
    name: 'Arlo',
    avatar: '🦊',
    messages: [
      "Zoe, the forest leaves are falling, and I'm looking for something rustic. An autumn feast on a dark stone plate—some roasted squash, fresh figs, and a warm bowl of soup would be perfect.",
      "Hi Zoe! The chill is setting in. Could you arrange a warm mug of apple cider with cinnamon bark, toasted pecans, and a golden maple leaf on a slate tray?",
      "Hello Zoe. I found some beautiful figs today. Please pair them with pumpkin soup, acorn squash, and fresh rosemary sprigs for a cozy forest lunch."
    ],
    theme: 'autumn_feast'
  },
  {
    name: 'Maya',
    avatar: '🎧',
    messages: [
      "I've been studying all night under the stars, Zoe. I'd love a cozy midnight stack of pancakes with syrup, fresh berries, and starry sprinkles on a magical blue saucer.",
      "Hey Zoe! Need a late-night brain boost. Could you plate a rich fudge brownie square with whipped cream and a hot mug of cocoa loaded with marshmallows?",
      "Zoe, look at the stars tonight! Can you make me a sweet treat? Some pancakes with banana slices, strawberries, and chamomile blossoms would be so relaxing."
    ],
    theme: 'midnight_snack'
  },
  {
    name: 'Kenji',
    avatar: '🎋',
    messages: [
      "Seeking a moment of calm, Zoe. I would enjoy arranging a neat, colorful bento box with star-cut carrots, edamame, and rolled omelette on a bed of fresh rice.",
      "Hello Zoe. Let's design a simple, peaceful lunch. I would like some soba noodles, green matcha tea, and fresh tofu cubes garnished with cherry blossoms.",
      "Zoe, peace to you. Could you prepare a salmon nigiri sushi platter with edamame pods, cucumber fans, and a small dish of soy sauce in my bento tray?"
    ],
    theme: 'zen_bento'
  }
];

export const PLATES = {
  wooden_tray: {
    id: 'wooden_tray',
    name: 'Rustic Wooden Tray',
    sound: 'wood_tap',
    svg: `
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Outer wooden frame -->
        <rect x="15" y="15" width="370" height="370" rx="20" ry="20" fill="#8B5A2B" stroke="#5C3A1A" stroke-width="8" />
        <!-- Inner wooden board -->
        <rect x="35" y="35" width="330" height="330" rx="12" ry="12" fill="#CD853F" />
        <!-- Wood grains -->
        <path d="M 45 80 Q 200 90 355 80" fill="none" stroke="#B87333" stroke-width="2" opacity="0.4" />
        <path d="M 45 160 Q 150 145 355 170" fill="none" stroke="#B87333" stroke-width="3" opacity="0.3" />
        <path d="M 45 240 Q 250 260 355 235" fill="none" stroke="#B87333" stroke-width="2.5" opacity="0.4" />
        <path d="M 45 310 Q 180 300 355 320" fill="none" stroke="#B87333" stroke-width="2" opacity="0.3" />
        <!-- Shadow depth -->
        <rect x="35" y="35" width="330" height="330" rx="12" fill="none" stroke="#3A220F" stroke-width="6" opacity="0.15" />
      </svg>
    `
  },
  porcelain_plate: {
    id: 'porcelain_plate',
    name: 'Vintage Porcelain Plate',
    sound: 'ceramic_clink',
    svg: `
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Outer cast shadow -->
        <circle cx="200" cy="200" r="185" fill="#fcfcfc" filter="drop-shadow(0 10px 12px rgba(0,0,0,0.15))" />
        <!-- Main Plate Rim -->
        <circle cx="200" cy="200" r="180" fill="#FFF8F0" stroke="#E6D7C3" stroke-width="2" />
        
        <!-- Floral Rim Design -->
        <circle cx="200" cy="200" r="162" fill="none" stroke="#5072A7" stroke-width="3" stroke-dasharray="8 6" opacity="0.75" />
        <path d="M 200 22 C 230 22 250 35 250 50 C 250 65 210 70 200 70 C 190 70 150 65 150 50 C 150 35 170 22 200 22" fill="none" stroke="#5072A7" stroke-width="1.5" opacity="0.6" />
        <path d="M 378 200 C 378 230 365 250 350 250 C 335 250 330 210 330 200 C 330 190 335 150 350 150 C 365 150 378 170 378 200" fill="none" stroke="#5072A7" stroke-width="1.5" opacity="0.6" />
        <path d="M 200 378 C 170 378 150 365 150 350 C 150 335 190 330 200 330 C 210 330 250 335 250 350 C 250 365 230 378 200 378" fill="none" stroke="#5072A7" stroke-width="1.5" opacity="0.6" />
        <path d="M 22 200 C 22 170 35 150 30 150 C 65 150 70 190 70 200 C 70 210 65 250 50 250 C 35 250 22 230 22 200" fill="none" stroke="#5072A7" stroke-width="1.5" opacity="0.6" />
        
        <!-- Inner Ring -->
        <circle cx="200" cy="200" r="120" fill="none" stroke="#5072A7" stroke-width="1.5" opacity="0.4" />
        <!-- Soft gold inner rim line -->
        <circle cx="200" cy="200" r="116" fill="none" stroke="#D4AF37" stroke-width="2" opacity="0.5" />
        <!-- Base Basin of Plate -->
        <circle cx="200" cy="200" r="112" fill="#FFFCF9" />
        <!-- Shine highlight -->
        <path d="M 60 120 A 150 150 0 0 1 200 45" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round" opacity="0.6" />
      </svg>
    `
  },
  slate_plate: {
    id: 'slate_plate',
    name: 'Rough Slate Plate',
    sound: 'ceramic_clink',
    svg: `
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Shadow -->
        <rect x="25" y="25" width="350" height="350" rx="8" fill="#1A1A1A" opacity="0.3" filter="blur(8px)" />
        <!-- Slate Body -->
        <rect x="20" y="20" width="360" height="360" rx="6" fill="#2E3033" stroke="#232528" stroke-width="4" />
        <!-- Flaked rock texture lines -->
        <path d="M 25 50 Q 80 40 180 55 T 375 45" fill="none" stroke="#484B50" stroke-width="2" />
        <path d="M 40 180 Q 150 200 280 170 T 360 190" fill="none" stroke="#484B50" stroke-width="1.5" opacity="0.7" />
        <path d="M 30 320 Q 200 300 370 330" fill="none" stroke="#1A1A1A" stroke-width="2" opacity="0.5" />
        <!-- Outer chipped border highlights -->
        <path d="M 22 22 L 378 22 L 378 378 L 22 378 Z" fill="none" stroke="#5E6268" stroke-width="1.5" stroke-dasharray="12 24" />
        <!-- Texture dots -->
        <circle cx="90" cy="80" r="1.5" fill="#5E6268" opacity="0.6" />
        <circle cx="280" cy="110" r="2" fill="#5E6268" opacity="0.4" />
        <circle cx="150" cy="290" r="1" fill="#5E6268" opacity="0.8" />
        <circle cx="310" cy="270" r="2.5" fill="#1A1A1A" opacity="0.3" />
      </svg>
    `
  },
  bento_box: {
    id: 'bento_box',
    name: 'Bamboo Bento Box',
    sound: 'wood_tap',
    svg: `
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Outer Shadow -->
        <rect x="15" y="15" width="370" height="370" rx="10" fill="#000000" opacity="0.25" filter="blur(6px)" />
        <!-- Main box body (black lacquer) -->
        <rect x="15" y="15" width="370" height="370" rx="8" fill="#1C1A17" stroke="#8B1C14" stroke-width="10" />
        <!-- Red lacquer inner rim -->
        <rect x="25" y="25" width="350" height="350" rx="4" fill="none" stroke="#A3241C" stroke-width="6" />
        <!-- Compartment Divider (Red & Black) -->
        <line x1="200" y1="25" x2="200" y2="375" stroke="#8B1C14" stroke-width="10" />
        <line x1="200" y1="200" x2="375" y2="200" stroke="#8B1C14" stroke-width="10" />
        <!-- Compartment inner shadows -->
        <rect x="30" y="30" width="165" height="340" fill="#2E2B27" />
        <rect x="205" y="30" width="165" height="165" fill="#2E2B27" />
        <rect x="205" y="205" width="165" height="165" fill="#2E2B27" />
      </svg>
    `
  },
  starry_saucer: {
    id: 'starry_saucer',
    name: 'Midnight Starry Saucer',
    sound: 'ceramic_clink',
    svg: `
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <!-- Cast shadow -->
        <circle cx="200" cy="200" r="185" fill="#000" opacity="0.12" filter="blur(8px)" />
        <!-- Plate Rim (Deep Space Blue) -->
        <circle cx="200" cy="200" r="180" fill="#111B30" stroke="#D4AF37" stroke-width="4" />
        
        <!-- Stars on Rim -->
        <g fill="#FBE69C" opacity="0.8">
          <!-- Tiny star symbols -->
          <polygon points="200,32 202,37 207,37 203,40 205,45 200,42 195,45 197,40 193,37 198,37" />
          <polygon points="340,110 341,114 345,114 342,116 343,120 340,118 337,120 338,116 335,114 339,114" />
          <polygon points="320,290 321,294 325,294 322,296 323,300 320,298 317,300 318,296 315,294 319,294" />
          <polygon points="80,310 81,314 85,314 82,316 83,320 80,318 77,320 78,316 75,314 79,314" />
          <polygon points="60,130 61,134 65,134 62,136 63,140 60,138 57,140 58,136 55,134 59,134" />
        </g>
        
        <!-- Nebula soft ring -->
        <circle cx="200" cy="200" r="130" fill="none" stroke="#2B4673" stroke-width="6" opacity="0.5" />
        <!-- Gold divider ring -->
        <circle cx="200" cy="200" r="120" fill="none" stroke="#D4AF37" stroke-width="1.5" opacity="0.7" />
        
        <!-- Central basin (Deep Space Indigo) -->
        <circle cx="200" cy="200" r="118" fill="#18253F" />
        
        <!-- Crescent moon accent -->
        <path d="M 210 160 A 25 25 0 1 0 250 200 A 20 20 0 1 1 210 160" fill="#FBE69C" opacity="0.8" />
      </svg>
    `
  }
};

export const INGREDIENTS = {
  // --- TEA PARTY ---
  scone_bottom: {
    id: 'scone_bottom',
    name: 'Scone Base',
    category: 'Base',
    sound: 'wood_tap',
    svg: `
      <svg viewBox="0 0 120 120" width="100%" height="100%">
        <path d="M 10 70 C 10 30 110 30 110 70 C 110 90 90 110 60 110 C 30 110 10 90 10 70 Z" fill="#E6C299" stroke="#B38B6D" stroke-width="2" />
        <!-- Crumbly/baked details -->
        <path d="M 20 65 Q 60 55 100 65 L 100 78 Q 60 88 20 78 Z" fill="#F0D5B6" />
        <path d="M 25 72 Q 60 76 95 72" fill="none" stroke="#CCA785" stroke-width="2.5" stroke-linecap="round" />
        <!-- Speckles -->
        <circle cx="40" cy="45" r="2" fill="#A07250" />
        <circle cx="75" cy="50" r="2.5" fill="#A07250" />
        <circle cx="60" cy="95" r="1.5" fill="#A07250" />
      </svg>
    `
  },
  scone_top: {
    id: 'scone_top',
    name: 'Scone Top',
    category: 'Base',
    sound: 'wood_tap',
    svg: `
      <svg viewBox="0 0 120 120" width="100%" height="100%">
        <!-- Dome shape of baked scone -->
        <path d="M 15 75 C 10 30 110 30 105 75 C 100 100 20 100 15 75 Z" fill="#D2A275" stroke="#9A6B43" stroke-width="2.5" />
        <!-- Golden-brown baked top highlight -->
        <path d="M 30 45 C 40 25 80 25 90 45 C 95 55 90 70 60 70 C 30 70 25 55 30 45 Z" fill="#B07D4F" opacity="0.9" />
        <path d="M 40 38 C 50 28 70 28 80 38" fill="none" stroke="#FFD8B3" stroke-width="3" stroke-linecap="round" opacity="0.4" />
        <!-- Cracked crust folds -->
        <path d="M 25 60 Q 45 68 70 58 T 95 62" fill="none" stroke="#7A4E29" stroke-width="2" stroke-linecap="round" />
        <path d="M 35 50 Q 55 45 75 52" fill="none" stroke="#7A4E29" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    `
  },
  strawberry_jam: {
    id: 'strawberry_jam',
    name: 'Strawberry Jam Dollop',
    category: 'Topping',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Blobby jam shape -->
        <path d="M 20 50 C 15 30 45 20 60 35 C 75 25 90 50 80 65 C 70 80 40 85 25 75 C 15 65 25 55 20 50 Z" fill="#C11B29" stroke="#870E17" stroke-width="2" />
        <!-- Small seeds inside jam -->
        <circle cx="35" cy="45" r="1.5" fill="#FAD161" />
        <circle cx="55" cy="40" r="1.5" fill="#FAD161" />
        <circle cx="68" cy="52" r="1.2" fill="#FAD161" />
        <circle cx="48" cy="62" r="1.5" fill="#FAD161" />
        <circle cx="32" cy="68" r="1.2" fill="#FAD161" />
        <!-- Glossy reflections -->
        <path d="M 30 35 C 38 28 50 28 55 35" fill="none" stroke="#FFA3A8" stroke-width="3" stroke-linecap="round" />
        <path d="M 72 45 C 75 50 75 58 70 62" fill="none" stroke="#FFA3A8" stroke-width="2" stroke-linecap="round" />
      </svg>
    `
  },
  clotted_cream: {
    id: 'clotted_cream',
    name: 'Clotted Cream Twist',
    category: 'Topping',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Soft whipped dollop -->
        <path d="M 15 60 C 15 40 35 30 50 35 C 65 20 85 40 85 60 C 85 75 70 85 50 85 C 30 85 15 75 15 60 Z" fill="#FDFBF0" stroke="#DFD7BF" stroke-width="2" />
        <!-- Twirl layers -->
        <path d="M 50 35 C 42 45 42 65 52 75" fill="none" stroke="#ECE5CE" stroke-width="3.5" stroke-linecap="round" />
        <path d="M 68 46 C 60 52 58 68 62 78" fill="none" stroke="#ECE5CE" stroke-width="3" stroke-linecap="round" />
        <path d="M 30 50 C 33 58 35 70 45 78" fill="none" stroke="#ECE5CE" stroke-width="3" stroke-linecap="round" />
        <!-- Soft highlight -->
        <path d="M 45 37 C 55 32 70 38 72 48" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
      </svg>
    `
  },
  macaron_pink: {
    id: 'macaron_pink',
    name: 'Rose Macaron',
    category: 'Topping',
    sound: 'ceramic_clink',
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Bottom shell shadow -->
        <ellipse cx="50" cy="50" rx="42" ry="25" fill="#D36B82" opacity="0.3" />
        <!-- Bottom Shell -->
        <path d="M 10 52 C 10 38 90 38 90 52 C 90 62 80 72 50 72 C 20 72 10 62 10 52 Z" fill="#F293A7" stroke="#C45A70" stroke-width="1.5" />
        <!-- Bottom Macaron Foot (crumbly edge) -->
        <path d="M 12 50 Q 50 47 88 50 Q 82 58 50 58 Q 18 58 12 50" fill="#DC7188" />
        <!-- Cream filling -->
        <ellipse cx="50" cy="46" rx="36" ry="10" fill="#FFF5F7" stroke="#F6D0D8" stroke-width="1" />
        <!-- Top Shell -->
        <path d="M 10 40 C 10 22 90 22 90 40 C 90 48 80 54 50 54 C 20 54 10 48 10 40 Z" fill="#F7AEC0" stroke="#C45A70" stroke-width="1.5" />
        <!-- Top Macaron Foot -->
        <path d="M 12 42 Q 50 44 88 42 Q 82 48 50 48 Q 18 48 12 42" fill="#E8839C" />
        <!-- Shine highlight -->
        <path d="M 22 30 C 35 22 65 22 78 30" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.5" />
      </svg>
    `
  },
  macaron_green: {
    id: 'macaron_green',
    name: 'Pistachio Macaron',
    category: 'Topping',
    sound: 'ceramic_clink',
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <ellipse cx="50" cy="50" rx="42" ry="25" fill="#759C75" opacity="0.3" />
        <!-- Bottom Shell -->
        <path d="M 10 52 C 10 38 90 38 90 52 C 90 62 80 72 50 72 C 20 72 10 62 10 52 Z" fill="#99C699" stroke="#689868" stroke-width="1.5" />
        <!-- Foot -->
        <path d="M 12 50 Q 50 47 88 50 Q 82 58 50 58 Q 18 58 12 50" fill="#7FA97F" />
        <!-- Cream filling -->
        <ellipse cx="50" cy="46" rx="36" ry="10" fill="#FFFFEC" stroke="#E6E6C5" stroke-width="1" />
        <!-- Top Shell -->
        <path d="M 10 40 C 10 22 90 22 90 40 C 90 48 80 54 50 54 C 20 54 10 48 10 40 Z" fill="#AEDCAE" stroke="#689868" stroke-width="1.5" />
        <!-- Foot -->
        <path d="M 12 42 Q 50 44 88 42 Q 82 48 50 48 Q 18 48 12 42" fill="#95C295" />
        <!-- Highlight -->
        <path d="M 22 30 C 35 22 65 22 78 30" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" opacity="0.5" />
      </svg>
    `
  },
  teacup_vintage: {
    id: 'teacup_vintage',
    name: 'Vintage Teacup',
    category: 'Garnish',
    sound: 'ceramic_clink',
    svg: `
      <svg viewBox="0 0 120 120" width="100%" height="100%">
        <!-- Saucer -->
        <ellipse cx="60" cy="98" rx="45" ry="10" fill="#FFFBF0" stroke="#5072A7" stroke-width="2" />
        <ellipse cx="60" cy="98" rx="41" ry="7" fill="none" stroke="#D4AF37" stroke-width="1" />
        <!-- Handle -->
        <path d="M 98 62 C 112 62 112 85 96 85" fill="none" stroke="#FFFBF0" stroke-width="6.5" stroke-linecap="round" />
        <path d="M 98 62 C 112 62 112 85 96 85" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" />
        <!-- Main Cup Body -->
        <path d="M 22 55 C 22 90 98 90 98 55 L 90 90 L 30 90 Z" fill="#FFFBF0" stroke="#5072A7" stroke-width="2.5" />
        <!-- Gold Rim -->
        <ellipse cx="60" cy="55" rx="38" ry="8" fill="#5D3A21" stroke="#D4AF37" stroke-width="3.5" />
        <!-- Tea surface shine -->
        <ellipse cx="60" cy="55" rx="34" ry="5" fill="#845229" />
        <path d="M 35 55 Q 60 52 85 55" fill="none" stroke="#A96E3E" stroke-width="1.5" />
        <!-- Floral pattern on cup -->
        <path d="M 40 75 Q 60 85 80 75" fill="none" stroke="#5072A7" stroke-width="2" opacity="0.8" />
        <!-- Steam rising -->
        <path d="M 52 38 Q 48 28 55 18 T 48 8" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.4" />
        <path d="M 68 38 Q 65 30 70 22 T 65 12" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" opacity="0.3" />
      </svg>
    `
  },
  sugar_cube: {
    id: 'sugar_cube',
    name: 'Sugar Cube',
    category: 'Garnish',
    sound: 'ceramic_clink',
    svg: `
      <svg viewBox="0 0 50 50" width="100%" height="100%">
        <!-- Isometric sugar cube -->
        <!-- Left face -->
        <polygon points="10,25 25,32 25,48 10,41" fill="#E6E6E6" stroke="#C8C8C8" stroke-width="1" />
        <!-- Right face -->
        <polygon points="25,32 40,25 40,41 25,48" fill="#F2F2F2" stroke="#DCDCDC" stroke-width="1" />
        <!-- Top face -->
        <polygon points="10,25 25,18 40,25 25,32" fill="#FFFFFF" stroke="#E6E6E6" stroke-width="1" />
        <!-- Sparkle speckles -->
        <circle cx="20" cy="24" r="0.8" fill="#FFFFFF" />
        <circle cx="30" cy="28" r="0.6" fill="#D3D3D3" />
        <circle cx="24" cy="38" r="0.7" fill="#EBEBEB" />
      </svg>
    `
  },
  lemon_slice: {
    id: 'lemon_slice',
    name: 'Lemon Wheel',
    category: 'Garnish',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 80 80" width="100%" height="100%">
        <!-- Lemon Rim -->
        <circle cx="40" cy="40" r="36" fill="#FCD116" stroke="#E5B20D" stroke-width="2.5" />
        <!-- White pith -->
        <circle cx="40" cy="40" r="32" fill="#FFFFE0" />
        <!-- Segment dividers -->
        <g stroke="#FCD116" stroke-width="2">
          <line x1="40" y1="8" x2="40" y2="72" />
          <line x1="8" y1="40" x2="72" y2="40" />
          <line x1="17.4" y1="17.4" x2="62.6" y2="62.6" />
          <line x1="17.4" y1="62.6" x2="62.6" y2="17.4" />
        </g>
        <!-- Juicy wedge segments -->
        <circle cx="40" cy="40" r="31" fill="none" stroke="#FFFFE0" stroke-width="2.5" />
        <path d="M 40 40 L 40 12 A 28 28 0 0 1 59.8 20.2 Z" fill="#FFE240" opacity="0.85" />
        <path d="M 40 40 L 59.8 20.2 A 28 28 0 0 1 68 40 Z" fill="#FFE240" opacity="0.85" />
        <path d="M 40 40 L 68 40 A 28 28 0 0 1 59.8 59.8 Z" fill="#FFE240" opacity="0.85" />
        <path d="M 40 40 L 59.8 59.8 A 28 28 0 0 1 40 68 Z" fill="#FFE240" opacity="0.85" />
        <path d="M 40 40 L 40 68 A 28 28 0 0 1 20.2 59.8 Z" fill="#FFE240" opacity="0.85" />
        <path d="M 40 40 L 20.2 59.8 A 28 28 0 0 1 12 40 Z" fill="#FFE240" opacity="0.85" />
        <path d="M 40 40 L 12 40 A 28 28 0 0 1 20.2 20.2 Z" fill="#FFE240" opacity="0.85" />
        <path d="M 40 40 L 20.2 20.2 A 28 28 0 0 1 40 12 Z" fill="#FFE240" opacity="0.85" />
        <!-- Center seeds -->
        <ellipse cx="40" cy="40" rx="3" ry="3" fill="#FFFFE0" />
      </svg>
    `
  },

  // --- AUTUMN FEAST ---
  soup_bowl: {
    id: 'soup_bowl',
    name: 'Pumpkin Soup Bowl',
    category: 'Base',
    sound: 'ceramic_clink',
    svg: `
      <svg viewBox="0 0 140 140" width="100%" height="100%">
        <!-- Shadow -->
        <ellipse cx="70" cy="74" rx="60" ry="52" fill="#000" opacity="0.15" filter="blur(6px)" />
        <!-- Terracotta Bowl Outer -->
        <circle cx="70" cy="70" r="56" fill="#C36241" stroke="#9A4526" stroke-width="3" />
        <circle cx="70" cy="70" r="50" fill="none" stroke="#E29578" stroke-width="2" opacity="0.6" />
        
        <!-- Soup Body (Warm Orange) -->
        <circle cx="70" cy="70" r="46" fill="#E67E22" />
        
        <!-- Cream Swirl -->
        <path d="M 70 40 Q 95 45 85 75 T 50 70 T 70 60" fill="none" stroke="#FDFBF0" stroke-width="3.5" stroke-linecap="round" opacity="0.9" />
        <!-- Roasted Pumpkin Seeds on top -->
        <g fill="#FFECA1" stroke="#D4A056" stroke-width="0.5">
          <ellipse cx="50" cy="50" rx="4" ry="2.5" transform="rotate(30, 50, 50)" />
          <ellipse cx="85" cy="80" rx="4" ry="2.5" transform="rotate(-40, 85, 80)" />
          <ellipse cx="74" cy="85" rx="3.5" ry="2" transform="rotate(15, 74, 85)" />
        </g>
        <!-- Pepper sprinkle dots -->
        <circle cx="56" cy="65" r="0.8" fill="#3D2B1F" />
        <circle cx="58" cy="62" r="1.2" fill="#3D2B1F" />
        <circle cx="75" cy="50" r="0.8" fill="#3D2B1F" />
        <circle cx="68" cy="80" r="1.0" fill="#3D2B1F" />
      </svg>
    `
  },
  roasted_squash: {
    id: 'roasted_squash',
    name: 'Roasted Acorn Squash',
    category: 'Base',
    sound: 'wood_tap',
    svg: `
      <svg viewBox="0 0 110 110" width="100%" height="100%">
        <!-- Outer Green-Yellow skin -->
        <path d="M 15 55 C 10 20 50 10 80 30 C 105 50 95 90 60 95 C 30 100 20 80 15 55 Z" fill="#4B6343" stroke="#2D3B27" stroke-width="2" />
        <!-- Rib contours -->
        <path d="M 15 55 C 30 50 50 45 80 30" fill="none" stroke="#859239" stroke-width="3" opacity="0.6" />
        <path d="M 28 82 C 40 75 60 70 92 64" fill="none" stroke="#859239" stroke-width="3.5" opacity="0.6" />
        <!-- Fleshy golden interior -->
        <path d="M 28 48 C 32 30 55 24 74 38 C 88 50 82 78 58 82 C 38 85 28 68 28 48 Z" fill="#E0A93B" stroke="#B8801C" stroke-width="1.5" />
        <!-- Caramelized roasted edges -->
        <path d="M 32 38 C 45 28 65 32 72 45 C 78 55 70 70 54 74 C 38 76 30 60 32 38 Z" fill="#9C5D10" opacity="0.35" />
        <!-- Center hollow seed cavity -->
        <ellipse cx="50" cy="54" rx="16" ry="12" fill="#9C5D10" stroke="#7A4205" stroke-width="2" />
        <circle cx="46" cy="50" r="2.5" fill="#FFECA1" />
        <circle cx="54" cy="56" r="2" fill="#FFECA1" />
        <circle cx="52" cy="48" r="2.2" fill="#FFECA1" />
      </svg>
    `
  },
  fig_slice: {
    id: 'fig_slice',
    name: 'Fresh Fig Half',
    category: 'Topping',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 80 80" width="100%" height="100%">
        <!-- Dark purple skin -->
        <path d="M 15 45 Q 12 25 35 15 Q 40 8 45 8 Q 50 8 52 18 Q 65 30 62 50 Q 58 72 40 70 Q 20 68 15 45 Z" fill="#4B2A4B" stroke="#2B142B" stroke-width="2" />
        <!-- Inner white rind -->
        <path d="M 20 45 Q 17 29 36 21 Q 40 14 45 14 Q 48 14 50 22 Q 60 32 58 48 Q 54 66 40 64 Q 26 62 20 45 Z" fill="#FFFFEC" />
        <!-- Seed-filled red center pulp -->
        <path d="M 23 45 C 22 34 36 26 44 26 C 52 26 55 36 54 46 C 53 56 46 60 39 59 C 30 58 24 54 23 45 Z" fill="#B22222" />
        <!-- Fibrous seed details -->
        <g stroke="#FFA07A" stroke-width="1.5" stroke-linecap="round">
          <line x1="38" y1="32" x2="33" y2="40" />
          <line x1="45" y1="30" x2="45" y2="42" />
          <line x1="48" y1="34" x2="52" y2="44" />
          <line x1="32" y1="45" x2="40" y2="45" />
          <line x1="30" y1="52" x2="41" y2="47" />
          <line x1="44" y1="55" x2="44" y2="46" />
        </g>
        <!-- Little seed dots -->
        <circle cx="36" cy="38" r="1" fill="#FFD700" />
        <circle cx="48" cy="42" r="0.8" fill="#FFD700" />
        <circle cx="40" cy="50" r="1.1" fill="#FFD700" />
      </svg>
    `
  },
  pecan_half: {
    id: 'pecan_half',
    name: 'Toasted Pecan',
    category: 'Topping',
    sound: 'wood_tap',
    svg: `
      <svg viewBox="0 0 60 40" width="100%" height="100%">
        <!-- Nut shell half shape -->
        <path d="M 6 20 C 6 6 54 6 54 20 C 54 34 6 34 6 20 Z" fill="#A0522D" stroke="#5C2E16" stroke-width="1.5" />
        <!-- Indented grooves -->
        <path d="M 10 20 Q 30 14 50 20" fill="none" stroke="#5C2E16" stroke-width="2" stroke-linecap="round" />
        <path d="M 12 14 Q 30 8 48 14" fill="none" stroke="#3D1D0E" stroke-width="1.5" />
        <path d="M 12 26 Q 30 32 48 26" fill="none" stroke="#3D1D0E" stroke-width="1.5" />
        <!-- Highlight peaks -->
        <path d="M 16 17 Q 30 12 44 17" fill="none" stroke="#CD853F" stroke-width="1" />
        <path d="M 16 23 Q 30 28 44 23" fill="none" stroke="#CD853F" stroke-width="1" />
      </svg>
    `
  },
  pomegranate_seeds: {
    id: 'pomegranate_seeds',
    name: 'Pomegranate Seeds',
    category: 'Garnish',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 60 60" width="100%" height="100%">
        <!-- Group of three shiny seeds -->
        <!-- Seed 1 -->
        <path d="M 10 32 C 10 24 22 22 24 30 C 26 38 14 42 12 38 C 10 36 10 34 10 32 Z" fill="#A81C2E" stroke="#5E0814" stroke-width="1" />
        <ellipse cx="15" cy="30" rx="3" ry="1.5" fill="#FFA3A8" transform="rotate(-20, 15, 30)" opacity="0.8" />
        <!-- Seed 2 -->
        <path d="M 28 20 C 28 12 40 10 42 18 C 44 26 32 30 30 26 C 28 24 28 22 28 20 Z" fill="#A81C2E" stroke="#5E0814" stroke-width="1" />
        <ellipse cx="33" cy="18" rx="3" ry="1.5" fill="#FFA3A8" transform="rotate(-30, 33, 18)" opacity="0.8" />
        <!-- Seed 3 -->
        <path d="M 32 42 C 32 34 44 36 44 44 C 44 52 32 50 30 46 C 30 44 32 44 32 42 Z" fill="#A81C2E" stroke="#5E0814" stroke-width="1" />
        <ellipse cx="38" cy="42" rx="3" ry="1.5" fill="#FFA3A8" transform="rotate(10, 38, 42)" opacity="0.8" />
      </svg>
    `
  },
  maple_leaf: {
    id: 'maple_leaf',
    name: 'Golden Maple Leaf',
    category: 'Garnish',
    sound: 'paper_crunch',
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Multicolored Autumn Leaf (Warm Red/Orange) -->
        <path d="M 50 85 L 50 70 
                 C 40 70 35 60 22 68 L 30 52 C 20 48 12 36 28 34 L 24 18 L 42 26 
                 C 40 10 60 10 58 26 L 76 18 L 72 34 C 88 36 80 48 70 52 L 78 68 
                 C 65 60 60 70 50 70 Z" 
              fill="#D35400" stroke="#903000" stroke-width="1.5" />
        <!-- Inside color blending -->
        <path d="M 50 70 C 42 70 38 62 26 66 L 31 54 Q 20 50 29 40 L 32 25 L 43 31 C 42 18 58 18 57 31 L 68 25 L 71 40 Q 80 50 69 54 L 74 66 C 62 62 58 70 50 70 Z" fill="#E67E22" opacity="0.8" />
        <!-- Leaf Veins -->
        <line x1="50" y1="80" x2="50" y2="25" stroke="#7E2D00" stroke-width="1.5" />
        <line x1="50" y1="60" x2="30" y2="45" stroke="#7E2D00" stroke-width="1" />
        <line x1="50" y1="60" x2="70" y2="45" stroke="#7E2D00" stroke-width="1" />
        <line x1="50" y1="45" x2="25" y2="30" stroke="#7E2D00" stroke-width="0.8" />
        <line x1="50" y1="45" x2="75" y2="30" stroke="#7E2D00" stroke-width="0.8" />
      </svg>
    `
  },
  rosemary_sprig: {
    id: 'rosemary_sprig',
    name: 'Rosemary Sprig',
    category: 'Garnish',
    sound: 'paper_crunch',
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Curving central stem -->
        <path d="M 15 85 Q 50 75 75 25" fill="none" stroke="#5C4033" stroke-width="3" stroke-linecap="round" />
        <!-- Needle leaves -->
        <g stroke="#3B5323" stroke-width="4.5" stroke-linecap="round">
          <!-- Bottom left needles -->
          <line x1="30" y1="78" x2="18" y2="70" />
          <line x1="42" y1="72" x2="28" y2="60" />
          <line x1="53" y1="62" x2="38" y2="48" />
          <line x1="64" y1="50" x2="50" y2="32" />
          <line x1="71" y1="36" x2="62" y2="18" />
          <!-- Right side needles -->
          <line x1="30" y1="78" x2="42" y2="82" />
          <line x1="42" y1="72" x2="58" y2="70" />
          <line x1="53" y1="62" x2="70" y2="56" />
          <line x1="64" y1="50" x2="82" y2="42" />
          <line x1="71" y1="36" x2="85" y2="24" />
        </g>
        <!-- Light green needle highlights -->
        <g stroke="#607D3B" stroke-width="2" stroke-linecap="round">
          <line x1="30" y1="78" x2="20" y2="72" />
          <line x1="42" y1="72" x2="30" y2="62" />
          <line x1="53" y1="62" x2="40" y2="50" />
          <line x1="64" y1="50" x2="52" y2="34" />
          <line x1="71" y1="36" x2="64" y2="20" />
        </g>
      </svg>
    `
  },
  cinnamon_stick: {
    id: 'cinnamon_stick',
    name: 'Cinnamon Bark',
    category: 'Garnish',
    sound: 'wood_tap',
    svg: `
      <svg viewBox="0 0 100 40" width="100%" height="100%">
        <!-- Shadow -->
        <rect x="5" y="24" width="90" height="12" rx="4" fill="#000" opacity="0.15" filter="blur(3px)" />
        <!-- Rolled cinnamon bark tube -->
        <rect x="5" y="10" width="90" height="16" rx="3" fill="#8B5A2B" stroke="#5C3A1A" stroke-width="1.5" />
        <!-- Roll folds -->
        <path d="M 5 13 L 95 13" fill="none" stroke="#3D220F" stroke-width="2" />
        <path d="M 5 21 L 95 21" fill="none" stroke="#5C3A1A" stroke-width="1.5" />
        <!-- Ends roll swirl -->
        <ellipse cx="5" cy="18" rx="2" ry="7" fill="#3D220F" />
        <ellipse cx="95" cy="18" rx="2" ry="7" fill="#3D220F" stroke="#8B5A2B" stroke-width="0.8" />
      </svg>
    `
  },

  // --- MIDNIGHT SNACK ---
  pancakes: {
    id: 'pancakes',
    name: 'Pancake Stack',
    category: 'Base',
    sound: 'wood_tap',
    svg: `
      <svg viewBox="0 0 140 120" width="100%" height="100%">
        <!-- Shadow -->
        <ellipse cx="70" cy="100" rx="60" ry="15" fill="#000" opacity="0.2" filter="blur(4px)" />
        <!-- Bottom Pancake -->
        <path d="M 15 80 C 15 65 125 65 125 80 C 125 95 15 95 15 80 Z" fill="#DDB088" stroke="#AE7B51" stroke-width="2" />
        <path d="M 15 78 C 30 75 110 75 125 78 L 125 83 C 110 93 30 93 15 83 Z" fill="#C49268" opacity="0.75" />
        
        <!-- Middle Pancake -->
        <path d="M 18 60 C 18 45 122 45 122 60 C 122 75 18 75 18 60 Z" fill="#E8C39E" stroke="#C49268" stroke-width="2" />
        <path d="M 18 58 C 30 55 110 55 122 58 L 122 63 C 110 73 30 73 18 63 Z" fill="#D3A77C" opacity="0.8" />
        
        <!-- Top Pancake -->
        <path d="M 20 40 C 20 25 120 25 120 40 C 120 55 20 55 20 40 Z" fill="#F4D8BE" stroke="#D3A77C" stroke-width="2.5" />
        <ellipse cx="70" cy="38" rx="42" ry="10" fill="#E2AC7E" opacity="0.9" />
        
        <!-- Butter Pat -->
        <polygon points="60,25 75,22 84,28 69,31" fill="#FCE790" stroke="#DFBA3E" stroke-width="1.5" />
        <!-- Dripping melted butter -->
        <path d="M 68 31 C 68 31 72 38 68 42 C 65 44 60 40 60 40" fill="#FCE790" opacity="0.9" />
        <path d="M 78 27 C 78 27 82 34 85 36 C 88 38 82 41 82 41" fill="#FCE790" opacity="0.9" />
      </svg>
    `
  },
  syrup_drizzle: {
    id: 'syrup_drizzle',
    name: 'Maple Syrup Drizzle',
    category: 'Sauce',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 120 100" width="100%" height="100%">
        <!-- Transparent sticky syrup lines -->
        <path d="M 25 35 Q 60 22 95 32 Q 100 50 90 62 Q 60 55 30 68 Q 20 52 25 35 Z" fill="#C67A26" stroke="#904B07" stroke-width="1.5" opacity="0.65" />
        <!-- Shiny highlights -->
        <path d="M 38 31 Q 60 25 82 29" fill="none" stroke="#FFE9D2" stroke-width="3" stroke-linecap="round" opacity="0.5" />
        <!-- Drips -->
        <path d="M 52 48 Q 50 68 46 72 Q 42 72 44 65 Z" fill="#C67A26" opacity="0.75" />
        <path d="M 78 45 Q 82 62 85 65 Q 88 64 84 55 Z" fill="#C67A26" opacity="0.75" />
      </svg>
    `
  },
  brownie_square: {
    id: 'brownie_square',
    name: 'Fudge Brownie Square',
    category: 'Base',
    sound: 'wood_tap',
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <!-- Shadow -->
        <polygon points="12,50 50,66 88,50 88,60 50,78 12,60" fill="#000000" opacity="0.2" filter="blur(3px)" />
        <!-- Fudge side layers (isometric cake) -->
        <!-- Left face crumbly brownie -->
        <polygon points="15,45 50,60 50,85 15,70" fill="#3A1E11" stroke="#251208" stroke-width="1" />
        <!-- Right face crumbly brownie -->
        <polygon points="50,60 85,45 85,70 50,85" fill="#462616" stroke="#251208" stroke-width="1" />
        <!-- Top shiny glazed face -->
        <polygon points="15,45 50,30 85,45 50,60" fill="#58311C" stroke="#3A1E11" stroke-width="1" />
        
        <!-- Glossy chocolate glaze lines -->
        <path d="M 28 40 Q 50 48 72 40" fill="none" stroke="#251208" stroke-width="4.5" stroke-linecap="round" opacity="0.9" />
        <path d="M 38 35 Q 50 42 62 35" fill="none" stroke="#251208" stroke-width="3" stroke-linecap="round" opacity="0.9" />
        <!-- Shimmer reflects -->
        <path d="M 26 38 Q 45 45 64 38" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" opacity="0.3" />
      </svg>
    `
  },
  whipped_cream: {
    id: 'whipped_cream',
    name: 'Whipped Cream Swirl',
    category: 'Topping',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 80 80" width="100%" height="100%">
        <!-- Fluffy spiral dome -->
        <path d="M 10 55 C 10 40 28 35 40 38 C 45 22 68 28 68 45 C 68 58 55 68 40 68 C 22 68 10 60 10 55 Z" fill="#FFFFFF" stroke="#ECECEC" stroke-width="1.5" />
        <!-- Swirl ridges -->
        <path d="M 40 18 C 40 18 42 35 32 48" fill="none" stroke="#ECECEC" stroke-width="3" stroke-linecap="round" />
        <path d="M 40 18 C 40 18 52 30 55 48" fill="none" stroke="#ECECEC" stroke-width="3.5" stroke-linecap="round" />
        <path d="M 40 18 C 40 18 45 25 45 55" fill="none" stroke="#ECECEC" stroke-width="2.5" />
        <path d="M 20 48 Q 32 55 52 50" fill="none" stroke="#E2E2E2" stroke-width="2" />
        <!-- Top tip star -->
        <path d="M 40 18 Q 42 10 40 6 L 38 12 Z" fill="#FFFFFF" />
      </svg>
    `
  },
  banana_slice: {
    id: 'banana_slice',
    name: 'Banana Round',
    category: 'Topping',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 60 60" width="100%" height="100%">
        <!-- Banana wheel -->
        <circle cx="30" cy="30" r="26" fill="#FDF7CD" stroke="#DFD495" stroke-width="2" />
        <!-- Inner circular pulp ring -->
        <circle cx="30" cy="30" r="15" fill="none" stroke="#EFE4AA" stroke-width="2.5" stroke-dasharray="4 3" />
        <!-- Seed specks at core -->
        <circle cx="28" cy="27" r="1" fill="#7D6633" />
        <circle cx="33" cy="29" r="0.8" fill="#7D6633" />
        <circle cx="29" cy="33" r="1.1" fill="#7D6633" />
      </svg>
    `
  },
  strawberry_whole: {
    id: 'strawberry_whole',
    name: 'Fresh Strawberry',
    category: 'Topping',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 80 90" width="100%" height="100%">
        <!-- Strawberry Body -->
        <path d="M 40 85 C 10 70 8 35 28 15 C 34 8 46 8 52 15 C 72 35 70 70 40 85 Z" fill="#E72636" stroke="#9E121E" stroke-width="2" />
        <!-- Yellow Seeds -->
        <circle cx="32" cy="32" r="1.2" fill="#FFECA1" />
        <circle cx="48" cy="32" r="1.2" fill="#FFECA1" />
        <circle cx="24" cy="45" r="1.2" fill="#FFECA1" />
        <circle cx="40" cy="45" r="1.2" fill="#FFECA1" />
        <circle cx="56" cy="45" r="1.2" fill="#FFECA1" />
        <circle cx="30" cy="60" r="1.2" fill="#FFECA1" />
        <circle cx="50" cy="60" r="1.2" fill="#FFECA1" />
        <circle cx="40" cy="72" r="1.2" fill="#FFECA1" />
        <!-- Green Cap Leaves -->
        <path d="M 40 16 L 40 2 L 48 10 L 64 2 L 56 16 L 70 12 L 52 24 L 40 20 L 28 24 L 10 12 L 24 16 L 16 2 L 32 10 Z" fill="#2E7D32" stroke="#1B5E20" stroke-width="1" />
      </svg>
    `
  },
  blueberry: {
    id: 'blueberry',
    name: 'Plump Blueberry',
    category: 'Topping',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 50 50" width="100%" height="100%">
        <!-- Shadow -->
        <ellipse cx="25" cy="40" rx="20" ry="6" fill="#000000" opacity="0.2" filter="blur(2px)" />
        <!-- Berry Sphere (Deep Indigo-Blue) -->
        <circle cx="25" cy="25" r="21" fill="#2E4A7D" stroke="#1D2F54" stroke-width="1.5" />
        <!-- Dusty yeast bloom highlight -->
        <path d="M 12 18 A 16 16 0 0 1 34 10" fill="none" stroke="#688EC6" stroke-width="3" stroke-linecap="round" opacity="0.6" />
        <!-- Crown blossom end (star-like opening) -->
        <path d="M 25 21 L 21 27 L 29 27 Z" fill="#14213B" />
        <path d="M 25 31 L 21 25 L 29 25 Z" fill="#14213B" />
        <circle cx="25" cy="26" r="3" fill="#14213B" stroke="#2E4A7D" stroke-width="1" />
      </svg>
    `
  },
  star_sprinkles: {
    id: 'star_sprinkles',
    name: 'Star Sprinkles',
    category: 'Garnish',
    sound: 'ceramic_clink',
    svg: `
      <svg viewBox="0 0 60 60" width="100%" height="100%">
        <!-- Scattered little yellow candy stars -->
        <!-- Star 1 -->
        <polygon points="15,10 17,14 21,14 18,17 19,21 15,19 11,21 12,17 9,14 13,14" fill="#FCE790" stroke="#DFBA3E" stroke-width="0.5" />
        <!-- Star 2 -->
        <polygon points="40,25 42,28 46,28 43,30 44,34 40,32 36,34 37,30 34,28 38,28" fill="#FCE790" stroke="#DFBA3E" stroke-width="0.5" transform="rotate(25, 40, 29)" />
        <!-- Star 3 -->
        <polygon points="25,42 27,45 31,45 28,47 29,51 25,49 21,51 22,47 19,45 23,45" fill="#FCE790" stroke="#DFBA3E" stroke-width="0.5" transform="rotate(-15, 25, 46)" />
      </svg>
    `
  },
  chamomile_flower: {
    id: 'chamomile_flower',
    name: 'Chamomile Blossom',
    category: 'Garnish',
    sound: 'paper_crunch',
    svg: `
      <svg viewBox="0 0 80 80" width="100%" height="100%">
        <!-- White petals -->
        <g fill="#FFFFFF" stroke="#E6E6E6" stroke-width="0.8">
          <ellipse cx="40" cy="20" rx="6" ry="18" />
          <ellipse cx="40" cy="60" rx="6" ry="18" />
          <ellipse cx="20" cy="40" rx="18" ry="6" />
          <ellipse cx="60" cy="40" rx="18" ry="6" />
          
          <ellipse cx="26" cy="26" rx="8" ry="18" transform="rotate(45, 26, 26)" />
          <ellipse cx="54" cy="54" rx="8" ry="18" transform="rotate(45, 54, 54)" />
          <ellipse cx="54" cy="26" rx="8" ry="18" transform="rotate(-45, 54, 26)" />
          <ellipse cx="26" cy="54" rx="8" ry="18" transform="rotate(-45, 26, 54)" />
        </g>
        <!-- Yellow fluffy center button -->
        <circle cx="40" cy="40" r="12" fill="#F4C430" stroke="#C49A1B" stroke-width="1.5" />
        <!-- Texture bumps -->
        <circle cx="36" cy="38" r="1" fill="#FFEAA7" />
        <circle cx="44" cy="42" r="0.8" fill="#FFEAA7" />
        <circle cx="40" cy="45" r="1.1" fill="#FFEAA7" />
      </svg>
    `
  },

  // --- ZEN BENTO ---
  rice_bed: {
    id: 'rice_bed',
    name: 'Steamed Rice Bed',
    category: 'Base',
    sound: 'wood_tap',
    svg: `
      <svg viewBox="0 0 130 130" width="100%" height="100%">
        <!-- Base fluffy block representation -->
        <rect x="10" y="10" width="110" height="110" rx="12" fill="#FCFCF9" stroke="#EBECE7" stroke-width="2" />
        <!-- Grain textures -->
        <g fill="#F2F3EE">
          <ellipse cx="30" cy="32" rx="5" ry="2.5" transform="rotate(25, 30, 32)" />
          <ellipse cx="50" cy="25" rx="5" ry="2.5" transform="rotate(-40, 50, 25)" />
          <ellipse cx="78" cy="35" rx="5" ry="2.5" transform="rotate(10, 78, 35)" />
          <ellipse cx="98" cy="48" rx="5" ry="2.5" transform="rotate(60, 98, 48)" />
          
          <ellipse cx="24" cy="65" rx="5" ry="2.5" transform="rotate(-15, 24, 65)" />
          <ellipse cx="56" cy="58" rx="5" ry="2.5" transform="rotate(35, 56, 58)" />
          <ellipse cx="82" cy="72" rx="5" ry="2.5" transform="rotate(-45, 82, 72)" />
          <ellipse cx="104" cy="85" rx="5" ry="2.5" transform="rotate(20, 104, 85)" />
          
          <ellipse cx="32" cy="98" rx="5" ry="2.5" transform="rotate(50, 32, 98)" />
          <ellipse cx="62" cy="92" rx="5" ry="2.5" transform="rotate(-10, 62, 92)" />
          <ellipse cx="80" cy="104" rx="5" ry="2.5" transform="rotate(40, 80, 104)" />
        </g>
        <!-- Black sesame sprinkle seed dots -->
        <g fill="#1E2022">
          <ellipse cx="60" cy="45" rx="2.5" ry="1.2" transform="rotate(45, 60, 45)" />
          <ellipse cx="68" cy="50" rx="2.5" ry="1.2" transform="rotate(-20, 68, 50)" />
          <ellipse cx="54" cy="52" rx="2.2" ry="1.1" transform="rotate(80, 54, 52)" />
          <ellipse cx="62" cy="62" rx="2.5" ry="1.2" transform="rotate(15, 62, 62)" />
          <ellipse cx="72" cy="58" rx="2.5" ry="1.2" transform="rotate(-60, 72, 58)" />
        </g>
      </svg>
    `
  },
  soba_nest: {
    id: 'soba_nest',
    name: 'Soba Noodle Nest',
    category: 'Base',
    sound: 'wood_tap',
    svg: `
      <svg viewBox="0 0 130 130" width="100%" height="100%">
        <!-- Buckwheat noodle base mound -->
        <circle cx="65" cy="65" r="54" fill="#807265" stroke="#5E534A" stroke-width="2" />
        <!-- Wavy noodles overlapping -->
        <g stroke="#5E534A" stroke-width="3.5" fill="none" stroke-linecap="round">
          <path d="M 22 65 Q 40 40 65 40 T 108 65" />
          <path d="M 25 50 Q 55 25 80 50 T 105 80" />
          <path d="M 30 80 Q 55 55 90 60 T 102 50" />
          <path d="M 40 32 Q 70 80 90 98" />
          <path d="M 50 102 Q 80 50 92 28" />
          <path d="M 28 65 Q 65 95 102 65" opacity="0.8" />
          <path d="M 35 45 Q 65 110 95 45" opacity="0.8" />
        </g>
        <!-- Fine green onion toppings (small green boxes) -->
        <g fill="#4E8D4E" stroke="#2D5C2D" stroke-width="0.8">
          <rect x="52" y="42" width="6" height="6" transform="rotate(15, 55, 45)" />
          <rect x="74" y="58" width="6" height="6" transform="rotate(-30, 77, 61)" />
          <rect x="58" y="76" width="6" height="6" transform="rotate(45, 61, 79)" />
          <rect x="42" y="60" width="6" height="6" transform="rotate(5, 45, 63)" />
        </g>
      </svg>
    `
  },
  edamame_pod: {
    id: 'edamame_pod',
    name: 'Edamame Pod',
    category: 'Topping',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 100 50" width="100%" height="100%">
        <!-- Crescent-like curvy green pod with three bean bulges -->
        <path d="M 8 25 C 22 10 42 10 50 18 C 58 10 78 10 92 25 C 75 35 60 30 50 25 C 40 30 25 35 8 25 Z" fill="#6B9C58" stroke="#486D39" stroke-width="2.5" />
        <!-- Inner bean rounded segments -->
        <circle cx="28" cy="22" r="10" fill="#88BC73" stroke="#6B9C58" stroke-width="1.5" opacity="0.9" />
        <circle cx="50" cy="20" r="11" fill="#88BC73" stroke="#6B9C58" stroke-width="1.5" opacity="0.9" />
        <circle cx="72" cy="22" r="10" fill="#88BC73" stroke="#6B9C58" stroke-width="1.5" opacity="0.9" />
        <!-- Shiny line -->
        <path d="M 18 18 Q 50 8 82 18" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.3" />
      </svg>
    `
  },
  carrot_star: {
    id: 'carrot_star',
    name: 'Star Carrot Slice',
    category: 'Topping',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 70 70" width="100%" height="100%">
        <!-- Star-cut circular carrot -->
        <polygon points="35,5 42,22 58,22 46,32 50,48 35,38 20,48 24,32 12,22 28,22" fill="#FF7F27" stroke="#E05B00" stroke-width="2.5" />
        <!-- Inner rings (growth rings of carrot) -->
        <polygon points="35,14 39,26 50,26 42,32 45,43 35,36 25,43 28,32 20,26 31,26" fill="none" stroke="#FF9C55" stroke-width="2.5" />
        <circle cx="35" cy="31" r="5" fill="none" stroke="#FFAE73" stroke-width="1.5" />
      </svg>
    `
  },
  tamagoyaki: {
    id: 'tamagoyaki',
    name: 'Tamagoyaki Slice',
    category: 'Topping',
    sound: 'wood_tap',
    svg: `
      <svg viewBox="0 0 90 60" width="100%" height="100%">
        <!-- Rolled egg slice (yellow brick) -->
        <rect x="5" y="5" width="80" height="50" rx="8" fill="#FFD700" stroke="#DAA520" stroke-width="2" />
        <!-- Inner spiral folding line -->
        <path d="M 15 30 Q 30 12 52 18 T 68 40 T 40 42 T 32 30 T 48 26" fill="none" stroke="#B8860B" stroke-width="2" stroke-linecap="round" />
        <!-- Bowned grill highlights -->
        <rect x="18" y="10" width="12" height="6" rx="2" fill="#B8860B" opacity="0.3" />
        <rect x="52" y="40" width="16" height="5" rx="2" fill="#B8860B" opacity="0.25" />
      </svg>
    `
  },
  cucumber_fan: {
    id: 'cucumber_fan',
    name: 'Cucumber Fan',
    category: 'Topping',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 100 80" width="100%" height="100%">
        <!-- Four fanned-out thin cucumber slices -->
        <!-- Slice 1 -->
        <ellipse cx="32" cy="45" rx="26" ry="14" transform="rotate(-30, 32, 45)" fill="#E2F0D9" stroke="#385723" stroke-width="3" />
        <circle cx="32" cy="45" r="8" fill="none" stroke="#A9D18E" stroke-width="2" stroke-dasharray="2 2" />
        <!-- Slice 2 -->
        <ellipse cx="44" cy="40" rx="26" ry="14" transform="rotate(-10, 44, 40)" fill="#E2F0D9" stroke="#385723" stroke-width="3" />
        <circle cx="44" cy="40" r="8" fill="none" stroke="#A9D18E" stroke-width="2" stroke-dasharray="2 2" />
        <!-- Slice 3 -->
        <ellipse cx="56" cy="40" rx="26" ry="14" transform="rotate(10, 56, 40)" fill="#E2F0D9" stroke="#385723" stroke-width="3" />
        <circle cx="56" cy="40" r="8" fill="none" stroke="#A9D18E" stroke-width="2" stroke-dasharray="2 2" />
        <!-- Slice 4 -->
        <ellipse cx="68" cy="45" rx="26" ry="14" transform="rotate(30, 68, 45)" fill="#E2F0D9" stroke="#385723" stroke-width="3" />
        <circle cx="68" cy="45" r="8" fill="none" stroke="#A9D18E" stroke-width="2" stroke-dasharray="2 2" />
      </svg>
    `
  },
  cherry_blossom: {
    id: 'cherry_blossom',
    name: 'Cherry Blossom Garnish',
    category: 'Garnish',
    sound: 'paper_crunch',
    svg: `
      <svg viewBox="0 0 80 80" width="100%" height="100%">
        <!-- Soft pink Sakura bloom -->
        <g fill="#FFB7C5" stroke="#E292A1" stroke-width="1">
          <!-- Petals with notch on ends -->
          <!-- Top -->
          <path d="M 40 40 C 30 20 34 5 40 10 C 46 5 50 20 40 40 Z" />
          <!-- Right Top -->
          <path d="M 40 40 C 58 24 72 20 68 28 C 64 36 48 44 40 40 Z" />
          <!-- Right Bottom -->
          <path d="M 40 40 C 58 56 64 70 56 70 C 48 70 42 48 40 40 Z" />
          <!-- Left Bottom -->
          <path d="M 40 40 C 22 48 16 70 24 70 C 32 70 34 56 40 40 Z" />
          <!-- Left Top -->
          <path d="M 40 40 C 22 24 8 28 12 20 C 16 12 32 30 40 40 Z" />
        </g>
        <!-- Center red pistil filaments -->
        <circle cx="40" cy="40" r="7" fill="#E66A82" />
        <line x1="40" y1="40" x2="40" y2="30" stroke="#D32F2F" stroke-width="1.2" />
        <line x1="40" y1="40" x2="49" y2="34" stroke="#D32F2F" stroke-width="1.2" />
        <line x1="40" y1="40" x2="46" y2="47" stroke="#D32F2F" stroke-width="1.2" />
        <line x1="40" y1="40" x2="34" y2="47" stroke="#D32F2F" stroke-width="1.2" />
        <line x1="40" y1="40" x2="31" y2="34" stroke="#D32F2F" stroke-width="1.2" />
      </svg>
    `
  },
  tofu_cube: {
    id: 'tofu_cube',
    name: 'Silken Tofu Cube',
    category: 'Topping',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 60 60" width="100%" height="100%">
        <!-- Soft white tofu cube in isometric view -->
        <!-- Left face -->
        <polygon points="12,28 30,36 30,54 12,46" fill="#ECECE8" stroke="#D4D4CE" stroke-width="1" />
        <!-- Right face -->
        <polygon points="30,36 48,28 48,46 30,54" fill="#F4F4EE" stroke="#DCDCD4" stroke-width="1" />
        <!-- Top face -->
        <polygon points="12,28 30,20 48,28 30,36" fill="#FCFCF6" stroke="#ECECE8" stroke-width="1" />
        <!-- Gloss sheen line -->
        <path d="M 28 22 L 44 29" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.6" />
      </svg>
    `
  },
  teapot_vintage: {
    id: 'teapot_vintage',
    name: 'Vintage Teapot',
    category: 'Garnish',
    sound: 'ceramic_clink',
    svg: `
      <svg viewBox="0 0 130 120" width="100%" height="100%">
        <ellipse cx="65" cy="102" rx="42" ry="10" fill="#000" opacity="0.15" filter="blur(3px)" />
        <path d="M 28 65 C 5 65 5 28 28 28" fill="none" stroke="#FFFBF0" stroke-width="8" stroke-linecap="round" />
        <path d="M 28 65 C 5 65 5 28 28 28" fill="none" stroke="#5072A7" stroke-width="2" stroke-linecap="round" />
        <path d="M 98 62 C 118 62 124 38 120 32 C 116 28 110 40 98 48 Z" fill="#FFFBF0" stroke="#5072A7" stroke-width="2.5" />
        <circle cx="65" cy="65" r="36" fill="#FFFBF0" stroke="#5072A7" stroke-width="3" />
        <path d="M 45 65 C 55 75 75 75 85 65" fill="none" stroke="#5072A7" stroke-width="2.5" opacity="0.8" />
        <circle cx="65" cy="70" r="3.5" fill="#5072A7" opacity="0.8" />
        <path d="M 45 32 C 45 22 85 22 85 32 Z" fill="#FFFBF0" stroke="#5072A7" stroke-width="2.5" />
        <circle cx="65" cy="20" r="6" fill="#FFFBF0" stroke="#D4AF37" stroke-width="2" />
        <circle cx="65" cy="20" r="2" fill="#D4AF37" />
        <path d="M 38 45 A 36 36 0 0 1 92 45" fill="none" stroke="#D4AF37" stroke-width="1.5" opacity="0.5" />
      </svg>
    `
  },
  tea_bag: {
    id: 'tea_bag',
    name: 'Tea Bag',
    category: 'Garnish',
    sound: 'paper_crunch',
    svg: `
      <svg viewBox="0 0 80 80" width="100%" height="100%">
        <path d="M 40 25 Q 25 10 32 4" fill="none" stroke="#8B7B6B" stroke-width="1.5" stroke-dasharray="3 2" />
        <polygon points="32,4 37,2 35,-2 30,0" fill="#E72636" stroke="#9E121E" stroke-width="0.5" transform="translate(-32,-4) scale(1.5) translate(32,4)" />
        <polygon points="25,25 55,25 55,65 25,65" fill="#FAF6EE" stroke="#D2CBB8" stroke-width="1.5" />
        <rect x="29" y="38" width="22" height="22" rx="2" fill="#8B6C4F" opacity="0.45" />
        <line x1="40" y1="23" x2="40" y2="28" stroke="#708090" stroke-width="2.5" />
      </svg>
    `
  },
  honey_jar: {
    id: 'honey_jar',
    name: 'Honey Jar',
    category: 'Topping',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 90 90" width="100%" height="100%">
        <ellipse cx="45" cy="80" rx="28" ry="8" fill="#000" opacity="0.12" filter="blur(2px)" />
        <rect x="20" y="32" width="50" height="42" rx="10" fill="rgba(240,248,255,0.4)" stroke="#A0C0E0" stroke-width="2.5" />
        <rect x="24" y="44" width="42" height="26" rx="6" fill="#F4A460" stroke="#CD7F32" stroke-width="1.5" />
        <path d="M 24 50 Q 45 42 66 48 L 66 70 L 24 70 Z" fill="#D2691E" opacity="0.8" />
        <rect x="16" y="24" width="58" height="10" rx="3" fill="#C11B29" stroke="#870E17" stroke-width="2" />
        <rect x="30" y="52" width="30" height="15" rx="2" fill="#FFF" stroke="#E6C299" stroke-width="1" />
        <text x="45" y="63" font-size="9" font-family="sans-serif" font-weight="bold" fill="#B87333" text-anchor="middle">HONEY</text>
        <g transform="translate(48, 14) rotate(40)">
          <line x1="0" y1="0" x2="0" y2="52" stroke="#CD853F" stroke-width="3.5" stroke-linecap="round" />
          <rect x="-8" y="34" width="16" height="14" rx="3" fill="#D2691E" stroke="#CD853F" stroke-width="1" />
          <line x1="-8" y1="38" x2="8" y2="38" stroke="#A0522D" stroke-width="1.5" />
          <line x1="-8" y1="42" x2="8" y2="42" stroke="#A0522D" stroke-width="1.5" />
          <line x1="-8" y1="46" x2="8" y2="46" stroke="#A0522D" stroke-width="1.5" />
        </g>
      </svg>
    `
  },
  warm_cider: {
    id: 'warm_cider',
    name: 'Apple Cider',
    category: 'Garnish',
    sound: 'ceramic_clink',
    svg: `
      <svg viewBox="0 0 110 110" width="100%" height="100%">
        <ellipse cx="55" cy="94" rx="42" ry="10" fill="#000" opacity="0.15" filter="blur(3px)" />
        <path d="M 85 45 C 105 45 105 75 85 75" fill="none" stroke="#C36241" stroke-width="7" stroke-linecap="round" />
        <path d="M 85 45 C 105 45 105 75 85 75" fill="none" stroke="#9A4526" stroke-width="1.5" stroke-linecap="round" />
        <rect x="22" y="32" width="66" height="58" rx="14" fill="#C36241" stroke="#9A4526" stroke-width="3" />
        <ellipse cx="55" cy="40" rx="28" ry="6" fill="#B85D18" stroke="#8A4107" stroke-width="1.5" />
        <path d="M 40 40 Q 52 32 64 38" fill="none" stroke="#FFFDD0" stroke-width="3.5" stroke-linecap="round" />
        <path d="M 40 40 Q 52 32 64 38" fill="none" stroke="#D32F2F" stroke-width="1" stroke-linecap="round" />
        <g transform="translate(32, 22) rotate(-25)">
          <rect x="0" y="0" width="8" height="36" rx="2" fill="#8B5A2B" stroke="#5C3A1A" stroke-width="1" />
          <line x1="0" y1="6" x2="8" y2="6" stroke="#3D220F" stroke-width="1" />
        </g>
        <path d="M 48 24 Q 44 14 50 6" fill="none" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" opacity="0.4" />
        <path d="M 64 24 Q 61 16 66 10" fill="none" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" opacity="0.3" />
      </svg>
    `
  },
  cocoa_mug: {
    id: 'cocoa_mug',
    name: 'Hot Cocoa',
    category: 'Garnish',
    sound: 'ceramic_clink',
    svg: `
      <svg viewBox="0 0 110 110" width="100%" height="100%">
        <ellipse cx="55" cy="94" rx="42" ry="10" fill="#000" opacity="0.15" filter="blur(3px)" />
        <path d="M 25 45 C 5 45 5 75 25 75" fill="none" stroke="#D32F2F" stroke-width="7.5" stroke-linecap="round" />
        <path d="M 25 45 C 5 45 5 75 25 75" fill="none" stroke="#9A0F0F" stroke-width="1.5" stroke-linecap="round" />
        <rect x="22" y="32" width="66" height="58" rx="14" fill="#D32F2F" stroke="#9A0F0F" stroke-width="3" />
        <path d="M 55 52 L 55 70 M 46 61 L 64 61 M 49 55 L 61 67 M 49 67 L 61 55" fill="none" stroke="#FFF" stroke-width="1.5" opacity="0.75" />
        <ellipse cx="55" cy="40" rx="28" ry="6" fill="#3D220F" />
        <polygon points="46,38 52,36 54,42 48,44" fill="#FFF" stroke="#DDD" stroke-width="0.5" />
        <polygon points="62,37 68,39 66,44 60,42" fill="#FFF" stroke="#DDD" stroke-width="0.5" />
        <polygon points="53,42 58,41 59,45 54,46" fill="#FFF" stroke="#DDD" stroke-width="0.5" />
      </svg>
    `
  },
  fried_egg: {
    id: 'fried_egg',
    name: 'Fried Egg',
    category: 'Topping',
    sound: 'sauce_splat',
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <path d="M 12 52 C 10 32 30 12 55 15 C 80 18 90 40 85 62 C 80 82 52 92 32 85 C 12 78 14 72 12 52 Z" fill="#FFFDF8" stroke="#ECE8DC" stroke-width="2.5" />
        <path d="M 15 28 Q 10 38 14 48" fill="none" stroke="#C49A6C" stroke-width="1.5" stroke-linecap="round" opacity="0.7" />
        <path d="M 85 58 Q 88 68 80 75" fill="none" stroke="#C49A6C" stroke-width="1.5" stroke-linecap="round" opacity="0.7" />
        <circle cx="52" cy="48" r="18" fill="#FF9F1C" stroke="#E07A00" stroke-width="1.5" />
        <ellipse cx="46" cy="42" rx="5" ry="3" fill="#FFF" transform="rotate(-30, 46, 42)" opacity="0.75" />
        <circle cx="58" cy="54" r="2.5" fill="#FFAE42" opacity="0.9" />
      </svg>
    `
  },
  matcha_cup: {
    id: 'matcha_cup',
    name: 'Matcha Green Tea',
    category: 'Garnish',
    sound: 'ceramic_clink',
    svg: `
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <ellipse cx="50" cy="85" rx="36" ry="8" fill="#000" opacity="0.12" filter="blur(2px)" />
        <path d="M 18 35 C 18 78 82 78 82 35 Z" fill="#3D3A37" stroke="#252321" stroke-width="3" />
        <ellipse cx="50" cy="35" rx="31" ry="7" fill="#4E7844" stroke="#252321" stroke-width="1.5" />
        <ellipse cx="50" cy="35" rx="28" ry="5.5" fill="#6B9C58" />
        <circle cx="42" cy="34" r="1.5" fill="#88BC73" />
        <circle cx="46" cy="36" r="1.2" fill="#88BC73" />
        <circle cx="58" cy="33" r="1.5" fill="#88BC73" />
        <circle cx="54" cy="35" r="1.8" fill="#88BC73" />
        <path d="M 46 22 Q 42 12 48 4" fill="none" stroke="#FFF" stroke-width="1.2" stroke-linecap="round" opacity="0.3" />
      </svg>
    `
  },
  salmon_sushi: {
    id: 'salmon_sushi',
    name: 'Salmon Nigiri',
    category: 'Topping',
    sound: 'wood_tap',
    svg: `
      <svg viewBox="0 0 100 65" width="100%" height="100%">
        <ellipse cx="50" cy="42" rx="36" ry="16" fill="#FFFDF8" stroke="#E0DFD5" stroke-width="1.5" />
        <ellipse cx="32" cy="44" rx="4" ry="2" fill="#E6E5DC" transform="rotate(15, 32, 44)" />
        <ellipse cx="68" cy="40" rx="4" ry="2" fill="#E6E5DC" transform="rotate(-25, 68, 40)" />
        <path d="M 10 32 C 10 16 90 16 90 32 C 90 38 78 44 50 44 C 22 44 10 38 10 32 Z" fill="#FF7F50" stroke="#D04E26" stroke-width="2.5" />
        <path d="M 28 22 Q 40 28 52 22" fill="none" stroke="#FFFDF8" stroke-width="2.5" stroke-linecap="round" opacity="0.8" />
        <path d="M 44 23 Q 56 30 68 23" fill="none" stroke="#FFFDF8" stroke-width="2.5" stroke-linecap="round" opacity="0.8" />
        <path d="M 60 25 Q 70 32 80 25" fill="none" stroke="#FFFDF8" stroke-width="2" stroke-linecap="round" opacity="0.8" />
        <path d="M 18 24 Q 50 14 82 24" fill="none" stroke="#FFF" stroke-width="1.5" opacity="0.45" />
      </svg>
    `
  },
  soy_sauce_dish: {
    id: 'soy_sauce_dish',
    name: 'Soy Sauce Bowl',
    category: 'Garnish',
    sound: 'ceramic_clink',
    svg: `
      <svg viewBox="0 0 90 90" width="100%" height="100%">
        <ellipse cx="45" cy="50" rx="40" ry="34" fill="#000" opacity="0.12" filter="blur(2px)" />
        <ellipse cx="45" cy="45" rx="36" ry="30" fill="#2B2B2B" stroke="#1A1A1A" stroke-width="3" />
        <ellipse cx="45" cy="45" rx="30" ry="24" fill="none" stroke="#D4AF37" stroke-width="1" opacity="0.4" />
        <ellipse cx="45" cy="45" rx="27" ry="21" fill="#1C1008" />
        <path d="M 22 36 A 24 18 0 0 1 68 36" fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" opacity="0.25" />
      </svg>
    `
  }
};
