import React, { useState } from 'react';
import "../Styles/Experience.scss";

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState("NCR");

  const handleCompanyClick = (company) => {
    setActiveCompany(company);
  };

  return (
    <div className='experience' id='experience'>
      <div className='title'>
        <h2>Work Experience</h2>
      </div>

      <div className='companyNavBar'>
        <a className={activeCompany === "First National Financial LP" ? "active" : ""} onClick={() => handleCompanyClick("First National Financial LP")}>First National Financial LP</a>
        <a className={activeCompany === "NCR" ? "active" : ""} onClick={() => handleCompanyClick("NCR")}>NCR</a>
      </div>
      
      {activeCompany === "First National Financial LP" && (
        <div className='companyDescription'>

          <div className='jobTitle'>
            <h2>Software Test Engineer Intern</h2>
            <h2 className='companyName'>@ First National</h2>

            <p>May 2023 - August 2023</p>
            <p>Co-op </p>
          </div>

          <div className='jobPoints'>
            <ul>
              <li>Developed and maintained automated test scripts for internal First National products</li>
              <li>Built automated scripts in JavaScript/SQL to test B2B transactions resulting in a 13% increase in test success rate</li>
              <li>Implemented regression tests through nightly script automations to highlight/update broken test cases, leading to a 22% increase in regression test success rates</li>
              <li>Built integration tests that tested the cohesion between First National products and various third-party resources, verifying that functionality was flexible, adaptable and cohesive</li>
              <li>Participated in Agile project management through daily stand-ups, 2 week sprints, and sprint retrospectives.</li>
              <li>Used Azure DevOps to manage the development process and track test suites in a Scrum environment.</li> 
            </ul>
          </div>

        </div>
      )}

      {activeCompany === "NCR" && (
        <div className='companyDescription'>  

          <div className='sideBar'>
            <div className='jobTitle'>
              <h2>Software Engineer Intern @ NCR</h2>

              <p>September 2023 - December 2023</p>
              <p>Co-op </p>
            </div>

            <div>
              image
            </div>
          </div>
          
          

          <div className='jobPoints'>
            <ul>
              <li>Built a Fetch API that utilizes dynamic query construction to retrieve data from a PostgreSQL database based on specific search criteria determined by the user. Built using Java Spring Boot and PostgreSQL. </li>
              <li>Built a Download API that uploads encrypted data to a GCS bucket. Data can be downloaded as a CSV formatted report by the user and data can be determined by specified search criteria. </li>
              <li>Achieved over 90% code coverage and zero code smells by writing automated Unit Tests using JUnit and Mockito, leading to clean reliable code verified through SonarQube analysis.</li>
              <li>Deployed Jenkins Pipelines to automate CI/CD for report microservices that enabled seamless integration of new production code, validated interactions between software components, and improved code quality.</li>
              <li>Created and updated documentation through Confluence to match PROD releases.</li>
              <li>Tested API Endpoints through Postman to confirm new releases worked as expected. </li>
            </ul>
          </div>

        </div>
      )}

    </div>
  );
};

export default Experience;
