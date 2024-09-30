const axios = require('axios');     // used for making HTTP requests
const cheerio = require('cheerio'); // used for parsing HTML and scraping data

// Maynooth University Events URL
const url = "https://www.maynoothuniversity.ie/news-events/upcoming-events";

const fetchData = async () => {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const eventData = [];
        const eventElements = $('.view-rows .row');
        
        eventElements.each((index, element) => {
            const $element = $(element);
          
            // Extract data from the current event element
            const eventName = $element.find('.views-field-title a').text().trim();
            const eventDescription = $element.find('.views-field-field-event-description').text().trim();
            const eventDate = $element.find('.views-field-field-event-date .date-display-start').text().trim();
            const eventLocation = $element.find('.views-field-field-location').text().trim();
            let link = 'https://www.maynoothuniversity.ie';
            link += $element.find('.views-field-title a').attr('href');
          
            // Create an object with the extracted data
            const eventDetails = {
              name: eventName,
              description: eventDescription,
              date: eventDate,
              location: eventLocation,
              link: link,
            };
          
            // Add the object to the array
            eventData.push(eventDetails);
          });
          
          // Log the scraped event data
          console.log(eventData);
    } catch (e){
        console.log(e);
    }
}

fetchData();


// Uncessary code below
// const parser = () => {
//     const data = [
//         {
//           name: 'Campus Tours',
//           description: 'Maynooth University campus tours give prospective CAO undergraduate students an opportunity to visit our beautiful campus and meet some of our current students.\n' +
//             'Booking is open - these tours are free.',
//           date: 'Monday, 02 October 2023',
//           location: 'Where:     Maynooth University Campus'
//         },
//         {
//           name: 'November Open Days 2023',
//           description: "Join us on the Maynooth University campus on Friday/Saturday 24th-25th November 2023 for our Open Days. Free bus links to Saturday's Open Day.",
//           date: 'Friday, 24 November 2023',
//           location: 'Where:     Maynooth University Campus'
//         },
//         {
//           name: 'CAO Information Evening 2024',
//           description: 'Join us online for our Virtual CAO Information Evening - Wednesday January 10th 6-9pm. Preparing you for CAO 2024.',
//           date: '',
//           location: 'Where:     Online'
//         },
//         {
//           name: 'Learning & Development Semester 1 Schedule - October to December 2023',
//           description: 'The Learning & Development course schedule for October to December 2023 is now available.',
//           date: 'Monday, 21 August 2023',
//           location: 'Where:     Online'
//         },
//         {
//           name: 'Intersectional Humanities Seminar Series',
//           description: 'This interdisciplinary seminar series presents a capacious and provocativevision of intersectional inquiry across the Arts and Humanities. It has beendesigned to invite audiences both to excavate the intersectional stories that are embedded in our research and to better recognize theintersectional contexts in which we work. Irish history is comprised of the material and cultural legacies of intersectional lives which are often not framed in these terms.\n' +
//             '\n' +
//             'Thursdays, 1 to 2 pm 1.33 Iontas. All Welcome!.',
//           date: 'Thursday, 28 September 2023',
//           location: 'Where:     Iontas Building - Room 1.33'
//         },
//         {
//           name: 'New Employee Orientation Programme',
//           description: 'The next New Employee Orientation Programme will take place in February 2024.',
//           date: 'Monday, 16 October 2023',
//           location: 'Where:     On Campus'
//         },
//         {
//           name: "MU Maths Support Centre's secondary school drop-in service",
//           description: 'The Maynooth University Mathematics Support Centre (MSC) is a FREE service providing informal, friendly additional support to Maynooth University undergraduates and secondary school students.\n' +
//             '\n' +
//             'The MSC celebrated its 200,000th student visit in October 2022.',
//           date: 'Monday, 16 October 2023',
//           location: 'Where:     Social Learning Room, John Paul II Library, South Campus​, Maynooth University'
//         },
//         {
//           name: 'Lunchtime Bitesize Research Skills Training',
//           description: '30 minute Bitesize Online Research Skills Training',
//           date: 'Thursday, 19 October 2023',
//           location: 'Where:     Online Teams'
//         },
//         {
//           name: 'CAO Application 2024',
//           description: 'Application to the CAO opened on November 6th.',
//           date: 'Monday, 06 November 2023',
//           location: 'Where:     CAO website'
//         },
//         {
//           name: 'Student Instagram Takeover',
//           description: "Like to know more about student life at Maynooth University and what it is like to study here? Head over to our Instagram and TikTok for our students' perspective\n" +
//             'Instagram @Maynoothcao',
//           date: 'Tuesday, 07 November 2023',
//           location: 'Where:     Instagram @maynoothcao'
//         }
//       ];

//       for(i = 0; i < data.length; i++){
//         console.log(data[i].name);
//         console.log(data[i].description);
//         console.log(data[i].date);
//         console.log(data[i].location);
//         console.log('\n\n');
//       }
// }

// parser();