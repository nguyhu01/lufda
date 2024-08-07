// NEED TO IMPLEMENT: Save event to FireStore to distribute among everyone.
//  ALSO IF I HAVE TIME: Only captains can modify the schedule.

import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { firestore } from '../firebase'; 
import { collection, addDoc, getDocs } from 'firebase/firestore';
import '../PracticeSchedule.css';

const localizer = momentLocalizer(moment);

const initialEvents = [
//   {
//     title: 'Practice 1',
//     start: new Date(2024, 7, 8, 10, 0),
//     end: new Date(2024, 7, 8, 12, 0),
//   },
//   {
//     title: 'Practice 2',
//     start: new Date(2023, 7, 9, 14, 0),
//     end: new Date(2023, 7, 9, 16, 0),
//   },
];

const PracticeSchedule = () => {
  const [events, setEvents] = useState(initialEvents);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: ''
  });

  useEffect(() => {
    // Fetch events from Firestore on component mount
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(firestore, 'events');
        const eventsSnapshot = await getDocs(eventsCollection);
        const eventsList = eventsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            start: doc.data().start.toDate(),
            end: doc.data().end.toDate(),
        }));
        setEvents(eventsList);
    } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };

    fetchEvents();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prevEvent => ({
      ...prevEvent,
      [name]: value
    }));
  };


  const handleAddEvent = async (e) => {
    e.preventDefault();
    const { title, start, end } = newEvent;
    const newEventObject = {
      title,
      start: new Date(start),
      end: new Date(end)
    };

    try {
      // Add event to Firestore
      const docRef = await addDoc(collection(firestore, 'events'), newEventObject);
      setEvents([...events, { id: docRef.id, ...newEventObject }]);
      setNewEvent({ title: '', start: '', end: '' });
    } catch (error) {
      console.error("Error adding event: ", error);
    }
  };

  return (
    <div className="schedule-page">
      <h2 className="text-muted">LUF-SCHEDULE</h2>
      <h3 className="mb-4">Practice Schedule</h3>
     
      <form onSubmit={handleAddEvent} className="event-form">
        <input 
          type="text" 
          name="title" 
          placeholder="Event Title" 
          value={newEvent.title} 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="datetime-local" 
          name="start" 
          value={newEvent.start} 
          onChange={handleInputChange} 
          required 
        />
        <input 
          type="datetime-local" 
          name="end" 
          value={newEvent.end} 
          onChange={handleInputChange} 
          required 
        />
        <button type="submit">Add Event</button>
      </form>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
      />
    </div>
  );
};

export default PracticeSchedule;
