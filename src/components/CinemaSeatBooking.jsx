const CinemaSeatBooking = (props) => {
  const {
    layout = {
      rows: 8,
      seatsPerRow: 12,
      aislePosition: 5,
    },
    seatTypes = {
      regular: { name: "Regular", price: 150, rows: [0, 1, 2] },
      premium: { name: "Premium", price: 250, rows: [3, 4, 5] },
      vip: { name: "VIP", price: 350, rows: [6, 7] },
    },
    bookedSeats = [],
    currency = "USD",
    onBookingComplete = () => {},
    title = "Cinema Hall Booking",
    subtitle = "Select your preferred seats",
  } = props;

  return (
    <div>
      {/* title */}
      {/* screen */}
      {/* seat map */}
      {/* legend */}
      {/* summary */}
      {/* book button */}
    </div>
  );
};

export default CinemaSeatBooking;
