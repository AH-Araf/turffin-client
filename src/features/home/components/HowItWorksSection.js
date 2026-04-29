import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function HowItWorksSection({ steps }) {
  return (
    <section className="px-4 py-10 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-semibold text-slate-900">Book in 3 Simple Steps</h2>
          <p className="mx-auto max-w-xl text-sm text-turf-secondary md:text-base">
            Our streamlined platform handles the logistics so you can focus on the game.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <Card key={step.title} className="text-center">
              <CardHeader className="items-center pb-2">
                <div className="mx-auto mb-1 flex h-14 w-14 items-center justify-center rounded-2xl bg-turf-primary-container/10">
                  <step.icon className="h-7 w-7 text-turf-primary" />
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.text}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
