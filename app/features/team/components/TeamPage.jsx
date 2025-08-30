import { useEffect, useState } from "react";
import { MetaContent } from "../../shared/components/utility/MetaContent";
import fetchStaff from "../data/fetchStaff";
import { StaffList } from "./StaffList";
import { StaffCarousel } from "./StaffCarousel";

const TeamPage = () => {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const staff = await fetchStaff();
      setStaffList(staff);
    };
    getData();
  }, []);

  return (
    <div className="min-h-screen">
      <MetaContent
        title="JT Hair Care of Brighton | Our Team"
        description="Meet the people that make JT Hair a great place for your hair care."
      />
      <div>
        <div className="py-4 min-w-screen pt-24">
          <h1 className="font-bold text-7xl p-4 text-center">
            <i className="bi bi-people mx-auto text-black"></i>
          </h1>
          <h1 className="font-bold text-center text-5xl lg:text-7xl text-black my-2">
            Our <span className="bg-jt-grad-text">Team</span>
          </h1>
          <h1 className="text-center text-xl font-medium italic text-gray-700 mx-4">
            Meet the people who make JT Hair the best place for your hair care
            needs.
          </h1>
        </div>
        <div className="hidden max-sm:block">
          <StaffList staffList={staffList} />
        </div>
        <div className="hidden sm:block">
          <StaffCarousel staffList={staffList} />
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
