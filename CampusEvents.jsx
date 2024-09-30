import React, { useState, useEffect } from 'react';
// import { scrapeEvents } from '../EventScraper';
import './CampusEvents.css';
import axios from 'axios';  
const cheerio = require('cheerio');

// let eventData;

const CampusEvents = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const fetchDataFromSite = async () => {
      try {
        const scrapedData = await fetchData();
        setEventData(scrapedData);

        console.log(scrapedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromSite();
  }, []);

  return (
    <>
    <div className="e-body">
      <a href="/">Return Dashboard</a>
        <div className='e-container'>
          <h2>Upcoming Events</h2>
          {eventData && eventData.map((event, index) => (
            <div key={index} className="event-box">
              <div className="event-box-content">
                <h3>{event.name}</h3>
                <p>{event.description}</p>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  Event Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const url = "https://www.maynoothuniversity.ie/news-events/upcoming-events";

const fetchData = async () => {
    try {
        const response = await axios.get('/api/news-events/upcoming-events');
        const $ = cheerio.load(response.data);
//k
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
          return eventData;
    } catch (e){
        console.log(e);
    }
}

export default CampusEvents;