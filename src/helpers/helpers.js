export function formatCurrency(value) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(value);
}

// Helper Obj
export const cardData = [
  {
    id: 1,
    title: "Harvest Thanksgiving",
    category: "upcoming",
    img: "/images/harvest.jpg",
    description: `Our annual Harvest Thanksgiving is more than just a church tradition; it is a  powerful reminder of the blessings we receive each year. 

The day begins with a vibrant service filled with joyful hymns, traditional attire, and symbolic offerings.Families come forward with baskets of produce, food items, and other tokens of gratitude,which are presented at the altar in thanksgiving for God’s provision.

Beyond the ceremony, the Harvest Thanksgiving fosters a sense of community andtogetherness. It is a moment where young and old alike contribute to the joy ofthe season. 

Testimonies are shared, recounting moments of God’s faithfulness inpersonal lives — from answered prayers to unexpected opportunities. These storiesencourage others and set a tone of gratitude throughout the parish. After the service, the celebration continues with a communal feast, laughter, andcultural performances. 

Children play, choirs sing, and elders reflect on how farthe community has come. While it is a festive day, the true essence of HarvestThanksgiving lies in its call to remember those less fortunate. Many of the itemscollected are redistributed to families in need, reminding us that gratitude isbest expressed in sharing.

Ultimately, the Harvest Thanksgiving is not just about celebrating abundance,but about re-centering ourselves on the principle of stewardship. By giving thanks,we acknowledge that every blessing comes from God, and by sharing, we extend thatblessing to others.`,
  },
  {
    id: 2,
    category: "event",
    title: "Youth Fellowship Meeting and fun activities.",
    img: "/images/slide2.jpg",
    description: `The Youth Fellowship is one of the most dynamic groups in our parish,
offering a space where young people can express themselves freely while growing
spiritually. Every meeting begins with vibrant praise and worship led by the youth
band, followed by engaging activities that challenge both the mind and spirit.

Discussions often center on contemporary issues that affect young people: navigating
career choices, balancing faith with social life, handling peer pressure, and
understanding leadership. Guest speakers are frequently invited to mentor and
share life experiences, making the sessions both practical and inspirational.
Unlike formal church services, fellowship meetings are interactive and relaxed,
encouraging participation and openness.

The fellowship also doubles as a training ground for leadership. Members are given
opportunities to lead prayers, organize events, and even preach short sermons.
These experiences instill confidence and develop essential skills for future roles
in the church and beyond. 

Beyond the meetings, the group often engages in outreach programs — visiting orphanages,
cleaning up neighborhoods, and organizing talent shows. Through these initiatives,
young people learn that faith is not passive but active, and they become role
models in their communities.`,
  },
  {
    id: 3,
    title: "Choir Practice",
    category: "event",
    img: "/images/slide3.jpg",
    description: `Choir practice may seem routine, but it is the heartbeat of every worship
service. Each week, members gather to rehearse hymns, contemporary songs, and
anthems that inspire the congregation on Sunday. Practice sessions are filled with
discipline, laughter, corrections, and moments of breakthrough when harmonies finally
click.

The choir is more than a singing group; it is a spiritual family. Members pray for
one another, support each other through life’s challenges, and share testimonies of
God’s goodness. Many friendships and even marriages have blossomed through the
fellowship of choir practice, proving that music indeed binds people together.

Musically, the practice involves rigorous training — learning sheet music, adjusting
pitch, perfecting timing, and blending voices. Sometimes the sessions can last hours,
but the results are evident when the congregation is lifted in worship. The choir
understands that they are not just performing, but ministering through music.

Over the years, the choir has also participated in competitions and concerts beyond
the parish, showcasing the talent and dedication within. Yet, no matter the stage,
their mission remains the same: to glorify God and lead others into His presence
through the gift of song.`,
  },
  {
    id: 4,
    title: "Community Outreach",
    category: "outreach",
    img: "/images/slide4.jpg",
    description: `Community outreach is at the core of our parish identity. We believe that
faith must extend beyond Sunday services into the everyday realities of people’s
lives. Our outreach programs are diverse — from free medical check-ups and food
distribution to skills training and educational support.

One of the highlights of the year is the Back-to-School Drive, where volunteers
provide school supplies, uniforms, and fees for children from disadvantaged families.
This initiative ensures that education remains accessible and gives young people
hope for a brighter future. Similarly, the monthly feeding program supports elderly
members of the community who often struggle with basic needs.

Outreach also provides an avenue for members to discover and use their gifts. Doctors,
teachers, artisans, and professionals all contribute their expertise to meet
different needs. In doing so, the parish becomes a hub of support and empowerment,
demonstrating the gospel in practical ways.

Ultimately, our outreach efforts are not just about giving material things but about
building relationships. Sitting with families, listening to their struggles, and
walking alongside them reminds us that compassion is more powerful than charity.
Each program is an opportunity to live out the message of Christ’s love in action.`,
  },
];

export const ministries = [
  {
    name: "Catholic Men’s Organization (CMO) ✝️",
    subHeading: "Strong men, strong faith, strong community.",
    description:
      "The CMO brings together Catholic men to grow spiritually, support the church’s mission, and engage in charitable activities that uplift the community.",
    details: {
      meetingDays: "Last Sunday of the Month",
      time: "12:00 PM – 2:00 PM",
      location: "Church Hall",
    },
  },
  {
    name: "Catholic Women’s Organization (CWO) 💒",
    subHeading: "Women of faith, mothers of the Church.",
    description:
      "The CWO is a vibrant group dedicated to nurturing faith, family, and service. They lead charitable works, prayer meetings, and initiatives that empower women in the Church.",
    details: {
      meetingDays: "Second Sunday of the Month",
      time: "1:00 PM – 3:00 PM",
      location: "Church Hall",
    },
  },
  {
    name: "Altar Servers ⛪",
    subHeading: "Serving with humility at the Lord’s table.",
    description:
      "Altar servers assist the priest during Mass, helping with processions, carrying the cross, and ensuring a reverent and smooth liturgical celebration.",
    details: {
      meetingDays: "Sundays",
      time: "3:00 PM – 4:30 PM",
      location: "Sacristy",
    },
  },
  {
    name: "Catechism Classes 📖",
    subHeading: "Teaching the faith, nurturing souls.",
    description:
      "The Catechism Society is dedicated to instructing children and adults in the Catholic faith, preparing them for the sacraments, and deepening their understanding of Christian teachings.",
    details: {
      meetingDays: "Sundays",
      time: "9:00AM - 11:00AM",
      location: "Church Hall",
    },
  },
  {
    name: "Board of Lectors 📜",
    subHeading: "Proclaiming the Word with clarity and reverence.",
    description:
      "The Board of Lectors ensures that the scriptures are read with devotion and understanding during Mass. Members are trained to deliver God’s Word with faith and eloquence.",
    details: {
      meetingDays: "Fridays",
      time: "5:30 PM – 6:30 PM",
      location: "Church Hall",
    },
  },
  {
    name: "Choir Ministry 🎶",
    subHeading: "Lifting hearts to God through song and worship.",
    description:
      "The Choir Ministry enhances liturgical celebrations with sacred music, inspiring worshippers through melodious hymns and choral arrangements. Join us in spreading the Gospel through song!",
    details: {
      meetingDays: "Tuesdays & Saturdays",
      time: "4:00PM - 6:00PM",
      location: "Church Hall",
    },
  },
  {
    name: "Legion of Mary 🌹",
    subHeading: "Serving Christ through devotion to Mary.",
    description:
      "Members of the Legion of Mary engage in prayer, evangelization, and service to the sick, elderly, and those in need, following the example of the Blessed Virgin Mary.",
    details: {
      meetingDays: "Sundays",
      time: "After 6:00AM Mass",
      location: "Marian Grotto",
    },
  },
  {
    name: "Church Warden 🤝",
    subHeading: "Welcoming all with warmth and joy.",
    description:
      "This team ensures that all parishioners and visitors feel at home in our church. They guide seating, distribute materials, and provide assistance during services.",
    details: {
      meetingDays: "First Saturday of the Month",
      time: "5:00 PM – 6:00 PM",
      location: "Church Lobby",
    },
  },
];
