/** Default demo values when no query params are present (e.g. direct visit). */
export const defaultBookingImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDhrVOMTf1Eq0j9J993KAKMgZ1ttWTv-ewhP9zK9wOjRtqciJ-KkatRZoT4ojX5E1DvjmOuxtVNHdz7ao4O1ySl_e0H3bf2si-1Pvdtm-JhlqD9khNDLTNUG4gWwBxad-aVVNRv3d0-JvmDYF2AzKFgVCWFdRvcHPaesXoFQQH9lJIn3DealhF4_88ZuoZQkxr51UhYRzwQvtwuhpxDlvdBSa2C4wCUh3irbTU20erM4YtBqO0bNgKeKbLU2fPdBD3-KAGwN8hZww";

export const defaultBooking = {
  id: "TRF-882941-X",
  dateTime: "24 Oct 2024 • 18:00 - 20:00",
  venueName: "The Arena — Field A, Banani, Dhaka",
  venueImage: defaultBookingImage,
};

export function buildGoogleCalendarUrl({ title, details, bookingId }) {
  const t = title || "Turffin session";
  const d = details || `Booking ref: #${bookingId}\nView details in the Turffin app.`;
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(t)}&details=${encodeURIComponent(d)}`;
}
