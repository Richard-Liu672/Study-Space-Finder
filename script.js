
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
let time = -1;
let currBuilding;

function parseTime(str) {
    let [time, meridiem] = str.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (meridiem.toLowerCase() === 'p.m.' && hours !== 12) hours += 12;
    if (meridiem.toLowerCase() === 'a.m.' && hours === 12) hours = 0;
    return hours;
}

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

function displayClassrooms(building) {
    let roomsList = document.getElementById("rooms");
    roomsList.innerHTML = '';
    let div = document.getElementById("popup");
    let map = document.getElementById("map");
    if (!map) {

    } else {
        map.id = "mapPopup"
    }
    div.style.display = 'block';
    if (!day || time < 0) {
        let warning = document.createElement("p");
        warning.textContent = "Please select a time!";
        roomsList.appendChild(warning);
    } else {
        let rooms = buildingMap.get(building).get(day).get(time);
        rooms = rooms.map(object => object["building"] + " " + object["room"]);
        let roomsSet = new Set();
        for (let i = 0; i < rooms.length; i++) {
            roomsSet.add(rooms[i])
        }
        if (roomsSet.size === 0) {
            let element = document.createElement("li");     // if no classes avaliable, make text saying no classes avaliable
            element.textContent = "No Classes Avaliable";
            roomsList.appendChild(element);
        } else {
            roomsSet.forEach(room => {
                let element = document.createElement("li");
                element.textContent = room;
                roomsList.appendChild(element);
            })
        }
    }
    
}

function updateRooms() {
    let roomsList = document.getElementById("rooms");
    roomsList.innerHTML = '';
    let div = document.getElementById("popup");
    if (!day || time < 0) {
        let warning = document.createElement("p");
        warning.textContent = "Please select a time!";
        roomsList.appendChild(warning);
    } else {
        let rooms = buildingMap.get(currBuilding).get(day).get(time);
        rooms = rooms.map(object => object["building"] + " " + object["room"]);
        let roomsSet = new Set();
        for (let i = 0; i < rooms.length; i++) {
            roomsSet.add(rooms[i])
        }
        if (roomsSet.size === 0) {
            let element = document.createElement("li");
            element.textContent = "No Classes Avaliable"; // if no classes avaliable, make text saying no classes avaliable
            roomsList.appendChild(element);
        } else {
            roomsSet.forEach(room => {
                let element = document.createElement("li");
                element.textContent = room;
                roomsList.appendChild(element);
            })
        }
    }
    
}


function update() {
    let leftPanel = document.querySelector(".leftPanel");
    leftPanel.innerHTML = "";
    buildingMap.forEach((value, key, map) => {
        let buildingContainer = document.createElement("div");
        buildingContainer.className = "buildingContainer"
        let imageContainer = document.createElement("div");
        imageContainer.className = "imageBuildingContainer"
        let buildingContentContainer = document.createElement("div");
        buildingContentContainer.className = "buildingContentContainer"

        let image = document.createElement("img");
        image.className = "buildingImage"
        imageContainer.appendChild(image)

        image.src = spots.get(key).img;
        let buildingName = document.createElement("p");
        buildingName.className = "buildingName"
        buildingName.textContent = spots.get(key).name;
        buildingContentContainer.appendChild(buildingName)

        buildingContainer.setAttribute('data-building', key);

        let fraction = document.createElement("p"); // fractions html element to hold fraction
        fraction.className = "fraction"; // give it fraction class (IMPORTANT)
        fraction.setAttribute('data-building', key); // gives it building data (IMPORTANT)
        let currRooms = avaliableRooms(key); // loads current avaliable rooms
        if (currRooms < 0) { // does nothing if time or day isn't selected
            fraction.textContent = "N/A"
        } else {
            fraction.textContent = currsRoom + "/" + totalRooms(key); // makes text content currRooms/totalRooms
        }

        buildingContentContainer.appendChild(fraction)

        buildingContainer.appendChild(imageContainer);
        buildingContainer.appendChild(buildingContentContainer);

        buildingContainer.addEventListener("click", () => {
            displayClassrooms(buildingContainer.dataset.building);
            currBuilding = buildingContainer.dataset.building;
            updateFractions();
        });

        leftPanel.appendChild(buildingContainer);
    })
}

function totalRooms(building) {     // gets the total number of rooms a building has
    let dayMap = buildingMap.get(building);     
    let uniqueRooms = new Set();
    dayMap.forEach(timeMap => {
        timeMap.forEach(rooms => {
            rooms.forEach(object => {
                uniqueRooms.add(object["room"]);
            })
        })
    })
    return uniqueRooms.size;
}


function updateFractions() {            // called everytime time or day is updated, updates fractions to show avaliable rooms at that time/day
    let allFracs = document.getElementsByClassName("fraction"); // does nothing is time or day isn't selected
    for (let i = 0; i < allFracs.length; i++) {
        let building = allFracs[i].dataset.building;
        let currRooms = avaliableRooms(building);
        if (currRooms < 0) {
            allFracs[i].textContent = "N/A"
        } else {
            allFracs[i].textContent = currRooms + "/" + totalRooms(building);
        }
    }
}


function avaliableRooms(building) {     // gets avaliable rooms at the current time/day, returns -1 if time or day isn't selected
    if (!day || time < 0) {
        return -1;
    } else {
        let rooms = buildingMap.get(building).get(day).get(time);
        let uniqueRooms = new Set();
        rooms.forEach(object => {
            uniqueRooms.add(object["room"]);
        })
        return uniqueRooms.size;
    }

}



function init() {

    document.getElementById("deletePopup").addEventListener("click", () => {
        document.getElementById("popup").style.display = 'none';
        let map = document.getElementById("mapPopup");
        map.id = "map"
    });

    document.getElementById("time-select").addEventListener("change", () => {      
        let selectedTime = document.getElementById("time-select").value;
        if (!selectedTime) {
            time = -1;
            updateRooms();
            updateFractions();
        } else {
            let [hours, minutes] = selectedTime.split(":").map(Number);
            time = hours;
            updateRooms();
            updateFractions(); // changes the time, thus calls updateFractions
        }
        
    })


    let dayBtns = document.getElementsByClassName("day-btn");
    for (let i = 0; i < dayBtns.length; i++) {
        dayBtns[i].addEventListener("click", () => {
            if (!day) {
            } else {
                switch (day) {
                    case "Mon":
                        dayBtns[0].removeAttribute("id");
                        break;
                    case "Tue":
                        dayBtns[1].removeAttribute("id");
                        break;
                    case "Wed":
                        dayBtns[2].removeAttribute("id");
                        break;
                    case "Thu":
                        dayBtns[3].removeAttribute("id");
                        break;
                    case "Fri":
                        dayBtns[4].removeAttribute("id");
                        break;
                }
            }
            day = dayBtns[i].dataset.day;
            console.log(dayBtns[i].dataset.day)
            dayBtns[i].id = "clicked";
            updateRooms();
            updateFractions(); // changes day thus calls updateFractions

        })
    }
}


let buildingMap = new Map();
for (let t = 0; t < roomData.length; t++) {
addCourseByBuilding(roomData[t]);
}


console.log(buildingMap);


init();
update();