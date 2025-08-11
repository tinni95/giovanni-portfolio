import { slugify } from "@/utlis/slugify";

export const blogData = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-classic-card-img-1.jpg",
    altText: "Blog Thumbnail",

    title: "Stand out from the crowd with a professional portfolio",
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
    tags: ["Web Design", "CV", "Starts", "CV Card", "Start shape"],
    categories: ["Web Development Wizardry", "UI/UX Design Innovation"],
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-classic-card-img-2.jpg",
    altText: "Blog Thumbnail",

    title: "Elevate your brand with a the stunning portfolios",
    tags: ["All Project", "Resume", "Graphics", "Portfolio"],
    categories: ["Business Solution", "Web Development Wizardry"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-classic-card-img-3.jpg",
    altText: "Blog Thumbnail",

    tags: ["All Project", "Starts", "Start shape"],
    categories: ["Content Creation and Strategy", "UI/UX Design Innovation"],
    title: "Elevate your brand with a the stunning portfolio",
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData2 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-1.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Inspiring the World, One Project at a Time for the man",
    tags: [
      "All Project",

      "Graphics",
      "Web Design",
      "CV",
      "Starts",
      "Creative Portfolio",

      "Start shape",
    ],
    categories: ["UI/UX Design Innovation"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-2.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Let's bring your ideas to life! Contact me, and let's",
    tags: ["CV", "Starts", "Start shape"],
    categories: ["Business Solution"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-3.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Each one showcases our approach and dedication man",
    tags: ["All Project", "Resume", "CV Card", "Start shape"],
    categories: ["Business Solution"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData3 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-1.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Inspiring the World, One Project at a Time for the woman",
    tags: [
      "All Project",

      "Graphics",
      "Web Design",
      "CV",
      "Starts",

      "CV Card",
      "Start shape",
    ],
    categories: ["Business Solution", "UI/UX Design Innovation"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-2.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Let's bring your ideas to natural! Contact me, and let's",
    tags: [
      "All Project",
      "Resume",
      "Graphics",
      "Web Design",
      "CV",
      "Starts",
      "Creative Portfolio",
      "Portfolio",
      "CV Card",
      "Start shape",
    ],
    categories: ["Business Solution", "Web Development Wizardry"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-3.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Each one showcase my approach and dedication man",
    tags: [
      "All Project",
      "Resume",
      "Graphics",
      "Web Design",
      "CV",
      "Starts",
      "Creative Portfolio",
      "Portfolio",
      "CV Card",
      "Start shape",
    ],
    categories: ["Content Creation and Strategy", "UI/UX Design Innovation"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData4 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-4.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Let's bring your ideas to life. Contact me, and let's go",
    tags: [
      "All Project",
      "Resume",
      "Graphics",
      "Web Design",
      "CV",
      "Starts",
      "Creative Portfolio",
      "Portfolio",
      "CV Card",
      "Start shape",
    ],
    categories: ["Business Solution"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-5.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Inspiring the World, One Project at a Time for the man and woman",
    tags: [
      "All Project",
      "Resume",
      "Graphics",
      "Web Design",
      "CV",
      "Starts",
      "Creative Portfolio",
      "Portfolio",
      "CV Card",
      "Start shape",
    ],
    categories: ["Content Creation and Strategy"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-6.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Each one showcases my approach and dedication person",
    tags: [
      "All Project",
      "Resume",
      "Graphics",
      "Web Design",
      "CV",
      "Starts",
      "Creative Portfolio",
      "Portfolio",
      "CV Card",
      "Start shape",
    ],
    categories: ["Content Creation and Strategy", "UI/UX Design Innovation"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const blogData5 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-7.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Inspiring the World, One Project at a Time for the men",
    width: 410,
    height: 291,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-8.jpg",
    altText: "Blog Thumbnail",
    date: "13 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Let's bring your ideas to life! Contact me. and let's work",
    width: 410,
    height: 291,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-9.jpg",
    altText: "Blog Thumbnail",
    date: "14 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Each one showcases my approach and dedication man",
    width: 411,
    height: 291,
  },
  {
    id: 4,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-4.jpg",
    altText: "Blog Thumbnail",
    date: "15 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Each one showcases my approach and dedication woman",
    width: 410,
    height: 294,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData6 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-7.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Inspiring the World, One Project at a Time for human",
    width: 410,
    height: 291,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-8.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Let's bring your ideas to reality! Contact me, and let's",
    width: 410,
    height: 291,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-9.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Each one showcases my approach for dedication man",
    width: 411,
    height: 291,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const blogData7 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-4.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Let's bring your ideas to real! Contact me, and let's",
    width: 410,
    height: 294,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-5.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Inspiring the World, One Project at a Time for the people",
    width: 410,
    height: 294,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-6.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Each one showcases my approach to dedication man",
    width: 410,
    height: 294,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const posts = [
  {
    id: 1,
    imageSrc: "/assets/images/blog/single-post-card-img-1.png",
    category: "Category",
    title: "Sustainable Solutions: Designing for Tomorrow",
  },
  {
    id: 2,
    imageSrc: "/assets/images/blog/single-post-card-img-2.png",
    category: "Category",
    title: "Technological Innovations: Shaping the Future",
  },
  {
    id: 3,
    imageSrc: "/assets/images/blog/single-post-card-img-3.png",
    category: "Category",
    title: "Adventure Awaits Exploring the Great Outdoors",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const allBlogs = [
  ...blogData,
  ...blogData2,
  ...blogData3,
  ...blogData4,
  ...blogData5,
  ...blogData6,
  ...blogData7,
  ...posts,
];
export const categories = [
  { title: "Business Solution", count: "01" },
  { title: "Web Development Wizardry", count: "08" },
  { title: "Content Creation and Strategy", count: "05" },
  { title: "UI/UX Design Innovation", count: "05" },
];
export const tags = [
  "All Project",
  "Resume",
  "Graphics",
  "Web Design",
  "CV",
  "Starts",
  "Creative Portfolio",
  "Portfolio",
  "CV Card",
  "Start shape",
];
