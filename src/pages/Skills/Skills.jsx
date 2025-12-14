import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Layout, Cpu, Server, Workflow } from "lucide-react";
import {
  FaReact,
  FaLaravel,
  FaPhp,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiRedux,
  SiPostman,
  SiGit,
  SiFilament,
  SiLivewire,
  SiDocker,
  SiTypescript,
  SiGraphql,
  SiLinux,
} from "react-icons/si";
import { TbBrandVscode, TbBrandReactNative } from "react-icons/tb";
import { BsFileEarmarkCode } from "react-icons/bs";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React.js", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "React Native",
          icon: <TbBrandReactNative className="w-4 h-4 text-[#61DAFB]" />,
        },
        {
          name: "Redux",
          icon: <SiRedux className="w-4 h-4 text-[#764ABC]" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "text-red-400",
      skills: [
        {
          name: "Laravel",
          icon: <FaLaravel className="w-4 h-4 text-[#FF2D20]" />,
        },
        {
          name: "PHP",
          icon: <FaPhp className="w-4 h-4 text-[#777BB4]" />,
        },
        {
          name: "RESTful APIs",
          icon: <Server className="w-4 h-4 text-[#00D9FF]" />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
        },
        {
          name: "Eloquent ORM",
          icon: <Database className="w-4 h-4 text-[#FF2D20]" />,
        },
        {
          name: "Filament",
          icon: <SiFilament className="w-4 h-4 text-[#FDAE4B]" />,
        },
        {
          name: "Livewire",
          icon: <SiLivewire className="w-4 h-4 text-[#FB70A9]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Database",
      color: "text-green-400",
      skills: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "Redis",
          icon: <Database className="w-4 h-4 text-[#DC382D]" />,
        },
        {
          name: "Database Design",
          icon: <Database className="w-4 h-4 text-[#38B2AC]" />,
        },
      ],
    },
    {
      icon: Workflow,
      title: "Tools & Automation",
      color: "text-purple-400",
      skills: [
        {
          name: "N8N",
          icon: <Workflow className="w-4 h-4 text-[#EA4B71]" />,
        },
        {
          name: "Superset",
          icon: <Layout className="w-4 h-4 text-[#20A6C9]" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "DBeaver",
          icon: <Database className="w-4 h-4 text-[#382923]" />,
        },
      ],
    },
    {
      icon: Cpu,
      title: "Development Tools",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        {
          name: "Git",
          icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" />,
        },
        {
          name: "Bitbucket",
          icon: <SiGit className="w-4 h-4 text-[#0052CC]" />,
        },
        {
          name: "Docker",
          icon: <SiDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        {
          name: "Linux",
          icon: <SiLinux className="w-4 h-4 text-[#FCC624]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "Additional Skills",
      color: "text-yellow-400",
      skills: [
        {
          name: "Framer Motion",
          icon: <Code2 className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "API Integrations",
          icon: <Server className="w-4 h-4 text-[#00D9FF]" />,
        },
        {
          name: "Spatie Permissions",
          icon: <Server className="w-4 h-4 text-[#FF2D20]" />,
        },
        {
          name: "WebSocket (Reverb)",
          icon: <Workflow className="w-4 h-4 text-[#00C853]" />,
        },
      ],
    },
  ];

  return (
    <main className="pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 md:py-11 py-0 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
