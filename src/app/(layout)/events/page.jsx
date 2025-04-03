"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { CalendarDays, LocateIcon, MapPin, Pin } from "lucide-react";

const Page = () => {
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://tanmaygadge.github.io/event-database/events.json"
        );

        // Parse the JSON string and handle trailing commas
        let parsedData;
        try {
          // Remove trailing commas and parse
          const cleanJson = response.data.replace(/,(\s*[}\]])/g, "$1");
          parsedData = JSON.parse(cleanJson);
        } catch (parseError) {
          console.error("JSON parsing error:", parseError);
          setError("Invalid JSON format");
          return;
        }

        if (Array.isArray(parsedData)) {
          setEvents(parsedData);
        } else {
          setError("Data received is not in the expected format");
        }
        console.log(parsedData);
      } catch (err) {
        setError("Failed to fetch events");
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, []);

  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;
  if (!events)
    return (
      <div className="bg-light-100 w-full ">
        <div className="mx-auto max-w-7xl p-6">
          <div className="h-12 rounded-md w-[30vw] min-w-[150px] animate-pulse bg-gray-300 my-12 mt-18"></div>
          <div className="grid gap-6 md:grid-cols-3 mb-18 ">
            <div className="aspect-video w-full rounded-md animate-pulse bg-gray-300"></div>
            <div className="aspect-video w-full rounded-md animate-pulse bg-gray-300"></div>
            <div className="aspect-video w-full rounded-md animate-pulse bg-gray-300"></div>
            <div className="aspect-video w-full rounded-md animate-pulse bg-gray-300"></div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="p-6 bg-light-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
        <div className="grid gap-6 md:grid-cols-3 ">
          {events.map((event) => (
            <Link href={`/events/${event.slug}`}>
              <div
                key={event.id}
                className="border rounded-lg shadow-sm overflow-hidden bg-white"
              >
                {event.images && event.images[0] && (
                  <img
                    src={`https://${event.images[0]}`}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                  <div className="text-gray-600 mb-2  grid grid-cols-2">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-primary-800 " />{" "}
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarDays size={18} className="text-primary-800 " />{" "}
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                  </div>
                  {/* <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: event.content }}></p>  */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
