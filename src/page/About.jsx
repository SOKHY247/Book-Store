const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Hero Section */}
      <section className="relative px-6 py-24 text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          alt="Bookstore"
          className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Mybookshop</h1>
          <p className="text-lg text-muted-foreground">
            Discover stories, knowledge, and inspiration — carefully curated books for every reader.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Our mission"
            className="rounded-2xl shadow-md object-cover w-full h-80"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At <span className="font-medium text-foreground">Mybookshop</span>, we believe books are gateways to imagination, knowledge, and personal growth. Our mission is to provide readers with a diverse selection of high-quality books that inspire and entertain.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We carefully curate our collections, ensuring each book is chosen with love, quality, and the reader's experience in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-semibold">Meet Our Team</h2>
          <p className="text-muted-foreground mt-2">
            Passionate book lovers, curators, and storytellers sharing their expertise and love for reading.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Emily Carter",
              role: "Founder & Curator",
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
            },
            {
              name: "James Nguyen",
              role: "Marketing Manager",
              img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            },
            {
              name: "Sophia Patel",
              role: "Book Specialist",
              img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
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

      {/* Sustainability / Vision Section */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We aim to foster a love for reading by creating a space where readers of all ages can explore, discover, and connect with stories that inspire curiosity and imagination.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By supporting authors and promoting literacy, Mybookshop is dedicated to making a positive impact on communities and encouraging lifelong learning.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353"
            alt="Books"
            className="rounded-2xl shadow-md object-cover w-full h-80"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
