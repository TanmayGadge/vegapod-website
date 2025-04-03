'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EventDetailPage = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://tanmaygadge.github.io/event-database/events.json"
        );

        // Clean and parse JSON
        const cleanJson = response.data.replace(/,(\s*[}\]])/g, "$1");
        const parsedData = JSON.parse(cleanJson);

        if (Array.isArray(parsedData)) {
          // Find the event that matches the slug
          const foundEvent = parsedData.find(
            (evt) => evt.title.replace(/\s+/g, "-").toLowerCase() === slug
          );

          if (foundEvent) {
            setEvent(foundEvent);
          } else {
            setError("Event not found");
          }
        } else {
          setError("Data received is not in the expected format");
        }
      } catch (err) {
        setError("Failed to fetch event details");
        console.error("Fetch error:", err);
      }
    };

    fetchData();
  }, [slug]);

  if (error) return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-red-600 mb-4">Error: {error}</div>
        <Link href="/events" className="text-blue-600 hover:underline inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Link>
      </div>
    </div>
  );

  if (!event) return <div className="p-6">Loading...</div>;

  const eventDate = new Date(event.date);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link href="/events" className="text-blue-600 hover:underline inline-flex items-center mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Link>

        {event.images && event.images[0] && (
          <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
            <img
              src={`https://${event.images[0]}`}
              alt={event.title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{event.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3 mb-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                <span>{eventDate.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                <span>{eventDate.toLocaleTimeString()}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                <span>{event.location}</span>
              </div>
            </div>

            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mb-4">About this Event</h2>
              <p className="text-gray-700 whitespace-pre-wrap">{event.content}</p>
            </div>

            {event.organizer && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Organizer</h2>
                <p className="text-gray-700">{event.organizer}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventDetailPage;