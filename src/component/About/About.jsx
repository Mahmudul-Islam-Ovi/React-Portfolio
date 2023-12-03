import Layout from "../../Latout/Layout";
import myimage from "../../assets/imges/Mahmudul-Islam.jpg";

const About = () => {
  return (
    <Layout title="About">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col gap-20 lg:flex-row">
          <img src={myimage} className="lg:max-w-sm rounded-3xl shadow-2xl" />
          <div className="">
            <h1 className="text-5xl flex justify-center font-bold">
              Md Mahmudul Islam
            </h1>
            <p className="py-6">
              I am a passionate programmer who is continuously learning new
              skills in web application development. I am studying at the
              Department of Computer Science and Engineering of Daffodil
              International University. I am developing my skills at web
              technologies, especially the MERN stack. I am familiar with
              various front-end technologies such as HTML, CSS, Bootstrap,
              Tailwind CSS, Material UI. I am also building knowledge of backend
              technologies such as Node.js, MongoDB, and MySQL.
            </p>
            <button className="btn btn-primary">Hire me</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
