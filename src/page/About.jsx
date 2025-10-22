const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Hero Section */}
      <section className="relative px-6 py-24 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521336575822-6da63fb45455"
          alt="Fashion studio"
          className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About StyleHub</h1>
          <p className="text-lg text-muted-foreground">
            Fashion that tells your story — crafted with passion, purpose, and
            sustainability in mind.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1607344645866-009c320b63e0"
            alt="Our mission"
            className="rounded-2xl shadow-md object-cover w-full h-80"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At <span className="font-medium text-foreground">StyleHub</span>,
              we believe clothing is more than fabric — it’s a reflection of
              identity and confidence. Our mission is to empower people through
              timeless, high-quality pieces that blend comfort, sustainability,
              and modern design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every collection we create is guided by eco-conscious practices,
              ethical production, and a deep respect for individuality.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold">Meet Our Team</h2>
          <p className="text-muted-foreground mt-2">
            A passionate team of designers, creators, and dreamers shaping the
            future of fashion.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Sophie Lee",
              role: "Creative Director",
              img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
            },
            {
              name: "Daniel Cruz",
              role: "Lead Designer",
              img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
            },
            {
              name: "Ava Chen",
              role: "Marketing Manager",
              img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-card text-card-foreground rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col items-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary/40"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Sustainability Commitment
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We’re redefining fashion by prioritizing sustainability at every
              step — from sourcing eco-friendly materials to minimizing waste in
              production.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              StyleHaus partners with ethical manufacturers to ensure fair wages
              and safe working conditions, creating a positive impact on both
              people and the planet.
            </p>
          </div>
          <img
            src="https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/75c6/b5ef/45e8/dd5b/9396/78b6/f3da/3bcb/fd56/7eb8/7eb8.jpg"
            alt="Sustainability"
            className="rounded-2xl shadow-md object-cover w-full h-80"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
