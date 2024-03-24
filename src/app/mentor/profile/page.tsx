
import Head from 'next/head';

const ProfilePage: React.FC<{ applicant: Applicant }> = ({ applicant }) => {
  return (
    <div>
      <Head>
        <title>{`${applicant.firstName} ${applicant.lastName}'s Profile`}</title>
        <meta name="description" content="Applicant Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Your profile content goes here */}
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">{`${applicant.firstName} ${applicant.lastName}`}</h1>
        <p className="text-lg mb-2">{`Email: ${applicant.email}`}</p>
        {/* Add more profile details as needed */}
      </div>
    </div>
  );
};

export default ProfilePage;


// types.ts
export interface Applicant {
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
  