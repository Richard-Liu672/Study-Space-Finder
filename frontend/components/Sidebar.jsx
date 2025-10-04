import React, { useState, useMemo } from 'react';
import styles from '../Sidebar.module.css';

const Sidebar = ({ data, onRoomSelect }) => {
  // State to manage which building's rooms are currently visible
  const [expandedBuilding, setExpandedBuilding] = useState(null);

  // 1. Process data to get a unique list of buildings and their rooms
  const buildingRooms = useMemo(() => {
    const map = new Map();
    data.forEach(item => {
      if (!map.has(item.building)) {
        map.set(item.building, new Set());
      }
      // Add a unique identifier for the room and time slot
      const roomDetails = `${item.room} (${item['start time']} - ${item['end time']})`;
      map.get(item.building).add(roomDetails);
    });

    // Convert Sets to Arrays for rendering
    const result = {};
    map.forEach((rooms, building) => {
        result[building] = Array.from(rooms).sort();
    });
    return result;
  }, [data]);

  // 2. Toggle the expanded building
  const handleBuildingClick = (buildingName) => {
    setExpandedBuilding(prev => (prev === buildingName ? null : buildingName));
  };

  // 3. Render
  return (
    <div className={styles.sidebarContainer}>
      {Object.keys(buildingRooms).map(building => (
        <div key={building} className={styles.buildingSection}>
          {/* Building Button */}
          <button
            className={styles.buildingButton}
            onClick={() => handleBuildingClick(building)}
          >
            {building}
            <span className={styles.toggleIcon}>{expandedBuilding === building ? '▲' : '▼'}</span>
          </button>

          {/* Room Submenu */}
          {expandedBuilding === building && (
            <div className={styles.roomSubmenu}>
              {buildingRooms[building].map(roomDetail => (
                <button
                  key={roomDetail}
                  className={styles.roomButton}
                  onClick={() => onRoomSelect(building, roomDetail)}
                >
                  {roomDetail}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;