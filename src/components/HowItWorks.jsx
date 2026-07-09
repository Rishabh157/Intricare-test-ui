const steps = [
  {
    step: 1,
    title: "Install the Extension",
    description:
      "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
    image: "/hiw/1.png",
  },
  {
    step: 2,
    title: "Browse LinkedIn",
    description:
      "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
    image: "/hiw/2.png",
  },
  {
    step: 3,
    title: "Get Enriched Data",
    description:
      "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
    image: "/hiw/3.png",
  },
  {
    step: 4,
    title: "Sync to CRM Instantly",
    description:
      "Prospect data syncs to your CRM instantly with history, tracking, and AI insights.",
    image: "/hiw/4.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f2f6ff] px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">How it Works</h2>
          <p className="mt-1 text-sm text-gray-600">From setup to success in 4 simple steps</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <article
              key={item.step}
              className="relative flex flex-col overflow-hidden rounded-xl border border-black/5 bg-white pt-8 text-center"
            >
              {index < steps.length - 1 && (
                <div
                  className="absolute right-[-12px] top-14 hidden h-px w-6 border-t-2 border-dashed border-blue-300 lg:block"
                  aria-hidden="true"
                />
              )}

              <div className="text-5xl font-extrabold leading-none text-blue-400">{item.step}</div>
              <h3 className="mt-3 px-4 text-lg font-semibold text-blue-950 sm:text-xl">
                {item.title}
              </h3>
              <p className="mb-4 mt-2 px-4 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
              <div className="mt-auto bg-gray-50">
                <img src={item.image} alt={item.title} className="h-36 w-full object-cover" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-lime-300 px-7 py-3 font-semibold text-gray-900 shadow transition hover:bg-lime-400"
          >
            Try LeadCRM Now
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
