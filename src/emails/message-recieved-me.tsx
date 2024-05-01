import { Container, Link, Section, Text } from "@react-email/components";
import Layout from "./layout";

function MessageRecievedMeEmail(props: {
  name: string;
  email: string;
  message: string;
}) {
  const {
    name = "undefined",
    email = "undefined",
    message = "undefined",
  } = props;

  return (
    <Layout previewText={`New message submitted on your website`}>
      <Container className="border-border mx-auto max-w-2xl border-y-4 border-solid px-2 py-2">
        <Container className="text-foreground mx-auto max-w-lg">
          <h1 className="my-4 text-2xl font-bold">You got a new message!</h1>

          <Section className="mb-4">
            <h2 className="text-primary my-0 text-sm">_name:</h2>
            <Text className="my-0 ml-2">{name}</Text>
          </Section>

          <Section className="mb-4">
            <h2 className="text-primary my-0 text-sm">_email:</h2>
            <Link
              href={`mailto:${email}?subject=Reply to your message on my website&body=You wrote: \n "${message}"`}
              className="text-primary-foreground my-0 ml-2 text-sm underline"
            >
              {email}
            </Link>
          </Section>

          <Section className="mb-4">
            <h2 className="text-primary my-0 text-sm">_message:</h2>
            <Text className="my-0 ml-2">&quot;{message}&quot;</Text>
          </Section>
        </Container>
      </Container>
    </Layout>
  );
}

export default MessageRecievedMeEmail;
