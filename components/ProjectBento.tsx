'use client';

import type React from 'react';
import { cn } from '@/lib/utils';
import {
  Home,
  MapPin,
  Compass,
  Building,
  Heart,
  HomeIcon,
  Camera,
} from 'lucide-react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import { projects } from '../constants/data';
import Link from 'next/link';

interface BentoItem {
  title: string;
  subtitle?: string;
  description: string;
//   icon: React.ReactNode;
//   status?: string;
  tags?: string[];
//   meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
  link?: string;
  image?: string;
}

interface BentoGridProps {
  items: BentoItem[];
}



export default function BentoGrid({ items = projects }: BentoGridProps) {
  return (
    <section className="relative overflow-hidden py-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Decorative elements with better visibility */}
      <div className="bg-green-500/10 absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
      <div className="bg-green-500/10 absolute -right-20 bottom-20 h-64 w-64 rounded-full blur-3xl" />
      <div className="bg-green-500/10 absolute top-1/2 left-1/2 h-96 w-96 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative mx-auto grid grid-cols-1 gap-6 p-4 md:grid-cols-3">
        {items.map((item, index) => (
          <motion.a
            href={item.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            key={`${item.title}-${index}`}
            className={cn(
              item.colSpan || 'col-span-1',
              item.colSpan === 2 ? 'md:col-span-2' : '',
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card
              className={cn(
                'group bg-gray-800/90 backdrop-blur-sm relative h-full transition-all duration-300',
                'hover:shadow-2xl hover:shadow-green-500/20',
                'will-change-transform hover:-translate-y-2',
                'border border-gray-700/50 overflow-hidden',
                'hover:border-green-500/50',
                {
                  '-translate-y-1 shadow-lg shadow-green-500/10': item.hasPersistentHover,
                },
              )}
            >
              {/* Gradient overlay on hover */}
              <div
                className={cn(
                  'absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/5',
                  item.hasPersistentHover
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100',
                  'transition-opacity duration-300',
                )}
              />

              <CardHeader className="relative space-y-0 p-5 pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                </div>
                {item.subtitle && (
                  <p className="text-gray-400 text-xs mt-2 font-medium">
                    {item.subtitle}
                  </p>
                )}
              </CardHeader>

              <CardContent className="relative space-y-4 p-5 pt-3">
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </CardContent>

              <CardFooter className="relative p-5 pt-0">
                <div className="flex w-full justify-between items-start gap-3">
                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((tag) => (
                      <span
                        key={`${item.title}-${tag}`}
                        className="bg-green-500/20 text-green-400 border border-green-500/30 rounded-md px-3 py-1.5 text-xs font-medium backdrop-blur-sm transition-all duration-200 hover:bg-green-500/30 hover:border-green-500/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={item.link || '#'} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center gap-1 transition-colors duration-200 group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.cta || 'View'}
                    <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </CardFooter>

              {/* Shine effect on hover */}
              <div
                className={cn(
                  'absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-green-500/20 via-transparent to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                )}
              />
            </Card>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
