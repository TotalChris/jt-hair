import { MetaContent } from "../../shared/components/utility/MetaContent";
import { isMobile } from "../../shared/util/isMobile";
import { HoursTable } from "./HoursTable";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <MetaContent
        title="JT Hair Care of Brighton | Contact Us"
        description="Book an appointment at JT Hair by phone or walk-in today!"
      />
      <div className="w-full rounded-xl p-2">
        <div className="pt-24 px-8">
          <h1 className="font-bold text-7xl p-4 text-center">
            <i className="bi bi-telephone mx-auto text-black"></i>
          </h1>
          <h1 className="font-bold text-center text-5xl lg:text-7xl text-black my-2">
            Contact <span className="bg-jt-grad-text">JT Hair</span>
          </h1>
        </div>
        <div className="min-w-screen lg:max-w-5xl 2xl:max-w-7xl lg:mx-auto m-4">
          <div className="flex flex-col lg:flex-row my-12 md:mx-4 text-black">
            <div className="grid w-full lg:w-1/2 flex-grow rounded-box place-items-center gap-4">
              <h2 className="text-2xl font-bold">Call Us</h2>
              <h3 className="text-xl font-medium italic text-gray-500">
                Calls Are Answered During Business Hours
              </h3>
              {isMobile() ? (
                <a
                  href="tel:8105225028"
                  className="btn btn-ghost text-black bg-jt-grad hover:bg-yellow-200 hover:cursor-pointer normal-case text-lg"
                >
                  <i className="bi bi-telephone"></i>(810) 522-5028
                </a>
              ) : (
                <p className="text-black font-bold normal-case text-xl">
                  (810) 522-5028
                </p>
              )}
            </div>
            <div className="divider my-8 lg:my-0 divider-vertical lg:divider-horizontal after:bg-black before:bg-black">
              OR
            </div>
            <div className="grid w-full lg:w-1/2 flex-grow rounded-box place-items-center gap-4">
              <h2 className="text-2xl font-bold">Stop In</h2>
              <h3 className="text-xl font-medium italic text-gray-500">
                Walk-Ins & Appointments Welcome
              </h3>
              <HoursTable />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col min-w-screen lg:max-w-5xl 2xl:max-w-7xl lg:mx-auto m-4 pt-8"
          id="visit"
        >
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-left text-black my-2 flex items-end">
            <span>
              <i className="bi bi-geo-alt inline mx-2"></i>
            </span>
            Our&nbsp;<span className="bg-jt-grad-text">Location</span>:
          </h1>
          <address className="m-1 my-8 pl-2 border-l-2 border-black text-lg not-italic text-black">
            <p>8250 Movie Drive</p>
            <p>Brighton, MI 48116</p>
          </address>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.3869913626145!2d-83.79556792239266!3d42.54707492326364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88234fe138ebda23%3A0x6dfc901f5bd83758!2sJT%20Hair%20-%20Hairdresser%2C%20Hair%20Salon%2C%20Haircut%2C%20Hair%20care%2C%20Custom%20Hair%20Care%20in%20Brighton%2C%20MI!5e0!3m2!1sen!2sus!4v1682297126130!5m2!1sen!2sus"
            width="600"
            height="450"
            allowFullScreen=""
            loading="async"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            style={{ minHeight: "-webkit-fill-available", border: 0 }}
            title="JT Hair Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
