import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CodeBlock from "./CodeBlock";
import { LucideIcon, Play, Brain, ArrowRight } from "lucide-react";

interface LearningExample {
  title: string;
  code: string;
  explanation: string;
}

interface LearningSectionProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  examples: LearningExample[];
  variant: "arithmetic" | "conditional" | "loops" | "functions";
  gradientClass: string;
}

const LearningSection = ({
  id,
  title,
  description,
  icon: Icon,
  examples,
  variant,
  gradientClass,
}: LearningSectionProps) => {
  return (
    <section id={id} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex p-4 rounded-full ${gradientClass} shadow-glow mb-6`}>
            <Icon className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {examples.map((example, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="p-6 border-b border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {example.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {example.explanation}
                  </p>
                </div>
                
                <div className="p-0">
                  <CodeBlock 
                    code={example.code}
                    title="Example Code"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="tryCode" size="lg" className="text-lg px-8 py-4">
            <Play className="w-5 h-5 mr-2" />
            Try Interactive Code
          </Button>
          
          <Button variant="quiz" size="lg" className="text-lg px-8 py-4">
            <Brain className="w-5 h-5 mr-2" />
            Take Quiz
          </Button>
          
          <Button variant="nextLesson" size="lg" className="text-lg px-8 py-4">
            Next Lesson
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-card px-4 py-2 rounded-full border border-border">
            <div className={`w-3 h-3 rounded-full ${gradientClass}`} />
            <span className="text-sm font-medium text-foreground">
              {id === "arithmetic" && "1 of 4 completed"}
              {id === "conditionals" && "2 of 4 completed"}
              {id === "loops" && "3 of 4 completed"}
              {id === "functions" && "4 of 4 completed"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;