"use client";

import Image from "next/image";

import { Button, Card, Loading } from "@/app/components";
import { usePatient } from "@/app/patients/hooks";

import BirthIcon from "assets/icons/Birth.svg";
import GenderIcon from "assets/icons/Female.svg";
import PhoneIcon from "assets/icons/Phone.svg";
import InsuranceIcon from "assets/icons/Insurance.svg";
import { formatDate } from "@/app/utils";

export function PatientDetails() {
  const { currentPatient } = usePatient();

  if (!currentPatient.name) {
    return (
      <Card className="rounded-2xl p-5 flex justify-center items-center h-[740px]">
        <Loading showText />
      </Card>
    );
  }

  return (
    <Card className="rounded-2xl p-5">
      <div className="mb-8 flex flex-col items-center">
        <Image
          src={currentPatient.profile_picture}
          alt="Patient profile picture"
          height={200}
          width={200}
          className="rounded-full mb-6"
        />
        <span className="text-2xl font-extrabold">{currentPatient.name}</span>
      </div>

      <div className="flex flex-col gap-6 mb-10">
        <DetailsSection
          icon={BirthIcon}
          label="Date Of Birth"
          value={formatDate(currentPatient.date_of_birth, "MMMM dd, yyyy")}
        />
        <DetailsSection
          icon={GenderIcon}
          label="Gender"
          value={currentPatient.gender}
        />
        <DetailsSection
          icon={PhoneIcon}
          label="Contact Info."
          value={currentPatient.phone_number}
        />
        <DetailsSection
          icon={PhoneIcon}
          label="Emergency Contacts"
          value={currentPatient.emergency_contact}
        />
        <DetailsSection
          icon={InsuranceIcon}
          label="Insurance Provider"
          value={currentPatient.insurance_type}
        />
      </div>

      <Button>Show All Information</Button>
    </Card>
  );
}

type DetailsSectionProps = {
  icon: any;
  label: string;
  value: string;
};
const DetailsSection = ({ icon, label, value }: DetailsSectionProps) => {
  return (
    <div className="flex gap-4">
      <div className="rounded-full p-1 bg-gray-light">
        <Image src={icon} alt={`icon of ${label} section`} />
      </div>
      <div className="flex flex-col text-sm">
        <span className="mb-2">{label}</span>
        <span className="font-bold">{value}</span>
      </div>
    </div>
  );
};
