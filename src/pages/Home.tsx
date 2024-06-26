import React from "react";
import Button from "../components/Button";
import Image from "../components/Image";
import MenuItem from "../components/MenuItem"; // Adjust the import path as necessary

const Hero: React.FC = () => {
    return (
        <>

            <main className="flex gap-5 max-md:flex-col max-md:gap-0 h-screen">
                <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full pl-24">
                    <div className="flex z-10 flex-col max-md:max-w-full">
                        <Image
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09e9f15371209988874335adc2f170d46ac9887e83dd7f44bf3ede1e9d60f2a8?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                            alt="Decorative image"
                            className="max-w-full aspect-square w-[165px]"
                        />
                        <div className="flex flex-col px-5 mt-20 max-md:mt-10 max-md:max-w-full">
                            <h1 className="text-7xl leading-[83px] text-stone-700 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] text-left">
                                Bite The World of Cheesecake Wonders
                            </h1>
                            <p className="mt-14 text-lg leading-7 text-stone-950 text-opacity-80 max-md:mt-10 max-md:max-w-full text-left">
                                We always make our customer happy by providing
                                <br />
                                as many choices as possible
                            </p>
                            <div className="flex gap-3 self-start mt-11 max-md:mt-10">
                                <Button variant="primary">Get Started</Button>
                                <Button variant="secondary">
                                    <div className="flex gap-1.5">
                                        <Image
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4817b140a2710e95f61cfe56c41e2147ee0fd3c08a8e1d02a494fddb1311af9?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                                            alt="Play icon"
                                            className="shrink-0 w-5 aspect-square fill-stone-600"
                                        />
                                        <span>Watch Demo</span>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex overflow-hidden relative flex-col grow items-center px-16 pt-11 pb-20 mt-3.5 text-base font-medium min-h-[743px] text-stone-700 max-md:px-5 max-md:max-w-full">
                        <Image
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e1bdffb1aa8eedaca6f01b6355023bafb70214678a6b6ccfe33402c849c4382?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                            alt="Background image"
                            className="object-cover absolute inset-0 size-full"
                        />
                        <form>
                            <label htmlFor="signUpButton" className="sr-only">Sign up</label>
                            <button
                                id="signUpButton"
                                className="relative justify-center px-6 py-2 ml-24 border-2 border-solid border-stone-700 rounded-[38px] max-md:px-5"
                            >
                                Sign up
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <About />
            <Menu />
            <BlogSection />
            <Contact />
        </>
    );
};

type CheesecakeInfoProps = {
    title: string;
    subtitle: string;
    description: string;
};

const CheesecakeInfo: React.FC<CheesecakeInfoProps> = ({ title, subtitle, description }) => (
    <section className="flex flex-col grow px-5 mt-32 max-md:mt-10 max-md:max-w-full text-left">
        <h1 className="text-6xl text-stone-950 max-md:max-w-full max-md:text-4xl">{title}</h1>
        <h2 className="mt-5 text-2xl text-stone-950 text-opacity-80 max-md:max-w-full">{subtitle}</h2>
        <p className="mt-8 text-xl text-black text-opacity-70 max-md:max-w-full">{description}</p>
        <button className="justify-center items-start px-10 py-6 mt-9 max-w-full text-base font-semibold leading-5 text-white bg-yellow-900 shadow-xl rounded-[100px] w-[178px] max-md:px-5">
            Read More
        </button>
    </section>
);

const About: React.FC = () => {
    return (
        <main>
            <article className="flex gap-5 max-md:flex-col max-md:gap-0">
                <section className="flex justify-center items-center flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d6e65a650fff6b1c608a0797ca7cedcad58444998da5a6a532fc71c55bdb12a?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                        alt="Cheesecake illustration"
                        className="w-1/2 aspect-[1.03] max-md:mt-10 max-md:max-w-full flex justify-center items-center"
                    />
                </section>
                <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full p-16">
                    <CheesecakeInfo
                        title="We Love Cheesecake"
                        subtitle="Discover Our Cheesecake Story"
                        description="At Cheesecake Love, quality is our cornerstone. Each cheesecake is crafted with the finest ingredients, meticulous attention to detail, and a dash of creativity. We believe in delivering not just desserts but moments of sheer indulgence."
                    />
                </section>
            </article>
        </main>
    );
};


const menuItems = [
    {
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b1790636995064afc1d2abb7eb468ec3d4a386238c0ce6d9f537eaab74283f1?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
        title: "Blueberry Cheesecake",
        description: "Blueberry love, cheesecake delight!",
        price: "9.00",
        rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc4891371a13cc3e797fb1e0b922da0df41d17e1e6a86fdc37d594e58a84f608?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
    },
    {
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/17371f667ae02923036b90b4ecaa9548f6f4d7d14ec79e80762d353d6a6b7967?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
        title: "Biscoff Cheesecake",
        description: "Biscoff adores cheesecake magic",
        price: "11.00",
        rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/8435bbabc867bb398e4d01398458bcc769c5a7cefaaaa93a57cfa6d8014a7bdb?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
    },
    {
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8135ce38963bcdd36116a1966ec041be65540fd4dc9e769e5c8f705dbd76ea5?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
        title: "Chocolate Cheesecake",
        description: "Cherish Chocolate, relish cheesecake magic!",
        price: "10.00",
        rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fbf6dabf1420568fbeccc80dae2290d866337530ffff997e8198b6b25a699cf?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
    }
];

const Menu: React.FC = () => {
    return (
        <main className="flex justify-center flex-col items-center py-16 pr-8 pl-20 bg-yellow-900 bg-opacity-90 max-md:px-5 h-screen">
            <h1 className="mt-1.5 text-6xl text-yellow-50 max-md:text-4xl">Our Menu</h1>
            <section className="flex flex-col mt-11 w-full max-w-[1287px] max-md:mt-10 max-md:max-w-full">
                <div className="max-md:pr-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        {menuItems.map((item, index) => (
                            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <MenuItem {...item} />
                            </div>
                        ))}
                    </div>
                </div>
                <button className="flex gap-5 self-end mt-14 text-2xl font-medium text-yellow-50 max-md:mt-10">
                    <span className="flex-auto">View More</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/878fc51d42cbc71ce04c1524dc6e97adad3c7568309357954f9271b87f80d6b5?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 self-start aspect-[0.53] w-[9px]" />
                </button>
            </section>
        </main>
    );
};

type BlogPostProps = {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  imageSrc: string;
};

const BlogPost: React.FC<BlogPostProps> = ({ date, category, title, excerpt, imageSrc }) => (
  <article className="flex flex-col grow px-8 py-7 w-full font-medium text-yellow-900 bg-yellow-50 rounded-2xl shadow-2xl max-md:px-5 max-md:mt-10">
    <img loading="lazy" src={imageSrc} alt="" className="w-full aspect-square max-md:mr-1.5" />
    <time className="mt-7 text-lg text-amber-700">{date} / {category}</time>
    <h2 className="mt-4 mr-6 text-2xl font-semibold max-md:mr-2.5">{title}</h2>
    <p className="mt-6 text-sm text-yellow-900">{excerpt}</p>
    <a href="#" className="mt-6 text-base">Read More</a>
  </article>
);

const BlogSection: React.FC = () => {
  const blogPosts: BlogPostProps[] = [
    {
      date: "23 Nov, 2023",
      category: "Cheesecake",
      title: "A Peek Behind the Cheesecake Curtain",
      excerpt: "Step into our cheesecake haven, where the magic unfolds behind the scenes, whisking dreams into reality. Our kitchen is a symphony and very...",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/83feee4cd6a3fe7d57ec9859be9e0370110948052d039fc9735d9925f87fcbee?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
    },
    {
      date: "18 July, 2023",
      category: "Cheesecake",
      title: "Low-Sugar & Gluten-Free Cheesecakes",
      excerpt: "Welcome to our guilt-free indulgence zone, where we're redefining the art of cheesecake with our delectable low-sugar...",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b521d5844b8e0aca304123a544f3da68b9143331f20d22b2943af25f395664d1?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
    },
    {
      date: "1 January, 2024",
      category: "Cheesecake",
      title: "Sweet Words - Customer Reviews of Cheesecakes",
      excerpt: "Indulge in the rich tapestry of heartfelt stories within \"Sweet Words.\" This curated collection of customer reviews offers a glimpse into the joy...",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/311f192de4aba6c958e0a4c261ebdc6989c2ad5be99f9a9c215d550e7542e9c5?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
    }
  ];

  return (
    <main className="p-24">

    <section className="flex flex-col items-center px-5">
      <h1 className="text-6xl text-yellow-900 max-md:text-4xl">Our Blog</h1>
      <p className="mt-2 text-2xl leading-6 text-center text-yellow-900">Our Recent Posts</p>
      <div className="self-stretch mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <BlogPost {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
};

type ContactFormProps = {
  onSubmit: (data: { name: string; email: string; message: string }) => void;
};

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col grow mt-20 text-xl text-neutral-500 max-md:mt-10">
      <label htmlFor="name" className="sr-only">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="justify-center items-start px-5 py-6 whitespace-nowrap shadow-sm bg-stone-50 rounded-[60px]"
        placeholder="Name"
        required
      />
      <label htmlFor="email" className="sr-only">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="justify-center items-start px-6 py-6 mt-5 text-center whitespace-nowrap shadow-sm bg-stone-50 rounded-[60px] max-md:px-5"
        placeholder="Email"
        required
      />
      <label htmlFor="message" className="sr-only">Your Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="items-start px-6 pt-7 pb-24 mt-7 text-center rounded-3xl shadow-sm bg-stone-50 max-md:px-5"
        placeholder="Your Message..."
        required
      />
      <button type="submit" className="justify-center items-center px-16 py-7 mt-6 text-2xl text-center text-black bg-amber-400 shadow-sm rounded-[60px] max-md:px-5">
        Contact us now
      </button>
    </form>
  );
};

const Contact: React.FC = () => {
  const handleContactSubmit = (data: { name: string; email: string; message: string }) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
    <section className="p-24 h-screen bg-yellow-900 bg-opacity-90">

    <div className="flex flex-col">
      <main className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start px-5 text-yellow-50 max-md:mt-10 max-md:max-w-full">
              <h1 className="text-6xl max-md:text-4xl">Contact Us</h1>
              <p className="self-stretch mt-9 text-xl leading-8 max-md:max-w-full">
                Need to get in touch with us? Either fill out the form with your inquiry or find the department!
              </p>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e90c9295ef425271531ab339d4a3a0d164941a125463354530e787ded8e5c331?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="max-w-full aspect-[1.02] w-[356px]" />
            </div>
          </section>
          <section className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
            <ContactForm onSubmit={handleContactSubmit} />
          </section>
        </div>
      </main>
      <footer className="flex flex-col mt-5 ml-4 max-w-full text-xl font-medium text-yellow-50 w-[449px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/140a83f0f5265724dfd939ed9fa92f5bf28e74d08e600f51fa18c9a4951d951c?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="w-64 max-w-full aspect-[5.88]" />
        <p className="mt-3.5 max-md:max-w-full">Copyright 2024 Dscode | All rights reserved</p>
      </footer>
    </div>
    </section>
    </>
  );
};


export default Hero;