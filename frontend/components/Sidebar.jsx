// src/components/Sidebar.jsx

import React, { useState, useMemo } from 'react';
import styles from '../Sidebar.module.css';

const Sidebar = ({ data, onRoomSelect }) => {
  const [expandedBuilding, setExpandedBuilding] = useState(null);

  // 1. Process ONLY the filtered data to get unique buildings and the *available* room details
  const buildingRooms = useMemo(() => {
    const map = new Map();
    
    // 'data' here is already the array of available rooms/time slots
    data.forEach(item => {
      if (!map.has(item.building)) {
        map.set(item.building, new Set());
      }
      // The room detail now reflects the *available* time slot for that booking
      const roomDetails = `${item.room} (${item['start time']} - ${item['end time']})`;
      map.get(item.building).add(roomDetails);
    });

    const result = {};
    map.forEach((rooms, building) => {
        result[building] = Array.from(rooms).sort();
    });
    return result;
  }, [data]); // The dependency is the filtered data passed from App.jsx
  
  // ... (rest of the component remains the same) ...
  // The rest of the rendering logic in Sidebar.jsx doesn't change
  // because it iterates over the 'buildingRooms' object generated above.

  return (
    <div className={styles.sidebarContainer}>
      {Object.keys(buildingRooms).map(building => (
        // ... (rest of the render is the same) ...
      ))}
    </div>
  );
};

export default Sidebar;