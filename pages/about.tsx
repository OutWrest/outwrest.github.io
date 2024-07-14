import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";

const About: NextPage = () => {
  return (
    <>
      <Page
        title="About"
        description="Posting interesting experiences."
      >
        <Prose>
          <p>
            Computer science graduate with a strong interest in cybersecurity, data science, and software development.
          </p>
          <p>
            Feel free to reach out to me at discord: <b>outwrest</b>
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
