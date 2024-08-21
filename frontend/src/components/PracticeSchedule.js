// NEED TO IMPLEMENT: Save event to FireStore to distribute among everyone (done)
//  ALSO IF I HAVE TIME: Only captains can modify the schedule.



import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { firestore } from '../firebase'; 
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import '../PracticeSchedule.css';

const localizer = momentLocalizer(moment);

const initialEvents = [];

const PracticeSchedule = () => {
  const [events, setEvents] = useState(initialEvents);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
    color: '#3174ad' // Default color
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
    const { title, start, end, color } = newEvent;
    const newEventObject = {
      title,
      start: new Date(start),
      end: new Date(end),
      color
    };

    try {
      // Add event to Firestore
      const docRef = await addDoc(collection(firestore, 'events'), newEventObject);
      setEvents([...events, { id: docRef.id, ...newEventObject }]);
      setNewEvent({ title: '', start: '', end: '', color: '#3174ad' });
    } catch (error) {
      console.error("Error adding event: ", error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    const confirmed = window.confirm("Are you sure you want to delete this event?");
    if (confirmed) {
      try {
        await deleteDoc(doc(firestore, 'events', eventId));
        setEvents(events.filter(event => event.id !== eventId));
      } catch (error) {
        console.error("Error deleting event: ", error);
      }
    }
  };

  const eventStyleGetter = (event) => {
    const backgroundColor = event.color;
    const style = {
      backgroundColor,
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block'
    };
    return {
      style
    };
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
        <input 
          type="color" 
          name="color" 
          value={newEvent.color} 
          onChange={handleInputChange} 
        />
        <button type="submit">Add Event</button>
      </form>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
        defaultView="week"
        scrollToTime={new Date(1970, 1, 1, 11, 0, 0)}
        eventPropGetter={eventStyleGetter}
        selectable
        onSelectEvent={(event) => handleDeleteEvent(event.id)}
      />
    </div>
  );
};

export default PracticeSchedule;
