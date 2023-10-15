
import { getEmployerDetail } from "../utilities/utils";
import { useEffect, useState } from "react";

interface EmployerData {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: number;
  location: string;
}
const getEmployer = () => {
  const [employerData, setEmployerData] = useState<EmployerData[]>([]);
  const [employerId, setEmployerId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getEmployerDetails = async (id: number) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getEmployerDetail(id);
      setEmployerData(data);
      setEmployerId(id);
      setLoading(false);
    } catch (error) {
      setError("Error fetching employer details");
      setLoading(false);
    }
  };
  return { employerData, employerId, loading, error, getEmployerDetails };
};

export default getEmployer;

