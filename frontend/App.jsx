import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import MapArea from './components/MapArea';
import styles from './App.module.css';

// Remove: import mockBuildingData from './MockData'; // We no longer load data this way

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
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
    if (loading || !searchTerm) {
      return allBuildingData;
    }
    const lowerSearchTerm = searchTerm.toLowerCase();
    return allBuildingData.filter(item => 
      item.building.toLowerCase().includes(lowerSearchTerm) ||
      item.room.toLowerCase().includes(lowerSearchTerm) ||
      item.day.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm, allBuildingData, loading]); // Dependencies ensure re-run when data or search changes


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
      {/* ... (rest of the render JSX) ... */}
      <div className={styles.header}>
        <input
          type="text"
          placeholder="Search building, room, or day..."
          className={styles.searchBox}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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