import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SwiperCards = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={40}
      breakpoints={{
        0: {
          slidesPerView: 1.3,
          centeredSlides: true,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
          centeredSlides: false,
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
            <span className="size-8 lg:size-14 absolute right-8 lg:right-0 top-0">
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
            <img src={review.logo} alt="logo" className="w-16 h-auto mt-4" />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperCards;
