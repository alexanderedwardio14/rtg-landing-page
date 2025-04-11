import React from "react";
import { Users, Trophy, Target, Clock } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "500+", label: "Clients Served" },
    { number: "10+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Mission",
      description:
        "To provide innovative business solutions that drive growth and success for our clients through cutting-edge technology and exceptional service.",
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Vision",
      description:
        "To be the leading provider of business solutions, recognized globally for our innovation, reliability, and commitment to client success.",
    },
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="container py-8 space-y-6 bg-slate-50 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            About RTG
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Raja Terakhir Group is a leading provider of innovative business
            solutions, dedicated to transforming how companies operate and
            succeed.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="container py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border bg-background p-2"
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="text-primary">{value.icon}</div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-8 md:py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Leadership Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="container py-8 md:py-12 bg-slate-50 dark:bg-transparent">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold mb-4">Our History</h2>
          <p className="text-muted-foreground">
            Founded in 2015, RTG has grown from a small startup to a leading
            provider of business solutions. Our journey is marked by continuous
            innovation and unwavering commitment to our clients' success. Today,
            we serve hundreds of businesses across various industries, helping
            them achieve their full potential through our comprehensive suite of
            products and services.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container py-8 md:py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">2015</div>
              <h3 className="font-bold">Company Founded</h3>
              <p className="text-muted-foreground">
                RTG was established with a vision to transform business
                solutions
              </p>
            </div>
          </div>
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">2018</div>
              <h3 className="font-bold">Regional Expansion</h3>
              <p className="text-muted-foreground">
                Expanded operations across multiple regions
              </p>
            </div>
          </div>
          <div className="relative pl-8 border-l-2 border-primary">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">2020</div>
              <h3 className="font-bold">Digital Transformation</h3>
              <p className="text-muted-foreground">
                Launched innovative digital solutions platform
              </p>
            </div>
          </div>
          <div className="relative pl-8">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">2025</div>
              <h3 className="font-bold">Global Recognition</h3>
              <p className="text-muted-foreground">
                Achieved industry leadership and international presence
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
