export const posts = [
  {
    id: "wireframes",
    title: "Start With a Wireframe: How Great Websites Begin",
    desc: "Before a single line of code is written, the best websites are sketched on paper. Here is why planning the layout first saves time, money and a lot of redesigns.",
    img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    imgAlt: "Website wireframe sketched in a notebook",
    intro:
      "Every project we take on at Webcraft starts the same way: with a notebook, a pen and a lot of questions. Who is the visitor? What do they want to do in the first ten seconds? What should they remember when they leave? A wireframe is the fastest way to answer these questions before design and development make changes expensive.",
    sections: [
      {
        heading: "Why wireframes matter",
        paragraphs: [
          "A wireframe is a simple, low-detail layout of a page. It shows where the navigation, headline, images and buttons go, without colors or fonts to distract from the structure. Because it takes minutes to draw, you can try five different layouts in the time it would take to build one in code.",
          "It also gets everyone on the same page. Clients, designers and developers can point at the same sketch and agree on what is being built, which avoids the classic late-project argument about what was imagined.",
        ],
      },
      {
        heading: "What to include in your first sketch",
        paragraphs: [
          "Keep it focused on the essentials: a clear headline that explains what you offer, one main call to action, and a simple path to the rest of the site. If a section does not help the visitor take that next step, it probably does not belong on the first screen.",
          "Do not forget mobile. Most visitors will open your site on a phone, so sketch the small-screen version too. Stacking sections in a single column often shows you what is truly important.",
        ],
      },
      {
        heading: "From paper to production",
        paragraphs: [
          "Once the structure feels right, we move into design and then into code, using the same layout as a guide. The result is a site that is faster to build, easier to maintain and far more likely to turn visitors into customers. Great websites are not decorated into shape, they are planned into shape.",
        ],
      },
    ],
  },
  {
    id: "fast-websites",
    title: "Speed Is a Feature: Why Fast Websites Win",
    desc: "Visitors decide in a few seconds whether to stay. We look at what slows a site down and the simple fixes that make pages feel instant.",
    img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    imgAlt: "Source code on a dark editor screen",
    intro:
      "Nobody praises a website for loading quickly, but everybody notices when it does not. Slow pages lose visitors, hurt search rankings and make a good design feel cheap. Speed is not a finishing touch, it is part of the product.",
    sections: [
      {
        heading: "Where the time goes",
        paragraphs: [
          "Most slow sites share the same problems: oversized images, too much JavaScript and fonts or scripts loaded from several different places. Each one adds a little delay, and together they add seconds.",
          "Images are usually the biggest offender. A photo straight from a camera can be several megabytes, while the same photo resized and compressed for the web can be a fraction of that with no visible difference.",
        ],
      },
      {
        heading: "Simple fixes that make a big difference",
        paragraphs: [
          "Serve images at the size they are displayed and in a modern format. Load only the code a page actually needs, and let the rest wait until it is required. Use a framework that renders pages on the server so visitors see content before the scripts finish loading.",
          "Test on a real phone with an average connection, not just on a fast laptop. That is how most of your visitors will experience the site.",
        ],
      },
      {
        heading: "Make it a habit",
        paragraphs: [
          "Performance slips back over time as new features are added. Set a budget for page weight, check it before every release and treat a regression like any other bug. Fast sites stay fast because someone keeps watching.",
        ],
      },
    ],
  },
  {
    id: "team-kickoff",
    title: "Design Together: Running a Project Kickoff That Works",
    desc: "The first meeting sets the tone for the whole project. Here is how we bring clients and designers together so everyone starts with the same goals.",
    img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    imgAlt: "A team working together around a table with laptops",
    intro:
      "A good project does not start with a mockup, it starts with a conversation. The kickoff is where goals, audience and limits are agreed, and where most future misunderstandings are prevented.",
    sections: [
      {
        heading: "Start with the goal, not the design",
        paragraphs: [
          "Ask what success looks like in plain terms: more sign-ups, more enquiries, better understanding of the product. A clear goal gives every later decision, from layout to wording, something to be measured against.",
        ],
      },
      {
        heading: "Know the audience",
        paragraphs: [
          "Talk about who will actually use the site, what they already know and what might stop them from taking action. Real customer questions are more useful than any assumption made in a meeting room.",
          "Bring examples. Sites you like and sites you dislike are an easy way to describe taste without needing design vocabulary.",
        ],
      },
      {
        heading: "Agree on the next steps",
        paragraphs: [
          "End the meeting with a short written summary: the goal, the audience, the scope, who decides what and when the first draft is due. It takes ten minutes to write and saves weeks of confusion later.",
        ],
      },
    ],
  },
];
