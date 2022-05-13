import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  dataCharactors,
  dataDigitalBestSeller,
  dataDigitalNewReleases,
  dataFutured,
  dataNewsCard,
  dataStoreGames,
} from '../data';

const useProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProducts([
      ...dataFutured,
      ...dataNewsCard,
      ...dataCharactors,
      ...dataDigitalBestSeller,
      ...dataDigitalNewReleases,
      ...dataStoreGames,
    ]);
  }, []);

  useEffect(() => {
    const length = products.length;
    if (length > 0) {
      const cloneProducts = [...products];
      const product = cloneProducts.filter((p) => p.title === id);
      setProduct(...product);
    }
  }, [products, id]);
  return { product };
};

export default useProduct;
