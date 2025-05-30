import React from "react";
import Card from '@/components/Card/MemberCard';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/Tabs/Tabs";
import {
  Leads,
  GUI,
  Levitation,
  Electrical,
  Business,
  cSuite,
  Mechanical,
  Sense,
  Pr
} from "@/app/(layout)/members/memberData";

import Link from "next/link";
import Heading from "@/components/Heading";

export const metadata = {
  title: "Members",
  description: "Our team members"
}


const page = () => {
  const teams = [
    "Leads",
    "Mechanical",
    "Electrical",
    "Sense and Control",
    "GUI",
    "PR and Sponsorship"
  ];

  return (
    <section className="bg-light-100 p-4 ">
      <div className="text-center p-4 max-w-7xl mx-auto">
        <h1 className="sm:text-7xl text-5xl p-4 ">
          <span className="text-gray-500">Meet the team that makes  <br /></span> the magic <span className=" text-gray-500">happen</span>
        </h1>
        {/* <Heading text={["Meet the team that makes", "the magic", "happen"]}/> */}
        <h2 className="sm:text-xl text-gray-500 p-2">
          Proud members of Vegapod Hyperloop
        </h2>
      </div>
      <div className="p-4 mt-4 bg-[#F4F3EE] rounded-2xl max-w-7xl mx-auto">
        <Tabs defaultValue="Leads" className="">
          <TabsList className="py-4  grid grid-cols-2 lg:flex items-start gap-4">
            

            {teams.map((team, index) => {
              return (
                <TabsTrigger value={`${team}`} key={index}>
                  {team}
                </TabsTrigger>
              );
            })}
            
          </TabsList>

         
          <div className="">

          <TabsContent value="Leads">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4">
              {Leads.map((lead) => {
                return (
                  <Card
                    image={lead.image}
                    name={lead.name}
                    role={lead.role}
                    // desc={lead.description}
                    linkedIn={lead.linkedIn}
                    key={lead.id}
                  />
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="GUI">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4">
              {GUI.map((guiMember) => {
                return (
                  <Card
                    image={guiMember.image}
                    name={guiMember.name}
                    // role={guiMember.role}
                    // desc={guiMember.description}
                    linkedIn={guiMember.linkedIn}
                    key={guiMember.id}
                  />
                );
              })}
            </div>
          </TabsContent>
          
          <TabsContent value="Mechanical">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4">
              {Mechanical.map((mechanicalMember) => {
                return (
                  <Card
                    image={mechanicalMember.image}
                    name={mechanicalMember.name}
                    // role={mechanicalMember.role}
                    // desc={mechanicalMember.description}
                    // linkedIn={mechanicalMember.linkedIn}
                    key={mechanicalMember.id}
                  />
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="Levitation">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Levitation.map((levitationMember) => {
                return (
                  <Card
                    image={levitationMember.image}
                    name={levitationMember.name}
                    // role={levitationMember.role}
                    // desc={levitationMember.description}
                    // linkedIn={levitationMember.linkedIn}
                    key={levitationMember.id}
                  />
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="Electrical">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Electrical.map((electricalMember) => {
                return (
                  <Card
                    image={electricalMember.image}
                    name={electricalMember.name}
                    // role={electricalMember.role}
                    // desc={electricalMember.description}
                    // linkedIn={electricalMember.linkedIn}
                    key={electricalMember.id}
                  />
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="Business">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Business.map((businessMember) => {
                return (
                  <Card
                    image={businessMember.image}
                    name={businessMember.name}
                    role={businessMember.role}
                    desc={businessMember.description}
                    linkedIn={businessMember.linkedIn}
                    key={businessMember.id}
                  />
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="cSuite">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {cSuite.map((cSuiteMember) => {
                return (
                  <Card
                    image={cSuiteMember.image}
                    name={cSuiteMember.name}
                    // role={cSuiteMember.role}
                    // desc={cSuiteMember.description}
                    // linkedIn={cSuiteMember.linkedIn}
                    key={cSuiteMember.id}
                  />
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="Sense and Control">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Sense.map((senseMember) => {
                return (
                  <Card
                    image={senseMember.image}
                    name={senseMember.name}
                    // role={senseMember.role}
                    // desc={senseMember.description}
                    // linkedIn={senseMember.linkedIn}
                    key={senseMember.id}
                  />
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="PR and Sponsorship">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Pr.map((prMember) => {
                return (
                  <Card
                    image={prMember.image}
                    name={prMember.name}
                    // role={prMember.role}
                    // desc={prMember.description}
                    // linkedIn={prMember.linkedIn}
                    key={prMember.id}
                  />
                );
              })}
            </div>
          </TabsContent>
          </div>
          
        </Tabs>
      </div>
    </section>
  );
};



export default page;
