"use client";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Ensure you have this dependency installed
import ApplicantCard from "../../../components/applicantCard";

// Loader component
const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full border-t-4 border-green-500 border-opacity-25 h-12 w-12"></div>
  </div>
);

const MentorPage: React.FC = () => {
  const [mentors, setMentors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [confirmAction, setConfirmAction] = useState<(() => void) | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { authenticated } = parseCookies();
        if (!authenticated || authenticated !== "true") {
          alert("Please enter the password first.");
          window.location.href = "/password";
        }

        const response = await fetch(
          "https://myclanapi-91564747c3b4.herokuapp.com/api/profile/getallmentor"
        );
        const data = await response.json();
        setMentors(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching mentors:", error);
        setError("Error fetching mentors. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAccept = (mentorId: string) => {
    setConfirmAction(() => async () => {
      console.log(`Accepted mentor with ID: ${mentorId}`);
      toast.success("Mentor accepted successfully!");
      setMentors(mentors.filter((mentor) => mentor._id !== mentorId));
    });
  };

  const handleReject = (mentorId: string) => {
    setConfirmAction(() => async () => {
      console.log(`Rejected mentor with ID: ${mentorId}`);
      toast.error("Mentor rejected successfully!");
      // Implement logic for rejecting the mentor
      // For example:
      try {
        // Make API call to reject the mentor
        // Update state accordingly
      } catch (error) {
        console.error("Error rejecting mentor:", error);
        toast.error("Failed to reject mentor. Please try again later.");
      }
    });
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (mentors.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-semibold">No mentors found</div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-purple-700 justify-center mb-4 p-11">
        <h1 className="text-2xl font-semibold justify-center">
          Mentor Applications
        </h1>
        <div className="">
          <h1 className="text-3xl font-semibold mb-4">Applicants</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mentors.map((applicant) => (
              <ApplicantCard key={applicant._id} applicant={applicant} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorPage;
