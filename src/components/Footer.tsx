import logo from '../assets/brand.png';

const Footer = () => {
  return (
    <div className=" text-white py-6 mt-80">
      <div className="container grid grid-cols-3">
        <div className="flex flex-col ml-32">
          <div className='mr-24'>
            <h5 className="text-24 font-medium mb-4">Contact</h5>
            <p className="text-18 font-light font-monserrat leading-21.94 tracking-one w-462">Work inquiries: work@vaultflow.com</p>
            <p className="text-18 font-light font-monserrat leading-21.94 tracking-one w-462">PR and speaking: press@vaultflow.com</p>
            <p className="text-18 font-light font-monserrat leading-21.94 tracking-one w-462">New business: newbusiness@vaultflow.com</p>
          </div>
          <div className="mt-8 text-24 font-medium mb-4">
            <h5 className="text-xl font-semibold mb-3">Careers</h5>
            <p className="text-18 font-light font-monserrat leading-21.94 tracking-one">Careers@vaultflow.com</p>
          </div>
        </div>
        <div className="flex flex-col ml-32">
          <div className="text-24 font-medium mb-4">
            <h5 className="text-xl font-semibold mb-3">Address</h5>
            <p className="text-18 font-light font-monserrat leading-21.94 tracking-one">398 11th Street, Floor 2</p>
            <p className="text-18 font-light font-monserrat leading-21.94 tracking-one">San Francisco, CA 94103</p>
          </div>
          <div className="mt-8 text-24 font-medium mb-4">
            <h5 className="text-xl font-semibold mb-3">Social</h5>
            <p className="text-18 font-light font-monserrat leading-21.94 tracking-one">Twitter</p>
            <p className="text-18 font-light font-monserrat leading-21.94 tracking-one">Instagram</p>
            <p className="text-18 font-light font-monserrat leading-21.94 tracking-one">TikTok</p>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-4 text-left flex justify-between items-end">
        <p className="text-gray font-montserrat font-light font-16 leading-19.5 tracking-one ml-32">© 2023 Vaultflow. All Rights Reserved.</p>
        <img src={logo} alt="Vaultflow logo" className="h-6 mt-4 mr-12" />
      </div>
    </div>
  );
};

export default Footer;
