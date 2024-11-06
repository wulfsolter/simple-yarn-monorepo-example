import { createServer, IncomingMessage, ServerResponse } from 'http';
import renderMessage from '@my-amazing-monorepo/shared-package1';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(renderMessage());
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
