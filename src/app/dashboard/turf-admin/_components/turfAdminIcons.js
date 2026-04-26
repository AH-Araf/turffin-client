/** SVG icons for TurfAdmin dashboard (Material-style). */

export function TurfAdminIcon({ name, className = "", filled = false }) {
  const common = { className: `shrink-0 ${className}`, "aria-hidden": true, viewBox: "0 0 24 24" };
  const stroke = "currentColor";
  const sw = 1.75;

  switch (name) {
    case "dashboard":
      return (
        <svg {...common} fill="currentColor">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "stadium":
      return (
        <svg {...common} fill="currentColor">
          <path d="M2 5h20v2H2V5zm0 4h4v3H2V9zm6 0h8v3H8V9zm10 0h4v3h-4V9zM2 16h4v3H2v-3zm6 0h8v3H8v-3zm10 0h4v3h-4v-3zM2 20h20v2H2v-2z" />
        </svg>
      );
    case "event_upcoming":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M16 3v4M8 3v4M3 11h18M8 15h.01M12 15h.01M16 15h.01" />
        </svg>
      );
    case "calendar_today":
    case "calendar_month":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 11h18" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M4 19V5M10 19v-6M16 19V9M22 19V3" />
        </svg>
      );
    case "add":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "settings":
      return (
        <svg {...common} fill={filled ? stroke : "none"} stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      );
    case "help":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
        </svg>
      );
    case "search":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      );
    case "notifications":
    case "bell":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
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
    case "chevron_left":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      );
    case "chevron_right":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M9 18l6-6-6-6" />
        </svg>
      );
    case "payments":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M2 10h20" />
        </svg>
      );
    case "pending_actions":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      );
    case "group":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "download":
    case "file_download":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
        </svg>
      );
    case "upload":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 21V9m0 0l-4 4m4-4l4 4M5 21h14" />
        </svg>
      );
    case "visibility":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "delete":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14zM10 11v6M14 11v6" />
        </svg>
      );
    case "add_a_photo":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="8.5" cy="10.5" r="1.5" />
          <path d="M21 15l-5-5L9 17M15 5h6M18 2v6" />
        </svg>
      );
    case "add_circle":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
    case "keyboard_arrow_down":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      );
    case "trending_up":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" />
        </svg>
      );
    case "trending_down":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M23 18l-9.5-9.5-5 5L1 6M17 18h6v-6" />
        </svg>
      );
    case "book_online":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 2v4M16 2v4M3 10h18" />
        </svg>
      );
    case "cancel":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M15 9l-6 6M9 9l6 6" />
        </svg>
      );
    case "pending":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 6v6l3 3" />
        </svg>
      );
    case "timer":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      );
    case "arrow_forward":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      );
    case "check_circle":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      );
    case "filter_list":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M4 6h16M7 12h10M10 18h4" />
        </svg>
      );
    case "more_vert":
      return (
        <svg {...common} fill="currentColor">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
        </svg>
      );
    case "warning":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        </svg>
      );
    case "info":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      );
    case "description":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      );
    case "security":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "verified_user":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "verified":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <path d="M22 4L12 14.01l-3-3" />
        </svg>
      );
    case "badge":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.5L5.7 21 8 14 2 9.4h7.6L12 2z" />
        </svg>
      );
    case "touch_app":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M9 11V5.5a2.5 2.5 0 015 0V11M15 11V9M9 11H7a2 2 0 00-2 2v6a8 8 0 008 8 8 8 0 008-8v-1a2 2 0 00-2-2h-1" />
        </svg>
      );
    default:
      return null;
  }
}
