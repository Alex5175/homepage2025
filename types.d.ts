type Project = {
  title: string;
  image: string;
  url: string;
  description: string | React.ReactNode;
  alt: string;
  tags: string[];
  date?: string;
};

type Mailprops = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
