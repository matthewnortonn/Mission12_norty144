import React from 'react';
import logo from './logo.svg';
import './App.css';


const teamNames =[

  {"tid": 159, "cid": 0, "did": 0, "school": "Boston College", "name": "Eagles", "abbrev": "BC", "pop": 161, "city": "Chestnut Hill", "state": "MA", "latitude": 42.330, "longitude": -71.166},
 
   {"tid": 105, "cid": 0, "did": 0, "school": "Clemson", "name": "Tigers", "abbrev": "CLEM", "pop": 215, "city": "Clemson", "state": "SC", "latitude": 34.678, "longitude": -82.839},
 
   {"tid": 109, "cid": 0, "did": 0, "school": "Florida State", "name": "Seminoles", "abbrev": "FSU", "pop": 211, "city": "Tallahassee", "state": "FL", "latitude": 30.442, "longitude": -84.298},
 
   {"tid": 18, "cid": 0, "did": 0, "school": "Louisville", "name": "Cardinals", "abbrev": "UL", "pop": 302, "city": "Louisville", "state": "KY", "latitude": 38.25, "longitude": -85.766},
 
   {"tid": 31, "cid": 0, "did": 0, "school": "North Carolina State", "name": "Wolfpack", "abbrev": "NCST", "pop": 289, "city": "Raleigh", "state": "NC", "latitude": 35.786 , "longitude": -78.682},
 
   {"tid": 9, "cid": 0, "did": 0, "school": "Notre Dame", "name": "Fighting Irish", "abbrev": "ND", "pop": 311, "city": "South Bend", "state": "IN", "latitude": 41.672, "longitude": -86.255},
 
   {"tid": 66, "cid": 0, "did": 0, "school": "Syracuse", "name": "Orange", "abbrev": "CUSE", "pop": 254, "city": "Syracuse", "state": "NY", "latitude": 43.046 , "longitude": -76.144},
 
   {"tid": 141, "cid": 0, "did": 0, "school": "Wake Forest", "name": "Demon Deacons", "abbrev": "WAKE", "pop": 179, "city": "Winston-Salem", "state": "NC", "latitude": 36.102, "longitude": -80.260},
 
   {"tid": 0, "cid": 0, "did": 1, "school": "Duke", "name": "Blue Devils", "abbrev": "DUKE", "pop": 320, "city": "Durham ", "state": "NC", "latitude": 35.988, "longitude": -78.907},
 
  {"tid": 145, "cid": 0, "did": 1, "school": "Georgia Tech", "name": "Yellow Jackets", "abbrev": "GT", "pop": 175, "city": "Atlanta", "state": "GA", "latitude": 33.775, "longitude":  -84.394},
 
   {"tid": 47, "cid": 0, "did": 1, "school": "Miami", "name": "Hurricanes ", "abbrev": "CANES", "pop": 273, "city": "Coral Gables", "state": "FL", "latitude": 25.75, "longitude": -80.271},
 
   {"tid": 8, "cid": 0, "did": 1, "school": "North Carolina", "name": "Tar Heels", "abbrev": "UNC", "pop": 312, "city": "Chapel Hill", "state": "NC", "latitude": 35.933, "longitude": -79.033},
 
   {"tid": 76, "cid": 0, "did": 1, "school": "Pittsburgh", "name": "Panthers", "abbrev": "PITT", "pop": 244, "city": "Pittsburgh", "state": "PA", "latitude": 40.439, "longitude": -79.976},
 
   {"tid": 6, "cid": 0, "did": 1, "school": "Virginia", "name": "Cavaliers", "abbrev": "UVA", "pop": 314, "city": "Charlottesville", "state": "VA", "latitude": 38.03, "longitude": -78.478},
 
   {"tid": 220, "cid": 0, "did": 1, "school": "Virginia Tech", "name": "Hokies", "abbrev": "VT", "pop": 100, "city": "Blacksburg", "state": "VA", "latitude": 37.23, "longitude": -80.417},
 
   {"tid": 90, "cid": 0, "did": 1, "school": "Northeastern", "name": "Huskies", "abbrev": "NEAST", "pop": 230, "city": "Boston", "state": "MA", "latitude": 42.358, "longitude": -71.063},
 
   {"tid": 62, "cid": 1, "did": 2, "school": "Indiana", "name": "Hoosiers", "abbrev": "IND", "pop": 258, "city": "Bloomington", "state": "IN", "latitude": 39.162, "longitude": -86.529},
 
   {"tid": 13, "cid": 1, "did": 2, "school": "Maryland", "name": "Terrapins", "abbrev": "MD", "pop": 307, "city": "College Park", "state": "MD", "latitude": 38.997, "longitude": -76.927},
 
   {"tid": 78, "cid": 1, "did": 2, "school": "Michigan", "name": "Wolverines", "abbrev": "MICH", "pop": 242, "city": "Ann Arbor", "state": "MI", "latitude": 42.281, "longitude": -83.748},
 
   {"tid": 14, "cid": 1, "did": 2, "school": "Michigan State", "name": "Spartans", "abbrev": "MSU", "pop": 306, "city": "East Lansing", "state": "MI", "latitude": 42.734, "longitude": -84.480},
 
   {"tid": 37, "cid": 1, "did": 2, "school": "Ohio State", "name": "Buckeyes", "abbrev": "OSU", "pop": 283, "city": "Columbus", "state": "OH", "latitude": 39.983, "longitude": -82.983},
 
   {"tid": 108, "cid": 1, "did": 2, "school": "Penn State", "name": "Nittany Lions", "abbrev": "PSU", "pop": 212, "city": "University Park", "state": "PA", "latitude": 40.796, "longitude": -77.862},
 
   {"tid": 179, "cid": 1, "did": 2, "school": "Rutgers", "name": "Scarlet Knights", "abbrev": "RUTG", "pop": 141, "city": "New Brunswick", "state": "NJ", "latitude": 40.486, "longitude": -74.444},
 
   {"tid": 213, "cid": 1, "did": 2, "school": "IPFW", "name": "Mastodons", "abbrev": "IPFW", "pop": 107, "city": "Fort Wayne", "state": "IN", "latitude": 41.118, "longitude": -85.109},
 
   {"tid": 77, "cid": 1, "did": 3, "school": "Illinois", "name": "Fighting Illini", "abbrev": "ILL", "pop": 243, "city": "Champaign", "state": "IL", "latitude": 40.115, "longitude": -88.272},
 
   {"tid": 39, "cid": 1, "did": 3, "school": "Iowa", "name": "Hawkeyes", "abbrev": "IOWA", "pop": 281, "city": "Iowa City", "state": "IA", "latitude": 41.666, "longitude": -91.533},
 
   {"tid": 100, "cid": 1, "did": 3, "school": "Minnesota", "name": "Golden Gophers", "abbrev": "MINN", "pop": 220, "city": "Minneapolis", "state": "MN", "latitude": 44.98, "longitude": -93.264},
 
  {"tid": 153, "cid": 1, "did": 3, "school": "Nebraska", "name": "Cornhuskers", "abbrev": "NEB", "pop": 167, "city": "Lincoln", "state": "NE", "latitude": 40.810, "longitude": -96.680},
 
   {"tid": 129, "cid": 1, "did": 3, "school": "Northwestern", "name": "Wildcats", "abbrev": "NW", "pop": 191, "city": "Evanston", "state": "IL", "latitude": 42.046, "longitude": -87.694},
 
   {"tid": 61, "cid": 1, "did": 3, "school": "Purdue", "name": "Boilermakers", "abbrev": "PUR", "pop": 259, "city": "West Lafayette", "state": "IN", "latitude": 40.441, "longitude": -86.912},
 
   {"tid": 1, "cid": 1, "did": 3, "school": "Wisconsin", "name": "Badgers", "abbrev": "WISC", "pop": 319, "city": "Madison", "state": "WI", "latitude": 43.066, "longitude": -89.4},
 
   {"tid": 256, "cid": 1, "did": 3, "school": "IUPUI", "name": "Jaguars", "abbrev": "IUPUI", "pop": 64, "city": "Indianapolis", "state": "IN", "latitude": 39.774, "longitude": -86.176},
 
   {"tid": 68, "cid": 2, "did": 4, "school": "Florida", "name": "Gators", "abbrev": "FLA", "pop": 252, "city": "Gainesville", "state": "FL", "latitude": 29.652 , "longitude": -82.325},
 
   {"tid": 43, "cid": 2, "did": 4, "school": "Georgia", "name": "Bulldogs", "abbrev": "UGA", "pop": 277, "city": "Athens", "state": "GA", "latitude": 33.95, "longitude": -83.383},
 
   {"tid": 2, "cid": 2, "did": 4, "school": "Kentucky", "name": "Wildcats", "abbrev": "UK", "pop": 318, "city": "Lexington", "state": "KY", "latitude": 38.029, "longitude": -84.494},
 
   {"tid": 216, "cid": 2, "did": 4, "school": "Missouri", "name": "Tigers", "abbrev": "MIZZ", "pop": 104, "city": "Columbia", "state": "MO", "latitude": 38.951, "longitude": -92.328},
 
   {"tid": 96, "cid": 2, "did": 4, "school": "South Carolina", "name": "Gamecocks", "abbrev": "SCAR", "pop": 224, "city": "Columbia", "state": "SC", "latitude": 34.029, "longitude": -80.896},
 
   {"tid": 101, "cid": 2, "did": 4, "school": "Tennessee", "name": "Volunteers", "abbrev": "TENN", "pop": 219, "city": "Knoxville", "state": "TN", "latitude": 35.972, "longitude": -83.942},
 
   {"tid": 87, "cid": 2, "did": 4, "school": "Vanderbilt", "name": "Commodores", "abbrev": "VANDY", "pop": 233, "city": "Nashville", "state": "TN", "latitude": 36.166, "longitude": -86.783},
 
   {"tid": 319, "cid": 2, "did": 4, "school": "South Carolina State", "name": "Bulldogs", "abbrev": "SCSU", "pop": 1, "city": "Orangeburg", "state": "SC", "latitude": 33.497, "longitude": -80.85},
 
   {"tid": 79, "cid": 2, "did": 5, "school": "Alabama", "name": "Crimson Tide", "abbrev": "BAMA", "pop": 241, "city": "Tuscaloosa", "state": "AL", "latitude": 33.206, "longitude": -87.534},
 
   {"tid": 22, "cid": 2, "did": 5, "school": "Arkansas", "name": "Razorbacks", "abbrev": "ARK", "pop": 298, "city": "Fayetteville", "state": "AR", "latitude": 36.076, "longitude": -94.160},
 
   {"tid": 131, "cid": 2, "did": 5, "school": "Auburn", "name": "Tigers", "abbrev": "AUB", "pop": 189, "city": "Auburn", "state": "AL", "latitude": 32.597, "longitude": -85.480},
 
   {"tid": 64, "cid": 2, "did": 5, "school": "Louisana State", "name": "Tigers", "abbrev": "LSU", "pop": 256, "city": "Baton Rouge", "state": "LA", "latitude": 30.450, "longitude": -91.140},
 
   {"tid": 56, "cid": 2, "did": 5, "school": "Mississippi", "name": "Rebels", "abbrev": "MISS", "pop": 264, "city": "Oxford", "state": "MS", "latitude": 34.359, "longitude": -89.526},
 
   {"tid": 214, "cid": 2, "did": 5, "school": "Mississippi State", "name": "Bulldogs", "abbrev": "MSST", "pop": 106, "city": "Starkville", "state": "MS", "latitude": 33.462, "longitude": -88.820},
 
   {"tid": 67, "cid": 2, "did": 5, "school": "Texas A&M", "name": "Aggies", "abbrev": "TAMU", "pop": 253, "city": "College Station", "state": "TX", "latitude": 30.601, "longitude": -96.314},
 
   {"tid": 128, "cid": 2, "did": 5, "school": "NC-Central", "name": "Eagles", "abbrev": "NCCENT", "pop": 192, "city": "Durham", "state": "NC", "latitude": 35.974, "longitude": -78.898},                                           
 
   {"tid": 92, "cid": 3, "did": 6, "school": "California", "name": "Golden Bears", "abbrev": "CAL", "pop": 228, "city": "Berkeley", "state": "CA", "latitude": 37.871, "longitude": -122.272},
 
   {"tid": 26, "cid": 3, "did": 6, "school": "Oregon", "name": "Ducks", "abbrev": "ORE", "pop": 294, "city": "Eugene", "state": "OR", "latitude": 44.051, "longitude": -123.086},
 
   {"tid": 132, "cid": 3, "did": 6, "school": "Oregon State", "name": "Beavers", "abbrev": "OREST", "pop": 188, "city": "Corvallis", "state": "OR", "latitude": 44.566, "longitude": -123.283},
 
   {"tid": 33, "cid": 3, "did": 6, "school": "Stanford", "name": "Cardinal", "abbrev": "STAN", "pop": 287, "city": "Stanford", "state": "CA", "latitude": 37.430, "longitude": -122.170},
 
   {"tid": 119, "cid": 3, "did": 6, "school": "Washington", "name": "Huskies", "abbrev": "WASH", "pop": 201, "city": "Seattle", "state": "WA", "latitude": 47.609, "longitude": -122.333},
 
   {"tid": 160, "cid": 3, "did": 6, "school": "Washington State", "name": "Cougars", "abbrev": "WASHST", "pop": 160, "city": "Pullman", "state": "WA", "latitude": 46.733, "longitude": -117.166},
 
   {"tid": 232, "cid": 3, "did": 6, "school": "Denver", "name": "Pioneers", "abbrev": "DENV", "pop": 88, "city": "Denver", "state": "CO", "latitude": 39.678, "longitude": -104.962},
 
   {"tid": 25, "cid": 3, "did": 6, "school": "San Diego State", "name": "Aztecs", "abbrev": "SDST", "pop": 295, "city": "San Diego", "state": "CA", "latitude": 37.215, "longitude": -117.162},
 
   {"tid": 3, "cid": 3, "did": 7, "school": "Arizona", "name": "Wildcats", "abbrev": "ARIZ", "pop": 317, "city": "Tucson", "state": "AZ", "latitude": 32.221, "longitude": -110.926},
 
   {"tid": 89, "cid": 3, "did": 7, "school": "Arizona State", "name": "Sun Devils", "abbrev": "ASU", "pop": 231, "city": "Tempe", "state": "AZ", "latitude": 33.429, "longitude": -111.943},
 
   {"tid": 117, "cid": 3, "did": 7, "school": "Colorado", "name": "Buffaloes", "abbrev": "COLO", "pop": 203, "city": "Boulder", "state": "CO", "latitude": 40.027, "longitude": -105.251},
 
   {"tid": 38, "cid": 3, "did": 7, "school": "UCLA", "name": "Bruins", "abbrev": "UCLA", "pop": 282, "city": "Los Angeles", "state": "CA", "latitude": 34.050, "longitude": -118.250},
 
   {"tid": 196, "cid": 3, "did": 7, "school": "USC", "name": "Trojans", "abbrev": "USC", "pop": 124, "city": "Los Angeles", "state": "CA", "latitude": 34.050, "longitude": -118.250},
 
   {"tid": 12, "cid": 3, "did": 7, "school": "Utah", "name": "Utes", "abbrev": "Utah", "pop": 308, "city": "Salt Lake City", "state": "UT", "latitude": 61.218, "longitude": -149.9},
 
   {"tid": 36, "cid": 3, "did": 7, "school": "Colorado State", "name": "Rams", "abbrev": "COLOST", "pop": 284, "city": "Fort Collins", "state": "CO", "latitude": 40.559, "longitude": -105.078},
 
   {"tid": 45, "cid": 3, "did": 7, "school": "Boise State", "name": "Broncos", "abbrev": "BOISE", "pop": 275, "city": "Boise", "state": "ID", "latitude": 43.616, "longitude": -116.200},
 
   {"tid": 16, "cid": 4, "did": 8, "school": "Baylor", "name": "Bears", "abbrev": "BAYL", "pop": 304, "city": "Waco", "state": "TX", "latitude": 31.551, "longitude": -97.155},
 
   {"tid": 15, "cid": 4, "did": 8, "school": "Iowa State", "name": "Cyclones", "abbrev": "IOWAST", "pop": 305, "city": "Ames", "state": "IA", "latitude": 42.034, "longitude": -93.620},
 
   {"tid": 4, "cid": 4, "did": 8, "school": "Kansas", "name": "Jayhawks", "abbrev": "KU", "pop": 316, "city": "Lawrence", "state": "KS", "latitude": 38.971, "longitude": -95.235},
 
   {"tid": 107, "cid": 4, "did": 8, "school": "Kansas State", "name": "Wildcats", "abbrev": "KSU", "pop": 213, "city": "Manhattan", "state": "KS", "latitude": 39.191, "longitude": -96.591},
 
   {"tid": 19, "cid": 4, "did": 8, "school": "Oklahoma", "name": "Sooners", "abbrev": "OKLA", "pop": 301, "city": "Norman", "state": "OK", "latitude": 35.220, "longitude": -97.440},
 
   {"tid": 55, "cid": 4, "did": 8, "school": "Valparaiso", "name": "Crusaders", "abbrev": "VALPO", "pop": 265, "city": "Valparaiso", "state": "IN", "latitude": 41.463, "longitude":  -87.043},
 
   {"tid": 59, "cid": 4, "did": 8, "school": "Green Bay", "name": "Phoenix", "abbrev": "UWGB", "pop": 261, "city": "Green Bay", "state": "WI", "latitude": 44.513, "longitude": -88.015},
 
   {"tid": 127, "cid": 4, "did": 8, "school": "Cleveland State", "name": "Vikings", "abbrev": "CLEVST", "pop": 193, "city": "Cleveland", "state": "OH", "latitude": 41.501, "longitude": -81.675},
 
   {"tid": 58, "cid": 4, "did": 9, "school": "Oklahoma State", "name": "Cowboys", "abbrev": "OKLAST", "pop": 262, "city": "Stillwater", "state": "OK", "latitude": 36.115, "longitude":  -97.058},
 
   {"tid": 134, "cid": 4, "did": 9, "school": "TCU", "name": "Horned Frogs", "abbrev": "TCU", "pop": 186, "city": "Fort Worth", "state": "TX", "latitude": 32.757, "longitude": -97.333},
 
   {"tid": 50, "cid": 4, "did": 9, "school": "Texas", "name": "Longhorns", "abbrev": "TEXAS", "pop": 270, "city": "Austin", "state": "TX", "latitude": 30.250, "longitude": -97.750},
 
   {"tid": 183, "cid": 4, "did": 9, "school": "Texas Tech", "name": "Red Raiders", "abbrev": "TT", "pop": 137, "city": "Lubbock", "state": "TX", "latitude": 33.566, "longitude": -101.883},
 
   {"tid": 21, "cid": 4, "did": 9, "school": "West Virginia", "name": "Mountaineers", "abbrev": "WVU", "pop": 299, "city": "Morgantown", "state": "WV", "latitude": 39.633, "longitude": -79.950},
 
   {"tid": 169, "cid": 4, "did": 9, "school": "Oakland", "name": "Golden Grizzlies", "abbrev": "OAK", "pop": 151, "city": "Rochester", "state": "MI", "latitude": 42.672, "longitude": -83.215},
 
   {"tid": 207, "cid": 4, "did": 9, "school": "Milwaukee", "name": "Panthers", "abbrev": "UWMIL", "pop": 113, "city": "Milwaukee", "state": "WI", "latitude": 43.075, "longitude": -87.882},
 
   {"tid": 205, "cid": 4, "did": 9, "school": "Detroit", "name": "Titans", "abbrev": "DET", "pop": 115, "city": "Detroit", "state": "MI", "latitude": 42.414, "longitude": -83.137},
 
   {"tid": 53, "cid": 5, "did": 10, "school": "Georgia State", "name": "Panthers", "abbrev": "GAST", "pop": 267, "city": "Atlanta", "state": "GA", "latitude": 33.755, "longitude": -84.390},
 
   {"tid": 123, "cid": 5, "did": 10, "school": "Louisiana Monroe", "name": "War Hawks", "abbrev": "ULM", "pop": 197, "city": "Monroe", "state": "LA", "latitude": 32.509, "longitude": -92.118},
 
   {"tid": 177, "cid": 5, "did": 10, "school": "UT-Arlington", "name": "Mavericks", "abbrev": "UTARL", "pop": 143, "city": "Arlington", "state": "TX", "latitude": 32.705, "longitude": -97.122},
 
   {"tid": 269, "cid": 5, "did": 10, "school": "South Alabama", "name": "Jaguars", "abbrev": "SOALA", "pop": 51, "city": "Mobile", "state": "AL", "latitude": 30.694, "longitude": -88.043},
 
   {"tid": 231, "cid": 5, "did": 10, "school": "Texas State", "name": "Bobcats", "abbrev": "TEXST", "pop": 89, "city": "San Marcos", "state": "TX", "latitude": 29.879, "longitude": -97.938},
 
   {"tid": 310, "cid": 5, "did": 10, "school": "Troy", "name": "Trojans", "abbrev": "TROY", "pop": 10, "city": "Troy", "state": "AL", "latitude": 31.808, "longitude": -85.970},
 
   {"tid": 264, "cid": 5, "did": 10, "school": "Elon", "name": "Phoenix", "abbrev": "ELON", "pop": 56, "city": "Elon", "state": "NC", "latitude": 36.107, "longitude": -79.501},
 
   {"tid": 301, "cid": 5, "did": 10, "school": "Charleston", "name": "Cougars", "abbrev": "CHAR", "pop": 19, "city": "Charleston", "state": "SC", "latitude": 32.783, "longitude": -79.933},
 
   {"tid": 110, "cid": 5, "did": 11, "school": "Georgia Southern", "name": "Eagles", "abbrev": "GASO", "pop": 210, "city": "Statesboro", "state": "GA", "latitude": 32.445, "longitude": -81.779} ,
 
   {"tid": 121, "cid": 5, "did": 11, "school": "Louisiana Layayette", "name": "Ragin' Cajuns", "abbrev": "LALAF", "pop": 199, "city": "Lafayette", "state": "LA", "latitude": 30.216, "longitude": -92.033} ,
 
   {"tid": 241, "cid": 5, "did": 11, "school": "Appalachian State", "name": "Mountaineers", "abbrev": "APPST", "pop": 79, "city": "Boone", "state": "NC", "latitude": 36.211, "longitude": -81.668} ,
 
   {"tid": 274, "cid": 5, "did": 11, "school": "Arkansas-Little Rock", "name": "Trojans", "abbrev": "UALR", "pop": 46, "city": "Little Rock", "state": "AR", "latitude": 34.736, "longitude": -92.331} ,
 
   {"tid": 276, "cid": 5, "did": 11, "school": "Arkansas State", "name": "Red Wolves", "abbrev": "ARKST", "pop": 44, "city": "Jonesboro", "state": "AR", "latitude": 35.828, "longitude": -90.694},
 
   {"tid": 150, "cid": 5, "did": 11, "school": "UNC-Wilmington", "name": "Sweahawks", "abbrev": "NCWILM", "pop": 170, "city": "Wilmington", "state": "NC", "latitude": 34.226, "longitude": -77.878},
 
   {"tid": 308, "cid": 5, "did": 11, "school": "UNC-Greensboro", "name": "Spartans", "abbrev": "UNCG", "pop": 12, "city": "Greensboro", "state": "NC", "latitude": 36.069, "longitude": -79.811},
 
   {"tid": 300, "cid": 5, "did": 11, "school": "Jacksonville State", "name": "Gamecocks", "abbrev": "JVILLE", "pop": 20, "city": "Jacksonville", "state": "AL", "latitude": 33.815 , "longitude": -85.760},
 
   {"tid": 72, "cid": 6, "did": 12, "school": "Eastern Washington", "name": "Eagles", "abbrev": "EWASH", "pop": 248, "city": "Cheney", "state": "WA", "latitude": 47.488, "longitude": -117.578},
 
   {"tid": 139, "cid": 6, "did": 12, "school": "Sacramento State", "name": "Hornets", "abbrev": "SACST", "pop": 181, "city": "Sacramento", "state": "CA", "latitude": 38.555, "longitude": -121.468},
 
   {"tid": 239, "cid": 6, "did": 12, "school": "Northern Colorado", "name": "Bears", "abbrev": "NOCOL", "pop": 81, "city": "Greeley", "state": "CO", "latitude": 40.416, "longitude": -104.716},
 
   {"tid": 266, "cid": 6, "did": 12, "school": "Idaho", "name": "Vandals", "abbrev": "UI", "pop": 54, "city": "Moscow", "state": "ID", "latitude": 46.730, "longitude": -117.000},
 
   {"tid": 302, "cid": 6, "did": 12, "school": "Southern Utah", "name": "Thunderbirds", "abbrev": "SUU", "pop": 18, "city": "Cedar City", "state": "UT", "latitude": 37.682, "longitude": -113.074},
 
   {"tid": 313, "cid": 6, "did": 12, "school": "Cal State-Fullerton", "name": "Titans", "abbrev": "FULL", "pop": 7, "city": "Fullerton", "state": "CA", "latitude": 33.880, "longitude": -117.885},
 
   {"tid": 249, "cid": 6, "did": 12, "school": "Pacific", "name": "Boxers", "abbrev": "PAC", "pop": 71, "city": "Forest Grove", "state": "OR", "latitude": 45.521, "longitude":  -123.108},
 
   {"tid": 267, "cid": 6, "did": 12, "school": "Loyola Marymount", "name": "Lions", "abbrev": "LMULA", "pop": 53, "city": "Los Angeles", "state": "CA", "latitude": 33.97, "longitude": -118.418},
 
   {"tid": 142, "cid": 6, "did": 13, "school": "Montana", "name": "Grizzlies", "abbrev": "MONT", "pop": 178, "city": "Missoula", "state": "MT", "latitude": 46.862, "longitude": -114.011},
 
   {"tid": 124, "cid": 6, "did": 13, "school": "Northern Arizona", "name": "Lumberjacks", "abbrev": "NAU", "pop": 196, "city": "Flagstaff", "state": "AZ", "latitude": 35.199, "longitude": -111.631},
 
   {"tid": 219, "cid": 6, "did": 13, "school": "Portland State", "name": "Vikings", "abbrev": "PORTST", "pop": 101, "city": "Portland", "state": "OR", "latitude": 45.520, "longitude": -122.681},
 
   {"tid": 259, "cid": 6, "did": 13, "school": "Weber State", "name": "Wildcats", "abbrev": "WEBER", "pop": 61, "city": "Ogden", "state": "UT", "latitude": 41.227, "longitude": -111.961},
 
   {"tid": 306, "cid": 6, "did": 13, "school": "North Dakota", "name": "", "abbrev": "NDU", "pop": 14, "city": "Grand Forks", "state": "ND", "latitude": 47.925, "longitude": -97.032},
 
   {"tid": 93, "cid": 6, "did": 13, "school": "North Dakota State", "name": "Bisons", "abbrev": "NDSU", "pop": 227, "city": "Fargo", "state": "ND", "latitude": 46.891, "longitude": -96.8},
 
   {"tid": 84, "cid": 6, "did": 13, "school": "South Dakota State", "name": "Jackrabbits", "abbrev": "SDAKST", "pop": 236, "city": "Brookings", "state": "SD", "latitude": 44.318, "longitude": -96.783},
 
   {"tid": 209, "cid": 6, "did": 13, "school": "South Dakota", "name": "Coyotes", "abbrev": "SDAK", "pop": 111, "city": "Vermillion", "state": "SD", "latitude": 42.786, "longitude": -96.925},
 
   {"tid": 114, "cid": 7, "did": 14, "school": "Texas Southern", "name": "Tigers", "abbrev": "TXSO", "pop": 206, "city": "Houston", "state": "TX", "latitude": 29.760, "longitude": -95.369},
 
   {"tid": 252, "cid": 7, "did": 14, "school": "Alabama State", "name": "Hornets", "abbrev": "ALAST", "pop": 68, "city": "Montgomery", "state": "AL", "latitude": 32.361, "longitude": -86.279},
 
   {"tid": 226, "cid": 7, "did": 14, "school": "Southern", "name": "Jaguars", "abbrev": "SU", "pop": 94, "city": "Baton Rouge", "state": "LA", "latitude": 30.450, "longitude": -91.140},
 
   {"tid": 260, "cid": 7, "did": 14, "school": "Prairie View A&M", "name": "Panthers", "abbrev": "PV", "pop": 60, "city": "Prairie View", "state": "TX", "latitude": 30.082, "longitude": -95.991},
 
   {"tid": 296, "cid": 7, "did": 14, "school": "Arkansas-Pine Bluff", "name": "Golden Lions", "abbrev": "UAPB", "pop": 24, "city": "Pine Bluff", "state": "AR", "latitude": 34.216, "longitude": -92.016},
 
   {"tid": 315, "cid": 7, "did": 14, "school": "Jackson State", "name": "Tigers", "abbrev": "JACKST", "pop": 5, "city": "Jackson", "state": "MS", "latitude": 32.298, "longitude": -90.184},
 
   {"tid": 34, "cid": 7, "did": 14, "school": "Stephen F Austin", "name": "Lumberjacks", "abbrev": "SFA", "pop": 286, "city": "Nacogdoches", "state": "TX", "latitude": 31.608 , "longitude": -94.650},
 
   {"tid": 94, "cid": 7, "did": 14, "school": "Sam Houston State", "name": "Bearkats", "abbrev": "SHSU", "pop": 226, "city": "Huntsville", "state": "TX", "latitude": 30.723 , "longitude": -95.551},                          
 
   {"tid": 106, "cid": 7, "did": 15, "school": "New Mexico State", "name": "Aggies", "abbrev": "NMSU", "pop": 214, "city": "Las Cruces", "state": "NM", "latitude": 32.314, "longitude": -106.778},
 
   {"tid": 277, "cid": 7, "did": 15, "school": "Grand Canyon", "name": "Lopes", "abbrev": "GCU", "pop": 43, "city": "Phoenix", "state": "AZ", "latitude": 33.450, "longitude": -112.066},
 
   {"tid": 291, "cid": 7, "did": 15, "school": "Missouri-Kansas City", "name": "Kangaroos", "abbrev": "UMKC", "pop": 29, "city": "Kansas City", "state": "MO", "latitude": 39.099, "longitude": -94.578},
 
   {"tid": 268, "cid": 7, "did": 15, "school": "Seattle", "name": "Redhawks", "abbrev": "SEA", "pop": 52, "city": "Seattle", "state": "WA", "latitude": 47.609, "longitude": -122.333},
 
   {"tid": 299, "cid": 7, "did": 15, "school": "CSU Bakersfield", "name": "Roadrunners", "abbrev": "CSUB", "pop": 21, "city": "Bakersfield", "state": "CA", "latitude": 35.366, "longitude": -119.016},
 
   {"tid": 307, "cid": 7, "did": 15, "school": "Utah Valley", "name": "Wolverines", "abbrev": "UVU", "pop": 13, "city": "Orem", "state": "UT", "latitude": 40.298, "longitude": -111.696},
 
   {"tid": 201, "cid": 7, "did": 15, "school": "Texas A&M-CC", "name": "Islanders", "abbrev": "TAMUCC", "pop": 119, "city": "Corpus Christi", "state": "TX", "latitude": 27.742 , "longitude": -97.401},
 
   {"tid": 171, "cid": 7, "did": 15, "school": "Incarnate Word", "name": "Cardinals", "abbrev": "UIW", "pop": 149, "city": "San Antonio", "state": "TX", "latitude": 29.416 , "longitude": -98.500},
 
   {"tid": 7, "cid": 8, "did": 16, "school": "Gonzaga", "name": "Bulldogs", "abbrev": "GONZ", "pop": 313, "city": "Spokane", "state": "WA", "latitude": 47.658, "longitude": -117.425},
 
   {"tid": 42, "cid": 8, "did": 16, "school": "Brigham Young", "name": "Cougars", "abbrev": "BYU", "pop": 278, "city": "Provo", "state": "UT", "latitude": 40.244, "longitude": -111.660},
 
   {"tid": 75, "cid": 8, "did": 16, "school": "Saint Mary's", "name": "Gaels", "abbrev": "STMARY", "pop": 245, "city": "Moraga", "state": "CA", "latitude": 37.835, "longitude": -122.129},
 
   {"tid": 148, "cid": 8, "did": 16, "school": "Pepperdine", "name": "Waves", "abbrev": "PEPP", "pop": 172, "city": "Malibu", "state": "CA", "latitude": 34.030, "longitude": -118.750},
 
   {"tid": 162, "cid": 8, "did": 16, "school": "San Diego", "name": "Toreros", "abbrev": "USD", "pop": 158, "city": "San Diego", "state": "CA", "latitude": 32.715, "longitude": -111.162},
 
   {"tid": 164, "cid": 8, "did": 16, "school": "Portland", "name": "Pilots", "abbrev": "PORT", "pop": 156, "city": "Portland", "state": "OR", "latitude": 45.520, "longitude": -122.681},
 
   {"tid": 184, "cid": 8, "did": 16, "school": "San Francisco", "name": "Dons", "abbrev": "SANFRAN", "pop": 136, "city": "San Francisco", "state": "CA", "latitude": 37.783, "longitude": -122.416},
 
   {"tid": 208, "cid": 8, "did": 16, "school": "Santa Clara", "name": "Broncos", "abbrev": "CLARA", "pop": 112, "city": "Santa Clara", "state": "CA", "latitude": 37.354, "longitude": -121.969},
 
   {"tid": 284, "cid": 8, "did": 17, "school": "CS Northridge", "name": "Matadors", "abbrev": "CSUN", "pop": 36, "city": "Los Angeles", "state": "CA", "latitude": 34.050, "longitude": -118.250},
 
   {"tid": 70, "cid": 8, "did": 17, "school": "UC Davis", "name": "Aggies", "abbrev": "UCDAV", "pop": 250, "city": "Davis", "state": "CA", "latitude": 38.553, "longitude": -121.738},
 
   {"tid": 95, "cid": 8, "did": 17, "school": "UC Irvine", "name": "Anteaters", "abbrev": "UCIRV", "pop": 225, "city": "Irvine", "state": "CA", "latitude": 33.669, "longitude": -117.823},
 
   {"tid": 97, "cid": 8, "did": 17, "school": "UC Santa Barbara", "name": "Gauchos", "abbrev": "UCBAR", "pop": 223, "city": "Santa Barbara", "state": "CA", "latitude": 34.425, "longitude": -119.714},
 
   {"tid": 116, "cid": 8, "did": 17, "school": "Long Beach State", "name": "49ers", "abbrev": "LBSU", "pop": 204, "city": "Long Beach", "state": "CA", "latitude": 33.768, "longitude": -118.195},
 
   {"tid": 156, "cid": 8, "did": 17, "school": "Hawaii", "name": "Rainbow Warriors", "abbrev": "UHI", "pop": 164, "city": "Honolulu", "state": "HI", "latitude": 21.300, "longitude": -157.816},
 
   {"tid": 237, "cid": 8, "did": 17, "school": "UC Riverside", "name": "Highlanders", "abbrev": "UCRIV", "pop": 83, "city": "Riverside", "state": "CA", "latitude": 33.948, "longitude": -117.396},
 
   {"tid": 203, "cid": 8, "did": 17, "school": "Cal Poly", "name": "Mustangs", "abbrev": "CPSU", "pop": 117, "city": "San Luis Obispo", "state": "CA", "latitude": 35.274, "longitude": -120.663},
 
   {"tid": 137, "cid": 9, "did": 18, "school": "Bucknell", "name": "Bison", "abbrev": "BUCK", "pop": 183, "city": "Lewisburg", "state": "PA", "latitude": 40.954, "longitude": -76.883}, 
 
   {"tid": 193, "cid": 9, "did": 18, "school": "Colgate", "name": "Raiders", "abbrev": "COLG", "pop": 127, "city": "Hamilton", "state": "NY", "latitude": 42.819, "longitude": -75.536},
 
   {"tid": 174, "cid": 9, "did": 18, "school": "Lehigh", "name": "Mountain Hawks", "abbrev": "LEH", "pop": 146, "city": "Bethlehem", "state": "PA", "latitude": 40.607, "longitude": -75.379},
 
   {"tid": 198, "cid": 9, "did": 18, "school": "Boston", "name": "Terriers", "abbrev": "BOS", "pop": 122, "city": "Boston", "state": "MA", "latitude": 42.349, "longitude": -71.099},
 
   {"tid": 136, "cid": 9, "did": 18, "school": "American", "name": "Eagles", "abbrev": "AMER", "pop": 184, "city": "Washington", "state": "DC", "latitude": 38.937, "longitude": -77.086},
 
   {"tid": 118, "cid": 9, "did": 18, "school": "Lafayette", "name": "Leopards", "abbrev": "LAF", "pop": 202, "city": "Easton", "state": "PA", "latitude": 40.698, "longitude": -75.208},
 
   {"tid": 247, "cid": 9, "did": 18, "school": "Navy", "name": "Midshipmen", "abbrev": "NAVY", "pop": 73, "city": "Annapolis", "state": "MD", "latitude": 38.983, "longitude": -76.485},
 
   {"tid": 233, "cid": 9, "did": 18, "school": "Army", "name": "Black Knights", "abbrev": "ARMY", "pop": 87, "city": "West Point", "state": "NY", "latitude": 41.392, "longitude": -73.958},
 
   {"tid": 103, "cid": 9, "did": 19, "school": "Albany", "name": "Great Danes", "abbrev": "ALB", "pop": 217, "city": "Albany", "state": "NY", "latitude": 42.686, "longitude": -73.823}, 
 
   {"tid": 112, "cid": 9, "did": 19, "school": "Stony Brook", "name": "Sea Wolves", "abbrev": "STONY", "pop": 208, "city": "Stony Brook", "state": "NY", "latitude": 40.914, "longitude": -73.116},
 
   {"tid": 178, "cid": 9, "did": 19, "school": "Vermont", "name": "Catamounts", "abbrev": "VERM", "pop": 142, "city": "Burlington", "state": "VT", "latitude": 44.477, "longitude": -73.193},
 
   {"tid": 194, "cid": 9, "did": 19, "school": "New Hampshire", "name": "Wildcats", "abbrev": "UNH", "pop": 126, "city": "Durham", "state": "NH", "latitude": 43.135, "longitude": -70.933},
 
   {"tid": 245, "cid": 9, "did": 19, "school": "Hartford", "name": "Hawks", "abbrev": "HART", "pop": 75, "city": "West Hartford", "state": "CT", "latitude": 41.800, "longitude": -72.714},
 
   {"tid": 261, "cid": 9, "did": 19, "school": "UMass-Lowell", "name": "River Hawks", "abbrev": "UML", "pop": 59, "city": "Lowell", "state": "MA", "latitude": 42.642, "longitude": -71.334},
 
   {"tid": 163, "cid": 9, "did": 19, "school": "Saint Francis (NY)", "name": "Terriers", "abbrev": "STFRAN", "pop": 157, "city": "Brooklyn Heights", "state": "NY", "latitude": 40.693, "longitude": -73.991},
 
   {"tid": 187, "cid": 9, "did": 19, "school": "Bryant", "name": "Bulldogs", "abbrev": "BRY", "pop": 133, "city": "Smithfield", "state": "RI", "latitude": 41.925, "longitude": -71.532},
 
   {"tid": 5, "cid": 10, "did": 20, "school": "Villanova", "name": "Wildcats", "abbrev": "NOVA", "pop": 315, "city": "Philadelphia", "state": "PA", "latitude": 39.950, "longitude": -75.166},
 
   {"tid": 23, "cid": 10, "did": 20, "school": "Georgetown", "name": "Hoyas", "abbrev": "HOYAS", "pop": 297, "city": "Washington", "state": "DC", "latitude": 38.904, "longitude": -77.016},
 
   {"tid": 24, "cid": 10, "did": 20, "school": "Providence", "name": "Friars", "abbrev": "PROV", "pop": 296, "city": "Providence", "state": "RI", "latitude": 41.823, "longitude": -71.422},
 
   {"tid": 51, "cid": 10, "did": 20, "school": "Saint John's", "name": "Red Storm", "abbrev": "STJOHN", "pop": 269, "city": "Queens", "state": "NY", "latitude": 40.750, "longitude": -73.866},
 
   {"tid": 102, "cid": 10, "did": 20, "school": "Seton Hall", "name": "Pirates", "abbrev": "SHU", "pop": 218, "city": "South Orange", "state": "NJ", "latitude": 40.748, "longitude": -74.261},
 
   {"tid": 262, "cid": 10, "did": 20, "school": "Siena", "name": "Saints", "abbrev": "SIENA", "pop": 58, "city": "Loudonville", "state": "NY", "latitude": 42.718, "longitude": -73.753},
 
   {"tid": 298, "cid": 10, "did": 20, "school": "Fairfield", "name": "Stags", "abbrev": "FAIR", "pop": 22, "city": "Fairfield", "state": "CT", "latitude": 41.181, "longitude": -73.290},
 
   {"tid": 317, "cid": 10, "did": 20, "school": "Marist", "name": "Red Foxes", "abbrev": "MARIST", "pop": 3, "city": "Poughkeepsie", "state": "NY", "latitude": 41.725, "longitude": -73.933},
 
   {"tid": 32, "cid": 10, "did": 21, "school": "Temple", "name": "Owls", "abbrev": "TEMP", "pop": 288, "city": "Philadelphia", "state": "PA", "latitude": 39.98 , "longitude": -75.16},                       
 
   {"tid": 35, "cid": 10, "did": 21, "school": "Cincinnati", "name": "Bearcats", "abbrev": "CIN", "pop": 285, "city": "Cincinnati", "state": "OH", "latitude": 39.132 , "longitude": -84.515},                      
 
   {"tid": 81, "cid": 10, "did": 21, "school": "Connecticut", "name": "Huskies", "abbrev": "UCONN", "pop": 239, "city": "Storrs", "state": "CT", "latitude": 41.807 , "longitude": -72.252},                 
 
   {"tid": 218, "cid": 10, "did": 21, "school": "East Carolina", "name": "Pirates", "abbrev": "ECU", "pop": 102, "city": "Greenville", "state": "NC", "latitude": 35.602 , "longitude": -77.368},                      
 
   {"tid": 257, "cid": 10, "did": 21, "school": "Central Florida", "name": "Knights", "abbrev": "UCF", "pop": 63, "city": "Orlando", "state": "FL", "latitude": 28.601 , "longitude": -81.200},                              
 
   {"tid": 275, "cid": 10, "did": 21, "school": "South Florida", "name": "Bulls", "abbrev": "USF", "pop": 45, "city": "Tampa", "state": "FL", "latitude": 28.054 , "longitude": -82.413},                              
 
   {"tid": 248, "cid": 10, "did": 21, "school": "Drexel", "name": "Dragons", "abbrev": "DREX", "pop": 72, "city": "Philadelphia", "state": "PA", "latitude": 39.954 , "longitude": -75.188},                  
 
   {"tid": 180, "cid": 10, "did": 21, "school": "Hofstra", "name": "Pride", "abbrev": "HOF", "pop": 140, "city": "Hempstead", "state": "NY", "latitude": 40.714 , "longitude": -73.600},
 
   {"tid": 41, "cid": 11, "did": 22, "school": "Davidson", "name": "Wildcats", "abbrev": "DAV", "pop": 279, "city": "Davidson", "state": "NC", "latitude": 35.491, "longitude": -80.832},
 
   {"tid": 60, "cid": 11, "did": 22, "school": "Rhode Island", "name": "Rams", "abbrev": "URI", "pop": 260, "city": "Kingston", "state": "RI", "latitude": 41.483 , "longitude": -71.533},
 
   {"tid": 63, "cid": 11, "did": 22, "school": "Richmond", "name": "Spiders", "abbrev": "RICH", "pop": 257, "city": "Richmond", "state": "VA", "latitude": 37.533 , "longitude": -77.466},
 
   {"tid": 126, "cid": 11, "did": 22, "school": "Saint Bonaventure", "name": "Bonnies", "abbrev": "BONA", "pop": 194, "city": "Allegany", "state": "NY", "latitude": 42.089 , "longitude": -78.493},
 
   {"tid": 104, "cid": 11, "did": 22, "school": "La Salle", "name": "Explorers", "abbrev": "SALLE", "pop": 216, "city": "Philadelphia", "state": "PA", "latitude": 39.950 , "longitude": -75.166},
 
   {"tid": 221, "cid": 11, "did": 22, "school": "Duquesne", "name": "Dukes", "abbrev": "DUQ", "pop": 99, "city": "Pittsburgh", "state": "PA", "latitude": 40.439 , "longitude": -79.976},
 
   {"tid": 223, "cid": 11, "did": 22, "school": "George Mason", "name": "Patriots", "abbrev": "GMU", "pop": 97, "city": "Fairfax", "state": "VA", "latitude": 38.852 , "longitude": -77.304},
 
   {"tid": 189, "cid": 11, "did": 22, "school": "MD-Eastern Shore", "name": "Hawks", "abbrev": "UMES", "pop": 131, "city": "Princess Anne", "state": "MD", "latitude": 38.21 , "longitude": -75.685},
 
   {"tid": 242, "cid": 11, "did": 23, "school": "Sacred Heart", "name": "Pioneers", "abbrev": "SACHRT", "pop": 78, "city": "Fairfield", "state": "CT", "latitude": 41.221 , "longitude": -73.241},
 
   {"tid": 20, "cid": 11, "did": 23, "school": "VCU", "name": "Rams", "abbrev": "VCU", "pop": 300, "city": "Richmond", "state": "VA", "latitude": 37.533 , "longitude": -77.466},
 
   {"tid": 80, "cid": 11, "did": 23, "school": "George Washington", "name": "Colonials", "abbrev": "GWU", "pop": 240, "city": "Washington", "state": "DC", "latitude": 38.904 , "longitude": -77.016},
 
   {"tid": 83, "cid": 11, "did": 23, "school": "Massachusetts", "name": "Minutemen", "abbrev": "UMASS", "pop": 237, "city": "Amherst", "state": "MA", "latitude": 42.367 , "longitude": -72.517},
 
   {"tid": 182, "cid": 11, "did": 23, "school": "Saint Joseph's", "name": "Hawks", "abbrev": "STJOE", "pop": 138, "city": "Philadelphia", "state": "PA", "latitude": 39.950 , "longitude": -75.166},
 
   {"tid": 238, "cid": 11, "did": 23, "school": "Fordham", "name": "Rams", "abbrev": "FORD", "pop": 82, "city": "Bronx", "state": "NY", "latitude": 40.837 , "longitude": -73.886},
 
   {"tid": 255, "cid": 11, "did": 23, "school": "LIU Brooklyn", "name": "Blackbirds", "abbrev": "LIU", "pop": 65, "city": "Brooklyn", "state": "NY", "latitude": 40.691 , "longitude": -73.980},
 
   {"tid": 250, "cid": 11, "did": 23, "school": "Howard", "name": "Bison", "abbrev": "HOW", "pop": 70, "city": "Washington", "state": "DC", "latitude": 38.094 , "longitude": -77.016},
 
   {"tid": 166, "cid": 12, "did": 24, "school": "North Florida", "name": "Ospreys", "abbrev": "UNF", "pop": 154, "city": "Jacksonville", "state": "FL", "latitude": 30.336 , "longitude": -81.661},
 
   {"tid": 158, "cid": 12, "did": 24, "school": "Florida Gulf Coast", "name": "Eagles", "abbrev": "FGCU", "pop": 162, "city": "Lee County", "state": "FL", "latitude": 26.580 , "longitude": -81.920},
 
   {"tid": 204, "cid": 12, "did": 24, "school": "South Carolina Upstate", "name": "Spartans", "abbrev": "SCUP", "pop": 116, "city": "Spartanburg", "state": "SC", "latitude": 34.946 , "longitude": -81.927},
 
   {"tid": 273, "cid": 12, "did": 24, "school": "Lipscomb", "name": "Bisons", "abbrev": "LIPS", "pop": 47, "city": "Nashville", "state": "TN", "latitude": 36.166 , "longitude": -86.783},
 
   {"tid": 263, "cid": 12, "did": 24, "school": "Northern Kentucky", "name": "Vikings", "abbrev": "NKY", "pop": 57, "city": "Highland Heights", "state": "KY", "latitude": 39.040 , "longitude": -84.455},
 
   {"tid": 318, "cid": 12, "did": 24, "school": "Kennesaw State", "name": "Owls", "abbrev": "KENNST", "pop": 2, "city": "Kennesaw", "state": "GA", "latitude":  34.037 , "longitude": -84.581},
 
   {"tid": 316, "cid": 12, "did": 24, "school": "Longwood", "name": "Lancers", "abbrev": "LONG", "pop": 4, "city": "Farmville", "state": "VA", "latitude": 37.297 , "longitude": -78.395},
 
   {"tid": 309, "cid": 12, "did": 24, "school": "Coppin State", "name": "Eagles", "abbrev": "COPP", "pop": 11, "city": "Baltimore", "state": "MD", "latitude": 39.310 , "longitude": -76.658},
 
   {"tid": 91, "cid": 12, "did": 25, "school": "High Point", "name": "Panthers", "abbrev": "HPU", "pop": 229, "city": "High Point", "state": "NC", "latitude": 35.970 , "longitude": -79.997},
 
   {"tid": 161, "cid": 12, "did": 25, "school": "Charleston Southern", "name": "Buccaneers", "abbrev": "CHSOU", "pop": 159, "city": "North Charleston", "state": "SC", "latitude": 32.885 , "longitude": -80.016},
 
   {"tid": 125, "cid": 12, "did": 25, "school": "Coastal Carolina", "name": "Chanticleers", "abbrev": "CCU", "pop": 195, "city": "Conway", "state": "SC", "latitude": 33.838 , "longitude": -79.056},
 
   {"tid": 149, "cid": 12, "did": 25, "school": "Radford", "name": "Highlanders", "abbrev": "RAD", "pop": 171, "city": "Radford", "state": "VA", "latitude": 37.127 , "longitude": -80.569},
 
   {"tid": 210, "cid": 12, "did": 25, "school": "Winthrop", "name": "Eagles", "abbrev": "WIN", "pop": 110, "city": "Rock Hill", "state": "SC", "latitude": 34.938 , "longitude": -81.026},
 
   {"tid": 152, "cid": 12, "did": 25, "school": "Gardner-Webb", "name": "Bulldogs", "abbrev": "GARD", "pop": 168, "city": "Boiling Springs", "state": "NC", "latitude": 35.251 , "longitude": -81.664},
 
   {"tid": 251, "cid": 12, "did": 25, "school": "UNC Asheville", "name": "Bulldogs", "abbrev": "UNCA", "pop": 69, "city": "Asheville", "state": "NC", "latitude": 35.580 , "longitude": -82.555},
 
   {"tid": 312, "cid": 12, "did": 25, "school": "Presbyterian", "name": "Blue Hose", "abbrev": "PRES", "pop": 8, "city": "Clinton", "state": "SC", "latitude": 34.471 , "longitude": -81.875},
 
   {"tid": 11, "cid": 13, "did": 26, "school": "Wichita State", "name": "Shockers", "abbrev": "WICH", "pop": 309, "city": "Wichita", "state": "KS", "latitude": 37.719 , "longitude": -97.293},
 
   {"tid": 10, "cid": 13, "did": 26, "school": "Northern Iowa", "name": "Panthers", "abbrev": "NOIOWA", "pop": 310, "city": "Cedar Falls", "state": "IA", "latitude": 42.513 , "longitude": -92.462},
 
   {"tid": 52, "cid": 13, "did": 26, "school": "Illinois State", "name": "Redbirds", "abbrev": "ILLST", "pop": 268, "city": "Normal", "state": "IL", "latitude": 40.510 , "longitude": -88.993},
 
   {"tid": 175, "cid": 13, "did": 26, "school": "Indiana State", "name": "Sycamores", "abbrev": "INDST", "pop": 145, "city": "Terre Haute", "state": "IN", "latitude": 39.469 , "longitude": -87.407},
 
   {"tid": 82, "cid": 13, "did": 26, "school": "Evansville", "name": "Purple Aces", "abbrev": "EVANS", "pop": 238, "city": "Evansville", "state": "IN", "latitude": 37.971 , "longitude": -87.531},
 
   {"tid": 86, "cid": 13, "did": 26, "school": "Loyola (CHI)", "name": "Ramblers", "abbrev": "LOYCHI", "pop": 234, "city": "Chicago", "state": "IL", "latitude": 41.999 , "longitude": -87.657},
 
   {"tid": 258, "cid": 13, "did": 26, "school": "Drake", "name": "Bulldogs", "abbrev": "DRAKE", "pop": 62, "city": "Des Moines", "state": "IA", "latitude": 41.601 , "longitude":  -93.652},
 
   {"tid": 235, "cid": 13, "did": 26, "school": "Missouri State", "name": "Bears", "abbrev": "MIZZST", "pop": 85, "city": "Springfield", "state": "MO", "latitude": 37.199 , "longitude": -93.280},
 
   {"tid": 272, "cid": 13, "did": 27, "school": "Southern Illinois", "name": "Salukis", "abbrev": "SOILL", "pop": 48, "city": "Carbondale", "state": "IL", "latitude": 37.710 , "longitude": -89.219},
 
   {"tid": 278, "cid": 13, "did": 27, "school": "Bradley", "name": "Braves", "abbrev": "BRAD", "pop": 42, "city": "Peoria", "state": "IL", "latitude": 40.694 , "longitude": -89.612},
 
   {"tid": 27, "cid": 13, "did": 27, "school": "Xavier", "name": "Musketeers", "abbrev": "XAV", "pop": 293, "city": "Cincinnati", "state": "OH", "latitude": 39.148 , "longitude": -84.477},
 
   {"tid": 195, "cid": 13, "did": 27, "school": "DePaul", "name": "Blue Demons", "abbrev": "DEP", "pop": 125, "city": "Chicago", "state": "IL", "latitude": 41.923 , "longitude": -87.653},
 
   {"tid": 157, "cid": 13, "did": 27, "school": "Creighton", "name": "Blue Jays", "abbrev": "CREI", "pop": 163, "city": "Omaha", "state": "NE", "latitude": 41.264 , "longitude": -95.946},
 
   {"tid": 191, "cid": 13, "did": 27, "school": "Saint Francis (PA)", "name": "Red Flash", "abbrev": "FRAN-PA", "pop": 129, "city": "Loretto", "state": "PA", "latitude": 40.504 , "longitude": -78.637},
 
   {"tid": 29, "cid": 13, "did": 27, "school": "Butler", "name": "Bulldogs", "abbrev": "BUTL", "pop": 291, "city": "Indianapolis", "state": "IN", "latitude": 39.839 , "longitude": -86.171},
 
   {"tid": 146, "cid": 13, "did": 27, "school": "Marquette", "name": "Golden Eagles", "abbrev": "MARQ", "pop": 174, "city": "Milwaukee", "state": "WI", "latitude": 43.038 , "longitude": -87.928},
 
   {"tid": 40, "cid": 14, "did": 28, "school": "Old Dominion", "name": "Monarchs", "abbrev": "ODU", "pop": 280, "city": "Norfolk", "state": "VA", "latitude": 36.916 , "longitude": -76.200},
 
   {"tid": 303, "cid": 14, "did": 28, "school": "Florida Atlantic", "name": "Owls", "abbrev": "FAU", "pop": 17, "city": "Boca Raton", "state": "FL", "latitude": 26.368, "longitude": -80.100},
 
   {"tid": 130, "cid": 14, "did": 28, "school": "UAB", "name": "Blazers", "abbrev": "UAB", "pop": 190, "city": "Birmingham", "state": "AL", "latitude": 52.483 , "longitude": -1.893},
 
   {"tid": 143, "cid": 14, "did": 28, "school": "Middle Tennessee State", "name": "Blue Raiders", "abbrev": "MTSU", "pop": 177, "city": "Murfreesboro", "state": "TN", "latitude": 35.846 , "longitude": -86.392},
 
   {"tid": 215, "cid": 14, "did": 28, "school": "Florida International", "name": "Panthers", "abbrev": "FIU", "pop": 105, "city": "University Park", "state": "FL", "latitude": 25.745 , "longitude": -80.366},
 
   {"tid": 293, "cid": 14, "did": 28, "school": "Wagner", "name": "Seahawks", "abbrev": "WAG", "pop": 27, "city": "Staten Island", "state": "NY", "latitude": 40.615 , "longitude": -74.094},
 
   {"tid": 290, "cid": 14, "did": 28, "school": "Marshall", "name": "Thundering Herd", "abbrev": "MAR", "pop": 30, "city": "Huntington", "state": "WV", "latitude": 38.420, "longitude": -82.423},
 
   {"tid": 200, "cid": 14, "did": 28, "school": "Holy Cross", "name": "Crusaders", "abbrev": "HOLY", "pop": 120, "city": "Worcester", "state": "MA", "latitude": 42.239 , "longitude":  -71.808},                                      
 
   {"tid": 44, "cid": 14, "did": 29, "school": "Louisiana Tech", "name": "Bulldogs", "abbrev": "LATECH", "pop": 276, "city": "Ruston", "state": "LA", "latitude": 32.529 , "longitude":  -92.640},                               
 
   {"tid": 73, "cid": 14, "did": 29, "school": "Texas-El Paso", "name": "Miners", "abbrev": "UTEP", "pop": 247, "city": "El Paso", "state": "TX", "latitude": 31.790 , "longitude":  -106.423},                                         
 
   {"tid": 111, "cid": 14, "did": 29, "school": "Western Kentucky", "name": "Hilltoppers", "abbrev": "WKYU", "pop": 209, "city": "Bowling Green", "state": "KY", "latitude": 36.981 , "longitude":  -86.444},                                     
 
   {"tid": 230, "cid": 14, "did": 29, "school": "Texas San Antonio", "name": "Roadrunners", "abbrev": "UTSA", "pop": 90, "city": "San Antonio", "state": "TX", "latitude": 29.416 , "longitude":  -98.500},                                             
 
   {"tid": 225, "cid": 14, "did": 29, "school": "North Texas", "name": "Mean Green", "abbrev": "UNTX", "pop": 95, "city": "Denton", "state": "TX", "latitude": 33.216 , "longitude":  -97.129},                                             
 
   {"tid": 243, "cid": 14, "did": 29, "school": "Rice", "name": "Owls", "abbrev": "RICE", "pop": 77, "city": "Houston", "state": "TX", "latitude": 29.760 , "longitude":  -95.369},                                
 
   {"tid": 281, "cid": 14, "did": 29, "school": "Southern Mississippi", "name": "Golden Eagles", "abbrev": "SOMISS", "pop": 39, "city": "Hattiesburg", "state": "MS", "latitude": 31.315 , "longitude":  -89.308},                               
 
   {"tid": 270, "cid": 14, "did": 29, "school": "Loyola (MD)", "name": "Greyhounds", "abbrev": "LOYMD", "pop": 50, "city": "Baltimore", "state": "MD", "latitude": 39.346 , "longitude":  -76.618},
 
   {"tid": 30, "cid": 15, "did": 30, "school": "Buffalo", "name": "Bulls", "abbrev": "BUFF", "pop": 290, "city": "Buffalo", "state": "NY", "latitude": 42.904 , "longitude":  -78.849},                                           
 
   {"tid": 85, "cid": 15, "did": 30, "school": "Kent State", "name": "Golden Flashes", "abbrev": "KENTST", "pop": 235, "city": "Kent", "state": "OH", "latitude": 41.150 , "longitude":  -81.361},
 
   {"tid": 120, "cid": 15, "did": 30, "school": "Bowling Green", "name": "Falcons", "abbrev": "BGSU", "pop": 200, "city": "Bowling Green", "state": "OH", "latitude": 41.373 , "longitude":  -83.650},
 
   {"tid": 122, "cid": 15, "did": 30, "school": "Akron", "name": "Zips", "abbrev": "AKRON", "pop": 198, "city": "Akron", "state": "OH", "latitude": 41.073 , "longitude":  -81.517},
 
   {"tid": 229, "cid": 15, "did": 30, "school": "Miami (OH)", "name": "Redhawks", "abbrev": "MIAOH", "pop": 91, "city": "Oxford", "state": "OH", "latitude": 39.507 , "longitude":  -84.746},             
 
   {"tid": 234, "cid": 15, "did": 30, "school": "Ohio", "name": "Bobcats", "abbrev": "OHIO", "pop": 86, "city": "Athens", "state": "OH", "latitude": 39.329 , "longitude":  -82.096},
 
   {"tid": 295, "cid": 15, "did": 30, "school": "Illinois-Chicago", "name": "Flames", "abbrev": "UIC", "pop": 25, "city": "Chicago", "state": "IL", "latitude": 41.871 , "longitude":  -87.649},
 
   {"tid": 265, "cid": 15, "did": 30, "school": "Wright State", "name": "Raiders", "abbrev": "WRIGHT", "pop": 55, "city": "Dayton", "state": "OH", "latitude": 39.779 , "longitude":  -84.064},                            
 
   {"tid": 69, "cid": 15, "did": 31, "school": "Central Michigan", "name": "Chippewas", "abbrev": "CMICH", "pop": 251, "city": "Mount Pleasant", "state": "MI", "latitude": 43.597 , "longitude":  -84.767},                  
 
   {"tid": 74, "cid": 15, "did": 31, "school": "Toledo", "name": "Rockets", "abbrev": "TOL", "pop": 246, "city": "Toledo", "state": "OH", "latitude": 41.665, "longitude":  -83.575},                            
 
   {"tid": 135, "cid": 15, "did": 31, "school": "Western Michigan", "name": "Broncos", "abbrev": "WMICH", "pop": 185, "city": "Kalamazoo", "state": "MI", "latitude": 42.290 , "longitude":  -85.585},                            
 
   {"tid": 147, "cid": 15, "did": 31, "school": "Eastern Michigan", "name": "Eagles", "abbrev": "EMICH", "pop": 173, "city": "Ypsilanti", "state": "MI", "latitude": 42.242 , "longitude":  -83.618},                           
 
   {"tid": 186, "cid": 15, "did": 31, "school": "Northern Illinois", "name": "Huskies", "abbrev": "NOILL", "pop": 134, "city": "Dekalb", "state": "IL", "latitude": 41.931 , "longitude":  -88.750},                
 
   {"tid": 286, "cid": 15, "did": 31, "school": "Ball State", "name": "Cardinals", "abbrev": "BALL", "pop": 34, "city": "Muncie", "state": "IN", "latitude": 40.193 , "longitude":  -85.388},                           
 
   {"tid": 294, "cid": 15, "did": 31, "school": "Youngstown State", "name": "Penguins", "abbrev": "YTOWN", "pop": 26, "city": "Youngstown", "state": "OH", "latitude": 41.105 , "longitude":  -80.647},                           
 
   {"tid": 151, "cid": 15, "did": 31, "school": "Robert Morris", "name": "Colonials", "abbrev": "RMORR", "pop": 169, "city": "Moon", "state": "PA", "latitude": 40.520 , "longitude": -80.233},
 
   {"tid": 57, "cid": 16, "did": 32, "school": "Harvard", "name": "Crimson", "abbrev": "HARV", "pop": 263, "city": "Cambridge", "state": "MA", "latitude": 42.373 , "longitude": -71.110},                   
 
   {"tid": 65, "cid": 16, "did": 32, "school": "Yale", "name": "Bulldogs", "abbrev": "YALE", "pop": 255, "city": "New Haven", "state": "CT", "latitude": 41.310 , "longitude": -72.923},                
 
   {"tid": 192, "cid": 16, "did": 32, "school": "Princeton", "name": "Tigers", "abbrev": "PRIN", "pop": 128, "city": "Princeton", "state": "NJ", "latitude": 40.357 , "longitude": -74.670},                        
 
   {"tid": 188, "cid": 16, "did": 32, "school": "Dartmouth", "name": "Big Green", "abbrev": "DART", "pop": 132, "city": "Hanover", "state": "NH", "latitude": 43.702 , "longitude": -72.289},                           
 
   {"tid": 199, "cid": 16, "did": 32, "school": "Columbia", "name": "Lions", "abbrev": "COLU", "pop": 121, "city": "New York", "state": "NY", "latitude": 40.712 , "longitude": -74.005},                       
 
   {"tid": 228, "cid": 16, "did": 32, "school": "Cornell", "name": "Big Red", "abbrev": "CORN", "pop": 92, "city": "Ithaca", "state": "NY", "latitude": 42.443 , "longitude": -76.500},                              
 
   {"tid": 246, "cid": 16, "did": 32, "school": "Brown", "name": "Brown Bears", "abbrev": "BROWN", "pop": 74, "city": "Providence", "state": "RI", "latitude": 41.823 , "longitude": -71.422},                        
 
   {"tid": 254, "cid": 16, "did": 32, "school": "Penn", "name": "Quakers", "abbrev": "PENN", "pop": 66, "city": "Philadelphia", "state": "PA", "latitude": 39.950 , "longitude": -75.166},                  
 
   {"tid": 54, "cid": 16, "did": 33, "school": "Iona", "name": "Gaels", "abbrev": "IONA", "pop": 266, "city": "New Rochelle", "state": "NY", "latitude": 40.928 , "longitude": -73.784},                           
 
   {"tid": 138, "cid": 16, "did": 33, "school": "Rider", "name": "Broncs", "abbrev": "RIDER", "pop": 182, "city": "Lawrenceville", "state": "NJ", "latitude": 40.302 , "longitude": -74.738},                
 
   {"tid": 172, "cid": 16, "did": 33, "school": "Manhattan", "name": "Jaspers", "abbrev": "MANH", "pop": 148, "city": "Bronx", "state": "NY", "latitude": 40.837 , "longitude": -73.886},                 
 
   {"tid": 176, "cid": 16, "did": 33, "school": "Monmouth", "name": "Hawks", "abbrev": "MONM", "pop": 144, "city": "West Long Branch", "state": "NJ", "latitude": 40.287 , "longitude": -74.020},                          
 
   {"tid": 167, "cid": 16, "did": 33, "school": "Canisius", "name": "Golden Griffins", "abbrev": "CANI", "pop": 153, "city": "Buffalo", "state": "NY", "latitude": 42.904 , "longitude": -78.849},               
 
   {"tid": 227, "cid": 16, "did": 33, "school": "Quinnipiac", "name": "Bobcats", "abbrev": "QUINN", "pop": 93, "city": "Hamden", "state": "CT", "latitude": 41.397 , "longitude": -72.921},                          
 
   {"tid": 236, "cid": 16, "did": 33, "school": "Saint Peter's", "name": "Peacocks", "abbrev": "STPETE", "pop": 84, "city": "Jersey City", "state": "NJ", "latitude": 40.714 , "longitude": -74.071},                         
 
   {"tid": 288, "cid": 16, "did": 33, "school": "Niagara", "name": "Purple Eagles", "abbrev": "NIAG", "pop": 32, "city": "Lewiston", "state": "NY", "latitude": 43.172 , "longitude": -79.035},                           
 
   {"tid": 48, "cid": 17, "did": 34, "school": "Wofford", "name": "Terriers", "abbrev": "WOFF", "pop": 272, "city": "Spartanburg", "state": "SC", "latitude": 34.946  , "longitude": -81.927},                 
 
   {"tid": 113, "cid": 17, "did": 34, "school": "Chattanooga", "name": "Mocs", "abbrev": "CHATT", "pop": 207, "city": "Chattanooga", "state": "TN", "latitude": 35.045 , "longitude": -85.267},                   
 
   {"tid": 206, "cid": 17, "did": 34, "school": "Mercer", "name": "Bears", "abbrev": "MERC", "pop": 114, "city": "Macon", "state": "GA", "latitude": 32.834 , "longitude": -83.651},                            
 
   {"tid": 217, "cid": 17, "did": 34, "school": "Western Carolina", "name": "Catamounts", "abbrev": "WCAR", "pop": 103, "city": "Cullowhee", "state": "NC", "latitude": 35.309 , "longitude": -83.183},                              
 
   {"tid": 190, "cid": 17, "did": 34, "school": "East Tennessee State", "name": "Buccaneers", "abbrev": "ETENNST", "pop": 130, "city": "Johnson City", "state": "TN", "latitude": 36.333 , "longitude": -82.366},                            
 
   {"tid": 282, "cid": 17, "did": 34, "school": "VMI", "name": "Keydets", "abbrev": "VMI", "pop": 38, "city": "Lexington", "state": "VA", "latitude": 37.783 , "longitude": -79.445},                       
 
   {"tid": 304, "cid": 17, "did": 34, "school": "Samford", "name": "Bulldogs", "abbrev": "SAMF", "pop": 16, "city": "Homewood", "state": "AL", "latitude": 33.468 , "longitude": -86.808},                   
 
   {"tid": 292, "cid": 17, "did": 34, "school": "Furman", "name": "Paladins", "abbrev": "FURM", "pop": 28, "city": "Greenville", "state": "SC", "latitude": 34.925 , "longitude": -82.435},
 
   {"tid": 202, "cid": 17, "did": 35, "school": "Charlotte", "name": "49ers", "abbrev": "UNCC", "pop": 118, "city": "Charlotte", "state": "NC", "latitude": 35.226 , "longitude": -80.843},                       
 
   {"tid": 165, "cid": 17, "did": 35, "school": "Norfolk State", "name": "Spartans", "abbrev": "NORFST", "pop": 155, "city": "Norfolk", "state": "VA", "latitude": 36.848 , "longitude": -76.262},                              
 
   {"tid": 224, "cid": 17, "did": 35, "school": "Hampton", "name": "Pirates", "abbrev": "HAMP", "pop": 96, "city": "Hampton", "state": "VA", "latitude": 37.022 , "longitude": -76.336},                       
 
   {"tid": 170, "cid": 17, "did": 35, "school": "Northwestern State", "name": "Demons", "abbrev": "NWSU", "pop": 150, "city": "Natchitoches", "state": "LA", "latitude": 31.743 , "longitude": -93.095},                         
 
   {"tid": 98, "cid": 17, "did": 35, "school": "William & Mary", "name": "Griffin", "abbrev": "W&M", "pop": 222, "city": "Williamsburg", "state": "VA", "latitude": 37.271 , "longitude": -76.707},                   
 
   {"tid": 155, "cid": 17, "did": 35, "school": "James Madison", "name": "Dukes", "abbrev": "JMU", "pop": 165, "city": "Harrisonburg", "state": "VA", "latitude": 38.438 , "longitude": -78.873},                   
 
   {"tid": 279, "cid": 17, "did": 35, "school": "McNeese State", "name": "Cowboys", "abbrev": "NEESE", "pop": 41, "city": "Lake Charles", "state": "LA", "latitude": 30.214 , "longitude": -93.208},                     
 
   {"tid": 211, "cid": 17, "did": 35, "school": "Delaware State", "name": "Hornets", "abbrev": "DELST", "pop": 109, "city": "Dover", "state": "DE", "latitude": 39.186 , "longitude": -75.542},                 
 
   {"tid": 46, "cid": 18, "did": 36, "school": "Murray State", "name": "Racers", "abbrev": "MURR", "pop": 274, "city": "Murray", "state": "KY", "latitude": 36.609 , "longitude": -88.315},               
 
   {"tid": 133, "cid": 18, "did": 36, "school": "Tennessee-Martin", "name": "Skyhawks", "abbrev": "TNMAR", "pop": 187, "city": "Martin", "state": "TN", "latitude": 36.341 , "longitude": -88.851},                     
 
   {"tid": 168, "cid": 18, "did": 36, "school": "Eastern Illinois", "name": "Panthers", "abbrev": "EILL", "pop": 152, "city": "Charleston", "state": "IL", "latitude": 39.484 , "longitude": -88.178},                         
 
   {"tid": 289, "cid": 18, "did": 36, "school": "SIU-Edwardsville", "name": "Cougars ", "abbrev": "SIUE", "pop": 31, "city": "Edwardsville", "state": "IL", "latitude": 38.803 , "longitude": -89.958},                      
 
   {"tid": 280, "cid": 18, "did": 36, "school": "SE Missouri State", "name": "Redhawks", "abbrev": "SEMO", "pop": 40, "city": "Cape Girardeau", "state": "MO", "latitude": 37.309 , "longitude": -89.546},                     
 
   {"tid": 314, "cid": 18, "did": 36, "school": "Austin Peay", "name": "Governors", "abbrev": "PEAY", "pop": 6, "city": "Clarksville", "state": "TN", "latitude": 36.529 , "longitude": -87.359},                      
 
   {"tid": 28, "cid": 18, "did": 36, "school": "Dayton", "name": "Flyers", "abbrev": "DAYT", "pop": 292, "city": "Dayton", "state": "OH", "latitude": 39.759 , "longitude": -84.191},                           
 
   {"tid": 271, "cid": 18, "did": 36, "school": "Saint Louis", "name": "Billikens", "abbrev": "STL", "pop": 49, "city": "Saint Louis", "state": "MO", "latitude": 38.627 , "longitude": -90.197},                   
 
   {"tid": 99, "cid": 18, "did": 37, "school": "Belmont", "name": "Bruins", "abbrev": "BELM", "pop": 221, "city": "Saint Clairsville", "state": "OH", "latitude": 40.079 , "longitude": -80.901},                            
 
   {"tid": 140, "cid": 18, "did": 37, "school": "Eastern Kentucky", "name": "Colonels", "abbrev": "EKY", "pop": 180, "city": "Richmond", "state": "KY", "latitude": 37.744 , "longitude": -84.293},                         
 
   {"tid": 197, "cid": 18, "did": 37, "school": "Morehead State", "name": "Eagles", "abbrev": "MOREST", "pop": 123, "city": "Morehead", "state": "KY", "latitude": 38.183 , "longitude": -83.441},                        
 
   {"tid": 185, "cid": 18, "did": 37, "school": "Mount Saint Mary's", "name": "Mountaineers", "abbrev": "STMARY", "pop": 135, "city": "Emmittsburg", "state": "MD", "latitude": 39.682 , "longitude": -77.353},                          
 
   {"tid": 285, "cid": 18, "did": 37, "school": "Tennessee Tech", "name": "Golden Eagles", "abbrev": "TNTECH", "pop": 35, "city": "Cookeville", "state": "TN", "latitude": 36.164 , "longitude": -85.504},                   
 
   {"tid": 311, "cid": 18, "did": 37, "school": "Fairleigh Dickinson", "name": "Knights", "abbrev": "FDU", "pop": 9, "city": "Teaneck", "state": "NJ", "latitude": 40.897 , "longitude": -74.029},                             
 
   {"tid": 253, "cid": 18, "did": 37, "school": "Delaware", "name": "Fightin' Blue Hens", "abbrev": "DEL", "pop": 67, "city": "Newark", "state": "DE", "latitude": 39.679 , "longitude": -75.752},                             
 
   {"tid": 283, "cid": 18, "did": 37, "school": "Towson", "name": "Tigers", "abbrev": "TOW", "pop": 37, "city": "Baltimore", "state": "MD", "latitude": 39.392 , "longitude": -76.604},
 
   {"tid": 115, "cid": 19, "did": 38, "school": "UNLV", "name": "Rebels", "abbrev": "UNLV", "pop": 205, "city": "Paradise", "state": "NV", "latitude": 36.081, "longitude": -115.124},
 
   {"tid": 71, "cid": 19, "did": 38, "school": "Wyoming", "name": "Cowboys", "abbrev": "WYO", "pop": 249, "city": "Laramie", "state": "WY", "latitude": 41.316, "longitude": -105.583},
 
   {"tid": 181, "cid": 19, "did": 38, "school": "Fresno State", "name": "Bulldogs", "abbrev": "FRES", "pop": 139, "city": "Fresno", "state": "CA", "latitude": 36.750, "longitude": -119.766},
 
   {"tid": 173, "cid": 19, "did": 38, "school": "New Mexico", "name": "Lobos", "abbrev": "UNM", "pop": 147, "city": "Albuquerque", "state": "NM", "latitude": 35.110, "longitude": -106.610},
 
   {"tid": 305, "cid": 19, "did": 38, "school": "Nevada", "name": "Wolf Pack", "abbrev": "NEV", "pop": 15, "city": "Reno", "state": "NV", "latitude": 39.527, "longitude": -119.821},
 
   {"tid": 144, "cid": 19, "did": 38, "school": "Utah State", "name": "Aggies", "abbrev": "UTAHST", "pop": 176, "city": "Logan", "state": "UT", "latitude": 41.737, "longitude": -111.830},
 
   {"tid": 244, "cid": 19, "did": 38, "school": "Air Force", "name": "Falcons", "abbrev": "USAF", "pop": 76, "city": "Colorado Springs", "state": "CO", "latitude": 38.867, "longitude": -104.760},
 
   {"tid": 154, "cid": 19, "did": 38, "school": "Oral Roberts", "name": "Golden Eagles", "abbrev": "ORAL", "pop": 166, "city": "Tulsa", "state": "OK", "latitude": 36.050 , "longitude": -95.952},
 
   {"tid": 17, "cid": 19, "did": 39, "school": "SMU", "name": "Mustangs", "abbrev": "SMU", "pop": 303, "city": "University Park", "state": "TX", "latitude": 32.841 , "longitude": -96.784},                             
 
   {"tid": 49, "cid": 19, "did": 39, "school": "Tulsa", "name": "Golden Hurricane", "abbrev": "TULSA", "pop": 271, "city": "Tulsa", "state": "OK", "latitude": 36.152 , "longitude": -95.946},                  
 
   {"tid": 222, "cid": 19, "did": 39, "school": "Lamar", "name": "Cardinals", "abbrev": "LAMAR", "pop": 98, "city": "Beaumont", "state": "TX", "latitude": 30.041 , "longitude": -94.075},                      
 
   {"tid": 297, "cid": 19, "did": 39, "school": "Omaha", "name": "Mavericks", "abbrev": "OMAHA", "pop": 23, "city": "Omaha", "state": "NE", "latitude": 41.259 , "longitude": -96.005},                            
 
   {"tid": 240, "cid": 19, "did": 39, "school": "Houston", "name": "Cougars", "abbrev": "HOU", "pop": 80, "city": "Houston", "state": "TX", "latitude": 29.718 , "longitude": -95.339},                          
 
   {"tid": 88, "cid": 19, "did": 39, "school": "Memphis", "name": "Tigers", "abbrev": "MEMP", "pop": 232, "city": "Memphis", "state": "TN", "latitude": 35.119 , "longitude": -89.937},                       
 
   {"tid": 212, "cid": 19, "did": 39, "school": "Tulane", "name": "Green Wave", "abbrev": "TUL", "pop": 108, "city": "New Orleans", "state": "NO", "latitude": 29.935 , "longitude": -90.122},                
 
   {"tid": 287, "cid": 19, "did": 39, "school": "Houston Baptist", "name": "Huskies", "abbrev": "HBU", "pop": 33, "city": "Greater Sharpstown", "state": "TX", "latitude": 29.694 , "longitude": -95.515}
 
 ];
 
 function Welcome()
 
 {
 
   return(<div>
 
       <h1>Welcome to the March Madness Team List!</h1>
       <h2>Don't forget to make your bracket</h2>
 
       </div>);
 
 }
 
  
 
 class Team extends React.Component < {school:string; name:string; city:string; state:string;}>
 {
 
   render(){
 
     const oneTeam= this.props;
 
     return (
 
       <div>
 
         <h2>School Name: {oneTeam.school}</h2>
 
         <p>Mascot: {oneTeam.name}</p>
 
         <p>City: {oneTeam.city}</p>
 
         <p>State: {oneTeam.state}{'\n'}</p>
 
        
 
       </div>
 
     );
 
   }
 
 }
 
 function BandList(){
 
   return(<div>
 
       {teamNames.map(oneTeam => <Team{...oneTeam}/>)}
 
       </div>
 
         );
 
 }
 
 function App() {
 
   return(
 
     <div>
 
   <Welcome/>
 
   <BandList/>
 
  
 
       </div>);
 
 }

export default App;
