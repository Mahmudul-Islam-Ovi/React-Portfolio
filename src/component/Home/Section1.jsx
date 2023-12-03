import { Link } from "react-router-dom";
import myimage from "../../assets/imges/Mahmudul-Islam.jpg";
import { FaDownload } from "react-icons/fa6";

const Section1 = () => {
  return (
    <div className=" lg:p-20 p-10">
      <div className=" flex justify-center">
        <img
          className="rounded-full my-5"
          width={"250px"}
          src={myimage}
          alt="mahmudul islam image"
        />
      </div>
      <div className="flex justify-center ">
        <div>
          <h1 className="lg:text-3xl text-2xl  mb-5 font-bold text-center">
            Hi, This is
          </h1>
          <h1 className="lg:text-5xl text-3xl mb-5 text-center font-bold">
            MD{" "}
            <span className="text-red-700 bg-green-300 px-5  rounded-full">
              MAHMUDUL
            </span>{" "}
            ISLAM
          </h1>
          <h1 className="lg:text-3xl text-3xl text-center font-semibold my-2">
            I'm a Front-End Developer
          </h1>
          <div>
            <div className="flex justify-center mt-5 gap-5">
              <Link
                to="https://www.linkedin.com/in/md-mahmudul-islam-39538b1b1/"
                className="bg-[#c2e7ff] rounded-2xl hover:bg-[#375a72]"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 30 30"
                  className=" p-2 rounded-full "
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path>
                </svg>
              </Link>
              <Link
                to="https://github.com/Mahmudul-Islam-Ovi"
                className="bg-[#c2e7ff] rounded-2xl hover:bg-[#375a72]"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  className=" p-2 rounded-full "
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </Link>
              <Link
                to="https://github.com/Mahmudul-Islam-Ovi"
                className="bg-[#c2e7ff] rounded-2xl  hover:bg-[#375a72]"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.0"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  className=" p-3 rounded-full "
                >
                  <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5 my-5">
        <button className="btn">
          <div className="flex gap-2">
            <div>Download cv</div>
            <FaDownload />
          </div>
        </button>
        <Link
          to="https://www.fiverr.com/mahmudul20?public_mode=true"
          target="_blank"
          className="btn"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default Section1;
