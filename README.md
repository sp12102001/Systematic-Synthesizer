# Systematic Synthesizer (Not finished yet)

## The purpose of the application 
The application aims to automate the systematic review process, leveraging natural language processing (NLP), machine learning (ML), and data extraction techniques to streamline research design, literature review, and data synthesis. The web application is designed to assist researchers by automating several steps of the process, including formulating research questions, defining inclusion and exclusion criteria, searching for relevant studies, selecting studies, extracting data, and synthesizing findings. This automation is achieved through the use of NLP and ML algorithms, alongside APIs for accessing scientific literature.

# Technical Implementation
The application is built using Python, leveraging libraries such as nltk for NLP tasks, pdfplumber for extracting text from PDFs, BeautifulSoup for HTML parsing, and spacy for advanced NLP processing It creates the web interface, allowing users to interactively input their research question, refine it, and receive updates on the review process, but only input one question/topic for the whole process to work with. 

The application integrates with scientific literature databases through their APIs, such as the Semantic Scholar API, to automate the search and retrieval of relevant studies
ML algorithms, including those from the sklearn library, are used for screening studies and synthesizing data The application streamlines the creation of systematic reviews, from formulating research questions to synthesizing findings, ready for publication.


## Content blocks
### Generating Inclusion and Exclusion Criteria
This content block uses natural language processing to identify key terms from the user's research question and formulates inclusion and exclusion criteria for the systematic review. It filters out irrelevant words and focuses on unique keywords, excluding studies that do not meet these criteria and a specified year range.
### Searching for Relevant Studies
The "Searching for Relevant Studies" content block uses the Semantic Scholar API to find studies that match the user's query and inclusion/exclusion criteria. It retrieves and logs relevant documents for further review and selection.
### Extracting Data 
This section utilizes pdfplumber and BeautifulSoup to extract text from PDFs and HTML content of selected studies. The spacy NLP library is used to structure the extracted data, which includes details like titles, years, and identified entities.
###  Data Synthesis 
This is responsible for the qualitative and quantitative synthesis of the extracted data. It uses LDA topic modeling for qualitative synthesis and a random-effects meta-analysis for quantitative synthesis. The function 'synthesize_findings_for_publication' generates a cohesive narrative that includes an introduction, methods, results, discussion, and conclusion sections based on the qualitative and quantitative results.
### Generating Publication Sections
The "Generating Publication Sections" content block is responsible for creating the different sections of the final publication-ready document. It includes functions to generate the introduction, methods, results, discussion, and conclusion sections, each populated with relevant content based on the systematic review findings.

## NextJS framework

NextJS is included automatically in the website folder for type Headless CMS. [TailwindCSS](https://tailwindcss.com/) and [graphql-ts-client](https://github.com/babyfish-ct/graphql-ts-client) are set up within the project.

### Before running it for the first time

Rename the `.env.local.dist` file to `.env.local`

### Starting the project

The `npm run start` command starts Contember Admin and NextJS, which runs on `localhost:3000`.

Before each launch, `npm run codegen` will run the command to generate Typescript definition for GraphQL in the `/website/api/__generated` folder.

### Project structure

-   `api` - folder contains `graphQLExecutor.ts` file, which provides the call to the Contember GraphQL endpoint.
    -   `__generated` - ⚠️ Do not edit this folder ⚠️ . This folder contains automatically generated files for the GraphQL client. The structure should be regenerated with `npm run codegen` after changing the Contember model and performing the migration.
    -   `queries` -  if we have identified one of the entities as a content entity during the generation process, you will find a file with a fully compiled query for that entity in this folder.
-   `app`
    -   `entity_name/[id]/page.tsx` - contains a basic rendering of the page structure based on the generated GraphQL call, this is the file you will want to start editing after publishing your first Contember post.
-   `components`
    -   `[RichTextRenderer.tsx](https://docs.contember.com/reference/admin/api/v1.2/Content%20rendering/RichTextRenderer/)` - component for rendering the Content entity
-   `public` - static assets
-   `scripts`

