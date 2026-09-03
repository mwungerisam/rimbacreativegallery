import { Project, Artwork, ServiceItem, AcademyCourse, InstagramPost } from '../types';

export const BRAND_INFO = {
  name: 'RIMBA CREATIVE GALLERY',
  mediaBranch: 'Rimba Creative Media',
  tagline: 'Visual Arts • Photography • Film • Creative Media',
  heroHeadline: 'WE CREATE\nVISUAL STORIES\nTHAT REMAIN.',
  heroSubheadline: 'A creative gallery and media house shaping visual culture through photography, film, art and storytelling.',
  location: 'Kigali, Rwanda',
  address: 'KG 9 Ave, Kigali Arts Corridor',
  coordinates: "1°57'S 30°03'E",
  phone: '+250 786 134 003',
  phoneFormatted: '+250 786 134 003',
  whatsappNumber: '250786134003',
  instagram: 'https://www.instagram.com/rimbacreativegallery/?hl=en',
  instagramHandle: '@rimbacreativegallery',
  whatsappUrl: 'https://wa.me/250786134003?text=Hello%20Rimba%20Creative%20Gallery%2C%20I%20would%20like%20to%20discuss%20a%20creative%20project.',
  videoReelUrl: 'https://assets.mixkit.co/videos/preview/mixkit-african-artist-painting-in-his-studio-41972-large.mp4',
};

export const PROJECTS: Project[] = [
  {
    id: 'kigali-nocturne',
    slug: 'kigali-nocturne',
    title: 'Kigali Nocturne: Shades of the Thousand Hills',
    category: 'PHOTOGRAPHY',
    year: '2025',
    client: 'Contemporary Cultural Series',
    coverImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'An intimate nocturnal portraiture exploration capturing the contemporary spirit of Kigali after dusk. The series studies natural chiaroscuro light across geometric lines, warm urban textures, and individual dignity.',
    creativeDirection: 'Rimba Creative Gallery Studio',
    credits: [
      { role: 'Lead Photographer', name: 'Rimba Visual Studio' },
      { role: 'Art Direction', name: 'Rimba Creative Direction' },
      { role: 'Post Production', name: 'Rimba Lab Kigali' },
      { role: 'Exhibition Curation', name: 'Gallery Curatorial Team' }
    ],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-studio-under-colored-lights-42938-large.mp4',
    behindTheScenes: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80'
    ],
    featured: true
  },
  {
    id: 'imigongo-echoes',
    slug: 'imigongo-echoes',
    title: 'Echoes of Imigongo: Geometric Renaissance',
    category: 'ART',
    year: '2025',
    client: 'Rimba Gallery Permanent Exhibition',
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'A contemporary dialogue between traditional Rwandan Imigongo geometric patterns and modern minimalist abstraction. Highlighting mixed-earth pigments, structured relief, and spatial balance.',
    creativeDirection: 'Gallery Curatorial Collective',
    credits: [
      { role: 'Curator', name: 'Rimba Gallery Curation' },
      { role: 'Featured Artist', name: 'Contemporary Studio Collective' },
      { role: 'Documentation Photography', name: 'Rimba Creative Media' }
    ],
    featured: true
  },
  {
    id: 'land-of-hills-film',
    slug: 'land-of-hills-film',
    title: 'Rhythm of the Ridges (Short Film)',
    category: 'FILM',
    year: '2024',
    client: 'Rimba Cinematic Productions',
    coverImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'A poetic cinematic documentary tracing the misty morning hills of Musanze through the voices of Rwandan ceramicists, sculptors, and storytellers preserving generational memory.',
    creativeDirection: 'Rimba Creative Media',
    credits: [
      { role: 'Director of Photography', name: 'Rimba Media Film Unit' },
      { role: 'Color Grading', name: 'Rimba Post House' },
      { role: 'Sound Design', name: 'Kigali Acoustic Lab' }
    ],
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-african-artist-painting-in-his-studio-41972-large.mp4',
    featured: true
  },
  {
    id: 'ubumwe-fashion',
    slug: 'ubumwe-fashion',
    title: 'Ubumwe: Haute Couture & Raw Linen',
    category: 'EDITORIAL',
    year: '2024',
    client: 'East African Fashion Editorial',
    coverImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'High-fashion editorial photographed on location across Kigali. Celebrating sculptural organic textiles, hand-loomed fibers, and architectural silhouette forms.',
    creativeDirection: 'Rimba Editorial Team',
    credits: [
      { role: 'Creative Director', name: 'Rimba Creative Media' },
      { role: 'Stylist', name: 'Atelier Kigali' },
      { role: 'Lead Photographer', name: 'Rimba Studio' }
    ],
    featured: true
  },
  {
    id: 'kahawa-heritage',
    slug: 'kahawa-heritage',
    title: 'Origins of Highland Bourbon: The Harvest',
    category: 'COMMERCIAL',
    year: '2024',
    client: 'Rwandan Specialty Coffee Estate',
    coverImage: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85'
    ],
    description: 'Comprehensive commercial campaign capturing Lake Kivu coffee agriculture from red cherry picking to artisanal washing stations, emphasizing human dedication and regional pride.',
    creativeDirection: 'Rimba Creative Media',
    credits: [
      { role: 'Production Lead', name: 'Rimba Creative Media' },
      { role: 'Cinematographer', name: 'Rimba Documentary Crew' }
    ],
    featured: false
  }
];

export const ARTWORKS: Artwork[] = [
  {
    id: 'art-1',
    title: 'Earth & Line No. IV',
    artist: 'Rwandan Contemporary Studio',
    medium: 'Natural cow-dung pigment, volcanic ash & acrylic on Belgian linen',
    year: '2025',
    dimensions: '160 × 210 cm',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1400&q=85',
    description: 'A study in organic sacred geometry exploring continuity, agricultural cycles, and maternal protection through relief patterns.'
  },
  {
    id: 'art-2',
    title: 'The Silent Sentinel of Virunga',
    artist: 'Fine Art Photography Collection',
    medium: 'Archival Giclée Pigment Print on Hahnemühle Photo Rag',
    year: '2024',
    dimensions: '120 × 180 cm',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1400&q=85',
    description: 'Atmospheric monochromatic study capturing the volcanic peaks veiled in equatorial morning mist at dawn.'
  },
  {
    id: 'art-3',
    title: 'Threads of Intore',
    artist: 'Textile & Mixed Media Collective',
    medium: 'Hand-dyed raffia, sisal, copper wire and raw cotton',
    year: '2025',
    dimensions: '140 × 190 cm',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1400&q=85',
    description: 'Sculptural wall tapestry inspired by the dynamic energy and crown of traditional Rwandan warriors in motion.'
  },
  {
    id: 'art-4',
    title: 'Portrait of Resilience in Ochre',
    artist: 'Contemporary Portraitist Guild',
    medium: 'Oil, powdered clay & metallic gold leaf on wood panel',
    year: '2024',
    dimensions: '100 × 140 cm',
    image: 'https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?auto=format&fit=crop&w=1400&q=85',
    description: 'An illuminating portrait paying homage to maternal elders carrying oral histories across the Great Lakes region.'
  },
  {
    id: 'art-5',
    title: 'Vessel of Memory',
    artist: 'Studio Ceramics Kigali',
    medium: 'Terracotta, smoked wood grain, and beeswax seal',
    year: '2025',
    dimensions: '65 × 45 × 45 cm',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1400&q=85',
    description: 'Hand-coiled terracotta vessels honoring pre-colonial milk and grain storage traditions with modern proportions.'
  },
  {
    id: 'art-6',
    title: 'Equatorial Light Studies',
    artist: 'Gallery Photography Lab',
    medium: 'Cyanotype and silver gelatin emulsion on watercolor board',
    year: '2024',
    dimensions: '90 × 120 cm',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1400&q=85',
    description: 'Experimental cyanotype sun exposures created with botanical silhouettes indigenous to Nyungwe rainforest canopy.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'photography',
    number: '01',
    title: 'PHOTOGRAPHY',
    subtitle: 'Commercial, Portraits, Campaigns & Art Direction',
    description: 'Commercial photography, high-fashion portraits, product narratives, corporate brand imagery, editorial features and visual storytelling captured with world-class lighting and artistic direction.',
    details: [
      'Commercial & Advertising Campaigns',
      'Editorial & Fashion Storytelling',
      'Executive & Artist Portraits',
      'Exhibition & Cultural Photography',
      'Fine Art Exhibition Archiving'
    ],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'film-video',
    number: '02',
    title: 'FILM & VIDEO PRODUCTION',
    subtitle: 'Cinematic Branded Films, Documentaries & Commercials',
    description: 'End-to-end cinematic video production handled through Rimba Creative Media. From script development and storyboard drafting to cinema-camera filming, aerial cinematography, sound scoring, and master color grading.',
    details: [
      'Cinematic Brand Documentaries',
      'Commercial Television & Digital Ads',
      'Music Videos & Artistic Shorts',
      'High-Resolution Drone Aerial Cinematography',
      'Color Grading & Audio Mastering'
    ],
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'creative-content',
    number: '03',
    title: 'CREATIVE CONTENT',
    subtitle: 'Short-Form Narrative, Digital Stills & Visual Strategy',
    description: 'Culturally resonant social media content, vertical short-form video, micro-documentaries, and high-impact digital storytelling crafted to command attention across contemporary global platforms.',
    details: [
      'Editorial Short-Form Video (Reels/TikTok)',
      'Digital Campaign Launch Bundles',
      'Multi-Format Visual Assets',
      'Brand Social Aesthetic Curation'
    ],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'creative-direction',
    number: '04',
    title: 'CREATIVE DIRECTION',
    subtitle: 'Concept Development, Visual Identity & Production',
    description: 'Holistic visual leadership. We develop the overarching aesthetic concepts, color science, moodboards, set design, and creative narrative that ensure commercial and cultural projects resonate at the highest standard.',
    details: [
      'Comprehensive Visual Concept Design',
      'Campaign Art Direction & Set Styling',
      'Brand Aesthetic Guidelines',
      'Casting & Cultural Consulting'
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'art-exhibitions',
    number: '05',
    title: 'ART & EXHIBITIONS',
    subtitle: 'Gallery Shows, Curatorial Spaces & Cultural Storytelling',
    description: 'Our physical and digital gallery space hosts contemporary visual art, painter showcases, sculpture installations, and cultural exhibitions that position Rwandan and African artistry on the global stage.',
    details: [
      'Curated Solo & Group Art Exhibitions',
      'Gallery Representation & Artwork Sales',
      'Immersive Cultural Installations',
      'Private Art Consultancy & Acquisitions'
    ],
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'training-workshops',
    number: '06',
    title: 'TRAINING & WORKSHOPS',
    subtitle: 'Skills Development for the Next Generation of Creatives',
    description: 'Through the Rimba Academy branch, we equip aspiring photographers, filmmakers, editors, and visual artists with hands-on technical and artistic training mentored by industry professionals.',
    details: [
      'Masterclasses in Portrait Lighting',
      'Cinematography & Camera Rigging',
      'Professional Color Grading (DaVinci Resolve)',
      'Portfolio Development Labs'
    ],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80'
  }
];

export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    id: 'adv-photography',
    title: 'Mastering Cinematic Light & Portraiture',
    category: 'Photography',
    level: 'Intermediate to Advanced',
    duration: '6 Weeks (In-Studio)',
    description: 'Delve into continuous lighting, strobes, shaping chiaroscuro, and capturing authentic human emotion in studio and environmental locations.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    topics: ['Studio Strobe Physics', 'Natural Light Modifier Techniques', 'Directing Subjects & Posing', 'Editorial Post-Processing']
  },
  {
    id: 'cinematography-lab',
    title: 'Visual Storytelling & Cinema Camera Operation',
    category: 'Videography & Film',
    level: 'All Levels',
    duration: '8 Weeks (Field & Studio)',
    description: 'Learn modern cinema camera workflows, focal length psychology, gimbal and handheld kinetics, and documentary narrative architecture.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80',
    topics: ['Lens Selection & Framing', 'Camera Movement for Drama', 'On-Location Audio Capture', 'Directing Non-Actors']
  },
  {
    id: 'post-color-grading',
    title: 'Professional Color Grading & Post-Production',
    category: 'Video Editing',
    level: 'Intermediate',
    duration: '4 Weeks (Lab Sessions)',
    description: 'Develop an eye for film emulation, color contrast, skin tone fidelity, and delivery standards for cinema and premium streaming platforms.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    topics: ['DaVinci Resolve Color Science', 'Creating Custom LUTs', 'Shot Matching & Balancing', 'Mastering for HDR & SDR']
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85',
    caption: 'Moments from our private studio portrait session with the contemporary art collective in Kigali. #RimbaCreativeGallery',
    likes: '1.4k',
    url: 'https://www.instagram.com/rimbacreativegallery/?hl=en'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85',
    caption: 'Gallery walls installed for the new seasonal exhibition. Natural light touching volcanic pigment relief.',
    likes: '2.1k',
    url: 'https://www.instagram.com/rimbacreativegallery/?hl=en'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
    caption: 'Behind the scenes on our latest commercial shoot in the hills of Musanze. Storytelling through motion.',
    likes: '980',
    url: 'https://www.instagram.com/rimbacreativegallery/?hl=en'
  },
  {
    id: 'ig-4',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85',
    caption: 'Sculptural linen silhouettes from the Ubumwe fashion editorial series.',
    likes: '1.8k',
    url: 'https://www.instagram.com/rimbacreativegallery/?hl=en'
  },
  {
    id: 'ig-5',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=85',
    caption: 'Detail of hand-coiled terracotta vessels currently exhibited in our gallery hall.',
    likes: '1.2k',
    url: 'https://www.instagram.com/rimbacreativegallery/?hl=en'
  },
  {
    id: 'ig-6',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85',
    caption: 'Shadow and highlight study at Rimba Studio, Kigali. Every frame holds intention.',
    likes: '2.4k',
    url: 'https://www.instagram.com/rimbacreativegallery/?hl=en'
  }
];
