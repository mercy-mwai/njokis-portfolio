import Banner from '@/components/Banner'
import Image from 'next/image'
import Projects from '../projects/page';


const skills = [
  {
    category: "Programming Languages",
    items: [
      { src: "/assets/icons/javascript.svg", alt: "JavaScript" },
      { src: "/assets/icons/python.svg", alt: "Python" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { src: "/assets/icons/html.svg", alt: "HTML" },
      { src: "/assets/icons/css.svg", alt: "CSS" },
      { src: "/assets/icons/tailwind.svg", alt: "Tailwind CSS" },
      { src: "/assets/icons/react.svg", alt: "React" },
      { src: "/assets/icons/nextjs.svg", alt: "Next.js" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { src: "/assets/icons/node-js.svg", alt: "Node.js" },
      { src: "/assets/icons/Express JS.svg", alt: "Express.js" },
      { src: "/assets/icons/restapi.svg", alt: "REST API" },
    ],
  },
  {
    category: "Databases",
    items: [
      { src: "/assets/icons/mongodb.svg", alt: "MongoDB" },
      { src: "/assets/icons/mysql.svg", alt: "MySQL" },
      { src: "/assets/icons/firebase.svg", alt: "Firebase" },
      { src: "/assets/icons/postgresql.svg", alt: "PostgreSQL" },
    ],
  },
  {
    category: "Tools",
    items: [
      { src: "/assets/icons/git.svg", alt: "Git" },
      { src: "/assets/icons/github.svg", alt: "GitHub" },
    ],
  },
];

const SkillSection = () => {
  return (
    <Banner className="bg-black/10 text-white px-6 py-20  md:px-20 ">
      <div>
        <h1 className="text-center text-white pt-20 text-3xl font-bold">
          PROFESSIONAL SKILLSET
        </h1>
        
        <div className="text-center mt-10">
          {skills.map((section, index) => (
            <div key={index} className="mb-9">
              <h2 className="text-3xl font-semibold text-purple-400 mb-6">
                {section.category}
              </h2>
              <div className="flex justify-center flex-wrap gap-8">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="transform hover:scale-110 transition-transform duration-300"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                    <p className="text-sm mt-2 text-white">{item.alt}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
        <Projects />
    </Banner>
  );
};

export default SkillSection;
