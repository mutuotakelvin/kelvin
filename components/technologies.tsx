'use client';

import { Marquee, MarqueeContent, MarqueeItem } from '@/components/ui/shadcn-io/marquee';

const technologies = [
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Laravel', icon: 'https://cdn.simpleicons.org/laravel/FF2D20' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'Django', icon: 'https://cdn.simpleicons.org/django/092E20' },
  { name: 'Vue.js', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Nuxt', icon: 'https://nuxt.com/assets/design-kit/icon-green.svg' },
];

const Technologies = () => (
  <div className="py-10">
    <Marquee>
      <MarqueeContent>
        {technologies.map((tech, index) => (
          <MarqueeItem 
            className="h-24 w-24 mx-4 flex items-center justify-center" 
            key={index}
          >
            <div className="group relative h-20 w-20 flex items-center justify-center bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
                title={tech.name}
              />
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                <span className="text-xs text-white bg-gray-900 px-2 py-1 rounded whitespace-nowrap shadow-lg">
                  {tech.name}
                </span>
              </div>
            </div>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);

export default Technologies;
