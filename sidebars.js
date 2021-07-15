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
		"selected_colors",
		"timeline",
		"layer_options",
		"timeline_options"],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: true,
      items: ["project", "cel", "palette"],
    },
	"faq",
	"troubleshooting",
    "development_and_contributing",
  ],
};
