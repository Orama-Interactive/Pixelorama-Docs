module.exports = {
  docs: [
  "introduction",
  {
      type: 'category',
      label: 'User Manual',
      collapsed: true,
      items: ["user_interface_basics", "canvas",
		"toolbar",
		"tool_options",
		"timeline"],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: true,
      items: ["project", "cel", "palette", "brush"],
    },
	"faq",
	"troubleshooting",
  "development_and_contributing",
  ],
};
