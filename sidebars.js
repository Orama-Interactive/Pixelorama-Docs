module.exports = {
  docs: [
  "introduction",
  {
      type: 'category',
      label: 'User Manual',
      collapsed: true,
      items: ["user_interface_basics",
    "canvas",
		"toolbar",
		"tool_options",
		"timeline",
    "selecting",
    "transforming"],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: true,
      items: ["project", "cel", "brush", "palette"],
    },
	"faq",
	"troubleshooting",
  "development_and_contributing",
  ],
};
