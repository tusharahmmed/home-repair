import parser from "html-react-parser";

const HtmlParser = ({content}: {content: any}) => {
  return <>{parser(content)}</>;
};

export default HtmlParser;
