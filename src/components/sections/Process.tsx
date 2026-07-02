import Card from "@/components/ui/Card";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We understand your hiring goals or career objectives before creating a tailored strategy.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Our experts develop the right recruitment, resume, or career advancement plan.",
    },
    {
      number: "03",
      title: "Execution",
      description:
        "We recruit top talent or position professionals with premium career services.",
    },
    {
      number: "04",
      title: "Success",
      description:
        "We continue supporting long-term hiring success and career growth.",
    },
  ];

  return (
    <section className="bg-gray-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.35em] text-yellow-600">
            Our Process
          </p>

          <h2 className="mt-5 text-5xl font-extrabold text-gray-900">
            A Simple Process That Delivers Results
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Whether you're hiring exceptional professionals or advancing your
            own career, our structured process keeps everything clear,
            strategic and effective.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.number}>
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-2xl font-black text-black">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold">{step.title}</h3>

              <p className="mt-5 leading-8 text-gray-600">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}