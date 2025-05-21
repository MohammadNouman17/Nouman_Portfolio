// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import powerbilogo from './assets/tech_logo/powerbilogo.jpg';
import tableaulogo  from './assets/tech_logo/tableaulogo.jpg';

// Experience Section Logo's
import sflogo from './assets/company_logo/sflogo.png';
import pitlogo from './assets/company_logo/pitlogo.png';

// Education Section Logo's
import mru from './assets/education_logo/mru.png';
import narayana from './assets/education_logo/narayana.png';
import ssc from './assets/education_logo/ssc.jpg'

// Project Section Logo's
import ekartlogo from './assets/work_logo/ekartlogo.png';
import hwdrslogo from './assets/work_logo/hwdrslogo.png';
import spplogo from './assets/work_logo/spplogo.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular JS', logo: angularLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Power Bi', logo: powerbilogo },
      { name: 'Tableau', logo: tableaulogo }, 
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: sflogo,
      role: "Salesforce Administrator Intern",
      company: "Salesforce",
      date: "May 2024 - June 2024",
      desc: "I gained hands-on experience in setting up and managing user roles, profiles, and organizational structures. I worked on object relationships like master-detail and lookup to maintain efficient data flow. I implemented process automation using Flows and Process Builder to streamline operations. I also managed security settings through permission sets and sharing rules. Additionally, I created reports and dashboards for insights and handled data import, export, and cleanup tasks to ensure data accuracy.",
      skills: [
        "Salesforce",
        "OrganizationalSetup", 
        "UserManagement",
        "ProcessAutomation",
        "FlowBuilder",
        "ProcessBuilder",
        "WorkflowRules",
        "SecuritySettings", 
        "Profiles", 
        "PermissionSets", 
        "SharingRules", 
        "Reports",
        "Dashboards", 
        "DataManagement",
      ],
    },
    {
      id: 1,
      img: pitlogo,
      role: "Machine Learning Engineer Intern",
      company: "ProdigiyInfo Tech",
      date: "March 2024 - April 2024",
      desc: "I worked with various ML models, gaining hands-on experience in both supervised and unsupervised learning. I focused on understanding data distribution and performed sentiment analysis using real-world datasets. I applied models like logistic regression, decision trees, and SVM, and explored text classification using tools like scikit-learn and NLTK. This experience improved my skills in data preprocessing, model training, and evaluation.",
      skills: [
         "SupervisedLearning", "UnsupervisedLearning", "DataPreprocessing", "FeatureEngineering", "ModelTraining", "ModelEvaluation", "LogisticRegression", "DecisionTrees", "SVM", "SentimentAnalysis", "TextClassification", "NLP", "ScikitLearn", "NLTK", "Pandas", "NumPy", "DataVisualization", "Matplotlib", "Seaborn",
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: mru,
      school: "Malla Reddy University",
      date: "Sept 2021 - June 2025",
      grade: "8.60 CGPA",
      desc: "I have completed my Bachelor's degree (B.Tech) in Computer Science Engineering from Malla Reddy University, Hyderabad. During my time at Mru, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at MRU has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B.Tech",
    },

    {
      id: 2,
      img: narayana,
      school: "Narayana Junior College ",
      date: "June 2019 - May 2021",
      grade: "93%",
      desc: "I completed my class 12 education from Narayana Junior College, under the Telangana State board, where I studied Mathematics, Physics, and Chemistry (MPC).",
      degree: "Telangana State Board(XII) - M.P.C",
    },
    {
      id: 3,
      img: ssc,
      school: "St. Mark's High School",
      date: "June 2015 - March 2019",
      grade: "9.0 CGPA",
      desc: "I completed my class 10 education from St. Mark's High School, Tandur, under the SSC board.",
      degree: "Secondary School Education  (X) (SSC Board) ",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Ekart Website",
      description:
        "a Java-based e-commerce web application using Spring Boot and Maven, featuring product management, user authentication, and order processing. Implemented robust MVC architecture and integrated MySQL for persistent data storage, enhancing scalability and maintainability.",
      image: ekartlogo,
      tags: ["HTML", "CSS", "JavaScript", "JAVA","SpringBoot","MySql","Jquery","Git"],
      github: "https://github.com/MohammadNouman17/Ekart",
    },
    {
      id: 1,
      title: "HandWritten Digit Recognition System",
      description:
        "Developed a Handwritten Digit Recognition System using Python, leveraging machine learning algorithms and image processing techniques for accurate digit classification. Implemented using scikit-learn and OpenCV, achieving high accuracy on the MNIST dataset through model training and evaluation.",
      image: hwdrslogo,
      tags: ["Python", "Machine Learning", "Scikit-Learn", "OpenCV", "MNIST", "Image Processing", "Classification Algorithms"],
      github: "https://github.com/MohammadNouman17/Digit-Recognition",
    },
    {
      id: 2,
      title: "Stock Price Prediction with Time Series",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: spplogo,
      tags: ["Python", "Machine Learning", "LSTM", "Deep Learning", "Keras", "Time series analysis"],
      github: "https://github.com/MohammadNouman17/Stock-Price-Prediction-with-Time-Series",
    },
    
  ];  