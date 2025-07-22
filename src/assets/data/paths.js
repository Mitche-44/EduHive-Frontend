const paths = [
  {
    "title": "Python Development",
    "image": "https://source.unsplash.com/featured/300x200?python",
    "author": {
      "name": "Erick Mose",
      "image": "https://ui-avatars.com/api/?name=Erick+Mose&background=random",
      "role": "Software Developer"
    },
    "progress": 19
  },
  {
    "title": "Javascript Development",
    "image": "https://source.unsplash.com/featured/300x200?javascript",
    "author": {
      "name": "Asenath Hemedy",
      "image": "https://ui-avatars.com/api/?name=Asenath+Hemedy&background=random",
      "role": "UI/UX Designer"
    },
    "progress": 61
  },
  {
    "title": "React Development",
    "image": "https://source.unsplash.com/featured/300x200?react",
    "author": {
      "name": "Brian Kimani",
      "image": "https://ui-avatars.com/api/?name=Brian+Kimani&background=random",
      "role": "Data Scientist"
    },
    "progress": 64
  },
  {
    "title": "Vue Development",
    "image": "https://source.unsplash.com/featured/300x200?vue",
    "author": {
      "name": "Nelson Singh",
      "image": "https://ui-avatars.com/api/?name=Nelson+Singh&background=random",
      "role": "Data Scientist"
    },
    "progress": 74
  },
  {
    "title": "Node Development",
    "image": "https://source.unsplash.com/featured/300x200?node",
    "author": {
      "name": "Erick Mose",
      "image": "https://ui-avatars.com/api/?name=Erick+Mose&background=random",
      "role": "Software Developer"
    },
    "progress": 13
  },
  {
    "title": "Django Development",
    "image": "https://source.unsplash.com/featured/300x200?django",
    "author": {
      "name": "Nelson Singh",
      "image": "https://ui-avatars.com/api/?name=Nelson+Singh&background=random",
      "role": "Data Scientist"
    },
    "progress": 30
  },
  {
    "title": "Flask Development",
    "image": "https://source.unsplash.com/featured/300x200?flask",
    "author": {
      "name": "Brian Kimani",
      "image": "https://ui-avatars.com/api/?name=Brian+Kimani&background=random",
      "role": "Software Developer"
    },
    "progress": 38
  },
  {
    "title": "Pandas Development",
    "image": "https://source.unsplash.com/featured/300x200?pandas",
    "author": {
      "name": "Brian Kimani",
      "image": "https://ui-avatars.com/api/?name=Brian+Kimani&background=random",
      "role": "Data Scientist"
    },
    "progress": 42
  },
  {
    "title": "Numpy Development",
    "image": "https://source.unsplash.com/featured/300x200?numpy",
    "author": {
      "name": "Lilian Moraa",
      "image": "https://ui-avatars.com/api/?name=Lilian+Moraa&background=random",
      "role": "Software Developer"
    },
    "progress": 42
  },
  {
    "title": "Tensorflow Development",
    "image": "https://source.unsplash.com/featured/300x200?tensorflow",
    "author": {
      "name": "Erick Mose",
      "image": "https://ui-avatars.com/api/?name=Erick+Mose&background=random",
      "role": "Software Developer"
    },
    "progress": 98
  },
  {
    "title": "Machine Learning Development",
    "image": "https://source.unsplash.com/featured/300x200?machine-learning",
    "author": {
      "name": "Lilian Moraa",
      "image": "https://ui-avatars.com/api/?name=Lilian+Moraa&background=random",
      "role": "Cloud Engineer"
    },
    "progress": 93
  },
  {
    "title": "Deep Learning Development",
    "image": "https://source.unsplash.com/featured/300x200?deep-learning",
    "author": {
      "name": "Erick Mose",
      "image": "https://ui-avatars.com/api/?name=Erick+Mose&background=random",
      "role": "Data Scientist"
    },
    "progress": 87
  },
  {
    "title": "Computer Vision Development",
    "image": "https://source.unsplash.com/featured/300x200?computer-vision",
    "author": {
      "name": "Lilian Moraa",
      "image": "https://ui-avatars.com/api/?name=Lilian+Moraa&background=random",
      "role": "UI/UX Designer"
    },
    "progress": 36
  },
  {
    "title": "Nlp Development",
    "image": "https://source.unsplash.com/featured/300x200?nlp",
    "author": {
      "name": "Lilian Moraa",
      "image": "https://ui-avatars.com/api/?name=Lilian+Moraa&background=random",
      "role": "UI/UX Designer"
    },
    "progress": 19
  },
  {
    "title": "Database Development",
    "image": "https://source.unsplash.com/featured/300x200?database",
    "author": {
      "name": "Lilian Moraa",
      "image": "https://ui-avatars.com/api/?name=Lilian+Moraa&background=random",
      "role": "UI/UX Designer"
    },
    "progress": 51
  },
  {
    "title": "Postgresql Development",
    "image": "https://source.unsplash.com/featured/300x200?postgresql",
    "author": {
      "name": "Brian Kimani",
      "image": "https://ui-avatars.com/api/?name=Brian+Kimani&background=random",
      "role": "UI/UX Designer"
    },
    "progress": 24
  },
  {
    "title": "Mongodb Development",
    "image": "https://source.unsplash.com/featured/300x200?mongodb",
    "author": {
      "name": "Lilian Moraa",
      "image": "https://ui-avatars.com/api/?name=Lilian+Moraa&background=random",
      "role": "UI/UX Designer"
    },
    "progress": 38
  },
  {
    "title": "Api Development",
    "image": "https://source.unsplash.com/featured/300x200?api",
    "author": {
      "name": "Lilian Moraa",
      "image": "https://ui-avatars.com/api/?name=Lilian+Moraa&background=random",
      "role": "Data Scientist"
    },
    "progress": 75
  },
  {
    "title": "Docker Development",
    "image": "https://source.unsplash.com/featured/300x200?docker",
    "author": {
      "name": "Nelson Singh",
      "image": "https://ui-avatars.com/api/?name=Nelson+Singh&background=random",
      "role": "DevOps Specialist"
    },
    "progress": 14
  },
  {
    "title": "Kubernetes Development",
    "image": "https://source.unsplash.com/featured/300x200?kubernetes",
    "author": {
      "name": "Erick Mose",
      "image": "https://ui-avatars.com/api/?name=Erick+Mose&background=random",
      "role": "DevOps Specialist"
    },
    "progress": 30
  },
  {
    "title": "Devops Development",
    "image": "https://source.unsplash.com/featured/300x200?devops",
    "author": {
      "name": "Brian Kimani",
      "image": "https://ui-avatars.com/api/?name=Brian+Kimani&background=random",
      "role": "UI/UX Designer"
    },
    "progress": 22
  },
  {
    "title": "Cybersecurity Development",
    "image": "https://source.unsplash.com/featured/300x200?cybersecurity",
    "author": {
      "name": "Lilian Moraa",
      "image": "https://ui-avatars.com/api/?name=Lilian+Moraa&background=random",
      "role": "DevOps Specialist"
    },
    "progress": 19
  },
  {
    "title": "Linux Development",
    "image": "https://source.unsplash.com/featured/300x200?linux",
    "author": {
      "name": "Asenath Hemedy",
      "image": "https://ui-avatars.com/api/?name=Asenath+Hemedy&background=random",
      "role": "DevOps Specialist"
    },
    "progress": 71
  },
  {
    "title": "Cloud Development",
    "image": "https://source.unsplash.com/featured/300x200?cloud",
    "author": {
      "name": "Erick Mose",
      "image": "https://ui-avatars.com/api/?name=Erick+Mose&background=random",
      "role": "Data Scientist"
    },
    "progress": 66
  },
  {
    "title": "Aws Development",
    "image": "https://source.unsplash.com/featured/300x200?aws",
    "author": {
      "name": "Erick Mose",
      "image": "https://ui-avatars.com/api/?name=Erick+Mose&background=random",
      "role": "Data Scientist"
    },
    "progress": 15
  },
  {
    "title": "Azure Development",
    "image": "https://source.unsplash.com/featured/300x200?azure",
    "author": {
      "name": "Nelson Singh",
      "image": "https://ui-avatars.com/api/?name=Nelson+Singh&background=random",
      "role": "Cloud Engineer"
    },
    "progress": 30
  },
  {
    "title": "Gcp Development",
    "image": "https://source.unsplash.com/featured/300x200?gcp",
    "author": {
      "name": "Nelson Singh",
      "image": "https://ui-avatars.com/api/?name=Nelson+Singh&background=random",
      "role": "Data Scientist"
    },
    "progress": 57
  },
  {
    "title": "Software Development",
    "image": "https://source.unsplash.com/featured/300x200?software",
    "author": {
      "name": "Erick Mose",
      "image": "https://ui-avatars.com/api/?name=Erick+Mose&background=random",
      "role": "Data Scientist"
    },
    "progress": 81
  },
  {
    "title": "Frontend Development",
    "image": "https://source.unsplash.com/featured/300x200?frontend",
    "author": {
      "name": "Asenath Hemedy",
      "image": "https://ui-avatars.com/api/?name=Asenath+Hemedy&background=random",
      "role": "Cloud Engineer"
    },
    "progress": 78
  },
  {
    "title": "Backend Development",
    "image": "https://source.unsplash.com/featured/300x200?backend",
    "author": {
      "name": "Erick Mose",
      "image": "https://ui-avatars.com/api/?name=Erick+Mose&background=random",
      "role": "DevOps Specialist"
    },
    "progress": 57
  },
  {
    "title": "Ui Ux Development",
    "image": "https://source.unsplash.com/featured/300x200?ui-ux",
    "author": {
      "name": "Nelson Singh",
      "image": "https://ui-avatars.com/api/?name=Nelson+Singh&background=random",
      "role": "Cloud Engineer"
    },
    "progress": 80
  },
  {
    "title": "Mobile App Development",
    "image": "https://source.unsplash.com/featured/300x200?mobile-app",
    "author": {
      "name": "Asenath Hemedy",
      "image": "https://ui-avatars.com/api/?name=Asenath+Hemedy&background=random",
      "role": "Data Scientist"
    },
    "progress": 54
  },
  {
    "title": "Swift Development",
    "image": "https://source.unsplash.com/featured/300x200?swift",
    "author": {
      "name": "Lilian Moraa",
      "image": "https://ui-avatars.com/api/?name=Lilian+Moraa&background=random",
      "role": "Cloud Engineer"
    },
    "progress": 99
  },
  {
    "title": "Kotlin Development",
    "image": "https://source.unsplash.com/featured/300x200?kotlin",
    "author": {
      "name": "Brian Kimani",
      "image": "https://ui-avatars.com/api/?name=Brian+Kimani&background=random",
      "role": "DevOps Specialist"
    },
    "progress": 32
  },
  {
    "title": "Flutter Development",
    "image": "https://source.unsplash.com/featured/300x200?flutter",
    "author": {
      "name": "Lilian Moraa",
      "image": "https://ui-avatars.com/api/?name=Lilian+Moraa&background=random",
      "role": "UI/UX Designer"
    },
    "progress": 92
  },
  {
    "title": "Data Science Development",
    "image": "https://source.unsplash.com/featured/300x200?data-science",
    "author": {
      "name": "Erick Mose",
      "image": "https://ui-avatars.com/api/?name=Erick+Mose&background=random",
      "role": "Cloud Engineer"
    },
    "progress": 44
  },
  {
    "title": "Data Engineering Development",
    "image": "https://source.unsplash.com/featured/300x200?data-engineering",
    "author": {
      "name": "Brian Kimani",
      "image": "https://ui-avatars.com/api/?name=Brian+Kimani&background=random",
      "role": "Data Scientist"
    },
    "progress": 66
  },
  {
    "title": "Ai Ethics Development",
    "image": "https://source.unsplash.com/featured/300x200?ai-ethics",
    "author": {
      "name": "Lilian Moraa",
      "image": "https://ui-avatars.com/api/?name=Lilian+Moraa&background=random",
      "role": "UI/UX Designer"
    },
    "progress": 99
  },
  {
    "title": "Agile Development",
    "image": "https://source.unsplash.com/featured/300x200?agile",
    "author": {
      "name": "Nelson Singh",
      "image": "https://ui-avatars.com/api/?name=Nelson+Singh&background=random",
      "role": "Cloud Engineer"
    },
    "progress": 83
  },
  {
    "title": "Project Management Development",
    "image": "https://source.unsplash.com/featured/300x200?project-management",
    "author": {
      "name": "Nelson Singh",
      "image": "https://ui-avatars.com/api/?name=Nelson+Singh&background=random",
      "role": "Data Scientist"
    },
    "progress": 75
  },
  {
    "title": "Git Development",
    "image": "https://source.unsplash.com/featured/300x200?git",
    "author": {
      "name": "Nelson Singh",
      "image": "https://ui-avatars.com/api/?name=Nelson+Singh&background=random",
      "role": "Software Developer"
    },
    "progress": 39
  },
  {
    "title": "Ci Cd Development",
    "image": "https://source.unsplash.com/featured/300x200?ci-cd",
    "author": {
      "name": "Brian Kimani",
      "image": "https://ui-avatars.com/api/?name=Brian+Kimani&background=random",
      "role": "Software Developer"
    },
    "progress": 30
  },
  {
    "title": "Testing Development",
    "image": "https://source.unsplash.com/featured/300x200?testing",
    "author": {
      "name": "Erick Mose",
      "image": "https://ui-avatars.com/api/?name=Erick+Mose&background=random",
      "role": "DevOps Specialist"
    },
    "progress": 39
  },
  {
    "title": "Typescript Development",
    "image": "https://source.unsplash.com/featured/300x200?typescript",
    "author": {
      "name": "Brian Kimani",
      "image": "https://ui-avatars.com/api/?name=Brian+Kimani&background=random",
      "role": "DevOps Specialist"
    },
    "progress": 19
  },
  {
    "title": "Csharp Development",
    "image": "https://source.unsplash.com/featured/300x200?csharp",
    "author": {
      "name": "Lilian Moraa",
      "image": "https://ui-avatars.com/api/?name=Lilian+Moraa&background=random",
      "role": "DevOps Specialist"
    },
    "progress": 37
  },
  {
    "title": "Java Development",
    "image": "https://source.unsplash.com/featured/300x200?java",
    "author": {
      "name": "Nelson Singh",
      "image": "https://ui-avatars.com/api/?name=Nelson+Singh&background=random",
      "role": "DevOps Specialist"
    },
    "progress": 20
  },
  {
    "title": "Ruby Development",
    "image": "https://source.unsplash.com/featured/300x200?ruby",
    "author": {
      "name": "Erick Mose",
      "image": "https://ui-avatars.com/api/?name=Erick+Mose&background=random",
      "role": "Software Developer"
    },
    "progress": 52
  },
  {
    "title": "Go Development",
    "image": "https://source.unsplash.com/featured/300x200?go",
    "author": {
      "name": "Nelson Singh",
      "image": "https://ui-avatars.com/api/?name=Nelson+Singh&background=random",
      "role": "UI/UX Designer"
    },
    "progress": 28
  },
  {
    "title": "Rust Development",
    "image": "https://source.unsplash.com/featured/300x200?rust",
    "author": {
      "name": "Asenath Hemedy",
      "image": "https://ui-avatars.com/api/?name=Asenath+Hemedy&background=random",
      "role": "UI/UX Designer"
    },
    "progress": 35
  },
  {
    "title": "Blockchain Development",
    "image": "https://source.unsplash.com/featured/300x200?blockchain",
    "author": {
      "name": "Brian Kimani",
      "image": "https://ui-avatars.com/api/?name=Brian+Kimani&background=random",
      "role": "UI/UX Designer"
    },
    "progress": 76
  }
];

export default paths;