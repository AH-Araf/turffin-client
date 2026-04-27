import { BookingConfirmedPageView } from "@/features/booking-confirmed/BookingConfirmedPageView";
import { defaultBooking } from "@/features/booking-confirmed/defaults";

export const metadata = {
  title: "Booking confirmed | Turffin",
  description: "Your turf session is confirmed. Add it to your calendar or view the booking in your account.",
};

export default async function BookingConfirmedPage({ searchParams }) {
  const p = await searchParams;
  const id = firstString(p.id) ?? p.bookingId;
  const dateTime = firstString(p.when) ?? p.date;
  const venue = firstString(p.venue) ?? p.v;
  const image = firstString(p.image) ?? p.img;

  return (
    <BookingConfirmedPageView
      bookingId={id != null && id.length > 0 ? stripHash(id) : defaultBooking.id}
      dateTime={dateTime && dateTime.length > 0 ? dateTime : defaultBooking.dateTime}
      venueName={venue && venue.length > 0 ? venue : defaultBooking.venueName}
      venueImage={image && image.length > 0 ? image : defaultBooking.venueImage}
    />
  );
}

function firstString(value) {
  if (value == null) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}

function stripHash(s) {
  return s.replace(/^#/, "");
}
