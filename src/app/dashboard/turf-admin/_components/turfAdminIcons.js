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
    case "help_outline":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 2-3 4M12 17h.01" />
        </svg>
      );
    case "sports_soccer":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M5 12h14M12 5c2 2.5 2 13.5 0 16M12 5c-2 2.5-2 13.5 0 16" />
        </svg>
      );
    case "inventory_2":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M3 7h18v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
          <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 7l9 4 9-4" />
        </svg>
      );
    case "account_circle":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="8" r="4" />
          <path d="M6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case "event_available":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 11h18M9 16l2 2 4-4" />
        </svg>
      );
    case "upload_file":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M12 11v6M9 14l3-3 3 3" />
        </svg>
      );
    case "gpp_maybe":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      );
    case "update":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M21 12a9 9 0 11-9-9c2.52 0 4.93 1 6.74 2.74L21 3" />
          <path d="M21 3v5h-5" />
        </svg>
      );
    case "person_edit":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-1a4 4 0 014-4h2M16 3l4 4-8 8H8v-4l8-8z" />
        </svg>
      );
    case "lock_reset":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M7 11V7a5 5 0 019.9-1M18 3v4h-4" />
        </svg>
      );
    case "photo_camera":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M20 19H4a2 2 0 01-2-2V9a2 2 0 012-2h2l2-3h8l2 3h2a2 2 0 012 2v8a2 2 0 01-2 2z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
      );
    case "person_off":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="9" cy="7" r="4" />
          <path d="M17 17l-4-4M3 21v-1a4 4 0 014-4h2M16 3l5 5M3 3l18 18" />
        </svg>
      );
    case "person_add":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-1a4 4 0 014-4h2M16 11h6M19 8v6" />
        </svg>
      );
    case "edit":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      );
    case "block":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M5 5l14 14" />
        </svg>
      );
    case "location_on":
      return (
        <svg {...common}>
          <path
            fill={stroke}
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
          />
        </svg>
      );
    case "event_note":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 11h18M8 15h2M12 15h2M8 19h8" />
        </svg>
      );
    case "aspect_ratio":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M8 9h8M8 15h4" />
        </svg>
      );
    case "groups":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 012-3A22 22 0 0122 2c0 5-5 10-10 10z" />
          <path d="M9 12l3 3M5 19l2-2" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M6 3h12l4 6-10 13L2 9l4-6z" />
        </svg>
      );
    case "workspace_premium":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.5L5.7 21 8 14 2 9.4h7.6L12 2z" />
        </svg>
      );
    case "settings_suggest":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          <path d="M18 4l1 1M20 2l-1 2M20 2l2-1" />
        </svg>
      );
    case "shower":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M8 2v4M16 2v4M5 6h14v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6zM8 14h8" />
        </svg>
      );
    case "local_parking":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 16V8h3a3 3 0 010 6H9" />
        </svg>
      );
    case "lightbulb":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M9 18h6M10 22h4M12 2a6 6 0 016 6c0 2-2 3-2 5H8c0-2-2-3-2-5a6 6 0 016-6z" />
        </svg>
      );
    case "coffee":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a2 2 0 01-2 2H4a2 2 0 01-2-2V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
      );
    case "meeting_room":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 8h4M7 12h10M7 16h6" />
        </svg>
      );
    case "report_problem":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      );
    case "call":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      );
    case "pause_circle":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <circle cx="12" cy="12" r="9" />
          <path d="M10 9v6M14 9v6" />
        </svg>
      );
    case "autorenew":
      return (
        <svg {...common} fill="none" stroke={stroke} strokeWidth={sw}>
          <path d="M21 12a9 9 0 11-3-6.7M21 3v5h-5M3 12a9 9 0 013 6.7M3 21v-5h5" />
        </svg>
      );
    default:
      return null;
  }
}
