import { Container } from '@ordev/shared/ui';
import { ResumeTemplate } from '../../../components/resume-template';

const metaResumePage = {
  title: 'Resume - Or Druker - Full Stack Developer',
  description: `Hello! My name is Or Druker, and I'm a Front End Developer with up-to-date knowledge of modern web and app technologies.`,
  image: '/or-banner.png',
  type: 'website',
};

const personalizedResumePage = {
  category: 'developer',
  jobTitle: 'Front End Developer',
  resumeLink: '/resume/or_druker_resume_fe.pdf',
};

export function ResumeDeveloper() {
  return (
    <Container
      title={metaResumePage.title}
      description={metaResumePage.description}
      image={metaResumePage.image}
      type={metaResumePage.type}
    >
      <ResumeTemplate
        jobTitle={personalizedResumePage.jobTitle}
        category={personalizedResumePage.category}
        resumeLink={personalizedResumePage.resumeLink}
      />
    </Container>
  );
}

export default ResumeDeveloper;
