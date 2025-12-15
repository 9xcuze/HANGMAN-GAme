

# Hangman Game

A simple and interactive Hangman game built with **React** and **TypeScript**. This project is perfect for beginners looking to strengthen their skills in React, TypeScript, and component-based development.

## Features

- Random word generation from a predefined list of words.
- Interactive keyboard for guessing letters.
- Visual representation of the Hangman drawing that updates with incorrect guesses.
- Tracks guessed letters and dynamically updates the displayed word.
- Responsive design with a grid-based keyboard layout.

---

## Demo

![njewrjvbk](https://github.com/user-attachments/assets/5aaaf19b-13dc-48fb-a1c4-6ebcd88b60c2)

---

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/WebDevSimplified/react-hangman.git
   cd react-hangman
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## Project Structure

```plaintext
react-hangman/
├── public/             # Static assets
├── src/
│   ├── components/     # React components (e.g., HangmanDrawing, Keyboard)
│   ├── App.tsx         # Main application entry point
│   ├── index.tsx       # Application bootstrap file
│   └── styles/         # CSS modules for styling
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

---

## How to Play

1. The game generates a random word for you to guess.
2. Use the on-screen keyboard or your physical keyboard to guess letters.
3. Correct guesses reveal the letters in the word.
4. Incorrect guesses add parts to the Hangman drawing.
5. Win by guessing all letters before completing the Hangman drawing.

---

## Technologies Used

- **React**: Front-end library for building user interfaces.
- **TypeScript**: Typed JavaScript for better code quality.
- **Vite**: Fast development server and build tool.
- **CSS Modules**: Scoped styling for components.

---

## Customization

You can customize the game by modifying:

1. **Word List**:
   Update `wordList.json` with your own set of words.

2. **Styling**:
   Modify styles in `keyboard.module.css` or other CSS files.

---

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request.

# RADVIK TECHNOLOGIES INTERNSHIP DIARY
## June 2025 - July 2025 | Backend Development Intern
### Yanshu | 2K22/CO/507 | Delhi Technological University

---

## WEEK 1: ONBOARDING & PROJECT OVERVIEW
**Duration:** June 2-6, 2025

### What I Did
- **Day 1-2:** Company orientation and team introduction with RADVIK Technologies
  - Met with the development team (Ravi, Prasanna, Vikram, and other backend engineers)
  - Received overview of the "Hulk" security platform that integrates SAST tools
  - Set up development environment: Spring Boot IDE, Maven, Git configuration
  - Cloned the main repository and checked out `dev_refactor` branch

- **Day 3-5:** Project comprehension and architecture study
  - Studied the existing codebase structure and module organization
  - Understood how the platform integrates open-source SAST tools (Semgrep, SonarQube, Checkmarx)
  - Analyzed widget data fetching and JSON response structures
  - Reviewed Spring Boot project configuration and application properties

### How I Did It
- Used Git to navigate repository branches and understand commit history
- Read existing documentation and API specifications
- Attended technical walkthrough session with senior developers
- Created notes on architecture diagrams and data flow

### Problems Faced
1. **Environment Setup Issues:** Initial Maven build failures due to missing dependencies
   - *Solution:* Updated Maven and Java version alignment, cleared local .m2 repository
2. **Code Complexity:** Large codebase with many interconnected modules was overwhelming
   - *Solution:* Started with simple modules, gradually moved to complex ones

### What I Learned
- Spring Boot REST API fundamentals and best practices
- Importance of reading codebase documentation before diving into code
- How SAST tools work and why vulnerability tracking is critical for DevSecOps
- Maven dependency management and build lifecycle

### Resources Used
- Spring Boot official documentation
- Team's internal wiki on Hulk platform
- GitHub branch comparisons for understanding previous implementations

---

## WEEK 2: WIDGET DATA STRUCTURE ANALYSIS
**Duration:** June 9-13, 2025

### What I Did
- **Day 1-2:** Analyzed widget response structures
  - Studied `VIOLATION_METRICS_TOTAL` widget structure and data format
  - Examined `TOP_SAST_VIOLATIONS` widget response containing vulnerability severity and count
  - Analyzed `TOTAL_PROJECTS` widget with nested breakdown of ACTIVE/INACTIVE projects
  - Created a mapping document for all widget types and their expected data

- **Day 3-5:** Designed Java POJOs for JSON deserialization
  - Created model classes: `ViolationMetrics`, `SastViolation`, `ProjectMetrics`
  - Implemented proper getters, setters, and JSON annotations (@JsonProperty)
  - Added builder pattern for flexible object construction
  - Tested deserialization with sample JSON responses

### How I Did It
- Used `@JsonProperty` annotations to map JSON keys to Java fields
- Created separate model classes for different widget types to maintain single responsibility
- Used Jackson library for JSON processing
- Wrote unit tests to validate deserialization logic

### Problems Faced
1. **JSON Key Naming Mismatch:** API responses used mixed naming conventions (camelCase vs snake_case)
   - *Solution:* Used @JsonProperty annotations to correctly map all fields
2. **Nested Object Mapping:** Complex nested structures in breakdown objects
   - *Solution:* Created separate nested POJO classes for breakdown categories

### What I Learned
- JSON parsing and deserialization in Spring Boot
- Importance of proper POJO design for API responses
- How to handle complex nested JSON structures
- Unit testing for data model validation

### Code Insights
```java
@Data
public class ViolationMetrics {
    @JsonProperty("totalFindingCount")
    private Integer totalFindingCount;
    
    @JsonProperty("totalVulnerableCount")
    private Integer totalVulnerableCount;
    
    @JsonProperty("totalExploitableCount")
    private Integer totalExploitableCount;
}
```

---

## WEEK 3: MEMBER STATUS UPDATE FEATURE
**Duration:** June 16-20, 2025

### What I Did
- **Day 1-2:** Analyzed the "Invalid status error in Update member" issue
  - Reviewed the existing member update endpoint
  - Identified the status validation logic was rejecting valid status values
  - Traced error through controller â†’ service â†’ validation layer

- **Day 3-5:** Implemented fix for member status updates
  - Created a new service method with proper status validation
  - Added comprehensive error handling with meaningful error messages
  - Implemented input sanitization and null checks
  - Updated API endpoint to use new validation logic
  - Created test cases for all valid and invalid status values

### How I Did It
- Examined existing database schema for MEMBER table and valid status enum
- Modified the validation logic to match business requirements
- Added detailed logging at each step for debugging
- Wrote integration tests with different status values
- Updated API documentation with proper status values

### Problems Faced
1. **Invalid Status Error:** API rejecting legitimate status transitions
   - *Solution:* Updated the status enum to include all valid values defined in requirements
2. **Null Pointer Exception:** Missing null checks in status parameter
   - *Solution:* Added @NotNull validation and proper exception handling

### What I Learned
- Spring Boot validation framework (@Valid, custom validators)
- Best practices for API error handling and meaningful error responses
- Importance of comprehensive test coverage for edge cases
- How to document API changes and breaking changes

### Code Changes
- Modified `MemberService.updateMemberStatus()` with robust validation
- Added `MemberStatusValidator` custom validation logic
- Created `MemberStatusUpdateRequest` DTO with validation annotations
- Added integration tests in `MemberServiceTest`

---

## WEEK 4: WIDGET IMPLEMENTATION - VIOLATION METRICS
**Duration:** June 23-27, 2025

### What I Did
- **Day 1-2:** Started implementing `VIOLATION_METRICS_TOTAL` widget API
  - Designed database queries to fetch vulnerability metrics
  - Created repository method to aggregate violation counts
  - Implemented caching mechanism for frequently accessed metrics

- **Day 3-5:** Completed widget service and controller
  - Wrote `ViolationMetricsService` to process raw data
  - Created REST controller endpoint `/api/widgets/violation-metrics`
  - Implemented time-based filtering (from/to timestamps)
  - Added namespace isolation to ensure data security

### How I Did It
- Used Spring Data JPA `@Query` for custom SQL queries
- Implemented `@Cacheable` annotation for performance optimization
- Added proper request/response validation
- Integrated with existing security and authorization mechanisms

### Problems Faced
1. **Performance Issue:** Widget data fetching was slow for large datasets
   - *Solution:* Added database indexing and implemented caching strategy
2. **Namespace Isolation:** Data was being exposed across different namespaces
   - *Solution:* Added namespace filter in all database queries

### What I Learned
- Spring Data JPA custom queries and performance optimization
- Caching strategies in Spring Boot applications
- Database indexing for query performance
- Security considerations for multi-tenant applications

### API Endpoint Documentation
```
POST /api/widgets/violation-metrics
Request:
{
  "namespaceId": "NS0434588f5196401bac2fafbf8e197815",
  "widgetId": "VIOLATION_METRICS_TOTAL",
  "timeFilter": {
    "from": 0,
    "to": 1745989898000,
    "includeFrom": true,
    "includeTo": true
  }
}

Response:
{
  "widgetId": "VIOLATION_METRICS_TOTAL",
  "data": [{
    "totalFindingCount": 23,
    "totalVulnerableCount": 2,
    "totalExploitableCount": 1
  }]
}
```

---

## WEEK 5: TOP SAST VIOLATIONS WIDGET (Ravi's Task)
**Duration:** June 30 - July 4, 2025

### What I Did
- **Day 1-3:** Collaborated with Ravi on TOP_SAST_VIOLATIONS widget
  - Reviewed Ravi's implementation of the widget service
  - Helped with testing and debugging the severity-based grouping logic
  - Resolved issues with vulnerability name mapping
  - Integrated `TOP_VULNERABILITIES` widgetId configuration

- **Day 4-5:** Completed implementation and documentation
  - Tested widget with real SAST tool outputs
  - Fixed data aggregation logic for vulnerability counts
  - Created integration tests with sample data
  - Updated team documentation on widgetId usage

### How I Did It
- Pair programming with Ravi to understand implementation details
- Code review and testing of widget functionality
- Helped optimize the grouping and sorting logic
- Assisted in creating comprehensive test data

### Problems Faced
1. **Widget ID Mismatch:** Wrong widgetId configuration in database
   - *Solution:* Updated configuration to use `TOP_VULNERABILITIES` consistently
2. **Severity Ordering:** Vulnerabilities were not sorted by severity correctly
   - *Solution:* Implemented proper comparator for severity levels (CRITICAL > HIGH > MEDIUM > LOW)

### What I Learned
- Pair programming and collaborative debugging techniques
- How to work effectively with team members on shared tasks
- Importance of consistent naming conventions across codebase
- Vulnerability severity standards in security tools

### Team Collaboration
- Learned from Ravi's approach to API response formatting
- Shared knowledge about widget data structure patterns
- Contributed to team's code quality through reviews

---

## WEEK 6: AVERAGE SCORE API & FILTERING ISSUES
**Duration:** July 7-11, 2025

### What I Did
- **Day 1-2:** Implemented Average Score API (part of Ravi's task)
  - Designed API endpoint to calculate average vulnerability scores
  - Created scoring algorithm based on severity and exploitability
  - Implemented proper aggregation across multiple scans

- **Day 3-5:** Debugged findings filtering issues with Vikram
  - Investigated hardcoded filter values not working properly
  - Identified issue: filter values were not being parameterized
  - Refactored filter logic to use dynamic parameters
  - Fixed database queries to properly apply filters

### How I Did It
- Analyzed existing filter implementation in findings endpoints
- Wrote unit tests for each filtering scenario
- Refactored filter processing to use builder pattern
- Created filter parameter validation

### Problems Faced
1. **Hardcoded Filter Values:** Filter configuration was hardcoded instead of parameterized
   - *Solution:* Created filter configuration management system with dynamic parameters
2. **Filter Precedence:** Multiple filters were not being combined correctly
   - *Solution:* Implemented proper filter chain pattern with AND/OR logic

### What I Learned
- Complex filtering logic in database queries
- How to refactor hardcoded values into configurable parameters
- Filter chain design patterns
- Importance of comprehensive test coverage for filtering scenarios

### Team Collaboration with Vikram
- Learned about findings data structure from Vikram
- Collaborated on understanding filter requirements
- Shared debugging techniques and tools

---

## WEEK 7: SCAN REDIRECT & FINDINGS INTEGRATION
**Duration:** July 14-18, 2025

### What I Did
- **Day 1-3:** Implemented scan click redirect feature with Vikram
  - Modified scan endpoints to return redirect URLs with applied filters
  - Integrated scan ID and filter parameters into findings URLs
  - Tested redirect functionality across different scan types
  - Ensured filter state was preserved across navigation

- **Day 4-5:** Completed projects vulnerability summary fix
  - Analyzed vulnerability aggregation for project dashboard (Prasanna's task)
  - Fixed calculation logic for total vulnerabilities per project
  - Resolved issues with stale data in project summary
  - Updated API documentation

### How I Did It
- Used Spring MVC redirect pattern with model attributes
- Implemented URL parameter encoding for filter configuration
- Created integration tests for complete workflow
- Coordinated with UI team on expected URL format

### Problems Faced
1. **Filter State Loss:** Filters were not persisting across redirect
   - *Solution:* Implemented filter parameter passing through URL
2. **Encoding Issues:** Special characters in filter values were breaking URLs
   - *Solution:* Used proper URL encoding for all parameters

### What I Learned
- Spring MVC redirect mechanisms
- URL parameter handling and encoding
- Maintaining state across HTTP redirects
- Integration patterns for cross-module communication

### Feature Implementation
```java
@GetMapping("/scans/{scanId}/findings")
public String redirectToFindings(@PathVariable String scanId,
                                 @RequestParam Map<String, String> filters,
                                 RedirectAttributes attributes) {
    String filterString = encodeFilters(filters);
    return "redirect:/findings?scanId=" + scanId + "&filters=" + filterString;
}
```

---

## WEEK 8: EXPLOITABLE WIDGET & FINAL REVIEW
**Duration:** July 21-25, 2025

### What I Did
- **Day 1-2:** Completed exploitable vulnerabilities widget
  - Designed widget endpoint for `EXPLOITABLE_VULNERABILITIES_COUNT`
  - Implemented logic to identify exploitable vulnerabilities based on exploit database
  - Added time-based filtering and namespace isolation
  - Created comprehensive documentation

- **Day 3-5:** Final review, optimization, and knowledge transfer
  - Reviewed all implemented features with the team
  - Optimized performance of widget APIs and database queries
  - Created comprehensive technical documentation
  - Documented all scan APIs that were completed
  - Prepared handover notes for ongoing work
  - Participated in final presentation review with team

### How I Did It
- Leveraged patterns established in previous widget implementations
- Applied all lessons learned from previous 7 weeks
- Optimized based on performance monitoring and profiling
- Documented all implementation details for future maintenance

### Problems Faced
1. **Performance Optimization:** Widgets were querying data inefficiently
   - *Solution:* Added proper database indexing and implemented smart caching

### What I Learned
- Completed understanding of the entire Hulk platform architecture
- Best practices for scalable backend API design
- Performance optimization techniques for large datasets
- Complete software development lifecycle in a production environment

### Final Accomplishments
**Widget APIs Completed:**
- âœ… Total Vulnerabilities Count Widget
- âœ… Exploitable Vulnerabilities Count Widget  
- âœ… Top SAST Violations Widget
- âœ… Average Score API
- âœ… Projects Vulnerability Summary

**Bug Fixes Completed:**
- âœ… Invalid status error in member update
- âœ… Hardcoded filter values in findings
- âœ… Projects vulnerability summary calculation issues

**Features Implemented:**
- âœ… Scan redirect with applied filters to findings
- âœ… Proper filtering in findings endpoint
- âœ… Multi-branch vulnerability tracking
- âœ… Time-based filtering for all metrics

### Reflection
This 8-week internship was incredibly valuable for my development as a backend engineer. I moved from basic Spring Boot knowledge to implementing production-grade features in a complex DevSecOps platform. The experience of working with a team, handling real-world bugs, and iterating on solutions has been invaluable.

**Key Takeaways:**
1. **Real-world coding is different from academic projects:** Dealing with legacy code, performance issues, and multiple team dependencies teaches you practical problem-solving.

2. **Communication is as important as coding:** Understanding requirements clearly and communicating implementation status with team members is crucial.

3. **Testing and optimization matter:** Writing comprehensive tests and optimizing database queries prevented issues from reaching production.

4. **Continuous learning:** Each week brought new challenges that required learning new concepts and tools.

### Future Learning Goals
- Explore Kubernetes and containerization for deployment
- Deep dive into DevSecOps tools and their integrations
- Learn advanced Spring Boot features (reactive programming, microservices)
- Study database optimization and advanced SQL
- Contribute to open-source security tools

---

## APPENDIX: KEY METRICS & STATISTICS

### Code Contribution
- **Files Created:** 15+ new service/controller classes
- **Files Modified:** 20+ existing files
- **Test Cases Written:** 40+ unit and integration tests
- **Lines of Code:** ~2000+ lines of production code

### Learning Hours
- **Week 1:** 8 hours (onboarding + setup)
- **Week 2:** 10 hours (analysis + modeling)
- **Week 3:** 12 hours (implementation + debugging)
- **Week 4:** 12 hours (feature implementation)
- **Week 5:** 10 hours (collaboration + testing)
- **Week 6:** 12 hours (complex implementation)
- **Week 7:** 12 hours (integration work)
- **Week 8:** 10 hours (optimization + handover)
- **Total:** ~96 learning hours

### Technologies Used
- **Backend:** Spring Boot 2.7+, Spring Data JPA
- **Database:** MySQL/PostgreSQL with proper indexing
- **Version Control:** Git, GitHub with feature branch workflow
- **Build Tool:** Maven with automated testing
- **Security Tools:** SAST integration (Semgrep, SonarQube)
- **Caching:** Spring Cache abstraction
- **Testing:** JUnit 5, Mockito, Integration tests

### Team Members & Roles
- **Mentor:** Senior Backend Developer (company assigned)
- **Ravi:** Worked on Top SAST Violations & Average Score API
- **Prasanna:** Worked on Projects Vulnerability Summary
- **Vikram:** Worked on Scan Findings Integration & Filtering
- **Self:** Member status updates, widgets, integrations, bug fixes



