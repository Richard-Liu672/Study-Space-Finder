let map;

const StudySpots = [{
    name: "Institute for Computing, Information and Cognitive Systems (ICICS)",
    lat: 49.261236365005786,
    lng: -123.24891457799694,
    img: "Images/ICICS.jpg",
    key: "ICCS"
  },
  {
    name: "Hector J. MacLeod Building (MCLD)",
    lat: 49.261769231405516,
    lng: -123.24959089471172,
    img: "Images/MCLD.jpg",
    key: "Hector J. MacLeod Building (MCLD)"
  },
  {
    name: "Biological Sciences Building (BIOS)",
    lat: 49.264600975121866, 
    lng: -123.25105318852933,
    img: "Images/BIOS.jpg",
    key: "Biological Sciences Building (BIOS)"

  },
  {
    name: "Chemistry Building (CHEM)",
    lat: 49.265562774704335, 
    lng: -123.2524878570304,
    img: "Images/CHEM.jpg",
    key: "Chemistry Building (CHEM)"
  }

]
const roomData = [
    {
      "day": "Thu",
      "start time": "1:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4018"
    },
    {
      "day": "Thu",
      "start time": "11:00 a.m.",
      "end time": "1:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4018"
    },
    {
      "day": "Wed",
      "start time": "1:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4018"
    },
    {
      "day": "Fri",
      "start time": "2:00 p.m.",
      "end time": "4:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4018"
    },
    {
      "day": "Wed",
      "start time": "6:00 p.m.",
      "end time": "8:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4018"
    },
    {
      "day": "Wed",
      "start time": "8:30 a.m.",
      "end time": "10:00 a.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4006"
    },
    {
      "day": "Wed",
      "start time": "8:30 a.m.",
      "end time": "10:00 a.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4002"
    },
    {
      "day": "Thu",
      "start time": "1:30 p.m.",
      "end time": "3:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4002"
    },
    {
      "day": "Wed",
      "start time": "3:00 p.m.",
      "end time": "4:30 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4002"
    },
    {
      "day": "Fri",
      "start time": "2:00 p.m.",
      "end time": "3:30 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4006"
    },
    {
      "day": "Wed",
      "start time": "3:00 p.m.",
      "end time": "4:30 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4006"
    },
    {
      "day": "Mon",
      "start time": "4:00 p.m.",
      "end time": "5:30 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4006"
    },
    {
      "day": "Tue",
      "start time": "1:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4006"
    },
    {
      "day": "Tue",
      "start time": "1:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4002"
    },
    {
      "day": "Tue",
      "start time": "10:30 a.m.",
      "end time": "12:30 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4002"
    },
    {
      "day": "Mon",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "2012"
    },
    {
        "day": "Wed",
        "start time": "1:00 p.m.",
        "end time": "2:00 p.m.",
        "building": "Hector J. MacLeod Building (MCLD)",
        "room": "2012"
    },
    {
        "day": "Fri",
        "start time": "1:00 p.m.",
        "end time": "2:00 p.m.",
        "building": "Hector J. MacLeod Building (MCLD)",
        "room": "2012"
    },
    {
      "day": "Mon",
      "start time": "11:00 a.m.",
      "end time": "2:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4006"
    },
    {
      "day": "Tue",
      "start time": "8:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4006"
    },
    {
      "day": "Thu",
      "start time": "8:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4006"
    },
    {
      "day": "Wed",
      "start time": "5:00 p.m.",
      "end time": "8:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4002"
    },
    {
      "day": "Wed",
      "start time": "5:00 p.m.",
      "end time": "8:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4006"
    },
    {
      "day": "Thu",
      "start time": "2:00 p.m.",
      "end time": "5:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4006"
    },
    {
      "day": "Wed",
      "start time": "11:00 a.m.",
      "end time": "12:30 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "2002"
    },
    {
        "day": "Wed",
        "start time": "11:00 a.m.",
        "end time": "12:30 p.m.",
        "building": "Hector J. MacLeod Building (MCLD)",
        "room": "2002"
    },
    {
      "day": "Mon",
      "start time": "2:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "2018"
    },
    {
      "day": "Tue",
      "start time": "4:00 p.m.",
      "end time": "7:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4018"
    },
    {
        "day": "Thu",
        "start time": "4:00 p.m.",
        "end time": "7:00 p.m.",
        "building": "Hector J. MacLeod Building (MCLD)",
        "room": "4018"
    },
    {
      "day": "Tue",
      "start time": "8:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4018"
    },
    {
        "day": "Thu",
        "start time": "8:00 a.m.",
        "end time": "11:00 a.m.",
        "building": "Hector J. MacLeod Building (MCLD)",
        "room": "4018"
    },
    {
        "day": "Tue",
        "start time": "8:00 a.m.",
        "end time": "11:00 a.m.",
        "building": "Hector J. MacLeod Building (MCLD)",
        "room": "4018"
    },
    {
        "day": "Thu",
        "start time": "8:00 a.m.",
        "end time": "11:00 a.m.",
        "building": "Hector J. MacLeod Building (MCLD)",
        "room": "4018"
    },
    {
      "day": "Mon",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "2002"
    },
    {
      "day": "Thu",
      "start time": "11:00 a.m.",
      "end time": "12:30 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "4002"
    },
    {
      "day": "Thu",
      "start time": "12:30 p.m.",
      "end time": "2:00 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "2018"
    },
    {
        "day": "Tue",
        "start time": "12:30 p.m.",
        "end time": "2:00 p.m.",
        "building": "Hector J. MacLeod Building (MCLD)",
        "room": "2018"
    },
    {
      "day": "Fri",
      "start time": "2:00 p.m.",
      "end time": "3:30 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "3008"
    },
    {
      "day": "Wed",
      "start time": "5:00 p.m.",
      "end time": "6:30 p.m.",
      "building": "Hector J. MacLeod Building (MCLD)",
      "room": "2018"
    },
    {
        "day": "Mon",
        "start time": "5:00 p.m.",
        "end time": "6:30 p.m.",
        "building": "Hector J. MacLeod Building (MCLD)",
        "room": "2018"
    },
    {
      "day": "Wed",
      "start time": "2:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Wed",
      "start time": "12:00 p.m.",
      "end time": "1:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Wed",
      "start time": "11:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Wed",
      "start time": "10:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Thu",
      "start time": "2:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Fri",
      "start time": "9:00 a.m.",
      "end time": "10:00 a.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Fri",
      "start time": "10:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Fri",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Fri",
      "start time": "12:00 p.m.",
      "end time": "1:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Fri",
      "start time": "3:00 p.m.",
      "end time": "4:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Fri",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "ICCS",
      "room": "X351"
    },
    {
      "day": "Thu",
      "start time": "11:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Thu",
      "start time": "8:30 a.m.",
      "end time": "9:30 a.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Thu",
      "start time": "6:00 p.m.",
      "end time": "7:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Thu",
      "start time": "12:00 p.m.",
      "end time": "1:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Fri",
      "start time": "4:00 p.m.",
      "end time": "5:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Thu",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Fri",
      "start time": "4:00 p.m.",
      "end time": "5:00 p.m.",
      "building": "ICCS",
      "room": "X351"
    },
    {
      "day": "Thu",
      "start time": "5:00 p.m.",
      "end time": "6:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Thu",
      "start time": "9:00 a.m.",
      "end time": "10:00 a.m.",
      "building": "ICCS",
      "room": "X350"
    },
    {
      "day": "Fri",
      "start time": "2:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Mon",
      "start time": "9:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Mon",
      "start time": "12:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Fri",
      "start time": "3:00 p.m.",
      "end time": "6:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Tue",
      "start time": "9:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Tue",
      "start time": "12:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Tue",
      "start time": "3:00 p.m.",
      "end time": "6:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Tue",
      "start time": "6:00 p.m.",
      "end time": "9:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Wed",
      "start time": "9:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Wed",
      "start time": "12:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Wed",
      "start time": "6:00 p.m.",
      "end time": "9:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Thu",
      "start time": "9:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Thu",
      "start time": "12:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Thu",
      "start time": "3:00 p.m.",
      "end time": "6:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Thu",
      "start time": "6:00 p.m.",
      "end time": "9:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Fri",
      "start time": "9:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Fri",
      "start time": "12:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Fri",
      "start time": "3:00 p.m.",
      "end time": "6:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Fri",
      "start time": "6:00 p.m.",
      "end time": "9:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Mon",
      "start time": "9:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Mon",
      "start time": "12:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Mon",
      "start time": "3:00 p.m.",
      "end time": "6:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Mon",
      "start time": "6:00 p.m.",
      "end time": "9:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Tue",
      "start time": "9:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Tue",
      "start time": "12:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Tue",
      "start time": "3:00 p.m.",
      "end time": "6:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Tue",
      "start time": "6:00 p.m.",
      "end time": "9:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Wed",
      "start time": "9:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Wed",
      "start time": "12:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Wed",
      "start time": "6:00 p.m.",
      "end time": "9:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Thu",
      "start time": "9:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Thu",
      "start time": "12:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Thu",
      "start time": "3:00 p.m.",
      "end time": "6:00 p.m.",
      "building": "ICCS",
      "room": "X250"
    },
    {
      "day": "Thu",
      "start time": "6:00 p.m.",
      "end time": "9:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Fri",
      "start time": "9:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "ICCS",
      "room": "X260"
    },
    {
      "day": "Mon",
      "start time": "11:00 a.m.",
      "end time": "1:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Wed",
      "start time": "5:00 p.m.",
      "end time": "7:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Fri",
      "start time": "5:00 p.m.",
      "end time": "7:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Mon",
      "start time": "1:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Wed",
      "start time": "3:00 p.m.",
      "end time": "5:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Tue",
      "start time": "1:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Tue",
      "start time": "5:00 p.m.",
      "end time": "7:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Mon",
      "start time": "1:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Wed",
      "start time": "1:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Fri",
      "start time": "3:00 p.m.",
      "end time": "5:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Fri",
      "start time": "1:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Fri",
      "start time": "11:00 a.m.",
      "end time": "1:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Tue",
      "start time": "3:00 p.m.",
      "end time": "5:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Mon",
      "start time": "3:00 p.m.",
      "end time": "5:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Mon",
      "start time": "9:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Tue",
      "start time": "11:00 a.m.",
      "end time": "1:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Wed",
      "start time": "11:00 a.m.",
      "end time": "1:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Thu",
      "start time": "1:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Thu",
      "start time": "11:00 a.m.",
      "end time": "1:00 p.m.",
      "building": "ICCS",
      "room": "011"
    },
    {
      "day": "Tue",
      "start time": "11:00 a.m.",
      "end time": "1:00 p.m.",
      "building": "ICCS",
      "room": "015"
    },
    {
      "day": "Wed",
      "start time": "3:00 p.m.",
      "end time": "5:00 p.m.",
      "building": "ICCS",
      "room": "015"
    },
    {
      "day": "Wed",
      "start time": "9:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "ICCS",
      "room": "015"
    },
    {
      "day": "Wed",
      "start time": "11:00 a.m.",
      "end time": "1:00 p.m.",
      "building": "ICCS",
      "room": "015"
    },
    {
      "day": "Fri",
      "start time": "9:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "ICCS",
      "room": "015"
    },
    {
      "day": "Fri",
      "start time": "3:00 p.m.",
      "end time": "5:00 p.m.",
      "building": "ICCS",
      "room": "015"
    },
    {
      "day": "Tue",
      "start time": "3:00 p.m.",
      "end time": "5:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Tue",
      "start time": "9:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Mon",
      "start time": "1:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "015"
    },
    {
      "day": "Thu",
      "start time": "1:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "ICCS",
      "room": "015"
    },
    {
      "day": "Thu",
      "start time": "3:00 p.m.",
      "end time": "5:00 p.m.",
      "building": "ICCS",
      "room": "015"
    },
    {
      "day": "Tue",
      "start time": "11:00 a.m.",
      "end time": "1:00 p.m.",
      "building": "ICCS",
      "room": "X050"
    },
    {
      "day": "Mon",
      "start time": "11:00 a.m.",
      "end time": "1:00 p.m.",
      "building": "ICCS",
      "room": "X350"
    },
    {
      "day": "Mon",
      "start time": "3:00 p.m.",
      "end time": "5:00 p.m.",
      "building": "ICCS",
      "room": "X350"
    },
    {
    "day": "Mon",
    "start time": "8:00 a.m.",
    "end time": "9:00 a.m.",
    "building": "Biological Sciences Building (BIOS)",
    "room": "1001"
    },
    {
      "day": "Wed",
      "start time": "8:00 a.m.",
      "end time": "9:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Fri",
      "start time": "8:00 a.m.",
      "end time": "9:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Mon",
      "start time": "11:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Wed",
      "start time": "11:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Fri",
      "start time": "11:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Tue",
      "start time": "12:30 p.m.",
      "end time": "2:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Thu",
      "start time": "12:30 p.m.",
      "end time": "2:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Mon",
      "start time": "9:00 a.m.",
      "end time": "10:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Tue",
      "start time": "9:30 a.m.",
      "end time": "11:00 a.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Thu",
      "start time": "9:30 a.m.",
      "end time": "11:00 a.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Tue",
      "start time": "12:30 p.m.",
      "end time": "2:00 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Thu",
      "start time": "12:30 p.m.",
      "end time": "2:00 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Mon",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Wed",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Fri",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Mon",
      "start time": "2:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Wed",
      "start time": "2:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Fri",
      "start time": "2:00 p.m.",
      "end time": "3:00 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Mon",
      "start time": "3:00 p.m.",
      "end time": "4:00 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Wed",
      "start time": "3:00 p.m.",
      "end time": "4:00 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Fri",
      "start time": "3:00 p.m.",
      "end time": "4:00 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Fri",
      "start time": "10:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Thu",
      "start time": "10:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Mon",
      "start time": "12:00 p.m.",
      "end time": "1:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Tue",
      "start time": "9:00 a.m.",
      "end time": "10:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Thu",
      "start time": "9:00 a.m.",
      "end time": "10:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Fri",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Wed",
      "start time": "9:00 a.m.",
      "end time": "10:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Tue",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Fri",
      "start time": "9:00 a.m.",
      "end time": "10:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Thu",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Wed",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Fri",
      "start time": "12:00 p.m.",
      "end time": "1:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Thu",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Mon",
      "start time": "10:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Tue",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Wed",
      "start time": "10:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Wed",
      "start time": "11:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Tue",
      "start time": "11:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Mon",
      "start time": "11:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Thu",
      "start time": "11:00 a.m.",
      "end time": "12:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Fri",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Wed",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Tue",
      "start time": "10:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Mon",
      "start time": "1:00 p.m.",
      "end time": "2:00 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Thu",
      "start time": "10:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Fri",
      "start time": "10:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Wed",
      "start time": "10:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Tue",
      "start time": "10:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Mon",
      "start time": "10:00 a.m.",
      "end time": "11:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "2002"
    },
    {
      "day": "Tue",
      "start time": "4:00 p.m.",
      "end time": "5:30 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Thu",
      "start time": "4:00 p.m.",
      "end time": "5:30 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Tue",
      "start time": "5:00 p.m.",
      "end time": "6:30 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Thu",
      "start time": "5:00 p.m.",
      "end time": "6:30 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Tue",
      "start time": "2:00 p.m.",
      "end time": "3:30 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Thu",
      "start time": "2:00 p.m.",
      "end time": "3:30 p.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Tue",
      "start time": "2:00 p.m.",
      "end time": "3:30 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Thu",
      "start time": "2:00 p.m.",
      "end time": "3:30 p.m.",
      "building": "Chemistry Building (CHEM)",
      "room": "B150"
    },
    {
      "day": "Mon",
      "start time": "9:00 a.m.",
      "end time": "10:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Wed",
      "start time": "9:00 a.m.",
      "end time": "10:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    },
    {
      "day": "Fri",
      "start time": "9:00 a.m.",
      "end time": "10:00 a.m.",
      "building": "Biological Sciences Building (BIOS)",
      "room": "1001"
    }
  ]


let spots = new Map();
for (let i = 0; i < StudySpots.length; i++) {
    spots.set(StudySpots[i].key, StudySpots[i]);
}

let day;
let time;

function parseTime(str) {
    let [time, meridiem] = str.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (meridiem.toLowerCase() === 'p.m.' && hours !== 12) hours += 12;
    if (meridiem.toLowerCase() === 'a.m.' && hours === 12) hours = 0;
    return hours;
}


function getDayAndTime() {
  let daySelectElement = document.getElementById("day-btn");
  let timeInputElement = document.getElementById("time-select");

  let selectedDay = daySelectElement.value;
  let selectedTime = timeInputElement.value; 

  

  let selectedHour;
  
  selectedHour = parseInt(selectedTime.split(':')[0], 10);
  

  console.log("Selected Day:", selectedDay);
  console.log("selected time", selectedTime); 
  console.log("Selected hour:", selectedHour);

  return {
    day: selectedDay,
    time: selectedHour
  }
}

const searchButton = document.getElementById("findButton");


searchButton.addEventListener("click", function() {
  let selectiondata = getDayAndTime();
  day = selectiondata.day;


  time = selectiondata.time;
  update();
  
  
 

});




function addCourseByBuilding(object) {
    if (buildingMap.has(object["building"])) {
        addCourseByDay(buildingMap.get(object["building"]), object);
    } else {
        let dayMap = new Map();
        for (let i = 0; i < 5; i++) {
            let timeMap = new Map();
            for (let k = 0; k < 24; k++) {
                timeMap.set(k, new Array());
            }
            switch (i) {
                case 0:
                    dayMap.set("Mon", timeMap);
                    break;
                case 1:
                    dayMap.set("Tue", timeMap);
                    break;
                case 2:
                    dayMap.set("Wed", timeMap);
                    break;
                case 3:
                    dayMap.set("Thu", timeMap);
                    break;
                case 4:
                    dayMap.set("Fri", timeMap);
                    break;

            }
        }
        buildingMap.set(object["building"], dayMap);
        addCourseByDay(dayMap, object);
    }
}

function addCourseByTime(map, object) {
    let upper = parseTime(object["end time"]);
    let lower = parseTime(object["start time"]);
    for (let i = 0; i < 24; i++) {
        if (i < lower || i > upper) {
            let temp = map.get(i);
            temp.push(object);
        }
    }
}


function addCourseByDay(map, object) {
    let timeMap = map.get(object["day"]);
    addCourseByTime(timeMap, object);
}

let buildingMap = new Map();
for (let t = 0; t < roomData.length; t++) {
    addCourseByBuilding(roomData[t]);
}

function displayClassrooms(building) {
    let div = document.getElementById("popup");
    div.style.display = 'block';
    let rooms = buildingMap.get(building).get(day).get(time);
    rooms = rooms.map(object => object["building"] + object["room"]).join(", ");
    div.textContent = building + rooms;
}


function update() {
    let leftPanel = document.querySelector(".leftPanel");
    leftPanel.innerHTML = "";
    buildingMap.forEach((value, key, map) => {
        let div = document.createElement("div");
        div.setAttribute('data-building', key);
        div.textContent = key;
        div.addEventListener("click", () => {
            displayClassrooms(div.dataset.building);
            console.log("works?");
        });
        leftPanel.appendChild(div);
    })
}

let deleteButton = document.getElementById("deletePopup");
deleteButton.addEventListener("click", () => {
    document.getElementById("popup").style.display = 'none';
});
update();
