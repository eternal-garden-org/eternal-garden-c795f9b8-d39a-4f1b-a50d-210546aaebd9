import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface MemorialInfoProps {
  className?: string;
}

export function MemorialInfo({ className }: MemorialInfoProps) {
  return (
    <div className={cn("w-full py-16", className)}>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem
          value="biography"
          className="border-b border-[#92C0C21A]"
        >
          <AccordionTrigger className="flex items-center py-5 hover:no-underline">
            <div className="flex items-center gap-3">
              <span className="text-2xl">Биография</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-muted-foreground text-base ">
              <p>
                Ваня Михайлович Петров родился 1 июля 2025 года. Его жизнь была короткой, но каждый день был наполнен любовью близких людей.
              </p>
              <p>
                За свои несколько недель жизни малыш Ваня успел подарить своей семье множество светлых моментов и незабываемых воспоминаний. Его улыбка освещала дом, а каждое его движение приносило радость родителям.
              </p>
              <p>
                Ваня ушел из жизни 5 августа 2025 года, оставив в сердцах своих близких неизгладимый след любви и нежности. Хотя его время с нами было коротким, память о нем будет жить вечно.
              </p>
              <p>
                Он останется в наших сердцах как символ чистой любви, надежды и того драгоценного времени, которое мы провели вместе.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="memories" className="border-b border-[#92C0C21A]">
          <AccordionTrigger className="flex items-center py-5 hover:no-underline">
            <div className="flex items-center gap-3">
              <span className="text-2xl">Воспоминания</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-muted-foreground text-base">
              <p>
                Каждый день с Ваней был особенным. Его первая улыбка, первые звуки, которые он издавал, способ, которым он сжимал пальчики родителей - все эти моменты стали драгоценными воспоминаниями.
              </p>
              <p>
                Ваня любил, когда ему пели колыбельные, и всегда успокаивался на руках у мамы. Его глазки светились любопытством к окружающему миру, и он с интересом рассматривал все вокруг.
              </p>
              <p>
                Семья будет помнить его мирное дыхание во время сна, его маленькие ручки и ножки, и то тепло, которое он приносил в дом просто своим присутствием.
              </p>
              <p>
                Хотя Ваня был с нами недолго, он успел наполнить жизнь своих близких безграничной любовью и показать, как драгоценен каждый момент, проведенный с теми, кого мы любим.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="legacy"
          className="border-b border-[#92C0C21A]"
        >
          <AccordionTrigger className="flex items-center py-5 hover:no-underline">
            <div className="flex items-center gap-3">
              <span className="text-2xl">Наследие</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-muted-foreground text-base">
              <p>
                <strong>Что он оставил нам:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Безграничную любовь, которая навсегда останется в сердцах родителей
                </li>
                <li>
                  Понимание того, как драгоценна каждая минута жизни
                </li>
                <li>
                  Воспоминания о его улыбках и мирном сне
                </li>
                <li>
                  Силу, которая помогает семье идти дальше, неся его память
                </li>
              </ul>

              <p>
                <strong>Его влияние:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Научил ценить каждый момент близости с любимыми людьми
                </li>
                <li>
                  Показал, что любовь не измеряется временем, а глубиной чувств
                </li>
                <li>
                  Объединил семью еще сильнее в их любви и поддержке друг друга
                </li>
                <li>
                  Оставил след надежды и веры в красоту жизни
                </li>
              </ul>

              <p>
                Ваня Михайлович Петров будет жить в наших сердцах как напоминание о том, что даже самая короткая жизнь может быть наполнена огромным смыслом и безграничной любовью. Его память будет вдохновлять нас ценить каждый день и дорожить теми, кто рядом с нами.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}