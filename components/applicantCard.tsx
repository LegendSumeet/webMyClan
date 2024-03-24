import React from "react";
import Image from "next/image";

interface Applicant {
  _id: string;
  category: string;
  location: string;
  profileheadline: string;
  education: string;
  availability: { Time: string }[];
  skills: { skill: string }[];
  currentWorkingat: string;
  linkedin: string;
  instgram: string;
  otherProfile: string;
  availabileforchat: boolean;
  availabileforvideo: boolean;
  availabileformeeting: boolean;
  availabileforaudio: boolean;
  audiocharges: string;
  inpersonmeetingcharges: string;
  inpersonmeetingcity: string;
  videocharges: string;
  chatcharges: string;
  description: string;
  amountEarned: number;
  totalSessions: number;
  avgrating: number;
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  isactive: boolean;
  imglink: string;
  applcationStatus: string;
  createdAt: string;
  updatedAt: string;
}

interface ApplicantCardProps {
  applicant: Applicant;
}

const ApplicantCard: React.FC<ApplicantCardProps> = ({ applicant }) => {
  return (
    <div className="bg-black border-collapse border px-4 py-6 justify-center sm:h-96 sm:w-96 sm:p-10 sm:m-11 md:w-full lg:w-2/3 xl:w-1/2 rounded-lg shadow-lg text-white">
      <div className="relative w-full h-48 sm:h-auto sm:w-auto rounded-md overflow-hidden">
        <Image
          className="rounded-md"
          src={applicant.imglink}
          alt={`${applicant.firstName} ${applicant.lastName}`}
          width={500}
          height={500}
          objectFit="cover"
          layout="responsive"
        />
      </div>
      <h1 className="text-4xl py-8 font-extrabold sm:text-2xl lg:text-3xl xl:text-4xl mt-4">
        {`${applicant.firstName} ${applicant.lastName}`}
      </h1>
  
     
    </div>
  );
};

export default ApplicantCard;
