import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Shared/Store";
import { fetchInsights } from "../../Shared/Store/insightsSlice";

export const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const fromDate = "2023-01-01 00:00:00";
    dispatch(fetchInsights(fromDate));
  }, [dispatch]);
  return <div>Dashboard</div>;
};
