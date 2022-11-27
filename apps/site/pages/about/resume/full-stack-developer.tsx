import { Container } from '@ordev/shared/ui';
import { ResumeTemplate } from '../../../components/resume-template';

const metaResumePage = {
  title: 'Resume - Or Druker - Full Stack Developer',
  description: `An informal resume that introduces myself much better`,
  image: '/or-banner.png',
  type: 'website',
};

const personalizedResumePage = {
  category: 'developer',
  jobTitle: 'Full Stack Developer',
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
      />
    </Container>
  );
}

export default ResumeDeveloper;
