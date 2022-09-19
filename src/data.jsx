import React from "react";
import adidas1 from "./assets/images/logos/adidas12.png";
import amazon1 from "./assets/images/logos/amazon12.png";
import chivas from "./assets/images/logos/chivas112.png";
import chivastab from "./assets/images/logos/chivasm.png";
import ss from "./assets/images/logos/ss.png";
import tf from "./assets/images/logos/tf2.png";
import mac from "./assets/images/logos/mac2.png";
import asos from "./assets/images/logos/asos2.png";
import converse from "./assets/images/logos/converse2.png";
import lv from "./assets/images/logos/lv5.png";
import lvtab from "./assets/images/logos/lv2.png";
import hennessy from "./assets/images/logos/hennessy2.png";
import lut from "./assets/images/logos/linkup2.png";

import lut1 from "./assets/images/work images/lut.png";
import lv1 from "./assets/images/work images/LV resized.png";
import hennessy1 from "./assets/images/work images/hennessy resize.png";

const data = [
  {
    id: 1,
    logo: chivastab,
    img: chivastab,
    brandName: "Chivas Regal",
    name: "Chivas Regal",
    project: [
      {
        objective:
          "Chivas Regal wanted to be at the heart of cultural conversations by working with influencers to drive awareness, encourage traffic and engagement with Chivas Regal's long-form content series 'The Rise'",
      },
      {
        solution:
          "We selected key cultural tastemakers from some of the leading upcoming and established podcasts to discuss key topics from 'The Rise' interviews during podcast episodes harnessing their loyal audiences to amplify and drive traffic to the series. This was further supported by social content linking back to the series. We strategically worked with the podcast talent to implement creative ideas which made for authentic content encouraging real conversations. Podcasts included Chuckie Online's HC Podcast, Madame Joyce's Cocktails & Takeaways and Milf N Honey.",
      },
      {
        result: [
          "8 INFLUENTIAL CULTURAL CREATORS + 19 PIECES OF SOCIAL CONTENT + 186K TOTAL PODCAST VIEWS.",
          <br />,
          "Our creative strategy led to strong campaign engagement. The talent selected, creative brief and implementation aligned authentically with the target audience which was proven by a robust engagement rate across the campaign of 4%. The beauty of this campaign is that as the content lives within podcasts this means a continuous growth in reach, engagement and discovery of The Rise series and awareness of Chivas Regal, giving an ongoing uplift in return on the initial investment.",
        ],
      },
    ],
  },
  {
    id: 2,
    logo: hennessy,
    img: hennessy1,
    brandName: "Hennessy",
    name: "Hennessy at Abbey Road Studios with ProducerWez",
    project: [
      {
        objective:
          "Hennessy wanted to ensure that mixologists think of Hennessy as a front of mind Cognac when creating and serving brandy-based drinks.",
      },
      {
        solution:
          "We teamed Hennessy up with ProducerWez, a famous producer who has worked with the likes of Beyonce and NaughtyBoy, and who has studied how your sense of smell and taste changes based on the sounds and frequencies you are hearing. Together we put on a series of immersive workshops at Abbey Road Studios on how sound affects taste and to bring out the many layers of the various Hennessy Cognacs.",
      },
      {
        result:
          "Improved brand perception of Hennessy amongst mixologists with a deeper appreciation of its versatility. New Hennessy-based cocktail recipes created to be served on trade.",
      },
    ],
  },
  {
    id: 3,
    logo: lut,
    img: lut1,
    brandName: "Linkup TV",
    name: "Link Up TV Music Conference in partnership with Footasylum",
    project: [
      {
        objective:
          "Link Up TV wanted to host a music conference to help young people learn more about how to get into the music industry as an artist, A&R or producer.",
      },
      {
        solution:
          "We worked with Link Up TV and FootAsylum (the event sponsor) on the creative ideation and curation of the conference and booked and managed special guests and talent including artists such as Giggs and MsBanks, producers including Steel Banglez and presenters such as Chuckie Online and Rob Bruce.",
      },
      {
        result:
          "Sold out event with over 500 attendees including many VIPs, brand awareness, and positive brand perception for Link Up TV. Exceeded KPIs set on all social platforms and website visits.",
      },
    ],
  },
  {
    id: 4,
    logo: lvtab,
    img: lv1,
    brandName: "Louis Vuitton",
    name: "Louis Vuitton Music Series",
    project: [
      {
        objective:
          "Louis Vuitton wanted to host a live music show in its apartment above the Bond Street flagship store as part of its music partnerships series.",
      },
      {
        solution:
          "We partnered with Louis Vuitton to manage and produce the music collaborations and creative direction of the live music events which included artists such as Tinie Tempah and Labrinth.",
      },
      {
        result:
          "Improved brand perception and built awareness amongst Gen Z and millennial consumers as a culturally relevant brand against its high-fashion competitors.",
      },
    ],
  },
];

export default data;

export const brands = [
  {
    id: 1,
    icon: adidas1,
    title: "Adidas",
  },
  {
    id: 2,
    icon: amazon1,
    title: "Amazon",
  },
  {
    id: 3,
    icon: asos,
    title: "ASOS",
  },
  {
    id: 4,
    icon: chivas,
    title: "Chivas Regal",
  },
  {
    id: 5,
    icon: converse,
    title: "Converse",
  },
  {
    id: 6,
    icon: hennessy,
    title: "Hennessy",
  },
  {
    id: 7,
    icon: lv,
    title: "LV",
  },
  {
    id: 8,
    icon: mac,
    title: "Mac",
  },
  {
    id: 9,
    icon: ss,
    title: "Shake Shack",
  },
  {
    id: 10,
    icon: tf,
    title: "Tom Ford",
  },
];

export const aboutInfo = [
  "Culturally Relevant Campaigns",
  "Authentic & Creative Storytelling",
  "Content that Entertains",
  "Data and Insight-Driven",
];
