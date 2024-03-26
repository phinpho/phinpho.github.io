import { Avatar } from "../Avatar";
import { Card } from "../Card";

export const App = () => {
  return (
    <>
      <div className="p-t-20">
        <Card>
          <div className="m-t--20 m-inline-auto h-32 w-32">
            <Avatar src="https://avatars.githubusercontent.com/u/360457" />
          </div>
          <h1 className="m-0 p-0 text-center font-semibold">Rodolfo Pereira</h1>
          <p className="font-2xl m-0 p-0 text-center">
            Software Engineer @ Volvo Cars
          </p>
        </Card>
      </div>
      <Card title="Planning a universe, starting with the first star!">
        <p>
          I work with web and mobile technologies. I appreciate studying
          technology trends and trying out new JavaScript frameworks while
          experimenting interesting web designs. I always look for opportunities
          to apply new technologies to solve real problems in my daily projects.
        </p>
      </Card>

      <div className="grid grid-cols-3">
        <a
          title="GitHub"
          className="i-grommet-icons:github m-inline-auto block h-24 w-24"
          href="https://github.com/phinpho"
          target="_blank"
        >
          GitHub
        </a>
        <a
          title="LinkedIn"
          className="i-grommet-icons:linkedin m-inline-auto block h-24 w-24"
          href="https://linkedin.com/in/phinpho"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          title="Instagram"
          className="i-grommet-icons:instagram m-inline-auto block h-24 w-24"
          href="https://instagram.com/phinpho"
          target="_blank"
        >
          Instagram
        </a>
      </div>
    </>
  );
};
