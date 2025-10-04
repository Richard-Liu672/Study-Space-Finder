import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import MapArea from './components/MapArea';
import styles from './App.module.css';

const timeToMinutes = (timeString) => {
  if(!timeString) return null;
  let [time, modifier] = timeString.split(' ');
  let [hours, minutes] = time.split(':').map(Number)

  if (modifier === 'p.m.' && hours !== 12) {
    hours += 12;
  }
  else if (modifier ==='a.m.' && hours === 12) {
    hours = 0; 
  }

  return hours * 60 + minutes; 
}

// Remove: import mockBuildingData from './MockData'; // We no longer load data this way

const App = () => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');  

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [allBuildingData, setAllBuildingData] = useState([]); // State to hold the data from the backend
  const [loading, setLoading] = useState(true); // State for loading status

  // 1. DATA FETCHING (The most important change!)
  useEffect(() => {
    // This function runs once when the component mounts
    const fetchBuildings = async () => {
      try {
        // The address of your backend API endpoint
        const response = await fetch('http://localhost:5000/api/buildings'); 
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Convert the data to a JavaScript object
        setAllBuildingData(data); // Save the data in state
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch building data:", error);
        setLoading(false);
        // You might set an error state here to show the user
      }
    };

    fetchBuildings();
  }, []); // The empty array ensures this runs only ONCE

  // Filter the data based on the search term
  const filteredData = useMemo(() => {
    // ... (rest of your filtering logic remains the same)
    if (loading || !selectedDay || !selectedTime) {
      return allBuildingData;
    }
    
    const requestMinutes = timeToMinutes(selectedTime);

     return allBuildingData.filter(item => {
        // 1. Check Day Match
        // We check if the item's 'day' string includes the selected day (e.g., 'Mon Wed Fri' includes 'Mon')
        const dayMatch = item.day.toLowerCase().includes(selectedDay.toLowerCase());

        if (!dayMatch) return false;

        // 2. Check Time Overlap
        const startMinutes = timeToMinutes(item['start time']);
        const endMinutes = timeToMinutes(item['end time']);

        // Check if the user's requested time (requestMinutes) falls within the room's booked period.
        // The time is available if the start time is LESS than or equal to the request time,
        // AND the end time is GREATER than the request time (as a booking usually ends *at* the end time).
        const timeOverlap = requestMinutes >= startMinutes && requestMinutes < endMinutes;

        return timeOverlap;
    });
  }, [selectedDay, selectedTime, allBuildingData, loading]);

  // Handler for room selection (rest of the code remains the same)
  const handleRoomSelect = (buildingName, roomDetail) => {
    const roomMatch = roomDetail.match(/^([\w\d]+)/);
    const roomNumber = roomMatch ? roomMatch[0] : roomDetail;
    
    setSelectedRoom({
      building: buildingName,
      room: roomNumber,
      fullDetail: roomDetail,
    });
    console.log(`Map centered on: ${roomDetail} in ${buildingName}`);
  };

  if (loading) {
      return <div className={styles.appContainer} style={{justifyContent: 'center', alignItems: 'center'}}>Loading Building Data...</div>;
  }
  
   return (
    <div className={styles.appContainer}>
      {/* --- NEW HEADER: Day and Time Selector --- */}
      <div className={styles.header}>
        <h3 className={styles.headerLabel}>Find Available Rooms</h3>
        
        <select 
          className={styles.timeSelect} 
          value={selectedDay} 
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option value="">Select Day</option>
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        
        <input
          type="time"
          className={styles.timeInput}
          // Note: HTML <input type="time"> uses 24-hour format (HH:mm)
          onChange={(e) => {
            // Convert 24-hour time to your "H:MM a.m./p.m." format for filtering
            const [hours24, minutes] = e.target.value.split(':');
            let hours = parseInt(hours24, 10);
            const modifier = hours >= 12 ? 'p.m.' : 'a.m.';
            if (hours === 0) {
                hours = 12; // Midnight
            } else if (hours > 12) {
                hours -= 12;
            }
            setSelectedTime(`${hours}:${minutes} ${modifier}`);
          }}
        />
        <div className={styles.selectionNote}>
            {selectedDay && selectedTime ? 
                `Showing rooms available on ${selectedDay} at ${selectedTime.replace(':00 ', ' ')}` : 
                'Select a day and time to filter.'
            }
        </div>
      </div>

      <div className={styles.mainContent}>
        <Sidebar 
          data={filteredData} 
          onRoomSelect={handleRoomSelect} 
        />
        <MapArea 
          selectedRoom={selectedRoom} 
        />
      </div>
    </div>
  );
};

export default App;