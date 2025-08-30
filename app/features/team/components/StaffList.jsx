import "../styles/staff-list.css";

export const StaffList = ({ staffList }) => {
  return (
    <div
      className="min-w-screen lg:max-w-5xl 2xl:max-w-7xl mt-4 mx-4 flex flex-col"
      id="staffListRoot"
    >
      {staffList.map((staff, idx) => {
        return (
          <div className="staff-item" id={"staff-" + idx} key={idx}>
            <img
              src={staff.image}
              height="150px"
              width="150px"
              className="rounded-full select-none"
              alt={staff.name}
            />
            <div className="pl-4 bio">
              <h1 className="font-bold text-center text-4xl text-black my-2">
                {staff.name}
              </h1>
              <hr style={{ height: "2px", width: "100%" }} />
              <h2 className="text-2xl font-medium italic text-gray-500">
                {staff.jobTitle}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};
