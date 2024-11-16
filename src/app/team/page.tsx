"use client";

import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";

interface TeamMember {
  id: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  role?: string;
}

const roles = [
  "Founder",
  "Co-Founder",
  "Operational Manager",
  "Head Barista",
  "Barista Team",
  "Cashier",
  "Cleaning Staff",
  "Waiters",
];

const TeamSection: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=8");
        const data = await response.json();

        const enhancedTeamMembers = data.results.map(
          (member: TeamMember, index: number) => ({
            ...member,
            role: roles[index],
          }),
        );

        setTeamMembers(enhancedTeamMembers);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team members:", error);
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-gray-900 px-4 py-20 bg-blend-color-burn">
      <div className="bg-center0 absolute inset-0 bg-cover">
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b backdrop-blur-sm"></div>
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-16 space-y-12 text-center">
          <div space-y-4>
            <h2 className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-3xl font-bold text-transparent md:text-6xl">
              Meet the Experts Behind Your Seamless Experience
            </h2>
            <p className="mt-8 text-lg text-gray-400">
              Our talented team is dedicated to delivering excellence
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.email} className="group relative">
              <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800 p-6 transition-all duration-300 hover:scale-105 hover:transform hover:border-amber-500 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-orange-500/10 opacity-0 transition-opacity group-hover:opacity-100" />

                <img
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  className="mx-auto mb-4 h-32 w-32 rounded-full border-4 border-gray-700 transition-colors group-hover:border-amber-500"
                />

                <div className="relative z-10 text-center">
                  <h3 className="mb-1 text-xl font-semibold text-white">
                    {member.name.first} {member.name.last}
                  </h3>
                  <p className="mb-3 font-medium text-blue-400">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-400">{member.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
