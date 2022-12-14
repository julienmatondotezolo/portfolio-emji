export default {
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Platform for social media",
      type: "string",
    },
    {
      name: "url",
      title: "Url",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
