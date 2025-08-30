import { useRef, useState } from "react";
import "../styles/staff-carousel.css";

export const StaffCarousel = ({ staffList }) => {
  const [dragging, setDragging] = useState(false);
  const [snapped, setSnapped] = useState(true);
  const [focusedStaffIndex, setFocusedStaffIndex] = useState(0);
  const [locationState, setLocationState] = useState({
    left: 0,
    x: 0,
  });
  const rootRef = useRef(null);

  return (
    <div
      className="carousel carousel-center mx-auto mt-16 w-full gap-8 overflow-y-hidden cursor-grab select-none"
      id="staffCarousel"
      style={{
        scrollBehavior: dragging ? "auto" : "smooth",
        scrollSnapType: dragging ? "none" : "x mandatory",
        cursor: dragging ? "grabbing" : "grab",
        userSelect: dragging ? "none" : "auto",
      }}
      ref={rootRef}
      onScroll={(e) => {
        const s = e.target.scrollLeft / 332;
        const focusedStaffIndex = s - (s % 1);
        if (s % 1 === 0) {
          setSnapped(true);
        } else {
          setSnapped(false);
        }
        setFocusedStaffIndex(focusedStaffIndex);
      }}
      onMouseDown={(e) => {
        setLocationState({
          left: rootRef.current.scrollLeft,
          x: e.clientX,
        });
        setDragging(true);
      }}
      onMouseUp={(e) => {
        setDragging(false);
      }}
      onMouseLeave={(e) => {
        setDragging(false);
      }}
      onMouseMove={(e) => {
        if (dragging) {
          const deltaX = e.clientX - locationState.x;
          rootRef.current.scrollLeft = locationState.left - deltaX;
        }
      }}
    >
      {staffList.map((staff, idx) => {
        const edgeStyle = {};

        if (idx === 0) {
          edgeStyle.paddingLeft = "calc((100% - 300px) / 2)";
        } else if (idx === staffList.length - 1) {
          edgeStyle.paddingRight = "calc((100% - 300px) / 2)";
        }

        return (
          <div className="carousel-item" id="" style={edgeStyle} key={idx}>
            <img
              src={staff.image}
              height="300px"
              width="300px"
              className={`rounded-full mx-auto transition-opacity select-none ${
                snapped && idx === focusedStaffIndex
                  ? "opacity-100"
                  : "opacity-50"
              }`}
              draggable="false"
              alt={staff.name}
            />
            <div
              className={`pt-4 !pb-12 bio ${
                snapped && idx === focusedStaffIndex
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <h1 className="font-bold text-center text-4xl lg:text-5xl text-black my-2">
                {staff.name}
              </h1>
              <h2 className="text-center text-xl font-medium italic text-gray-500">
                {staff.jobTitle}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};
