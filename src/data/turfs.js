/**
 * Turf listing + detail fields. Image URLs are from Stitch (Google aida-public).
 * Replace with API data later; `id` is the route segment for /turf-details/[id]
 */

const STITCH = {
  gallery: [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDp2kbshSDfLjdFpOYyRIdPvzlvl3nWtk13IdHSehbjK1GdykKFDsR4mDkllPjTk37yckT2TWROcx7Gi67OPabdeFepENRqtkGgOt0LyUTIHaBlCBakC3K5lZ7ljURIJQosdGUq4E2rBzyiza_OVjgeJ3sRaf-RO_lOLZiDsEB5P9-FkudLCmCWG2vrTYzsZJmGaQPHb3qocqQi1nQfg30RE7yLEFA6nw1tDVPD8-3XB0oEBEenDMoLp6VNkzrguCEQqg_kvBRnwQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAmjq0SBMLffM5xkTkZiO0BQw4WNw8ngqTQJAPZz22ayACNt53_-qzUD5-y6IbJ7GA9igtEB0NwQUrwwWZsYuAvSa8KYwXzQYF1j6DOBp0emaT2cxBxcLxbPTRJC3swm-1YrbAIugTvHneXBTGveM62ElQe1Rp89fhb24_JQ6amuX3f4-f_1gT5RBGg3Y7TXyoGXmFMZHwdhIqvDmjRqdSugSwaZR4QPSHvesQOITxDDETWes6-xASu9fO8RTBsk0ts07L_6KG5dQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAn-gIJ91eAk7X3sF4-h9C1ZBenGNhRv86AKQCd_U2fOgBM63QcMBKiv_OQot_72tgObFc1YvWtWAz16-nbAACJ0GohXeLdwe-92iaOndQDiTm_ugFAtQlvTE2a-nKI6tsTiev3o2FyENWGs_RtI-omTmnGT7-b7oedtQwLfxOwQ0sjDuHZ09RRge0hZEgE5PZbaSA0kjuiO2cqv_IYUNj1Apo04Q-te-KcxV60bkBliQ7eY2Ymylydbt3P-Pt7D04MANZspIIrLQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCFqteYp4hIVHSxVC6k2l7sdtCBhfwSCCA-prBuq7keUVZ5vqOq0zGbtinEuQegH_w8KoJ9DItTeulZrGqhdGHktp4nDAYfcYWXrsUpby9m53OInUZM7_AQ9N-SBO3jHO3gcfo-0C0DvE66e4zDp-Z8cIHkL21zSOkvrDk0mANPgZnZvyjQEc-U1nJ3IW80J5gNuCYAGykw_NYa7tjM8uCPBsYoJ5aBFFEwRONKaiX6XVxEa3pSLSe8Ju1q0ne-lw-Ob4oWohbV7Q",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDbxOgfcEdNO1Oag_ggjgx8yHwaixKdgJLfG9WVDa3rOY5Z-KdZGrNt6EchGHXYAerHL5uRSbNLbxaazZJORn0b96OHk7MqU-Qkz1O_4aHuJxYr-q_r-N2ZOiXY6OlgkAHmZ5QUFudUjkL9Ar6_iifqkv7iHubJWqJxXGTxwbm7a2DCAifM4V2BF_XNDiWSZohVzDrUilc_6IMQjPKPkqEFpKM5awhbNkNhiYVk5PBs2YOPfG4VbivmmP3rcz1EZY0KsCBQF6ogaA",
  ],
  manager: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdQ51ciaDKeruBRtWtt6Xb9CGgzLclhF7PC5TcwZ2xBVewCw9JZz4GQip7CdPs3ei3ONOkQcIedn6f9Lauvl_OY-dpWoaaLWlilit7DGAbJLs0jV0ywW0ZH5HCYEZmiNX3Skxi5rC2m78pwiJEWmWBCtXdbcvV39SUQ3qsQbiF3oyGDh1Zav7fppXhZ-yZq6JbZ0M48j0fCrOb-KiV4IinJKHhiuhHj7PNmuvlOQJEicCpcvjHoloBEJDv3j-Ny3B_KbrZMTY6Ag",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuAD4P3SkLq63IfnS8xVf-u773D7u0xS8px1wMBYAEQvhUI_DXiZ6vOBWSiFehy2Qq3huGaU8n8ZD-nlhK1tG3FKYbC7FxwfxC8oIZKRLgUCvd2Y8v1NXm6fmW5JqA9MVIQAks9AeOALS7y9v2IFinpyeVyFb0NmaedimO6iv70X2bPelS41gTmf3pychh9lzFDV1KIe_e6JzZK8EGZ8BxqP6_g4rGWSLweUty7wzRDlZSTn0clJgbOksh43MEdHISRSvRInM3HbMQ",
};

function rotateOrder(id, items) {
  if (!items.length) return items;
  const n = id.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % items.length;
  return [...items.slice(n), ...items.slice(0, n)];
}

/** @typedef {'football'|'basketball'|'tennis'|'cricket'|'badminton'|'padel'} TurfBadge */

const rawTurfs = [
  {
    id: "the-arena-bandra",
    showInBrowse: true,
    showOnHome: false,
    title: "Bashundhara Arena",
    sport: "Football",
    location: "Bashundhara R/A, Dhaka",
    price: "৳1,200/hr",
    rating: "4.9",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7oEscsqAFeb1es0UA6aibl57OAf6w8CFMvgBjgRQ_iiNqhkH0_jvsyGMf3MEAZKRKLxqXP8tQm_urf9uO6SJiVWwvJB3tDTUSPN5TgzGGtLiPblf6PfirA9aMHaYj8dbCBsF02dwgFgtTrWn86xjDwB4fiLGh0lEtsjodZkpM8W56Q83q2jm-tafbHUcSXl-BXS-z0GpZqNC3FkOvxT4Qv_kGd9uH6kaCdYJz5kN2SlH5cmTMrSG6UUtJ0t-VZsWuzXy_pxnWXw",
    /** @type {TurfBadge} */ badge: "football",
    previewAmenities: [
      { label: "Floodlights", sym: "💡" },
      { label: "Parking", sym: "🅿" },
      { label: "Water", sym: "💧" },
    ],
    breadcrumb: { area: "Dhaka", path: "Bashundhara" },
    address: "Block H, Bashundhara R/A, Dhaka 1229, Bangladesh",
    reviewCount: 124,
    about:
      "State-of-the-art 4G synthetic turf built for pro-level 5-a-side and training. The surface offers natural-grass feel with superior drainage and shock absorption, whether you are running casual kickabouts or a club session.",
    amenities: [
      { label: "Luxury Showers", sym: "🚿" },
      { label: "Free Parking", sym: "🅿" },
      { label: "High-speed WiFi", sym: "📶" },
      { label: "Ball Rental", sym: "⚽" },
      { label: "Night Floodlights", sym: "💡" },
      { label: "First Aid Kit", sym: "⛑" },
    ],
    manager: {
      name: "Rafiqul Hasan",
      role: "Facility manager for 8+ years",
      image: STITCH.manager,
      verified: true,
      fastResponder: true,
    },
    dayTier: { label: "Standard Day", hours: "06:00 AM — 05:00 PM", price: 1200, unit: "hour", features: ["Natural lighting", "Locker access", "Water station"] },
    nightTier: {
      label: "Elite Night",
      hours: "05:00 PM — 11:00 PM",
      price: 1800,
      unit: "hour",
      features: ["HD Floodlighting", "Heated changing rooms", "Late snack bar access"],
    },
    booking: {
      startingPrice: 1200,
      currency: "৳",
      bestValue: true,
      defaultDate: "Mar 15, 2025",
      playerOptions: [
        { label: "8-12 Players (5-a-side)", value: "5v5" },
        { label: "14-18 Players (7-a-side)", value: "7v7" },
      ],
      lineItems: [
        { label: "Day Rate (2 hrs)", amount: 2400 },
        { label: "Maintenance Fee", amount: 99 },
      ],
    },
    gettingThere: "Gate 3 service road; 10 min from Airport metro rail (under construction). CNG and ride-share drop-off at the arena lobby.",
  },
  {
    id: "elite-sports-club",
    showInBrowse: true,
    showOnHome: false,
    title: "Gulshan Elite Club",
    sport: "Basketball",
    location: "Gulshan-2, Dhaka",
    price: "৳1,800/hr",
    rating: "4.7",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmUZetY6pL6jyAGnn6wt2LTKAlo79ST-HAJdSe5ryAH_2ZlrkxrUdYgyXArOjklnWC6G3gCYBarn_1HpiBaDs3jv0aK1e3IpDwS8RHkqqERUkJuFm6HX1LjRoHhKS69P_nl3Mmx01iL8my1D6W5fvwXoP692-fUfvzDZlVQ8rprd8RmrDW8oEmnF0XHLYg-UTAHYyvMxXK2JA9Ph--HSTtzl7bWla-qkM44umLCu3-1i9cxMJlEHfYU2ZgZmtMvYF0IZsaBNZf9w",
    badge: "basketball",
    previewAmenities: [
      { label: "Locker", sym: "🗄" },
      { label: "Shower", sym: "🚿" },
    ],
    breadcrumb: { area: "Dhaka", path: "Gulshan" },
    address: "Gulshan Avenue, beside Gulshan-2 South Market, Dhaka 1212, Bangladesh",
    reviewCount: 86,
    about: "FIBA-spec indoor court, sprung hardwood and pro glass. Book for leagues, training blocks, or pick-up—climate-controlled and broadcast-ready camera mounts available.",
    amenities: [
      { label: "Locker rooms", sym: "🗄" },
      { label: "Pro ball rack", sym: "🏀" },
      { label: "Drinking fountains", sym: "💧" },
      { label: "First Aid", sym: "⛑" },
      { label: "Floodlights", sym: "💡" },
      { label: "Cafe access", sym: "☕" },
    ],
    manager: { name: "Sarah Menon", role: "Head of Operations, 5 years", image: STITCH.manager, verified: true, fastResponder: true },
    dayTier: { label: "Day Session", hours: "08:00 AM — 04:00 PM", price: 1600, unit: "hour", features: ["Court time", "Ball included", "Water"] },
    nightTier: { label: "Prime Evening", hours: "04:00 PM — 11:00 PM", price: 2200, unit: "hour", features: ["Full lighting", "AC peak", "Staff on floor"] },
    booking: {
      startingPrice: 1600,
      currency: "৳",
      bestValue: true,
      defaultDate: "Mar 15, 2025",
      playerOptions: [
        { label: "10 players (half court)", value: "half" },
        { label: "20 players (full court)", value: "full" },
      ],
      lineItems: [
        { label: "Session (2 hrs)", amount: 3600 },
        { label: "Service fee", amount: 150 },
      ],
    },
    gettingThere: "CNG and ride-share: drop at Gulshan-2 South circle. Valet and basement car parking (evenings).",
  },
  {
    id: "sky-high-courts",
    showInBrowse: true,
    showOnHome: false,
    title: "Bay Sky Courts",
    sport: "Tennis",
    location: "Khulshi, Chattogram",
    price: "৳1,500/hr",
    rating: "4.8",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvg8if9eQpr2tCsbueTjALCNGLgMNPsKl0HGEAewcucmnIn7Av_sgKXAfYqqO90gTxzZ0llf9Mq9TGA8LvmAdOLdXvyx0ISLogaOnF5H6TF4Wln-X30xji_tOtWFx8Jzr1cOyC2ROCrUIe3K_SiAtM5PSNUR8bRG2IH4j4DyhlsvIjaOFoBvQJDXsc4Q_OBUSl7FnsPXUtLlgCXNVxLNl7LnpvrlEccgRq0Miizy7nh3w7k2R8xu_jWOORWQDs_3J2uM4ctpCkvg",
    badge: "tennis",
    previewAmenities: [
      { label: "Floodlights", sym: "💡" },
      { label: "Cafe", sym: "🍴" },
    ],
    breadcrumb: { area: "Chattogram", path: "Khulshi" },
    address: "Road 1, South Khulshi, Chattogram 4205, Bangladesh",
    reviewCount: 210,
    about: "ITF standard acrylic hard courts on the roof—clean breeze, pro nets, and cushioned underfoot. Ideal for ladder matches and private coaching in the evenings.",
    amenities: [
      { label: "Ball machine", sym: "🎾" },
      { label: "Towel service", sym: "🧺" },
      { label: "Floodlights", sym: "💡" },
      { label: "Cafe", sym: "🍴" },
      { label: "Restrooms", sym: "🚻" },
      { label: "Racket restring", sym: "🪢" },
    ],
    manager: { name: "Nikhil Rao", role: "Tennis Director, 6 years", image: STITCH.manager, verified: true, fastResponder: false },
    dayTier: { label: "Morning", hours: "07:00 AM — 04:00 PM", price: 1200, unit: "hour", features: ["Court prep", "Ball bucket", "Water"] },
    nightTier: { label: "Floodlight", hours: "04:00 PM — 10:00 PM", price: 1800, unit: "hour", features: ["Pro lighting", "Cafe late hours"] },
    booking: {
      startingPrice: 1200,
      currency: "৳",
      bestValue: false,
      defaultDate: "Mar 20, 2025",
      playerOptions: [
        { label: "Singles (2 players)", value: "1v1" },
        { label: "Doubles (4 players)", value: "2v2" },
      ],
      lineItems: [
        { label: "90 min slot", amount: 2250 },
        { label: "Maintenance", amount: 50 },
      ],
    },
    gettingThere: "7 min from Khulshi circle on Patenga Road. Parking under the block; lift to rooftop court.",
  },
  {
    id: "cricket-junction",
    showInBrowse: true,
    showOnHome: false,
    title: "Mirpur Cricket Nets",
    sport: "Cricket",
    location: "Mirpur, Dhaka",
    price: "৳1,000/hr",
    rating: "4.5",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC33-t8gsPMM8Q9NXW5Kt3tkus2tDFJZd2bHI1HBc5Gn8ZwSHQKHAAEwh7tUd04viCD3oPvrEo4aIJLaxPtS3xkXjQ9-CcBVaGk05YL9ERcE_gPylGo8VWKTtv68LVd34vnPuPvQQf6hV_IurOmrcw0xQHm2gVb-gTcNMNwjERH7tVYMhyaH_dR4y5aeMy-tFpV4RD6PZnzaNjXFqU31zU5fc1q9JVnUa8jt2ORrtHql27UDA_9IhdjZalXzicE_AokBTa-XPBigQ",
    badge: "cricket",
    previewAmenities: [{ label: "Equipment", sym: "🏏" }],
    breadcrumb: { area: "Dhaka", path: "Mirpur" },
    address: "Mirpur 12, beside Pallabi Ring Road, Dhaka 1216, Bangladesh",
    reviewCount: 52,
    about: "Full-turf training wicket with pro nets, bowling run-up, and sightscreens. Book hourly for nets or half-day for academy sessions.",
    amenities: [
      { label: "Match balls", sym: "🏏" },
      { label: "Floodlights", sym: "💡" },
      { label: "Covered nets", sym: "🏟" },
      { label: "Team dugout", sym: "🧢" },
      { label: "Hire scorer table", sym: "📋" },
      { label: "ICE bath", sym: "🧊" },
    ],
    manager: { name: "Imran Qureshi", role: "Grounds Lead, 10 years", image: STITCH.manager, verified: true, fastResponder: true },
    dayTier: { label: "Day Nets", hours: "08:00 AM — 04:00 PM", price: 1000, unit: "hour", features: ["Pitch rolled", "Stumps", "Water"] },
    nightTier: { label: "Floodlight Nets", hours: "04:00 PM — 11:00 PM", price: 1400, unit: "hour", features: ["Towers on", "Security round"] },
    booking: {
      startingPrice: 1000,
      currency: "৳",
      bestValue: true,
      defaultDate: "Mar 12, 2025",
      playerOptions: [
        { label: "6–8 bowlers (nets)", value: "nets" },
        { label: "Full squad (match prep)", value: "squad" },
      ],
      lineItems: [
        { label: "2-hr block", amount: 2000 },
        { label: "Pitch maintenance", amount: 150 },
      ],
    },
    gettingThere: "3 min from Mirpur 10 metro; motorbike stand at the gate, street CNG in front of the field.",
  },
  {
    id: "urban-kick-grounds",
    showInBrowse: true,
    showOnHome: false,
    title: "Tejgaon Futsal Cage",
    sport: "Football",
    location: "Tejgaon Industrial, Dhaka",
    price: "৳1,400/hr",
    rating: "4.6",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbxOgfcEdNO1Oag_ggjgx8yHwaixKdgJLfG9WVDa3rOY5Z-KdZGrNt6EchGHXYAerHL5uRSbNLbxaazZJORn0b96OHk7MqU-Qkz1O_4aHuJxYr-q_r-N2ZOiXY6OlgkAHmZ5QUFudUjkL9Ar6_iifqkv7iHubJWqJxXGTxwbm7a2DCAifM4V2BF_XNDiWSZohVzDrUilc_6IMQjPKPkqEFpKM5awhbNkNhiYVk5PBs2YOPfG4VbivmmP3rcz1EZY0KsCBQF6ogaA",
    badge: "football",
    previewAmenities: [
      { label: "Floodlights", sym: "💡" },
      { label: "Parking", sym: "🅿" },
    ],
    breadcrumb: { area: "Dhaka", path: "Tejgaon" },
    address: "Begunbari Industrial Area, Tejgaon, Dhaka 1208, Bangladesh",
    reviewCount: 99,
    about: "A compact 6-a-side cage with high rebound walls—perfect for after-work games in the business district, with a PA for corporate leagues.",
    amenities: [
      { label: "Sound system", sym: "🔊" },
      { label: "Bib sets", sym: "👕" },
      { label: "Floodlights", sym: "💡" },
      { label: "Bottled water", sym: "💧" },
      { label: "Washrooms", sym: "🚻" },
      { label: "Ball rental", sym: "⚽" },
    ],
    manager: { name: "Chris D'Souza", role: "Site Manager, 4 years", image: STITCH.manager, verified: true, fastResponder: true },
    dayTier: { label: "Lunch", hours: "10:00 AM — 04:00 PM", price: 1200, unit: "hour", features: ["Natural light", "Quick lineups"] },
    nightTier: { label: "Corporate Prime", hours: "04:00 PM — 12:00 AM", price: 1800, unit: "hour", features: ["Flood + music", "Staff ref optional"] },
    booking: {
      startingPrice: 1200,
      currency: "৳",
      bestValue: true,
      defaultDate: "Mar 18, 2025",
      playerOptions: [
        { label: "6v6 (10–14)", value: "6" },
        { label: "8v8 (18–24)", value: "8" },
      ],
      lineItems: [
        { label: "2-hr block", amount: 2800 },
        { label: "Facility fee", amount: 100 },
      ],
    },
    gettingThere: "Adjacent Tejgaon truck road; 8 min from Farmgate flyover. Factory-side parking and CNG stand on Begunbari Road.",
  },
  {
    id: "shuttle-masters",
    showInBrowse: true,
    showOnHome: false,
    title: "Bashundhara Shuttle",
    sport: "Badminton",
    location: "Bashundhara R/A, Dhaka",
    price: "৳800/hr",
    rating: "4.9",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjOQIQLrOoOAwFMaKIIddpmH_jgeUZA11CRphMyac7mJ-Mz0N3I0gqtNccHIjSwSfQllfIkVqFA4eBOJvJGNsu3s7H_8w_E0O1z9683AvxTudyCHXWWMV9-aFBmyDWDDy0illMyrb7iDAPyPyZdAP7Vh5M91gShVZo5fB1H3lUs1_Vi2MaJuvj9ig1NbjR1yEtW4CWtvEuHxek07Fkct4YSe13Ss2d-yMz6Rhf0mnoIIQv9mvD8sOJCSidO8G4rjwt5cnQQOWtKA",
    badge: "badminton",
    previewAmenities: [{ label: "Lockers", sym: "🗄" }],
    breadcrumb: { area: "Dhaka", path: "Bashundhara" },
    address: "Jamuna Future Park, Level 4, Bashundhara, Dhaka 1229, Bangladesh",
    reviewCount: 201,
    about: "BWF-surface courts with dehumidified air, coaching lanes, and smart booking—ideal for club ladders and high-school training.",
    amenities: [
      { label: "Feather shuttles (add-on)", sym: "🏸" },
      { label: "Stringing desk", sym: "🪢" },
      { label: "Locker", sym: "🗄" },
      { label: "Gatorade cooler", sym: "🧃" },
      { label: "Flood top lights", sym: "💡" },
      { label: "Pro coach roster", sym: "👤" },
    ],
    manager: { name: "Kavita Singh", role: "Club Manager, 7 years", image: STITCH.manager, verified: true, fastResponder: true },
    dayTier: { label: "Off-peak", hours: "07:00 AM — 04:00 PM", price: 800, unit: "hour", features: ["Racket check", "Court mopped"] },
    nightTier: { label: "League", hours: "04:00 PM — 10:00 PM", price: 1200, unit: "hour", features: ["Bright row lights", "Score tablet"] },
    booking: {
      startingPrice: 800,
      currency: "৳",
      bestValue: true,
      defaultDate: "Mar 10, 2025",
      playerOptions: [
        { label: "4 players (2 courts)", value: "4" },
        { label: "Doubles ladder (8)", value: "8" },
      ],
      lineItems: [
        { label: "2-hr court", amount: 1600 },
        { label: "Shuttle pack", amount: 199 },
      ],
    },
    gettingThere: "Multi-storey parking at the mall. Airport metro rail to Kuril stop, then 10 min CNG to the north gate.",
  },
  {
    id: "elite-arena-downtown",
    showInBrowse: false,
    showOnHome: true,
    title: "Khilgaon Elite Field",
    sport: "Football",
    location: "Khilgaon, Dhaka",
    price: "৳3,200/hr",
    rating: "4.8",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtGRrXjUeM0-VNU1WlZbVAyXH15V3p0kmi3nRe7cCiQ3Adj06csqa8pxB-0PoQYjljzgWBAGPl6Dt7Q4Y7AcohDWGeVCxzfZPqwcKnnxqPgYt2eH3q0OmD_C6scMPLHQ3UCL8beM_OOkodPLQa4cvkwC4xyCqT_A9sqkcHECUNdL9gSWWTYSScGOf2vc8fHNy7P5jW67ZxpWABYEW4DF6Tcvk3Ji1er7iwMRTAxCoLPl-z68ce4RJsafoBHmODB_TeRZYXJMV_0w",
    badge: "football",
    tags: ["5-A-Side", "Pro Turf"],
    extra: "+12",
    breadcrumb: { area: "Dhaka", path: "Khilgaon" },
    address: "Meradia Main Road, Khilgaon, Dhaka 1219, Bangladesh",
    reviewCount: 189,
    about: "Downtown’s premium 5-a-side field with pro-grade turf, league scheduling, and broadcast-friendly sightlines. Corporate rentals welcome.",
    amenities: [
      { label: "Team benches", sym: "🪑" },
      { label: "Ball rental", sym: "⚽" },
      { label: "Ice tub", sym: "🧊" },
      { label: "WiFi", sym: "📶" },
      { label: "Flood", sym: "💡" },
      { label: "First aid", sym: "⛑" },
    ],
    manager: { name: "Nusrat Jahan", role: "Facility manager for 8+ years", image: STITCH.manager, verified: true, fastResponder: true },
    dayTier: { label: "Day", hours: "09:00 AM — 05:00 PM", price: 3000, unit: "hour", features: ["Natural light", "Locker", "Water"] },
    nightTier: { label: "Evening", hours: "05:00 PM — 11:00 PM", price: 3800, unit: "hour", features: ["Flood", "Pro shop access"] },
    booking: {
      startingPrice: 3200,
      currency: "৳",
      bestValue: true,
      defaultDate: "15 Mar, 2025",
      playerOptions: [
        { label: "10-14 (5v5)", value: "5" },
        { label: "16-22 (11v11 small)", value: "11" },
      ],
      lineItems: [
        { label: "Day rate (2 hrs)", amount: 6400 },
        { label: "Maintenance", amount: 200 },
      ],
    },
    gettingThere: "5 min from Khilgaon mor; CNG and rickshaw stand on Meradia Road. Bike parking at the main gate.",
  },
  {
    id: "glass-box-padel",
    showInBrowse: false,
    showOnHome: true,
    title: "Banani Padel House",
    sport: "Padel",
    location: "Banani, Dhaka",
    price: "৳4,200/hr",
    rating: "4.9",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJjxyZgImDanEUmRed4OtFqrWd_7QPYNyjbwlh-ATVo2ZRSspBMQNhjgIviOyUoj7mzkIJwBiSwY8XKzpcwzeMP8LfV9VlY0CbZywrtGgBFH3vUURQig4wTjyd-guYSaJr_C8N8C3RjOHE3nh8WbBJxmhMHsWdmVg-32Det7jbswC7rwRlSYzzfx5JwCdiFJZ8n1nM0sGzhNcRV7HEbreYhToCLJSL3fCC7JQ28u7VPNbJUj9UVCsuA6Joxv6ek1D_uAgRzH7CrA",
    badge: "padel",
    tags: ["Padel", "Indoor"],
    extra: "+5",
    breadcrumb: { area: "Dhaka", path: "Banani" },
    address: "Road 12, Block E, Banani, Dhaka 1213, Bangladesh",
    reviewCount: 76,
    about: "Glass-walled padel with Panoramic roof panels—WPT-spec court, vibration-damped floor, and coach-led intro sessions on request.",
    amenities: [
      { label: "Overhead LED", sym: "💡" },
      { label: "Balls", sym: "🎾" },
      { label: "Cafe mezz", sym: "☕" },
      { label: "Racket demo wall", sym: "🏸" },
      { label: "Pro shop", sym: "🛍" },
      { label: "Sound dampening", sym: "🔇" },
    ],
    manager: { name: "Marcus Vela", role: "Program Director, 3 years", image: STITCH.manager, verified: true, fastResponder: true },
    dayTier: { label: "Off-peak", hours: "08:00 AM — 04:00 PM", price: 3800, unit: "hour", features: ["AC steady", "Court 1-2"] },
    nightTier: { label: "Evening", hours: "04:00 PM — 10:00 PM", price: 4200, unit: "hour", features: ["Pro lighting", "Hospitality bar"] },
    booking: {
      startingPrice: 4200,
      currency: "৳",
      bestValue: false,
      defaultDate: "20 Mar, 2025",
      playerOptions: [
        { label: "2v2 (4 pax)", value: "4" },
        { label: "Rotating 8", value: "8" },
      ],
      lineItems: [
        { label: "90 min session", amount: 6000 },
        { label: "Balls", amount: 250 },
      ],
    },
    gettingThere: "Gated lane off Road 12; ring the intercom for guest parking and court entry.",
  },
  {
    id: "heights-sports-center",
    showInBrowse: false,
    showOnHome: true,
    title: "Dhanmondi Court Hall",
    sport: "Basketball",
    location: "Dhanmondi, Dhaka",
    price: "৳2,800/hr",
    rating: "4.7",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBULMmBUSa-fMbWERcgrmJR-K_I3PrfyIiwhXiMiqRSSGH0bcUas0nPTqG7L2821yVWc88Lr6ReMw36RIHJ_ARvzfoK1mLB1_lDY9NOG-YEPMXGPvNi3u5PqHWK_sk4xaYQQsuzxsa_tCSjjDFIZ2u8L_QehxubThmFEcacMdhPT4eq8xC77uN3tRzwiaTI-zDZvChMN9T12FiE69RCcT19d6-QjdsP6sMf-kAWODRKNLETb9dm7tnygXdRyt-eyvK8Z3ZCANBjXQ",
    badge: "basketball",
    tags: ["Basketball", "AC Hall"],
    extra: "+28",
    breadcrumb: { area: "Dhaka", path: "Dhanmondi" },
    address: "Satmasjid Road, Dhanmondi, Dhaka 1209, Bangladesh",
    reviewCount: 134,
    about: "Full-court air-conditioned hall, NBA-line markings, and shot clock—youth and adult rec blocks every hour.",
    amenities: [
      { label: "Shot clock", sym: "⏱" },
      { label: "Ball rack", sym: "🏀" },
      { label: "Benches", sym: "🪑" },
      { label: "Trainers on call", sym: "👤" },
      { label: "Flood", sym: "💡" },
      { label: "Ice", sym: "🧊" },
    ],
    manager: { name: "Dana Brooks", role: "GM, 9 years", image: STITCH.manager, verified: true, fastResponder: true },
    dayTier: { label: "AM", hours: "07:00 AM — 02:00 PM", price: 2400, unit: "hour", features: ["Open gym", "Ball included"] },
    nightTier: { label: "League", hours: "02:00 PM — 10:00 PM", price: 3000, unit: "hour", features: ["Scorer table", "Clock op"] },
    booking: {
      startingPrice: 2800,
      currency: "৳",
      bestValue: true,
      defaultDate: "10 Mar, 2025",
      playerOptions: [
        { label: "5v5 (10)", value: "5" },
        { label: "Full 10+ subs", value: "full" },
      ],
      lineItems: [
        { label: "2-hr rental", amount: 5000 },
        { label: "Striping fee", amount: 0 },
      ],
    },
    gettingThere: "3 min from Dhanmondi 8/A; basement parking in the same building, lift to 4th floor hall.",
  },
].map((t) => {
  const gallery = rotateOrder(t.id, STITCH.gallery);
  return { ...t, gallery, mapImage: STITCH.map };
});

/** @type {typeof rawTurfs} */
export const turfs = rawTurfs;

export function getTurfById(id) {
  return turfs.find((t) => t.id === id) ?? null;
}

export function getBrowseTurfs() {
  return turfs.filter((t) => t.showInBrowse);
}

export function getHomeVenues() {
  return turfs.filter((t) => t.showOnHome);
}

const TAKA = "\u09F3";

const fmt = (n) =>
  n.toLocaleString("en-BD", {
    maximumFractionDigits: 0,
  });

/** All values display in Bangladeshi Taka (৳) regardless of stored legacy `currency` code. */
export function formatPrice(amount, currency) {
  if (amount == null || Number.isNaN(amount)) {
    return `${TAKA}0`;
  }
  if (currency === TAKA || currency === "৳" || currency === "BDT" || currency === "₹" || currency === "£" || currency === "$") {
    return `${TAKA}${fmt(amount)}`;
  }
  return `${TAKA}${fmt(typeof amount === "number" ? amount : Number(amount) || 0)}`;
}

export function getBookingTotal(t) {
  const sub = t.booking.lineItems.reduce((s, x) => s + x.amount, 0);
  return sub;
}
