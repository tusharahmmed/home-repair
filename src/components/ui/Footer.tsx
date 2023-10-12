import styles from "@/styles/ui/Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} section-padding`}>
      <div className={styles.footerContent}>
        <div className="container pl-[17rem] py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  -mb-10 -mx-4">
            <div className=" px-4">
              <h2 className="title-font font-bold text-2xl  tracking-widest text-sm mb-3">
                OUR ADDRESS
              </h2>
              <div className="mb-3">
                <p className="text-sm">30 East Tejturi Bazar</p>
                <p className="text-sm">Tejgaon,Dhaka</p>
              </div>
              <div>
                <p className="text-sm">
                  <span className="font-medium">Phone:</span> 01798-6866
                </p>
                <p className="text-sm">
                  <span className="font-medium">Phone:</span> 01975-4099
                </p>
                <p className="text-sm">
                  <span className="font-medium">Telephone:</span> 02-2222425
                </p>
                <p className="text-sm">
                  <span className="font-medium">Email: </span>
                  homerepair66888@gmail.com
                </p>
              </div>
            </div>
            <div className="  px-4">
              <h2 className="title-font font-medium text-gray-200 tracking-widest text-medium font-medium mb-3">
                Useful Links
              </h2>
              <div className="list-none text-sm mb-10">
                <p className="mb-2">
                  <a className="text-gray-300 hover:text-gray-800">Home</a>
                </p>
                <p className="mb-2">
                  <a className=" text-gray-300 hover:text-gray-800">About</a>
                </p>
                <p className="mb-2">
                  <a className=" text-gray-300 hover:text-gray-800">
                    Portfolio
                  </a>
                </p>
                <p className="mb-2">
                  <a className=" text-gray-300 hover:text-gray-800">Login</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center justify-center">
            <div className="flex justify-center items-center ">
              <p className=" text-sm  text-center">
                © Copyright Home Repair BD Ltd. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
