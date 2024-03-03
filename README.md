# Systematic Synthesizer

## The purpose of the application 
The application aims to automate the systematic review process, leveraging natural language processing (NLP), machine learning (ML), and data extraction techniques to streamline research design, literature review, and data synthesis. The web application is designed to assist researchers by automating several steps of the process, including formulating research questions, defining inclusion and exclusion criteria, searching for relevant studies, selecting studies, extracting data, and synthesizing findings. This automation is achieved through the use of NLP and ML algorithms, alongside APIs for accessing scientific literature.

# Technical Implementation
The application is built using Python, leveraging libraries such as nltk for NLP tasks, pdfplumber for extracting text from PDFs, BeautifulSoup for HTML parsing, and spacy for advanced NLP processing It creates the web interface, allowing users to interactively input their research question, refine it, and receive updates on the review process, but only input one question/topic for the whole process to work with. 

The application integrates with scientific literature databases through their APIs, such as the Semantic Scholar API, to automate the search and retrieval of relevant studies
ML algorithms, including those from the sklearn library, are used for screening studies and synthesizing data
By integrating NLP and ML techniques with user-friendly web technologies the application streamlines the creation of systematic reviews, from formulating research questions to synthesizing findings, ready for publication.


## Content blocks
### Title: Generating Inclusion and Exclusion Criteria
Description: This block dynamically generates inclusion and exclusion criteria based on the user's research question. It employs natural language processing (NLP) techniques to identify key terms and concepts, filtering out stopwords and non-alphabetic tokens to identify unique keywords. The criteria are then formed around these keywords, excluding studies not in these criteria and defined year range.
This content block uses natural language processing to identify key terms from the user's research question and formulates inclusion and exclusion criteria for the systematic review. It filters out irrelevant words and focuses on unique keywords, excluding studies that do not meet these criteria and a specified year range.
### Searching for Relevant Studies
Description: Utilizes the Semantic Scholar API to search for relevant studies based on the formulated query. It retrieves documents matching the query criteria, including title and year, and logs the retrieved papers for further processing. Utilizes the Semantic Scholar API to search for relevant studies based on the formulated query and inclusion/exclusion criteria. It retrieves documents matching the query criteria and facilitates the selection of studies that meet the systematic review's requirements.

The "Searching for Relevant Studies" content block uses the Semantic Scholar API to find studies that match the user's query and inclusion/exclusion criteria. It retrieves and logs relevant documents for further review and selection.
### Title: Extracting Data from Studies
Description: This section focuses on extracting text from PDFs and HTML pages of selected studies. It uses pdfplumber for PDFs and BeautifulSoup for HTML content. Additionally, it employs the spacy NLP library to extract entities from the text, providing a structured format for the extracted data, including titles, years, and identified entities.
This section utilizes pdfplumber and BeautifulSoup to extract text from PDFs and HTML content of selected studies. The spacy NLP library is used to structure the extracted data, which includes details like titles, years, and identified entities.
###  Data Synthesis (synthesis.py)
Description: Performs both qualitative and quantitative synthesis of the extracted data. It includes LDA topic modeling for qualitative synthesis and a random-effects meta-analysis for quantitative synthesis, summarizing the findings of the review.The synthesis function should integrate both qualitative and quantitative results into a cohesive narrative. This includes discussing the themes identified through LDA topic modeling and the pooled effect sizes from the meta-analysis, and how they relate to the research question.
python
def synthesize_findings_for_publication(qualitative_results, quantitative_results):
    synthesis_section = {
        'Introduction': generate_introduction(),
        'Methods': generate_methods_section(qualitative_results, quantitative_results),
        'Results': generate_results_section(qualitative_results, quantitative_results),
        'Discussion': generate_discussion_section(qualitative_results, quantitative_results),
        'Conclusion': generate_conclusion_section(qualitative_results, quantitative_results)
    }
    return synthesis_section

The "Data Synthesis" content block, implemented in the synthesis.py file, is responsible for the qualitative and quantitative synthesis of the extracted data. It uses LDA topic modeling for qualitative synthesis and a random-effects meta-analysis for quantitative synthesis. The function 'synthesize_findings_for_publication' generates a cohesive narrative that includes an introduction, methods, results, discussion, and conclusion sections based on the qualitative and quantitative results.
### Generating Publication Sections
Description: Each section of the publication-ready document should be generated with appropriate headings and content. This includes an abstract, introduction, methods, results, discussion, and conclusion.
python
def generate_introduction():
    return "Introduction content with background information and rationale for the review."

def generate_methods_section(qualitative_results, quantitative_results):
    methods_content = "Description of the systematic review methodology, including search strategy, selection criteria, and analysis methods."
    return methods_content

def generate_results_section(qualitative_results, quantitative_results):
    results_content = "Presentation of the main findings from the qualitative and quantitative synthesis."
    return results_content

def generate_discussion_section(qualitative_results, quantitative_results):
    discussion_content = "Interpretation of the findings, considering the context of existing literature."
    return discussion_content

def generate_conclusion_section(qualitative_results, quantitative_results):
    conclusion_content = "Summary of the implications of the review findings for practice and research."
    return conclusion_content
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

