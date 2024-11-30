import { RiGithubLine } from 'react-icons/ri';

function Github({ username }: { username: string }) {
  return (
    <a
      href={`https://github.com/guxkswzz`}
      target="_blank"
      rel="noopener noreferrer"
      className="Github Button"
      title="Check out my GitHub!"
    >
      <RiGithubLine />
      {guxkswzz}
    </a>
  );
}

export default Github;