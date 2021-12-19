import { Container } from "@chakra-ui/layout";

export default function Technical() {
  const Languages = ["Java", "C", "JavaScript", "Php"];
  const Web_Technologies = [
    "Html",
    "Css",
    "Bootstarp",
    "Material Ui",
    "Ant Design",
    "Chakra Ui",
  ];
  const Library = ["React Chart", "React Table", "Styled Component", "Axios"];
  const Other = ["GitHub", "GitLab", "Aws"];

  return (
    <>
      <Container width={"100%"}>
        <h2>
          <b>Technical Skills</b>
        </h2>

        <ul>
          <h3>
            <i>Languages:</i>
          </h3>
          {Languages.map((dt, index) => (
            <li key={index}>{dt},</li>
          ))}
        </ul>
        <ul>
          <h3>
            <i>Web_Technologies:</i>
          </h3>
          {Web_Technologies.map((dt, index) => (
            <li key={index}>{dt},</li>
          ))}
        </ul>
        <ul>
          <h3>
            <i>Library:</i>
          </h3>
          {Library.map((dt, index) => (
            <li key={index}>{dt},</li>
          ))}
        </ul>
        <ul>
          <h3>
            <i>Other:</i>
          </h3>
          {Other.map((dt, index) => (
            <li key={index}>{dt},</li>
          ))}
        </ul>
      </Container>
    </>
  );
}
