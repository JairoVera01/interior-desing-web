import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";

const ContactInfo = () => {
  return (
    <div className="col-span-1 bg-primary-300 rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full">
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Mail /> angelaarauco@tudominio.com
      </h5>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Phone /> +51 991 840 081
      </h5>
      <h5 className="flex flex-col xl:flex-row gap-4 items-center text-xl font-jost tracking-tight">
        {" "}
        <Web /> www.angelaarauco.com
      </h5>
    </div>
  );
};

export default ContactInfo;
