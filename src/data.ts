export interface SubModel {
  name: string;
  priceDelta: number;
}

export interface App {
  id: string;
  name: string;
  logoUrl: string;
  size: string;
  rating: number;
  officialPrice: number;
  ourPrice: number;
  features: string;
  healthCheck: string;
  category: string;
  description?: string;
  model?: string;
  bestFor?: string;
  subModels?: SubModel[];
}

export const ATTACH_BADGE_STREAMING = "🛡️ VERIFIED CLEAN • NO MALWARE";
export const ATTACH_BADGE_DEV = "🛡️ VERIFIED CLEAN • DEVELOPER TOOL";

export const apps: App[] = [
  // 🎬 STREAMING & ENTERTAINMENT
  {
    id: "netflix-premium",
    name: "Netflix Premium",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    size: "95 MB",
    rating: 4.7,
    officialPrice: 1800,
    ourPrice: 120,
    features: "4K Ultra HD + HDR • 4 Screens Simultaneously • Zero Ads • Full Download Support • All Regions Unlocked",
    healthCheck: "🛡️ VERIFIED CLEAN • NO MALWARE • MONTHLY FRESH LOGINS",
    category: "Streaming & Entertainment"
  },
  {
    id: "spotify-premium",
    name: "Spotify Premium",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    size: "90 MB",
    rating: 4.5,
    officialPrice: 800,
    ourPrice: 70,
    features: "Ad-Free Music • Unlimited Skips • Offline Downloads • 320kbps Extreme Quality • All Playlists Unlocked",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Streaming & Entertainment"
  },
  {
    id: "disney-plus-premium",
    name: "Disney+ Premium",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
    size: "92 MB",
    rating: 4.6,
    officialPrice: 1500,
    ourPrice: 110,
    features: "Marvel + Star Wars + Pixar • 4K Dolby Vision • 4 Concurrent Streams • GroupWatch • Downloads",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Streaming & Entertainment"
  },
  {
    id: "youtube-premium",
    name: "YouTube Premium",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg",
    size: "98 MB",
    rating: 4.4,
    officialPrice: 1200,
    ourPrice: 90,
    features: "Background Play • YouTube Music Included • No Ads Anywhere • Offline Downloads • PiP Mode",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Streaming & Entertainment"
  },
  {
    id: "hbo-max-premium",
    name: "HBO Max Premium",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Max_logo.svg",
    size: "96 MB",
    rating: 4.8,
    officialPrice: 1600,
    ourPrice: 115,
    features: "Game of Thrones Universe • 4K HDR • Warner Bros Day-One Premieres • Offline Mode • 3 Screens",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Streaming & Entertainment"
  },
  {
    id: "amazon-prime-video",
    name: "Amazon Prime Video",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg",
    size: "100 MB",
    rating: 4.3,
    officialPrice: 1000,
    ourPrice: 85,
    features: "Prime Originals • Thursday Night Football • 4K Streaming • X-Ray Behind Scenes • Rentals Credit",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Streaming & Entertainment"
  },
  {
    id: "apple-music-premium",
    name: "Apple Music Premium",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Apple_Music_logo.svg",
    size: "88 MB",
    rating: 4.6,
    officialPrice: 900,
    ourPrice: 75,
    features: "Lossless Audio • Dolby Atmos Spatial Audio • 100M+ Songs • Exclusive Releases • Lyrics View",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Streaming & Entertainment"
  },
  {
    id: "tidal-hifi-plus",
    name: "Tidal HiFi Plus",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Tidal_logo.svg",
    size: "93 MB",
    rating: 4.2,
    officialPrice: 1100,
    ourPrice: 80,
    features: "Master Quality Audio (9216kbps) • 360 Reality Audio • Artist-First Payouts • Exclusive Content",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Streaming & Entertainment"
  },
  {
    id: "crunchyroll-mega-fan",
    name: "Crunchyroll Mega Fan",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Crunchyroll_Logo.svg",
    size: "91 MB",
    rating: 4.7,
    officialPrice: 1000,
    ourPrice: 70,
    features: "Simulcast From Japan • No Ads • Offline Viewing • 4 Streams • Manga Library Access",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Streaming & Entertainment"
  },
  {
    id: "dazn-unlimited",
    name: "DAZN Unlimited",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/06/DAZN_logo.svg",
    size: "105 MB",
    rating: 4.2,
    officialPrice: 2500,
    ourPrice: 150,
    features: "Live Boxing & MMA • Premier League • NFL Game Pass • Multi-Sport • No Contract",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Streaming & Entertainment"
  },

  // 💬 SOCIAL MEDIA & COMMUNICATION
  {
    id: "discord-nitro",
    name: "Discord Nitro",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg",
    size: "97 MB",
    rating: 4.8,
    officialPrice: 1500,
    ourPrice: 100,
    features: "Custom Emojis Everywhere • 500MB Uploads • HD 4K Streaming • 2 Server Boosts • Animated Avatar",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Social & Communication"
  },
  {
    id: "telegram-premium",
    name: "Telegram Premium",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    size: "94 MB",
    rating: 4.7,
    officialPrice: 700,
    ourPrice: 70,
    features: "4GB File Uploads • No Ads Forever • Real-Time Translation • Exclusive Stickers • Voice-to-Text",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Social & Communication"
  },
  {
    id: "snapchat-plus",
    name: "Snapchat+",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/c/c4/Snapchat_logo.svg",
    size: "95 MB",
    rating: 4.3,
    officialPrice: 600,
    ourPrice: 70,
    features: "Ghost Trails • Story Rewatch Indicator • Custom App Icons • Priority Story Replies • Solar System",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Social & Communication"
  },
  {
    id: "x-premium",
    name: "X Premium (Twitter Blue)",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
    size: "96 MB",
    rating: 4.4,
    officialPrice: 1400,
    ourPrice: 110,
    features: "Blue Checkmark • 25,000 Character posts • Edit Button • Half Ads • Grok AI Access",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Social & Communication"
  },
  {
    id: "linkedin-premium",
    name: "LinkedIn Premium Career",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    size: "98 MB",
    rating: 4.5,
    officialPrice: 4500,
    ourPrice: 250,
    features: "5 InMail Credits • Who Viewed Your Profile • Interview Prep AI • 500+ Courses • Company Insights",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Social & Communication"
  },
  {
    id: "picsart-gold",
    name: "Picsart Gold",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/PicsArt_company_logo.svg",
    size: "102 MB",
    rating: 4.6,
    officialPrice: 1200,
    ourPrice: 80,
    features: "Premium Stickers • AI Image Generator • HD Exports • Video Editor • Background Remover • Fonts",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Social & Communication"
  },
  {
    id: "vsco-pro",
    name: "VSCO Pro",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/VSCO_logo.svg",
    size: "100 MB",
    rating: 4.2,
    officialPrice: 1500,
    ourPrice: 90,
    features: "200+ Premium Presets • Advanced Video Editor • HSL Tools • Montage Maker • No Ads • Community",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Social & Communication"
  },
  {
    id: "tinder-platinum",
    name: "Tinder Platinum",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Tinder_logo.svg",
    size: "90 MB",
    rating: 4.2,
    officialPrice: 3200,
    ourPrice: 200,
    features: "See Who Likes You • Priority Likes • Unlimited Rewinds • Passport Anywhere • Message Before Match",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Social & Communication"
  },
  {
    id: "canva-pro",
    name: "Canva Pro",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",
    size: "95 MB",
    rating: 4.8,
    officialPrice: 2000,
    ourPrice: 130,
    features: "100M+ Premium Stock • Brand Kit • Background Remover • Magic Resize • 1TB Cloud • AI Features",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Social & Communication"
  },
  {
    id: "zoom-pro",
    name: "Zoom Pro",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
    size: "100 MB",
    rating: 4.4,
    officialPrice: 2500,
    ourPrice: 150,
    features: "30-Hour Meetings • 100 Participants • 5GB Cloud Recording • AI Companion • Premium Chat",
    healthCheck: ATTACH_BADGE_STREAMING,
    category: "Social & Communication"
  },
  {
    id: "whatsapp-unban",
    name: "WhatsApp Unban Service",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    size: "N/A (Service)",
    rating: 4.9,
    officialPrice: 1500,
    ourPrice: 100,
    features: "Unban any number • 2-3 hours rapid recovery • Permanent & Temporary Bans reversed • No admin rights needed",
    healthCheck: "🛡️ VERIFIED SERVICE • 99% SUCCESS RATE",
    category: "Social & Communication"
  },
  {
    id: "facebook-unban",
    name: "Facebook Unban Service",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    size: "N/A (Service)",
    rating: 4.8,
    officialPrice: 2000,
    ourPrice: 100,
    features: "Account Recovery • Ad Account Unban • Identity verification bypass • Rapid 24-hr appeal tracking",
    healthCheck: "🛡️ VERIFIED SERVICE • SECURE",
    category: "Social & Communication"
  },
  {
    id: "telegram-unban",
    name: "Telegram Block Recovery",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
    size: "N/A (Service)",
    rating: 4.9,
    officialPrice: 1000,
    ourPrice: 100,
    features: "Spam Block Removal • Shadowban lift • Instant messaging restoration • Privacy safeguard",
    healthCheck: "🛡️ VERIFIED SERVICE • INSTANT LIFT",
    category: "Social & Communication"
  },
  {
    id: "smm-panel",
    name: "SMM Panel Access (Likes, Followers, Comments)",
    logoUrl: "https://placehold.co/150x150/8b5cf6/ffffff?text=SMM", 
    size: "N/A (Dashboard)",
    rating: 4.7,
    officialPrice: 3000,
    ourPrice: 150,
    features: "Unlimited Followers Access • Instant Likes Delivery • Custom Comments • Covers IG/TikTok/FB/Twitter • Analytics Dashboard",
    healthCheck: "🛡️ VERIFIED DASHBOARD • NON-DROP FOLLOWERS",
    category: "Social & Communication"
  },

  // 🎨 DESIGN, VIDEO & CREATIVE
  {
    id: "adobe-creative-cloud",
    name: "Adobe Creative Cloud",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Adobe_Creative_Cloud_Rainbow_Icon.svg",
    size: "1.1 GB",
    rating: 4.7,
    officialPrice: 12000,
    ourPrice: 300,
    features: "20+ Apps: Photoshop, Illustrator, Premiere, After Effects, InDesign • 100GB Cloud • Adobe Fonts • Portfolio",
    healthCheck: "🛡️ VERIFIED CLEAN • NO MALWARE • PRE-CRACKED",
    category: "Design, Video & Creative"
  },
  {
    id: "adobe-photoshop-2026",
    name: "Adobe Photoshop 2026",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    size: "950 MB",
    rating: 4.8,
    officialPrice: 4000,
    ourPrice: 150,
    features: "Generative AI Fill • Neural Filters • Remove Tool • Layers • Full Retouching • 3D Tools • RAW Editing",
    healthCheck: "🛡️ VERIFIED CLEAN • PRE-CRACKED",
    category: "Design, Video & Creative"
  },
  {
    id: "adobe-premiere-pro",
    name: "Adobe Premiere Pro 2026",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
    size: "850 MB",
    rating: 4.6,
    officialPrice: 4000,
    ourPrice: 150,
    features: "Timeline Editing • Auto-Captions • Color Grading • Audio Ducking • 8K Support • Plugins Included",
    healthCheck: "🛡️ VERIFIED CLEAN • PRE-CRACKED",
    category: "Design, Video & Creative"
  },
  {
    id: "final-cut-pro-x",
    name: "Final Cut Pro X",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Final_Cut_Pro_X_icon.png",
    size: "1.0 GB",
    rating: 4.7,
    officialPrice: 5000,
    ourPrice: 200,
    features: "Mac Optimized • Magnetic Timeline • 8K ProRes • Object Tracker • Advanced Color Wheels • All Plugins",
    healthCheck: "🛡️ VERIFIED CLEAN • Mac ONLY",
    category: "Design, Video & Creative"
  },
  {
    id: "capcut-pro",
    name: "CapCut Pro",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/9/90/CapCut_logo.png",
    size: "600 MB",
    rating: 4.5,
    officialPrice: 1500,
    ourPrice: 80,
    features: "AI Effects • No Watermark • Premium Templates • Auto Captions • 4K Export • Trending Transitions",
    healthCheck: "🛡️ VERIFIED CLEAN",
    category: "Design, Video & Creative"
  },
  {
    id: "figma-professional",
    name: "Figma Professional",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    size: "750 MB",
    rating: 4.6,
    officialPrice: 2500,
    ourPrice: 120,
    features: "Unlimited Files • Team Libraries • Advanced Prototypes • Dev Mode • Variables • AI Features",
    healthCheck: "🛡️ VERIFIED CLEAN",
    category: "Design, Video & Creative"
  },
  {
    id: "sketch-pro",
    name: "Sketch Pro",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg",
    size: "700 MB",
    rating: 4.4,
    officialPrice: 1800,
    ourPrice: 100,
    features: "Vector Editing • Unlimited Artboards • Premium Plugins • Real-Time Collaboration • Mac App",
    healthCheck: "🛡️ VERIFIED CLEAN • Mac ONLY",
    category: "Design, Video & Creative"
  },
  {
    id: "cinema-4d-2026",
    name: "Cinema 4D 2026",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Cinema_4D_Logo.svg",//fallback
    size: "1.2 GB",
    rating: 4.5,
    officialPrice: 8000,
    ourPrice: 280,
    features: "3D Modeling • MoGraph • Redshift Renderer • Scene Nodes • Simulation • All Assets Unlocked",
    healthCheck: "🛡️ VERIFIED CLEAN • PRE-CRACKED",
    category: "Design, Video & Creative"
  },
  {
    id: "blender-addons",
    name: "Blender (All Add-ons Unlocked)",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg",
    size: "900 MB",
    rating: 4.8,
    officialPrice: 2000,
    ourPrice: 70,
    features: "All Premium Add-ons • Asset Browser Packs • HDRI Library • Material Packs • Node Groups • Training",
    healthCheck: "🛡️ VERIFIED CLEAN",
    category: "Design, Video & Creative"
  },
  {
    id: "logic-pro-x",
    name: "Logic Pro X",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Logic_Pro_X_icon.png",
    size: "1.0 GB",
    rating: 4.7,
    officialPrice: 3500,
    ourPrice: 180,
    features: "Spatial Audio Mixing • 70GB Sound Library • Live Loops • Step Sequencer • All Instruments • Mac Only",
    healthCheck: "🛡️ VERIFIED CLEAN • Mac ONLY",
    category: "Design, Video & Creative"
  },

  // ⚡ DEVELOPER & PRODUCTIVITY & AI PLATFORMS
  {
    id: "github-copilot-pro",
    name: "GitHub Copilot Pro",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    size: "500 MB",
    rating: 4.7,
    officialPrice: 2000,
    ourPrice: 200,
    features: "AI Pair Programmer • Multi-Line Suggestions • Copilot Chat • Agent Mode • CLI Integration • All IDEs",
    healthCheck: ATTACH_BADGE_DEV,
    category: "Developer & AI Platforms"
  },
  {
    id: "jetbrains-intellij-ultimate",
    name: "JetBrains IntelliJ IDEA Ultimate",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg",
    size: "1.1 GB",
    rating: 4.6,
    officialPrice: 5000,
    ourPrice: 250,
    features: "Smart Java/Kotlin • AI Assistant • Database Tools • Spring Boot • Docker • All Languages Plugin",
    healthCheck: "🛡️ VERIFIED CLEAN • PRE-CRACKED",
    category: "Developer & AI Platforms"
  },
  {
    id: "cursor-pro",
    name: "Cursor Pro",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", //fallback
    size: "680 MB",
    rating: 4.8,
    officialPrice: 3200,
    ourPrice: 250,
    features: "AI-First Code Editor • Full Codebase Edits • Smart Rewrites • GPT-5 + Claude 4 • Terminal AI",
    healthCheck: ATTACH_BADGE_DEV,
    category: "Developer & AI Platforms"
  },
  {
    id: "replit-core",
    name: "Replit Core",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Repl.it_logo.svg",
    size: "550 MB",
    rating: 4.5,
    officialPrice: 3000,
    ourPrice: 200,
    features: "AI Agent • Always-On Deployments • Private Repls • 100GB Storage • Custom Domain • Boosted Compute",
    healthCheck: "🛡️ VERIFIED CLEAN",
    category: "Developer & AI Platforms"
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365 Business Premium",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg",
    size: "1.0 GB",
    rating: 4.4,
    officialPrice: 3500,
    ourPrice: 250,
    features: "1TB OneDrive • Teams Premium • Azure AD • Office Apps • Exchange • SharePoint • Intune",
    healthCheck: "🛡️ VERIFIED CLEAN",
    category: "Developer & AI Platforms"
  },
  {
    id: "notion-plus",
    name: "Notion Plus",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    size: "520 MB",
    rating: 4.6,
    officialPrice: 2000,
    ourPrice: 200,
    features: "Unlimited AI Blocks • Custom Automations • 30-Day History • Premium Integrations • Admin Controls",
    healthCheck: "🛡️ VERIFIED CLEAN",
    category: "Developer & AI Platforms"
  },
  {
    id: "midjourney-pro",
    name: "Midjourney Pro",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.png",
    size: "620 MB",
    rating: 4.7,
    officialPrice: 5000,
    ourPrice: 300,
    features: "Stealth Generations • 30 Fast GPU Hours • Private Mode • Commercial License • All Parameters",
    healthCheck: "🛡️ VERIFIED CLEAN • AI TOOL",
    category: "Developer & AI Platforms"
  },
  {
    id: "runwayml-pro",
    name: "RunwayML Pro Unlimited",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Runway_Logo.svg",
    size: "950 MB",
    rating: 4.5,
    officialPrice: 6500,
    ourPrice: 350,
    features: "Gen-3 Video Creation • Unlimited Exports • Inpainting • Motion Brush • Custom AI Training",
    healthCheck: "🛡️ VERIFIED CLEAN • AI TOOL",
    category: "Developer & AI Platforms"
  },
  {
    id: "suno-ai-pro",
    name: "Suno AI Pro",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", // fallback
    size: "480 MB",
    rating: 4.4,
    officialPrice: 1500,
    ourPrice: 200,
    features: "Full-Track AI Music • Commercial License • 4-Minute Songs • Stem Separation • Voice Clone • API",
    healthCheck: "🛡️ VERIFIED CLEAN • AI TOOL",
    category: "Developer & AI Platforms"
  },
  {
    id: "windsurf-ide-pro",
    name: "Windsurf IDE Pro",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg", //fallback
    size: "720 MB",
    rating: 4.6,
    officialPrice: 2500,
    ourPrice: 200,
    features: "AI-Powered IDE • Cascade AI Agent • Multi-File Edits • Natural Language Commands • All Extensions",
    healthCheck: ATTACH_BADGE_DEV,
    category: "Developer & AI Platforms"
  }
];

export const aiModels: App[] = [
  {
    id: "chatgpt-openai",
    name: "ChatGPT by OpenAI",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    size: "N/A (Cloud)",
    rating: 4.8,
    officialPrice: 3000,
    ourPrice: 100,
    features: "Advanced multimodal reasoning • Vision & Audio processing • Elite coding capabilities",
    category: "AI Models",
    bestFor: "Advanced multimodal reasoning, vision, audio processing, and elite coding capabilities",
    healthCheck: "✅ VERIFIED • VIRUS-FREE • PRE-ACTIVATED",
    subModels: [
      { name: "GPT-4o Mini", priceDelta: 0 },
      { name: "GPT-4o", priceDelta: 20 },
      { name: "GPT-5 Omni", priceDelta: 40 }
    ]
  },
  {
    id: "gemini-google",
    name: "Gemini by Google",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
    size: "N/A (Cloud)",
    rating: 4.7,
    officialPrice: 3000,
    ourPrice: 100,
    features: "2M+ token context window • Real-time Google integration • Multimodal analysis powerhouse",
    category: "AI Models",
    bestFor: "2M+ token context window, real-time Google integration, multimodal analysis powerhouse",
    healthCheck: "✅ VERIFIED • VIRUS-FREE • PRE-ACTIVATED",
    subModels: [
      { name: "Gemini 3.0 Flash", priceDelta: 0 },
      { name: "Gemini 3.1 Pro", priceDelta: 20 },
      { name: "Gemini Ultra 2.5", priceDelta: 40 }
    ]
  },
  {
    id: "claude-anthropic",
    name: "Claude by Anthropic",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Anthropic_logo.svg", // fallback
    size: "N/A (Cloud)",
    rating: 4.8,
    officialPrice: 3000,
    ourPrice: 110,
    features: "Complex ethical reasoning • Nuanced long-form documents • Superior coding assistance",
    category: "AI Models",
    bestFor: "Complex ethical reasoning, nuanced long-form documents, and superior coding assistance",
    healthCheck: "✅ VERIFIED • VIRUS-FREE • PRE-ACTIVATED",
    subModels: [
      { name: "Claude 3 Haiku", priceDelta: 0 },
      { name: "Claude 3.5 Sonnet", priceDelta: 20 },
      { name: "Claude 4 Opus", priceDelta: 40 }
    ]
  },
  {
    id: "llama-meta",
    name: "Llama by Meta AI",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
    size: "Varies",
    rating: 4.5,
    officialPrice: 1500,
    ourPrice: 80,
    features: "Open-source customization • Blazing on-device speed • Uncensored creative writing",
    category: "AI Models",
    bestFor: "Open-source customization, blazing on-device speed, uncensored creative writing",
    healthCheck: "✅ VERIFIED • VIRUS-FREE • PRE-ACTIVATED",
    subModels: [
      { name: "Llama 3 8B", priceDelta: 0 },
      { name: "Llama 3 70B", priceDelta: 20 },
      { name: "Llama 4 Maverick", priceDelta: 40 }
    ]
  },
  {
    id: "grok-xai",
    name: "Grok by xAI",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
    size: "N/A (Cloud)",
    rating: 4.4,
    officialPrice: 2400,
    ourPrice: 90,
    features: "Real-time X/Twitter data analysis • Witty responses • Rapid image generation",
    category: "AI Models",
    bestFor: "Real-time X/Twitter data analysis, witty responses, rapid image generation",
    healthCheck: "✅ VERIFIED • VIRUS-FREE • PRE-ACTIVATED",
    subModels: [
      { name: "Grok 1.5", priceDelta: 0 },
      { name: "Grok 2", priceDelta: 20 },
      { name: "Grok 3", priceDelta: 40 }
    ]
  },
  {
    id: "deepseek-ai",
    name: "DeepSeek",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/DeepSeek_logo.svg",
    size: "N/A (Cloud)",
    rating: 4.6,
    officialPrice: 2000,
    ourPrice: 90,
    features: "Cost-efficient elite coding • Mathematical reasoning • Massive context windows",
    category: "AI Models",
    bestFor: "Cost-efficient elite coding, mathematical reasoning, massive context windows",
    healthCheck: "✅ VERIFIED • VIRUS-FREE • PRE-ACTIVATED",
    subModels: [
      { name: "DeepSeek Coder", priceDelta: 0 },
      { name: "DeepSeek V3", priceDelta: 20 },
      { name: "DeepSeek V4", priceDelta: 40 }
    ]
  }
];

export const allApps = [...apps, ...aiModels];
