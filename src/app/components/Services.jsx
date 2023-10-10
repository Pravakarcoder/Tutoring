import Image from "next/image";
import React from "react";

const ServicesContent = {
  heading: {
    headingSubTitle: "Our Awesome Services",
    headingTitle: "Our Services",
    description:
      "We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs.",
  },
  items: [
    {
      icon: "/icon-1.svg",
      title: "Child Safety Solutions",
      description:
        "Childproofing services and safety education to keep your children secure and protected at home and in public spaces ",
    },
    {
      icon: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      title: "Home Fire Safety",
      description:
        "hildproofing services and safety education to keep your children secure and protected at home and in public spaces.",
    },
    {
      icon: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      title: "Personal Safety Devices",
      description:
        "Wearable personal safety devices equipped with GPS tracking and emergency alerts for family members on the go.",
    },
    {
      icon: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      title: "ONE-ONE Tutoring ",
      description:
        "TSC understands that every child seeks to excel in specific subjects; this is why we offer flexible 1-1 Tutoring with dedicated and experienced tutors/ teachers",
    },
    {
      icon: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
      title: "Summer Bridge Program '23",
      description:
        "We are very excited about welcoming our students to our  8-week Summer Bridge Program.",
    },
  ],
};

const Services = () => {
  return (
    <section className="py-20 bg-light">
      <div className="container px-4 mx-auto">
        <div className="max-w-xl mx-auto text-center mb-20">
          {ServicesContent.heading.headingSubTitle && (
            <span className='inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[" "]  before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10'>
              {ServicesContent.heading.headingSubTitle}
            </span>
          )}
          {ServicesContent.heading.headingTitle && (
            <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
              {ServicesContent.heading.headingTitle}
            </h2>
          )}

          {ServicesContent.heading.description && (
            <p className="text-body leading-relaxed">
              {ServicesContent.heading.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {ServicesContent.items.map((item, index) => (
            <div className="flex space-x-10" key={item.title}>
              <div className="w-14 shrink-0">
                <span className="inline-flex items-center justify-center p-2 w-[70px] h-[70px] rounded-lg bg-white shadow-2xl">
                  <Image
                    src={item.icon}
                    alt="services logo"
                    width={62}
                    height={62}
                  />
                </span>
              </div>
              <div>
                {item.title && (
                  <h3 className="text-heading font-bold text-md mb-3">
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className="leading-relaxed">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
