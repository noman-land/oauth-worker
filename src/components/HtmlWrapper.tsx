import { ComponentWithChildren } from '../utils/types';

export const HtmlWrapper: ComponentWithChildren = ({ children }) => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};
