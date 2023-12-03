import { Link } from "react-router-dom";

const CertificateCard = ({ certificate }) => {
  const {
    certificateDetails,
    certificateName,
    certificateLink,
    certificateImage,
  } = certificate;
  return (
    <div>
      <div className="card w-96 bg-base-100  mb-10 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={certificateImage} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center h-48 text-center">
          <h2 className="card-title">{certificateName}</h2>
          <p>{certificateDetails}</p>
          <div className="card-actions">
            <Link
              to={certificateLink}
              target="_blank"
              className="btn btn-sm btn-outline btn-primary"
            >
              Live Link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
