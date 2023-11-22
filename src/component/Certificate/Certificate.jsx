import { useEffect, useState } from "react";
import Layout from "../../Latout/Layout";
import { client } from "../../lib/sanity";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import CertificateCard from "./CertificateCard";

const Certificate = () => {
  const [certificates, setCertificate] = useState([]);
  const [loading, setLoading] = useState();

  const getCertificate = async () => {
    setLoading(true);
    const query = `*[_type == "certificate" ]{_id,certificateDetails,certificateName,certificateLink,"certificateImage":certificateImage.asset->url}`;
    const allCertificate = await client.fetch(query);
    setCertificate(allCertificate);
    setLoading(false);
  };

  useEffect(() => {
    getCertificate();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <AiOutlineLoading3Quarters />
      </div>
    );
  }
  return (
    <Layout title="Certificate">
      <div className="flex flex-wrap gap-5 justify-center container mx-auto mt-5">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate._id}
            certificate={certificate}
          ></CertificateCard>
        ))}
      </div>
    </Layout>
  );
};

export default Certificate;
