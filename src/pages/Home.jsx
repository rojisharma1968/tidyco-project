import React from "react";
import PageHeading from "../components/PageHeading";
import { CalendarDays, ChevronDown, Clock } from "lucide-react";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import SectionParagraph from "../components/SectionParagraph";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AccordionItem from "../components/AccordionItem";
import CheckButton from "../components/CheckButton";

const Home = () => {
  return (
    <>
      <section className="banner relative h-fit">
        <img
          src="../images/banner.webp"
          className="w-full h-full z-[1] absolute object-cover"
          alt="banner-webp"
          loading="lazy"
        />
        <div className="w-full py-12 2xl:py-20 bg-black/50 relative z-[2]">
          <div className="container mx-auto flex items-center">
            <div className="w-1/2 pr-5 relative">
              <PageHeading text='<span class="text-primary">Sparkling</span> Clean Homes, <span class="text-primary">Booked</span> in Seconds!' />
              <img
                src="../images/line.webp"
                alt="line-image"
                loading="lazy"
                width={183}
                height={135}
                className="w-40 h-auto absolute right-5 top-1/2 -translate-y-1/2"
              />
              <p className="text-lg font-normal w-[90%] text-white mt-5">
                Professional cleaners at your doorstep, with flexible hourly
                rates.
              </p>
              <div className="flex items-center gap-2 mt-8">
                <img
                  src="../images/google.svg"
                  alt="google-logo"
                  className="size-15"
                />
                <div className="grid">
                  <div className="flex gap-2 items-start">
                    <span className="flex gap-1 items-start">
                      {Array(5)
                        .fill(10)
                        .map((star, ind) => (
                          <img
                            key={`ratingstar-${ind}`}
                            src="../images/star.svg"
                            alt="rating-star"
                            className="size-6
                          
                          "
                          />
                        ))}
                    </span>
                    <span className="text-lg text-white font-medium">4.9</span>
                  </div>
                  <p className="text-lg text-white mt-1 font-medium">
                    + 1200 Reviews
                  </p>
                </div>
              </div>
              <div className="mt-8 bg-white w-[90%] relative px-8 pt-8 pb-12 rounded-2xl">
                <p className="text-5xl 2xl:text-6xl font-bold text-black-heading">
                  $220
                </p>
                <div className="flex flex-wrap w-fit gap-1.5 mt-3">
                  {[
                    "1 Time Service",
                    "Residential Cleaning",
                    "2 Bedrooms",
                    "2 Bathrooms",
                    "3 Hours",
                  ].map((item) => (
                    <p
                      key={item}
                      className="bg-primary/20 text-primary font-semibold border border-primary px-4 py-1 rounded-full text-xs"
                    >
                      {item}
                    </p>
                  ))}
                </div>
                <Button
                  text="Pay $220"
                  stroke={false}
                  position="absolute right-8 -bottom-10 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="w-1/2 text-sm 2xl:text-base text-black-heading">
              <h2 className="bg-primary text-white w-2/4 text-center mx-auto py-1.5 rounded-t-lg font-bold text-lg 2xl:text-xl">
                Get Free Quotation
              </h2>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full bg-white px-8 py-10 rounded-4xl"
              >
                {/* Service Required */}
                <div className="mb-4 relative">
                  <label className="block font-normal mb-1.5">
                    Service Required
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      className="w-full cursor-pointer font-semibold border focus:outline-primary border-gray px-3 py-2.5 pr-10 rounded-md appearance-none"
                    >
                      <option>Residential Cleaning</option>
                      <option>Commercial Cleaning</option>
                      <option>Move In/Out Cleaning</option>
                    </select>
                    {/* Custom arrow */}
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black"
                      size={25}
                    />
                  </div>
                </div>

                {/* Rate Type */}
                <div className="flex gap-3 mb-4">
                  <CheckButton
                    title="rateType"
                    values={["Flat Rates", "Hourly Rate"]}
                  />
                </div>

                {/* Bedrooms */}
                <div className="mb-4">
                  <label className="block font-normal mb-1.5">
                    Number of Bedrooms
                  </label>
                  <CheckButton
                    padding="px-6"
                    title="bedrooms"
                    values={["1", "2", "3", "4+"]}
                  />
                </div>

                {/* Bathrooms */}
                <div className="mb-4">
                  <label className="block font-normal mb-1.5">
                    Number of Bathrooms
                  </label>
                  <CheckButton
                    padding="px-6"
                    title="bathrooms"
                    values={["1", "2", "3", "4+"]}
                  />
                </div>

                {/* Hours */}
                <div className="mb-4">
                  <label className="block font-normal mb-1.5">
                    Total Hours
                  </label>
                  <CheckButton
                    padding="px-6"
                    title="hours"
                    values={["1", "2", "3", "4", "5", "6+"]}
                  />
                </div>

                {/* Date & Time */}
                <div className="flex gap-4 mb-4">
                  <div className="w-1/2 relative">
                    <label className="block font-normal mb-1.5">
                      Select Date
                    </label>
                    <div className="relative">
                      <CalendarDays
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-black pointer-events-none"
                        size={18}
                      />
                      <input
                        onClick={(e) => console.log(e.target.showPicker())}
                        type="date"
                        name="date"
                        defaultValue={new Date().toISOString().split("T")[0]}
                        className="w-full cursor-pointer outline-primary border border-gray px-3 py-2 font-semibold rounded-md appearance-none pl-10"
                      />
                    </div>
                  </div>
                  <div className="w-1/2 relative">
                    <label className="block font-normal mb-1.5">
                      Select Time
                    </label>
                    <div className="relative">
                      <Clock
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-black pointer-events-none"
                        size={18}
                      />
                      <input
                        onClick={(e) => console.log(e.target.showPicker())}
                        type="time"
                        name="time"
                        defaultValue={new Date().toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                        className="w-full outline-primary cursor-pointer border border-gray font-semibold px-3 py-2 rounded-md appearance-none pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Frequency */}
                <div className="mb-4">
                  <label className="block mb-1.5">
                    How often do you need a cleaning?
                  </label>
                  <CheckButton
                    title="frequency"
                    values={["One Time", "Weekly", "Bi-Weekly", "Monthly"]}
                  />
                </div>

                {/* Submit */}
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="work-section relative">
        <img
          src="../images/work-map.webp"
          className="w-full h-full z-[1] absolute object-cover"
          alt="banner-webp"
          loading="lazy"
        />
        <div className="container mx-auto relative z-[2] py-15">
          <SectionHeading text="How <span class='text-primary'>tidy</span> Works" />
          <SectionParagraph text=" Professional cleaners at your doorstep, with flexible hourly rates." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Set Up a Cleaning Plan",
                description:
                  "Professional cleaners at your doorstep, with flexible hourly rates.",
                icon: "../images/cleaning-plan.svg",
              },
              {
                title: "We Clean",
                description:
                  "Professional cleaners at your doorstep, with flexible hourly rates.",
                icon: "../images/we-clean.svg",
              },
              {
                title: "Sit Back and Relax",
                description:
                  "Professional cleaners at your doorstep, with flexible hourly rates.",
                icon: "../images/sit-back.svg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white text-center px-3 2xl:px-6 py-6 rounded-2xl border border-gray/50 relative overflow-hidden"
              >
                <span className="size-18 bg-primary/15 inline-flex items-center px-4 rounded-full mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    loading="lazy"
                    className="size-fit mx-auto"
                  />
                </span>
                <h3 className="text-xl 2xl:text-2xl font-bold text-black mb-2">
                  {item.title}
                </h3>
                <SectionParagraph
                  spacing="mt-1"
                  text="Professional cleaners at your doorstep, with flexible hourly rates."
                />
                <span className="pointer-events-none w-full z-1 block bg-white h-4 absolute left-0 bottom-2 rounded-b-2xl"></span>
                <span className="pointer-events-none w-full block bg-primary h-5 absolute left-0 bottom-0"></span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="service-section mt-10">
        <SectionHeading text="Our <span class='text-primary'>Services</spam>" />
        <div className="container mx-auto">
          <SectionParagraph text="At Tidy Co+, we specialize in delivering top-quality cleaning services tailored to your needs. Whether it’s residential, commercial, or specialty cleaning, our experienced team ensures spotless results every time. We use eco-friendly products, cutting-edge techniques, and offer flexible scheduling to keep your space clean, healthy, and inviting." />
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Residential Cleaning",
              description:
                "At Tidy Co+, we offer exceptional residential cleaning services to keep your home sparkling and organized. Our professional team tailors each clean to your needs, using eco-friendly products for a safe environment. Enjoy more time for what you love while we handle the cleaning!",
              image: "../images/service.webp",
            },
            {
              title: "AirBnB Cleaning",
              description:
                "At Tidy Co+, we offer exceptional AirBnB cleaning services to keep your home sparkling and organized. Our professional team tailors each clean to your needs, using eco-friendly products for a safe environment. Enjoy more time for what you love while we handle the cleaning!",
              image: "../images/service1.webp",
            },
            {
              title: "Commercial Cleaning",
              description:
                "At Tidy Co+, we offer exceptional commercial cleaning services to keep your workspace sparkling and organized. Our professional team tailors each clean to your needs, using eco-friendly products for a safe environment. Enjoy more time for what you love while we handle the cleaning!",
              image: "../images/service2.webp",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg relative overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-54 2xl:h-70 object-cover overflow-hidden rounded-3xl mb-4"
              />
              <h3 className="text-2xl 2xl:text-3xl font-bold text-black">
                {service.title}
              </h3>
              <SectionParagraph
                spacing="mt-2"
                color="text-black-content"
                text={service.description}
                align="text-left"
              />
              <Button spacing="mt-3" text="Book Now" />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-blackbg py-15 relative choose-section mt-18">
        <img
          src="../images/vacum.webp"
          alt="vacum-img"
          className="w-65 2xl:w-85 h-auto absolute bottom-20"
          loading="lazy"
        />
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full relative md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="../images/chooseus1.webp"
              alt="cleaners-group"
              loading="lazy"
              className="rounded-3xl w-full h-full object-cover"
            />
            <img
              src="../images/chooseus2.webp"
              alt="cleaner-action"
              loading="lazy"
              className="rounded-[50px] border-[15px] border-blackbg w-[42%] h-auto absolute -bottom-10 right-10"
            />
          </div>
          <div className="w-full md:w-1/2 pl-8">
            <SectionHeading
              align="text-left"
              color="text-white"
              text="Why <span class='text-primary'>Choose</span> Us?"
            />
            <SectionParagraph
              align="text-left"
              color="text-white"
              text="Professional cleaners at your doorstep, with flexible hourly rates."
            />
            <div className="grid gap-4 mt-5 2xl:mt-8">
              {[
                {
                  title: "Vetted & Trained Cleaners",
                  description:
                    "Professional cleaners at your doorstep, with flexible hourly rates.",
                },
                {
                  title: "100% Satisfaction Guarantee",
                  description:
                    "Professional cleaners at your doorstep, with flexible hourly rates.",
                },
                {
                  title: "Flexible Cancellation",
                  description:
                    "Professional cleaners at your doorstep, with flexible hourly rates.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white relative overflow-hidden px-6 py-2 xl:py-4 2xl:px-8 2xl:py-6 rounded-2xl shadow-md text-black"
                >
                  <h3 className="text-xl 2xl:text-2xl font-bold">
                    {item.title}
                  </h3>
                  <SectionParagraph
                    align="text-left"
                    spacing="mt-1"
                    text="Professional cleaners at your doorstep, with flexible hourly rates."
                  />
                  <span className="pointer-events-none w-4.5 z-1 block bg-white h-full absolute left-1.5 top-0 rounded-l-2xl"></span>
                  <span className="pointer-events-none w-5 block bg-primary h-full absolute left-0 bottom-0"></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="review-section mt-18">
        <div className="container mx-auto flex gap-20 items-center">
          <div>
            <SectionHeading
              align="text-left"
              text="Happy <span class='text-primary'>Customers</span>"
            />
            <SectionParagraph
              align="text-left"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </div>
          <Button text="Read More" />
        </div>
        <div className="cursor-grab active:cursor-grabbing overflow-x-hidden mt-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4.2,
              },
              1500: {
                slidesPerView: 4.5,
              },
            }}
            className="mySwiper"
          >
            {Array(10)
              .fill({
                name: "MEAGHAN R.",
                review:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                rating: 5,
                logo: "../images/google-full.svg",
                avatar: "../images/reviewer-img.webp",
              })
              .map((review, index) => (
                <SwiperSlide className="relative" key={index}>
                  <span className="size-14 absolute right-0 top-0">
                    <svg
                      className="size-full"
                      width="60"
                      height="50"
                      viewBox="0 0 60 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.2727 29.5455V43.1818C27.2727 45.0758 26.6099 46.6856 25.2841 48.0114C23.9583 49.3371 22.3485 50 20.4545 50H6.81818C4.92424 50 3.31439 49.3371 1.98864 48.0114C0.662879 46.6856 0 45.0758 0 43.1818V18.1818C0 15.7197 0.479403 13.37 1.43821 11.1328C2.39702 8.8956 3.69318 6.96023 5.3267 5.3267C6.96023 3.69318 8.8956 2.39702 11.1328 1.43821C13.37 0.479403 15.7197 0 18.1818 0H20.4545C21.0701 0 21.6027 0.224905 22.0526 0.674716C22.5024 1.12453 22.7273 1.6572 22.7273 2.27273V6.81818C22.7273 7.43371 22.5024 7.96638 22.0526 8.41619C21.6027 8.866 21.0701 9.09091 20.4545 9.09091H18.1818C15.6723 9.09091 13.5298 9.97869 11.7543 11.7543C9.97869 13.5298 9.09091 15.6723 9.09091 18.1818V19.3182C9.09091 20.2652 9.42235 21.0701 10.0852 21.733C10.7481 22.3958 11.553 22.7273 12.5 22.7273H20.4545C22.3485 22.7273 23.9583 23.3902 25.2841 24.7159C26.6099 26.0417 27.2727 27.6515 27.2727 29.5455ZM59.0909 29.5455V43.1818C59.0909 45.0758 58.428 46.6856 57.1023 48.0114C55.7765 49.3371 54.1667 50 52.2727 50H38.6364C36.7424 50 35.1326 49.3371 33.8068 48.0114C32.4811 46.6856 31.8182 45.0758 31.8182 43.1818V18.1818C31.8182 15.7197 32.2976 13.37 33.2564 11.1328C34.2152 8.8956 35.5114 6.96023 37.1449 5.3267C38.7784 3.69318 40.7138 2.39702 42.951 1.43821C45.1882 0.479403 47.5379 0 50 0H52.2727C52.8883 0 53.4209 0.224905 53.8707 0.674716C54.3206 1.12453 54.5455 1.6572 54.5455 2.27273V6.81818C54.5455 7.43371 54.3206 7.96638 53.8707 8.41619C53.4209 8.866 52.8883 9.09091 52.2727 9.09091H50C47.4905 9.09091 45.348 9.97869 43.5724 11.7543C41.7969 13.5298 40.9091 15.6723 40.9091 18.1818V19.3182C40.9091 20.2652 41.2405 21.0701 41.9034 21.733C42.5663 22.3958 43.3712 22.7273 44.3182 22.7273H52.2727C54.1667 22.7273 55.7765 23.3902 57.1023 24.7159C58.428 26.0417 59.0909 27.6515 59.0909 29.5455Z"
                        fill="#45ACDE"
                        fillOpacity="0.12"
                      />
                    </svg>
                  </span>
                  <div className="flex items-center gap-4">
                    <img
                      src={review.avatar}
                      alt="avatar"
                      loading="lazy"
                      className="size-15 rounded-full border-5 border-[#daeef8]"
                    />
                    <div>
                      <h3 className="text-xl 2xl:text-2xl font-bold text-black-heading">
                        {review.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        {Array(review.rating)
                          .fill(0)
                          .map((_, i) => (
                            <img
                              key={i}
                              src="../images/star.svg"
                              alt="star"
                              className="w-4 h-4"
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">{review.review}</p>
                  <img
                    src={review.logo}
                    alt="logo"
                    className="w-16 h-auto mt-4"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          ;
        </div>
      </section>
      <section className="discount-section relative my-10 py-15">
        <img
          src="../images/discount-bg.webp"
          alt="discount-bg"
          loading="lazy"
          className="w-full h-full absolute left-0 top-0 z-[1]"
        />
        <div className="container relative z-[2] mx-auto flex gap-20 items-center">
          <div>
            <SectionHeading
              align="text-left"
              color="text-white"
              text="<span class='text-primary'>Get 10%</span> Off Your <span class='text-primary'>First</span> Clean!"
            />
            <SectionParagraph
              color="text-white"
              align="text-left"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
          </div>
          <Button bcolor="border-[#254453]" text="Get a Quote" />
        </div>
      </section>
      <section className="relative choose-section mt-18">
        <SectionHeading text="Why <span class='text-primary'>Choose</span> Us?" />
        <SectionParagraph text="Professional cleaners at your doorstep, with flexible hourly rates." />
        <img
          src="../images/contact.webp"
          alt="vacum-img"
          className="w-60 xl:w-70 2xl:w-82 h-auto absolute bottom-0 -left-10 xl:left-0"
          loading="lazy"
        />
        <div className="container mx-auto flex flex-wrap items-end pb-20 mt-8">
          <div className="w-full relative md:w-1/2 flex justify-center pr-18 2xl:pr-30">
            <img
              src="../images/line-black.webp"
              alt="line-image"
              loading="lazy"
              width={183}
              height={135}
              className="w-30 h-auto absolute right-5 top-5 -translate-y-1/2"
            />
            <div className="w-full mx-auto bg-transparent mt-5 pl-25 xl:pl-20 2xl:pl-0">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-primary"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="4"
                    className="w-full min-h-30 max-h-38 border border-gray-300 rounded-md px-4 py-2 focus:outline-primary"
                  ></textarea>
                </div>
                <Button text="Submit" />
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="grid gap-4 mt-5">
              {Array(6)
                .fill({
                  title: "Vetted & Trained Cleaners",
                  description:
                    "Professional cleaners at your doorstep, with flexible hourly rates.",
                })
                .map((item, index) => (
                  <AccordionItem key={index} title={item.title}>
                    {item.description}
                  </AccordionItem>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
