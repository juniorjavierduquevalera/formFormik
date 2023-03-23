import { useState, useEffect } from "react";

const preLoad = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return {
    loading,
  };
};

export default preLoad;
