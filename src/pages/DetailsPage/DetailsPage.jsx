import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCamperDetails } from "../../redux/campers/operations";
import css from "./Details.module.css";
import CamperDescription from "../../components/CamperDescription/CamperDescription";
import { Toaster } from "react-hot-toast";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCamperDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Helmet>
        <title>Details</title>
      </Helmet>
      <Toaster position="top-center" reverseOrder={false} />
      <section className={css.detailed_container}>
        <CamperDescription />
      </section>
    </>
  );
};

export default DetailsPage;
