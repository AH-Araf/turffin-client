/** Shared SVG icons for user dashboard pages (Stitch / Material-style). */

export function DashboardUserIcon({ name, className = "", filled = false }) {
  const common = { className: `shrink-0 ${className}`, "aria-hidden": true, viewBox: "0 0 24 24", fill: "currentColor" };
  const stroke = "currentColor";
  const sw = 1.75;
  switch (name) {
    case "stadium":
      return (
        <svg {...common}>
          <path d="M2 5h20v2H2V5zm0 4h4v3H2V9zm6 0h8v3H8V9zm10 0h4v3h-4V9zM2 16h4v3H2v-3zm6 0h8v3H8v-3zm10 0h4v3h-4v-3zM2 20h20v2H2v-2z" />
        </svg>
      );
    case "dashboard":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "calendar":
    case "calendar_month":
    case "calendar_today":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 11h18" />
        </svg>
      );
    case "payments":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      );
    case "settings":
      return (
        <svg
          className={`shrink-0 ${className}`}
          aria-hidden
          viewBox="0 0 24 24"
          fill={filled ? stroke : "none"}
          stroke={stroke}
          strokeWidth={sw}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      );
    case "logout":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
        </svg>
      );
    case "chevron_right":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M9 18l6-6-6-6" />
        </svg>
      );
    case "chevron_left":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      );
    case "person":
      return (
        <svg {...common}>
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      );
    case "verified":
      return (
        <svg {...common}>
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 16.17l6.59-6.59L18 11l-8 8z" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z" />
        </svg>
      );
    case "shield_lock":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="1" />
          <path d="M12 16v-3" />
        </svg>
      );
    case "check_circle":
      return (
        <svg {...common}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      );
    case "pending":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      );
    case "trending_up":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" />
        </svg>
      );
    case "timer":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="13" r="8" />
          <path d="M12 9v4l2 2M9 2h6" />
        </svg>
      );
    case "history":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      );
    case "verified_user":
      return (
        <svg {...common}>
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 17l-4-4 1.41-1.41L11 16.17l7.59-7.59L20 10l-9 9z" />
        </svg>
      );
    case "search":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-4.35-4.35" />
        </svg>
      );
    case "sports_soccer":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M5 12h14M12 5c2 2.5 2 13.5 0 16M12 5c-2 2.5-2 13.5 0 16" />
        </svg>
      );
    case "add":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "add_circle":
      return (
        <svg {...common}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
        </svg>
      );
    case "event_available":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 11h18M9 16l2 2 4-4" />
        </svg>
      );
    case "arrow_forward":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      );
    case "location_on":
      return (
        <svg {...common}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      );
    case "more_vert":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="6" r="1.5" fill={stroke} stroke="none" />
          <circle cx="12" cy="12" r="1.5" fill={stroke} stroke="none" />
          <circle cx="12" cy="18" r="1.5" fill={stroke} stroke="none" />
        </svg>
      );
    case "account_balance_wallet":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M21 18v1c0 1.1-.9 2-2 2H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2h14a2 2 0 012 2v1M16 12h5v5h-5a2.5 2.5 0 010-5z" />
        </svg>
      );
    case "star":
      return (
        <svg {...common} fill={filled ? stroke : "none"} stroke={stroke} strokeWidth={sw}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    case "schedule":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      );
    case "warning":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 2L1 21h22M12 9v4M12 17h.01" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      );
    case "help_outline":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
        </svg>
      );
    case "download":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
        </svg>
      );
    case "filter_list":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M4 6h16M7 12h10M10 18h4" />
        </svg>
      );
    case "sports_tennis":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="15" cy="9" r="5" />
          <path d="M9 15l6-6M4 20l5-5" />
        </svg>
      );
    case "sports_basketball":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18M3 12h18M5 5l14 14M19 5L5 19" />
        </svg>
      );
    case "workspace_premium":
      return (
        <svg {...common} fill={filled ? stroke : "none"} stroke={stroke} strokeWidth={sw}>
          <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.5-6.3 4.5 2.3-7-6-4.6h7.6L12 2z" />
        </svg>
      );
    default:
      return null;
  }
}
