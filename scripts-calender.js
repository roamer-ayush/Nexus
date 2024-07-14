document.addEventListener('DOMContentLoaded', function() {
    const calendarSection = document.getElementById('stargazing-calendar');

    const stargazingEvents = {
        January: [
            {
                title: "Quadrantids Meteor Shower",
                date: "January 3-4, 2024",
                description: "The Quadrantids is an annual meteor shower known for its bright fireball meteors. It typically peaks around January 3-4 each year. This year, expect to see up to 40 meteors per hour radiating from the constellation Boötes."
            },
            {
                title: "Full Moon (Wolf Moon)",
                date: "January 25, 2024",
                description: "The Full Moon of January is traditionally called the Wolf Moon. It will be fully illuminated and visible throughout the night."
            }
        ],
        February: [
            {
                title: "New Moon",
                date: "February 9, 2024",
                description: "During a New Moon, the moon is not visible from Earth because it is positioned between the Earth and the Sun, with the Sun illuminating the side of the moon facing away from us."
            },
            {
                title: "Full Moon (Snow Moon)",
                date: "February 24, 2024",
                description: "The Full Moon of February is known as the Snow Moon. It will be fully illuminated and visible throughout the night."
            }
        ],
        March: [
            {
                title: "Venus at Greatest Eastern Elongation",
                date: "March 1, 2024",
                description: "Venus reaches its maximum separation from the Sun in the evening sky. It will be the brightest object in the sky after the Sun and the Moon, making it an ideal time to observe the planet."
            },
            {
                title: "Full Moon (Worm Moon)",
                date: "March 25, 2024",
                description: "The Full Moon of March is traditionally called the Worm Moon, named after the earthworms that emerge from the thawing ground as winter ends. It will be fully illuminated and visible throughout the night."
            }
        ],
        April: [
            {
                title: "Lyrids Meteor Shower",
                date: "April 22-23, 2024",
                description: "The Lyrids is an annual meteor shower known for its fast and bright meteors. It typically peaks around April 22-23 each year. This year, expect to see up to 20 meteors per hour radiating from the constellation Lyra."
            },
            {
                title: "Full Moon (Pink Moon)",
                date: "April 23, 2024",
                description: "The Full Moon of April is known as the Pink Moon, named after the pink flowers (phlox) that bloom in early spring. It will be fully illuminated and visible throughout the night."
            }
        ],
        May: [
            {
                title: "Eta Aquarids Meteor Shower",
                date: "May 6-7, 2024",
                description: "The Eta Aquarids is an annual meteor shower created by debris from Halley's Comet. It typically peaks around May 6-7 each year. This year, expect to see up to 50 meteors per hour radiating from the constellation Aquarius."
            },
            {
                title: "Full Moon (Flower Moon)",
                date: "May 23, 2024",
                description: "The Full Moon of May is traditionally called the Flower Moon, as it coincides with the blooming of flowers in the northern hemisphere. It will be fully illuminated and visible throughout the night."
            }
        ],
        June: [
            {
                title: "New Moon",
                date: "June 8, 2024",
                description: "During a New Moon, the moon is not visible from Earth because it is positioned between the Earth and the Sun, with the Sun illuminating the side of the moon facing away from us."
            },
            {
                title: "Full Moon (Strawberry Moon)",
                date: "June 21, 2024",
                description: "The Full Moon of June is known as the Strawberry Moon, named after the strawberries that ripen during this month's harvest. It will be fully illuminated and visible throughout the night."
            }
        ],
        July: [
            {
                title: "Delta Aquarids Meteor Shower",
                date: "July 28-29, 2024",
                description: "The Delta Aquarids is an annual meteor shower known for its faint meteors. It typically peaks around July 28-29 each year. This year, expect to see up to 20 meteors per hour radiating from the constellation Aquarius."
            },
            {
                title: "Full Moon (Buck Moon)",
                date: "July 20, 2024",
                description: "The Full Moon of July is traditionally called the Buck Moon, as it coincides with the time when male deer grow their new antlers. It will be fully illuminated and visible throughout the night."
            }
        ],
        August: [
            {
                title: "Perseid Meteor Shower",
                date: "August 12-13, 2024",
                description: "The Perseids is one of the best meteor showers of the year, known for its fast and bright meteors. It typically peaks around August 12-13 each year. This year, expect to see up to 60 meteors per hour radiating from the constellation Perseus."
            },
            {
                title: "Full Moon (Sturgeon Moon)",
                date: "August 19, 2024",
                description: "The Full Moon of August is known as the Sturgeon Moon, named after the large fish that were easily caught during this month's peak. It will be fully illuminated and visible throughout the night."
            }
        ],
        September: [
            {
                title: "New Moon",
                date: "September 6, 2024",
                description: "During a New Moon, the moon is not visible from Earth because it is positioned between the Earth and the Sun, with the Sun illuminating the side of the moon facing away from us."
            },
            {
                title: "Full Moon (Harvest Moon)",
                date: "September 17, 2024",
                description: "The Full Moon of September is known as the Harvest Moon, as it traditionally provided extra light for farmers to harvest their crops. It will be fully illuminated and visible throughout the night."
            }
        ],
        October: [
            {
                title: "Draconids Meteor Shower",
                date: "October 8-9, 2024",
                description: "The Draconids is an annual meteor shower known for its slow-moving meteors. It typically peaks around October 8-9 each year. This year, expect to see up to 10 meteors per hour radiating from the constellation Draco."
            },
            {
                title: "Full Moon (Hunter's Moon)",
                date: "October 17, 2024",
                description: "The Full Moon of October is traditionally called the Hunter's Moon, as it provided light for hunters to prepare for winter. It will be fully illuminated and visible throughout the night."
            }
        ],
        November: [
            {
                title: "Taurids Meteor Shower",
                date: "November 4-5, 2024",
                description: "The Taurids is an annual meteor shower known for its bright fireball meteors. It typically peaks around November 4-5 each year. This year, expect to see up to 10 meteors per hour radiating from the constellation Taurus."
            },
            {
                title: "Full Moon (Beaver Moon)",
                date: "November 15, 2024",
                description: "The Full Moon of November is known as the Beaver Moon, as it traditionally marked the time to set beaver traps before the waters froze. It will be fully illuminated and visible throughout the night."
            },
            {
                title: "Leonids Meteor Shower",
                date: "November 17-18, 2024",
                description: "The Leonids is an annual meteor shower known for its fast meteors. It typically peaks around November 17-18 each year. This year, expect to see up to 15 meteors per hour radiating from the constellation Leo."
            }
        ],
        December: [
            {
                title: "Geminids Meteor Shower",
                date: "December 13-14, 2024",
                description: "The Geminids is one of the best meteor showers of the year, known for its bright and colorful meteors. It typically peaks around December 13-14 each year. This year, expect to see up to 120 meteors per hour radiating from the constellation Gemini."
            },
            {
                title: "Full Moon (Cold Moon)",
                date: "December 15, 2024",
                description: "The Full Moon of December is known as the Cold Moon, as it coincides with the start of the cold winter season. It will be fully illuminated and visible throughout the night."
            },
            {
                title: "Ursids Meteor Shower",
                date: "December 21-22, 2024",
                description: "The Ursids is an annual meteor shower known for its faint meteors. It typically peaks around December 21-22 each year. This year, expect to see up to 10 meteors per hour radiating from the constellation Ursa Minor."
            }
        ]
    };
    

    for (let month in stargazingEvents) {
        const monthButton = document.createElement('button');
        monthButton.classList.add('collapsible');
        monthButton.textContent = month;
        calendarSection.appendChild(monthButton);

        const monthContent = document.createElement('div');
        monthContent.classList.add('content');

        stargazingEvents[month].forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');

            const titleElement = document.createElement('h3');
            titleElement.textContent = event.title;

            const dateElement = document.createElement('p');
            dateElement.textContent = `Date: ${event.date}`;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = event.description;

            eventElement.appendChild(titleElement);
            eventElement.appendChild(dateElement);
            eventElement.appendChild(descriptionElement);

            monthContent.appendChild(eventElement);
        });

        calendarSection.appendChild(monthContent);
    }

    const collapsibles = document.querySelectorAll('.collapsible');
    collapsibles.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
