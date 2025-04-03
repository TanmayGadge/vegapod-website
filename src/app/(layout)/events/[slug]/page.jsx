'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowLeft, User } from 'lucide-react';

const Page = () => {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://tanmaygadge.github.io/event-database/events.json"
        );
        
        // Handle potentially malformed JSON
        let parsedData;
        try {
          // Try direct parsing first
          parsedData = typeof response.data === 'string' 
            ? JSON.parse(response.data) 
            : response.data;
        } catch (parseError) {
          // Clean and parse JSON as fallback
          const cleanJson = response.data.replace(/,(\s*[}\]])/g, "$1");
          parsedData = JSON.parse(cleanJson);
        }

        if (Array.isArray(parsedData)) {
          // Find the event that matches the slug
          const foundEvent = parsedData.find(
            (evt) => evt.slug === slug
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (error) return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {error}
        </div>
        <Link href="/events" className="text-blue-600 hover:underline inline-flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Events
        </Link>
      </div>
    </div>
  );

  if (loading) return (
    <div className="p-6 flex justify-center items-center min-h-screen bg-light-100">
      <div className="animate-pulse">
        <div className="h-4 w-32 bg-white rounded"></div>
        <div className="h-6 w-64 bg-white rounded mt-4"></div>
        <div className="h-64 w-full max-w-2xl bg-white rounded mt-4"></div>
      </div>
    </div>
  );

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const formattedTime = eventDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen bg-light-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Back button */}
        <div className="p-4 border-b">
          <Link href="/events" className="text-blue-600 hover:underline inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Link>
        </div>

        {/* Event image */}
        {event.images && event.images[0] && (
          <div className="w-full">
            <img
              src={`https://${event.images[0]}`}
              alt={event.title}
              className="w-full h-96 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/800x400?text=No+Image+Available';
              }}
            />
          </div>
        )}

        {/* Event details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">{event.title}</h1>
          
          <div className="grid gap-4 mb-8 md:grid-cols-3">
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0" />
              <span>{formattedTime}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0" />
              <span>{event.location}</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">About this Event</h2>
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed" dangerouslySetInnerHTML={{ __html: event.content }}></p>
          </div>
          
          {event.organizer && (
            <div className="pt-4 border-t border-gray-200">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Organizer</h2>
              <div className="flex items-center text-gray-700">
                <User className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0" />
                <span>{event.organizer}</span>
              </div>
            </div>
          )}
          
          {event.price && (
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">Ticket Price</span>
                <span className="text-xl font-bold text-blue-700">{
                  typeof event.price === 'number' 
                    ? `$${event.price.toFixed(2)}` 
                    : event.price
                }</span>
              </div>
            </div>
          )}
          
          {event.tags && event.tags.length > 0 && (
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;