import IconCloud from "./ui/icon-cloud";

const slugs = [
  "react",
  "javascript",
  "php",
  "laravel",
  "postgresql",
  "html5",
  "css3",
  "tailwindcss",
  "redux",
  "git",
  "github",
  "bitbucket",
  "visualstudiocode",
  "postman",
  "figma",
  "filament",
  "livewire",
  "axios",
  "formik",
  "googlemaps",
  "n8n",
  "apache",
  "nginx",
  "linux",
  "ubuntu",
  "docker",
  "redis",
  "vite",
  "npm",
  "nodedotjs",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
