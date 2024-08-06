import GitHubIcon from "@mui/icons-material/GitHub";

type CodeBlockProps = {
  name: string;
  github: string;
  src: string;
};

const CodeBlock = ({ name, github, src }: CodeBlockProps) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold flex gap-2.5">
        {name}
        <a href={github} target="_blank" className="text-green">
          <GitHubIcon />
        </a>
      </h3>
      <iframe src={src} width="100%" height="600"></iframe>
    </div>
  );
};

export default CodeBlock;
