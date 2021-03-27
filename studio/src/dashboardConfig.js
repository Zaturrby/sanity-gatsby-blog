export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605f2f1369e55da2d9f1d134",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-hb7wd29y",
                  apiId: "00e2f15e-5cf9-434c-a4ee-c4f8030d3cbc",
                },
                {
                  buildHookId: "605f2f14686b3ab2f76ca23b",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ih3kqdvw",
                  apiId: "918c23fc-5aa1-47dc-9a5e-4f630b8c6748",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Zaturrby/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ih3kqdvw.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
