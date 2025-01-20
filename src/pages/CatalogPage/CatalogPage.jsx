import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { getCampers } from "../../redux/campers/operations";
import CampersList from "../../components/CampersList/CampersList";
import FilterBar from "../../components/FilterBar/FilterBar";
import css from "./CatalogPage.module.css";
import { getFilteredCampers, isLoading } from "../../redux/campers/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilteredCampers);
  const loading = useSelector(isLoading);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(4);
  }, [filter]);

  const onClickButton = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <>
      <Helmet>
        <title>Catalog</title>
      </Helmet>
      <section className={css.container}>
        <FilterBar />
        <CampersList list={filter.slice(0, visibleCount)} />
      </section>
      {!loading && visibleCount < filter.length && (
        <button className={css.button} type="button" onClick={onClickButton}>
          Load more
        </button>
      )}
    </>
  );
};

export default CatalogPage;
